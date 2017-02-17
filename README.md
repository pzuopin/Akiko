<p align="center">
	<strong>Akiko</strong> is a sadistic, easy-to-use, minimal Vue.js starter <br>which uses Vue 2, Vuex, Vue-router, Vue-axios, Vue-i18n and Webpack 2.
</p>

## Features

- Vue 2 / Vue-router / Vuex / Vue-i18n / Vue-axios
- Hot reloading for single-file components
- Split vendor code from your app
- Webpack 2
- ESLint
- Babel 6
- PostCSS
- JSX components are supported by default
- A boilerplate which is small and focusing on client-side apps

## Quick Start

```bash
git clone https://github.com/iCrawl/Akiko.git <my-app>
cd <my-app>
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
├── build           # webpack configs and other scripts
├── client          # client-side app files
├── dist            # bundled files and index.html
│    ├── index.html
│    └── [...other bundled files]
├── static          # static files that need bundling
├── node_modules    # dependencies
└── package.json    # package info
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