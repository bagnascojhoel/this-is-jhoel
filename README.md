# This is Jhoel

My personal portfolio website. The cards are built with information gathered from my public repositories on GitHub. Each project has its own description file, called `this-is-jhoel.json`. It is published with GitHub Pages.

## Technologies

Since the project premisse was a simple website to showcase my projects, I chooose technologies which allowed me a fast development and cheap deployment:

- Svelte
- Tailwind CSS
- Typescript

## Running it

To build it you will need node (recommended `v12.22.8`). Then clone this repository, access its folder and run:

```bash
npm run watch:local
```

## Learning curve

I have some experience with React and Vue but never had worked with Svelte. Reading about its idea of focusing on compile-time, straying away from the Virtual DOM which the most popular frameworks use, but still having the greatest features they have, I couldn't be more tempted to try it out. So I followed [this freeCodeCamp tutorial](https://www.youtube.com/watch?v=ujbE0mzX-CU). Halfway through realized I knew enough of Svelte and started to code This is Jhoel.

Initially, thrilled about using new technology, I tried to use Sapper (which is used in the tutorial I followed). You must realize my unhappiness when I found out it was to be discontinued. Then switched to plain Svelte.

The default project bundler that Svelte uses is Rollup. Though I have never used it, I wanted to try it out. But had to switch to Webpack because of some issues with Rollup-Axios interaction.
