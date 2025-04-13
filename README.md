# Pokédex Vue 3 App

Una pequeña Pokédex construida con **Vue 3**, **Vite** y **Element Plus**, que permite buscar, visualizar y filtrar una lista de Pokémons. Al seleccionar un pokemon de la lista, se despliega un modal con información detallada del mismo y donde se puede seleccionar si es uno de mis pokemones favoritos o no.

## 🚀 Tecnologías Utilizadas

### 🧠 Vue 3
Opté por **Vue 3** ya que es la versión más reciente del framework, con una arquitectura más moderna, mejor rendimiento y soporte extendido para composición API. Me permitió estructurar mejor la lógica y separar responsabilidades entre componentes.

### ⚡ Vite
**Vite** fue mi elección como _build tool_ porque es más rápido, liviano y minimalista que alternativas como Vue CLI. Su velocidad de arranque y recarga mejoran significativamente la experiencia de desarrollo.

### 💠 Element Plus
Utilicé la librería de componentes **Element Plus** por su amplio catálogo de componentes visuales, su integración nativa con Vue 3, y su excelente rendimiento. Esto me permitió enfocarme más en la lógica y experiencia de usuario, sin tener que implementar componentes visuales desde cero.

### 🧾 JavaScript
Aunque **TypeScript** habría sido una buena elección por su tipado estático y ventajas en proyectos grandes, decidí trabajar con **JavaScript** ya que tengo mayor dominio en este lenguaje actualmente. Esto me permitió mantener la productividad y enfoque en el diseño de la aplicación.

---

## 🧱 Estructura del Proyecto

El proyecto está dividido en **componentes reutilizables** y una lógica clara centralizada en el componente padre. Esto mejora la escalabilidad, el mantenimiento y la legibilidad del código.

### Vistas principales

- **Home**: Vista de bienvenida con un botón para comenzar.
- **Pokémons**: Vista principal con el listado y detalle de Pokémon.

### Componentes reutilizables

- `Search.vue`: Barra de búsqueda para filtrar Pokémon por nombre.
- `PokemonsList.vue`: Lista de Pokémon renderizada dinámicamente.
- `PokemonDetail.vue`: Modal con el detalle completo de cada Pokémon.
- `ButtonsFilter.vue`: Botones para alternar entre todos los pokemons y  pokemones favoritos.
- `RedirectButton.vue`: Componente reutilizable para redireccionar rutas.

---

## 💡 Decisiones de Diseño

- Toda la lógica de búsqueda, filtrado y manejo del modal está centralizada en el componente padre **PokemonsList**. Esto permite tener un **flujo de datos más claro y fácil de mantener**.
- Los componentes fueron creados de forma modular para **reutilizar funcionalidades** y evitar duplicación de código.
- Se priorizó una **estructura limpia, simple y escalable**, evitando lógica redundante o innecesaria.
- Para mostrar el **loading** de forma más visual, utilicé un **setTimeout** artificial. **No es una buena práctica para producción**, pero lo hice intencionalmente para simular una carga más lenta y así visualizar mejor el componente de carga.

---

## 🧭 Cómo correr el proyecto

1. Clona este repositorio:
```bash
git clone https://github.com/Yuly-katherine/pokedex-app.git
cd pokedex-app
```

2. Instala dependencias:
```bash
npm install
```

3. Ejecuta la app en modo desarrollo:
```bash
npm run dev

```

## 💥 ¡¡A probar!!

---

## ✨ Autor

- Desarrollado con 💛 por Yuly Katherine Gómez