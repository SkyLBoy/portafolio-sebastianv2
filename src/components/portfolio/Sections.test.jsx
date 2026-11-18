import React, { act } from "react";
import { createRoot } from "react-dom/client";
import Experience from "./Experience";
import Skills from "./Skills";
import Contact from "./Contact";
import Projects from "./Projects";
import { translations } from "../../lib/translations";
import { PERSONAL } from "../../lib/personal";

let mockLanguage = "es";

jest.mock("@/contexts/LanguageContext", () => ({
  useLang: () => {
    const { translations } = require("../../lib/translations");
    return { lang: mockLanguage, t: key => key.split(".").reduce((value, part) => value[part], translations[mockLanguage]) };
  },
}), { virtual: true });
jest.mock("@/lib/personal", () => jest.requireActual("../../lib/personal"), { virtual: true });
jest.mock("framer-motion", () => {
  const React = require("react");
  const components = {};
  return {
    motion: new Proxy({}, {
      get: (_, tag) => {
        if (!components[tag]) {
          components[tag] = React.forwardRef(({ initial, animate, whileInView, whileHover, viewport, transition, children, ...props }, ref) =>
            React.createElement(tag, { ...props, ref }, children));
        }
        return components[tag];
      },
    }),
  };
});

describe("Experiencia, especialidades y contacto", () => {
  let root;
  let container;
  let writeText;
  const originalClipboard = Object.getOwnPropertyDescriptor(navigator, "clipboard");

  beforeEach(() => {
    global.IS_REACT_ACT_ENVIRONMENT = true;
    mockLanguage = "es";
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
    writeText = jest.fn().mockResolvedValue(undefined);
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: { writeText } });
  });
  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    if (originalClipboard) Object.defineProperty(navigator, "clipboard", originalClipboard);
    else delete navigator.clipboard;
  });

  const render = element => act(() => root.render(element));

  it.each(["es", "en"])("conserva todos los datos laborales y responsabilidades en %s", language => {
    mockLanguage = language;
    render(<Experience />);
    translations[language].experience.jobs.forEach((job, index) => {
      const card = container.querySelector(`#experience-${index}`);
      expect(card.querySelector("h3").textContent).toBe(job.role);
      expect(card.textContent).toContain(job.company);
      expect(card.textContent).toContain(job.period);
      expect(card.textContent).toContain(job.summary);
      const visibleItems = card.querySelectorAll("article > div > ul > li");
      expect(visibleItems).toHaveLength(2);
      job.achievements.forEach(item => expect(card.textContent).toContain(item));
      const details = card.querySelector("details");
      expect(details.open).toBe(false);
      const summary = details.querySelector("summary");
      summary.focus();
      expect(document.activeElement).toBe(summary);
      act(() => summary.click());
      expect(details.open).toBe(true);
    });
  });

  it("prioriza las especialidades y enlaza solo a ejemplos visibles existentes", () => {
    render(<><Projects /><Experience /><Skills /></>);
    const skills = container.querySelector("#skills");
    const names = [...skills.querySelectorAll("h3")].map(el => el.textContent);
    expect(names.slice(0, 3)).toEqual(["Infraestructura y redes", "Automatización", "Desarrollo de software"]);
    const chips = [...skills.querySelectorAll(".chip")].map(el => el.textContent.trim());
    expect(new Set(chips).size).toBe(chips.length);
    expect(skills.querySelector('[role="progressbar"]')).toBe(null);
    skills.querySelectorAll("a").forEach(link => {
      const target = container.querySelector(link.getAttribute("href"));
      expect(target).not.toBe(null);
      expect(target.closest("#additional-projects")).toBe(null);
    });
  });

  it.each(["es", "en"])("copia el correo y anuncia el resultado en %s", async language => {
    mockLanguage = language;
    render(<Contact />);
    const button = container.querySelector('[data-testid="contact-copy-email"]');
    const status = container.querySelector('[role="status"]');
    expect(button.getAttribute("aria-describedby")).toBe(status.id);
    expect(status.getAttribute("aria-live")).toBe("polite");
    await act(async () => button.click());
    expect(writeText).toHaveBeenCalledWith(PERSONAL.email);
    expect(status.textContent).toBe(translations[language].contact.copySuccess);
    expect(button.disabled).toBe(false);
  });

  it("impide envíos repetidos mientras el portapapeles está pendiente", async () => {
    let finish;
    writeText.mockImplementation(() => new Promise(resolve => { finish = resolve; }));
    render(<Contact />);
    const button = container.querySelector('[data-testid="contact-copy-email"]');
    act(() => button.click());
    expect(button.disabled).toBe(true);
    expect(button.getAttribute("aria-busy")).toBe("true");
    expect(container.querySelector('[role="status"]').textContent).toBe("Copiando…");
    await act(async () => finish());
    expect(button.disabled).toBe(false);
  });

  it("muestra una alternativa manual cuando falla la copia y permite reintentar", async () => {
    writeText.mockRejectedValueOnce(new Error("Permission denied"));
    render(<Contact />);
    const button = container.querySelector('[data-testid="contact-copy-email"]');
    await act(async () => button.click());
    expect(container.querySelector('[role="status"]').textContent).toBe(translations.es.contact.copyError);
    expect(container.querySelector('[data-testid="contact-email"]').textContent).toBe(PERSONAL.email);
    await act(async () => button.click());
    expect(container.querySelector('[role="status"]').textContent).toBe(translations.es.contact.copySuccess);
  });

  it("maneja navegadores sin API de portapapeles y conserva enlaces y modalidad", async () => {
    Object.defineProperty(navigator, "clipboard", { configurable: true, value: undefined });
    render(<Contact />);
    await act(async () => container.querySelector('[data-testid="contact-copy-email"]').click());
    expect(container.querySelector('[role="status"]').textContent).toBe(translations.es.contact.copyError);
    expect(container.querySelector('[data-testid="contact-email"]').getAttribute("href")).toBe(`mailto:${PERSONAL.email}`);
    expect(container.querySelector('[data-testid="social-linkedin"]').getAttribute("href")).toBe(PERSONAL.linkedin);
    expect(container.querySelector('[data-testid="social-github"]').getAttribute("href")).toBe(PERSONAL.github);
    expect(container.querySelector('[data-testid="contact-cv-btn"]').getAttribute("href")).toBe(PERSONAL.cvUrl);
    expect(container.querySelector('[data-testid="contact-location"]').textContent).toBe(translations.es.contact.location);
    expect(container.textContent).toContain("presenciales como remotas");
    expect(container.textContent).not.toContain("nivel intermedio");
  });
});
