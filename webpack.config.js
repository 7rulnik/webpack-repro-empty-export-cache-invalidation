module.exports = {
    entry: './index.js',
    mode: 'production',
    target: 'node',
    optimization: {
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
        debug: true
      }
}