import React, { act } from "react";
import { createRoot } from "react-dom/client";
import Projects from "./Projects";
import { PROJECT_MEDIA } from "../../lib/projectMedia";

let mockLanguage = "es";

jest.mock("@/contexts/LanguageContext", () => ({
  useLang: () => {
    const { translations } = require("../../lib/translations");
    return { t: key => key.split(".").reduce((value, part) => value[part], translations[mockLanguage]) };
  },
}), { virtual: true });

jest.mock("./About", () => ({
  SectionHeader: ({ title, lead }) => <header><h2>{title}</h2><p>{lead}</p></header>,
}));

describe("Projects", () => {
  let root;
  let container;

  beforeEach(() => {
    global.IS_REACT_ACT_ENVIRONMENT = true;
    mockLanguage = "es";
    container = document.createElement("div");
    document.body.appendChild(container);
    root = createRoot(container);
  });

  afterEach(() => {
    act(() => root.unmount());
    container.remove();
    PROJECT_MEDIA["sec-inventory"].image = null;
  });

  const renderProjects = () => act(() => root.render(<Projects />));

  it("destaca los tres proyectos solicitados en el orden correcto", () => {
    renderProjects();
    const titles = [...container.querySelectorAll('[data-testid="featured-projects"] h3')].map(el => el.textContent);
    expect(titles).toEqual([
      "Página Web Corporativa Vincco",
      "Sistema de Inventario SEC",
      "Generador Automático de Presentaciones",
    ]);
    expect(container.querySelector("#additional-projects").hidden).toBe(true);
    expect(container.querySelectorAll("article")).toHaveLength(5);
  });

  it("permite mostrar y ocultar los otros proyectos sin perder el foco del control", () => {
    renderProjects();
    const button = container.querySelector('[aria-controls="additional-projects"]');
    const panel = container.querySelector("#additional-projects");
    button.focus();
    expect(document.activeElement).toBe(button);
    act(() => button.click());
    expect(panel.hidden).toBe(false);
    expect(button.getAttribute("aria-expanded")).toBe("true");
    expect(panel.querySelectorAll("h3")).toHaveLength(2);
    expect(panel.textContent).toContain("Sistema de Inventario Vincco");
    expect(panel.textContent).toContain("Generador de Documentación Técnica");
    act(() => button.click());
    expect(panel.hidden).toBe(true);
    expect(button.textContent).toContain("Ver más proyectos");
    expect(document.activeElement).toBe(button);
  });

  it("usa detalles nativos enfocados y organizados en las cuatro partes del caso", () => {
    renderProjects();
    const details = container.querySelector("details");
    const summary = details.querySelector("summary");
    summary.focus();
    expect(document.activeElement).toBe(summary);
    expect(details.open).toBe(false);
    act(() => summary.click());
    expect(details.open).toBe(true);
    expect([...details.querySelectorAll("h4")].map(el => el.textContent)).toEqual([
      "Problema resuelto", "Solución", "Mi participación", "Resultado",
    ]);
    act(() => summary.click());
    expect(details.open).toBe(false);
  });

  it("conserva los tres enlaces reales y utiliza acciones descriptivas", () => {
    renderProjects();
    const links = [...container.querySelectorAll("a")];
    expect(links.map(link => link.href)).toEqual([
      "https://vincco.com/",
      "https://vincco.mx/",
      "https://github.com/SkyLBoy/Vincco_pagina_actu-main",
    ]);
    expect(links[0].textContent).toContain("Visitar sitio");
    expect(links[2].textContent).toBe("Ver código");
    links.forEach(link => expect(link.rel).toBe("noopener noreferrer"));
  });

  it("identifica las ilustraciones y admite capturas reales por proyecto", () => {
    renderProjects();
    expect([...container.querySelectorAll("figcaption")].every(el => el.textContent === "Ilustración del proyecto")).toBe(true);
    PROJECT_MEDIA["sec-inventory"].image = "/assets/projects/inventario-sec.webp";
    renderProjects();
    const card = container.querySelector('[data-testid="project-card-sec-inventory"]');
    expect(card.querySelector("img").getAttribute("src")).toBe(`${process.env.PUBLIC_URL}/assets/projects/inventario-sec.webp`);
    expect(card.querySelector("figcaption").textContent).toBe("Vista del proyecto");
  });

  it("traduce el detalle y los controles sin cambiar enlaces ni selección destacada", () => {
    mockLanguage = "en";
    renderProjects();
    const featured = container.querySelector('[data-testid="featured-projects"]');
    expect(featured.querySelectorAll("article")).toHaveLength(3);
    expect(featured.textContent).toContain("Automatic Presentation Generator");
    expect(container.querySelector("summary").textContent).toContain("View case study");
    expect(container.querySelector('[aria-controls="additional-projects"]').textContent).toContain("View more projects");
    expect(container.querySelector("a").href).toBe("https://vincco.com/");
  });
});
