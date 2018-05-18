const WebpackBar = require('webpackbar')

const dev = process.env.NODE_ENV !== 'production'

module.exports = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      if (!options.defaultLoaders) {
        throw new Error(
          'This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade'
        )
      }

      const { isServer } = options

      const { progressBar = {} } = nextConfig

      const defaultProgressBar = {
        name: isServer ? 'server' : 'client',
        color: isServer ? 'orange' : 'green'
      }

      const webpackBar = Object.assign({}, defaultProgressBar, progressBar)

      config.plugins.push(new WebpackBar(webpackBar))

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
