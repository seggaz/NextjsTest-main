const webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

module.exports = {
	webpack: (config, { isServer }) => {
		if (isServer) {
			config.externals = [nodeExternals()]
		}

		config.plugins.push(
			new webpack.ProvidePlugin({
				process: 'process/browser',
				Buffer: ['buffer', 'Buffer'],
			})
		)

		return config
	},
}
