# Sitio principal de EMIZOR

Fuente editable de la página principal de EMIZOR. La vista previa unificada la sirve junto a Novedades desde la aplicación de la raíz del repositorio.

## Estructura

- `index.html`: portada breve y acceso a las páginas internas.
- `caracteristicas.html`, `integraciones.html`, `nosotros.html`, `contacto.html`: páginas secundarias de la principal.
- `solucion.html`: redirección de compatibilidad hacia Características.
- `assets/css/styles.css`: estilos compartidos.
- `assets/brand/`: identidad visual de EMIZOR.
- `assets/clientes/`: logos del carrusel de clientes.

Para revisarlo localmente: desde la raíz, ejecutar `npm run dev` y abrir `http://localhost:5173/`. El comando sincroniza estos archivos con `public/` antes de iniciar. Reinicia la vista previa después de editar esta carpeta. `npm run build` incluye también la principal.

La principal enlaza a Novedades mediante `/novedades/`, y Novedades vuelve a la principal mediante `/`. Ambas rutas funcionan en el mismo origen local y están preparadas para un único dominio cuando se publique el proyecto.

Contenido de Integraciones adaptado de https://www.emizor.com/integraciones-1-1-1; Características de https://www.emizor.com/caracteristicas y ¿Quiénes somos? de https://www.emizor.com/qui%C3%A9nes-somos (consultados el 16 de septiembre de 2026). La mención de autorización remite al listado oficial del SIN: https://pilotosiat.impuestos.gob.bo/facturacionv2/public/SistemasAutorizados.xhtml, donde figura EMIZOR ELECTRONICA. La dirección del pie se conserva según la decisión del proyecto.
