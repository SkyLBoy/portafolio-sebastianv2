# Caso de infraestructura — borrador no publicado

Estado: pendiente de información. Este directorio no se importa desde `src`, no
está en `public` y no forma parte del sitio compilado. No hay una tarjeta nueva.

## Resultado de la revisión

Se revisaron los componentes, las traducciones, el README, los recursos del
repositorio y el texto del CV incluido en `public/assets/cv-sebastian-calderon.pdf`.

Hay evidencia del ámbito profesional, pero no de un caso suficientemente detallado:

| Referencia | Información disponible | Límite de esa información |
| --- | --- | --- |
| `src/lib/translations.js`, experiencia y especialidades | Administración de redes, VLANs, diagnóstico de conectividad, documentación y referencias a Aruba y Fortinet. | Son responsabilidades generales; no definen una intervención concreta ni una topología. |
| CV, experiencia y proyecto de infraestructura empresarial | Despliegue y administración de redes, switching y resolución de incidencias. | No documenta el problema inicial, los cambios exactos, el alcance ni las pruebas realizadas. |
| `src/lib/translations.js`, proyectos | Cinco casos de desarrollo y automatización. | Ninguno contiene los datos necesarios de un caso de redes. |
| `src/components/portfolio/ProjectMocks.jsx` | Ilustraciones SVG de esos cinco proyectos. | No contiene diagramas de una red real ni evidencia de infraestructura. |

No se puede atribuir el uso de todas las tecnologías mencionadas a una misma
intervención. Tampoco se pueden deducir resultados, modelos de equipos,
conexiones físicas, reglas de acceso ni métricas.

## Datos que debes aportar

1. **Contexto y problema:** qué necesidad o incidencia había y por qué requería intervención. Describe el entorno de forma anónima.
2. **Alcance:** cuándo ocurrió, qué parte de la red o servicio abarcó y qué quedó fuera.
3. **Equipos o tecnologías:** fabricantes, modelos y herramientas que realmente utilizaste en ese caso; sin números de serie ni configuraciones sensibles.
4. **Tareas realizadas:** qué hiciste tú, qué hizo el equipo y qué cambios se aplicaron realmente.
5. **Validación y resultado:** qué comprobaste, qué esperabas observar, qué observaste y qué evidencia anonimizada puedes compartir. Si no hubo mediciones, indícalo.

## Estructura del caso

### Contexto

Pendiente: entorno, necesidad y alcance de una intervención específica.

### Problema

Pendiente: síntoma o requerimiento inicial. Evitar atribuir causas que no se hayan
comprobado.

### Mi participación

Pendiente: tareas propias, límites de responsabilidad y colaboración. No convertir
responsabilidades generales del puesto en acciones de este caso.

### Solución

Pendiente: cambios realmente aplicados y su relación con el problema. Separar
acciones ejecutadas de alternativas consideradas.

### Validación

Pendiente: procedimiento utilizado, comportamiento esperado, observaciones y
evidencias. Un comando sugerido o una prueba pendiente no equivale a una validación
realizada.

### Resultado

Pendiente: conclusión respaldada por la validación. Registrar limitaciones y
pendientes si existieron. No añadir porcentajes, ahorros ni mejoras no medidos.

### Diagrama

No se incluye por falta de relaciones de red documentadas. Para prepararlo, se
necesitan los componentes y conexiones reales, los segmentos implicados y los
flujos relevantes para la solución. Se usarán nombres genéricos y se omitirán
direcciones IP, credenciales, nombres internos y otros identificadores sensibles.

## Integración futura

`case-study.draft.json` conserva la forma de los proyectos existentes: `id`,
`name`, `featured`, `subtitle`, `summary`, `desc`, `tech`, `features`, `problem`,
`participation` e `impact`. Los valores desconocidos están vacíos deliberadamente
en este borrador; no se muestran en el sitio.

El bloque `caseStudy` reserva contexto, alcance, solución, validación y diagrama.
Para publicarlo será necesario completar y revisar esos datos, preparar los textos
en español e inglés y adaptar el detalle público para incluir contexto y
validación. La tarjeta actual de proyectos solo presenta problema, solución,
participación y resultado; este borrador no modifica ese componente.

No se debe importar este JSON ni añadirlo a `projects.list` mientras
`publishable` sea `false`. No rellenar campos desconocidos con suposiciones.
Las capturas, si existen, deben anonimizarse antes de incorporarse a `public`.

## Alternativa: laboratorio demostrativo

Si no puedes compartir un caso profesional, se puede preparar un **laboratorio
demostrativo de segmentación de redes y conectividad**. Es una propuesta, no un
trabajo ya ejecutado.

- Identificarlo como laboratorio personal, sin atribuirlo a una empresa.
- Definir equipos o herramientas disponibles antes de diseñar la topología.
- Registrar la configuración realmente implementada y las pruebas realizadas.
- Documentar tanto los comportamientos permitidos como los que debían quedar bloqueados.
- Publicar resultados únicamente después de ejecutar y verificar las pruebas.

El laboratorio podría servir como caso técnico adicional; no sustituye ni acredita
una intervención empresarial que no esté documentada.
