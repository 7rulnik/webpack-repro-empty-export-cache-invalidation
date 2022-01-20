module.exports = {
    entry: './index.js',
    mode: 'production',
    output: {
      pathinfo: true,
      clean: true,
    },
    target: 'node',
    optimization: {
      minimize: false
      // usedExports: false
    },
    cache: {
        name: `cache`,
        type: 'filesystem',
        cacheDirectory: `${__dirname}/.cache`,
        buildDependencies: {
          config: [__filename],
        },
      },
      infrastructureLogging: {
        // debug: /webpack\.cache/,
        debug: true
      }
}