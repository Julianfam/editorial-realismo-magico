# Realismo Mágico — página de ventas

Sitio estático para ofertar libros de uno en uno, sin reconstruir la página cada vez.

## Cómo agregar un libro nuevo

1. Pon la portada en `covers/` (idealmente 784×1176 o proporción 2:3).
2. Abre `js/books.js` y copia un objeto del array `BOOKS`.
3. Cambia al menos:
   - `id` (único, en minúsculas y con guiones)
   - `title`, `tagline`, `description`, `longDescription`
   - `cover` (`covers/tu-archivo.jpg`)
   - `status`: `"disponible"` o `"proximamente"`
   - `featured`: `true` solo en el libro que quieres en el hero
   - `buyUrl`: enlace real de Amazon, Gumroad, Stripe, Hotmart o WhatsApp
4. Sube los cambios. El catálogo y el hero se actualizan solos.

## Personalizar

- Marca y textos fijos: `index.html`
- Colores y tipografía: `css/styles.css`
- Correo / WhatsApp de compra: bloque `#comprar` en `index.html`
- Lista de espera: hoy guarda el correo en `localStorage`. Conecta Mailchimp, ConvertKit o Formspree cuando quieras.

## Títulos actuales

- **Encerrados hacia arriba** — disponible (destacado)
- **La máquina que sueña** — próximamente (IA)
- **Ciudad que no duerme** — próximamente (mundo futurista)

Los dos últimos son títulos de trabajo. Cámbialos en `js/books.js` cuando estén definidos.
