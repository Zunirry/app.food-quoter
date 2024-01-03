const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const path = require('path');

module.exports = mergeConfig(getDefaultConfig(__dirname), {
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx', 'json'], // Include relevant file extensions
    resolverMainFields: ['react-native', 'browser', 'main'],
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => {
          return name in target
            ? target[name]
            : path.join(__dirname, 'node_modules', name);
        },
      },
    ),
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
});
