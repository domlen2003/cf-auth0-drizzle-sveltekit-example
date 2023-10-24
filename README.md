# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Setup

If developing with wrangler, you'll need to install it globally:

```bash
npm i -g wrangler
```

You'll also need to run the local setup for the d1 DB:
```bash
npm run dev:build-d1
```


## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server with wrangler/cf bindings
npm run dev:wrangler
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
