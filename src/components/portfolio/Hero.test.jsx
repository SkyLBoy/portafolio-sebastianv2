import React, { act } from "react";
import { createRoot } from "react-dom/client";
import Hero from "./Hero";
import { PERSONAL } from "../../lib/personal";
import { useReducedMotion } from "framer-motion";

let mockLanguage = "es";

jest.mock("@/contexts/LanguageContext", () => ({
  useLang: () => {
    const { translations } = require("../../lib/translations");
    return { t: (key) => key.split(".").reduce((value, part) => value[part], translations[mockLanguage]) };
  },
}), { virtual: true });

jest.mock("@/lib/personal", () => jest.requireActual("../../lib/personal"), { virtual: true });
jest.mock("framer-motion", () => ({ useReducedMotion: jest.fn(() => false) }));

describe("Hero", () => {
  let container;
  let root;

  beforeEach(() => {
    global.IS_REACT_ACT_ENVIRONMENT = true;
    mockLanguage = "es";
    useReducedMotion.mockReturnValue(false);
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    jest.restoreAllMocks();
  });

  const renderHero = () => act(() => root.render(<Hero />));

  it("muestra el nombre completo y la propuesta de valor inmediatamente, sin temporizadores", () => {
    const timeout = jest.spyOn(window, "setTimeout");
    renderHero();
    expect(container.querySelector('[data-testid="hero-name"]').textContent).toBe(PERSONAL.name);
    expect(container.querySelectorAll("h1")).toHaveLength(1);
    expect(container.querySelector("h1").textContent).toBe("Infraestructura TI y automatización");
    expect(container.querySelector('[data-testid="hero-description"]').textContent).toBe(
      "Soy ingeniero en Software. Administro redes empresariales y desarrollo herramientas que simplifican la operación tecnológica"
    );
    expect(timeout).not.toHaveBeenCalled();
  });

  it("conserva la foto, el CV y el empleo actual", () => {
    renderHero();
    expect(container.querySelector('[data-testid="hero-photo"]').getAttribute("src")).toBe(PERSONAL.photoUrl);
    const cv = container.querySelector('[data-testid="hero-cv-btn"]');
    expect(cv.getAttribute("href")).toBe(PERSONAL.cvUrl);
    expect(cv.getAttribute("download")).toBe("cv-sebastian-calderon.pdf");
    expect(container.querySelector('[data-testid="hero-current-role"]').textContent).toContain("Interlogic Global");
  });

  it("prioriza proyectos y navega a las secciones con movimiento reducido", () => {
    useReducedMotion.mockReturnValue(true);
    const scroll = jest.fn();
    const target = document.createElement("section");
    target.id = "projects";
    target.scrollIntoView = scroll;
    document.body.appendChild(target);
    try {
      renderHero();
      const actions = container.querySelector(".hero-actions");
      expect(actions.firstElementChild.dataset.testid).toBe("hero-projects-btn");
      act(() => actions.firstElementChild.click());
      expect(scroll).toHaveBeenCalledWith({ behavior: "instant", block: "start" });
      target.id = "contact";
      act(() => container.querySelector('[data-testid="hero-contact-btn"]').click());
      expect(scroll).toHaveBeenCalledTimes(2);
    } finally {
      target.remove();
    }
  });

  it("mantiene la portada traducida sin alterar el nombre", () => {
    mockLanguage = "en";
    renderHero();
    expect(container.querySelector("h1").textContent).toBe("IT infrastructure and automation");
    expect(container.querySelector('[data-testid="hero-name"]').textContent).toBe(PERSONAL.name);
    expect(container.querySelector('[data-testid="hero-projects-btn"]').textContent).toBe("View projects");
  });
});
