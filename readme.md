<div align="center">
<p>
<a href="https://github.com/zeit/next.js">Next.js</a> +
<a href="https://github.com/nuxt/webpackbar">WebpackBar</a>
</p>
<p>
<img src="demo.gif" width="500px" style="border-radius:5px">
</p>
</div>

<br>
<br>

### Installation

```
yarn add next-progressbar
```

### Usage

Edit your next config :

```js
// next.config.js
const withProgressBar = require('next-progressbar')

module.exports = withProgressBar({
  // rest of your next config
  // webpackbar options (optional)
  barOptions: {/* ... */}
})
```
