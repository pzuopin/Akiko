<div align="center">
	<img src="https://lolisafe.moe/QHKALknp.png" width="400" />
	<br />
	<p>
		<strong>Akiko (晶子)</strong> is a sadistic, easy-to-use, minimal Vue.js starter <br>which uses Vue 2, Vuex, Vue-router, Vue-head, Vue-axios, Vue-i18n and Webpack 2.
	</p>
</div>

## Features

- Vue 2 / Vuex / Vue-router / Vue-head / Vue-axios / Vue-i18n
- Hot reloading for single-file components
- Split vendor code from your app
- Webpack 2
- ESLint
- Babel 6
- SASS/SCSS
- PostCSS
- JSX components are supported by default
- A boilerplate which is small and focusing on client-side apps

## Quick Start with vue-cli

```bash
npm i -g vue-cli
vue init icrawl/akiko my-app
cd my-app
npm i

# edit files with hotreloading for development
npm run dev

# bundle all scripts and static files for production
npm run build

# linting
npm run lint
```

## Folder Structure

```bash
├── app             # The actual app you want to bundle with Electron
│    ├── dist       # Bundled files
│    └── index.js   # Entry file for Electron
├── build           # Webpack configs and other scripts
├── client          # Client-side app files
├── dist            # Bundled files
│    ├── index.html
│    └── [...other bundled files]
├── static          # Static files that need bundling
├── node_modules    # Dependencies
└── package.json    # Package info
```

## Custom template

If you want to customize the output of `index.html` and remove Bulma, simply modify [index.html](https://github.com/iCrawl/Akiko/blob/master/build/index.html), see more at [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin).

## Projects using Akiko

- Feel free to add yours here :)

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Prior art

`Akiko` wouldn't exist if it wasn't for this projects:

- [vue.js](https://vuejs.org/)

## Author

**Akiko** © [iCrawl](https://github.com/iCrawl), Released under the [MIT](https://github.com/iCrawl/akiko/blob/master/LICENSE) License.<br>
Authored and maintained by iCrawl.

> GitHub [@iCrawl](https://github.com/iCrawl) · Twitter [@iCrawlToGo](https://twitter.com/iCrawlToGo)
