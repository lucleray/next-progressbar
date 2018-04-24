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

      config.plugins.push(
        new WebpackBar({
          name: isServer ? 'server' : 'client',
          color: isServer ? 'orange' : 'green'
        })
      )

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    }
  })
}
