# Testimonios App

App de testimonios en React + Vite con navegación, modo aleatorio y autoplay.

## Características
- Navegación circular entre testimonios (anterior/siguiente).
- Selección aleatoria sin repetir el testimonio actual.
- Autoplay cada 5 segundos con limpieza del intervalo.
- Diseño centrado y responsivo.

## Requisitos
- Node.js 18+ (recomendado)

## Uso
```powershell
npm install
npm run dev
```

## Estructura
- `src/data/data.js`: datos de testimonios.
- `src/components/Testimonial.jsx`: componente de presentación.
- `src/components/Controls.jsx`: controles de navegación.
- `src/App.jsx`: lógica de estado y autoplay.

## Notas
Si agregas o quitas testimonios, la navegación se ajusta automáticamente al nuevo tamaño del arreglo.
