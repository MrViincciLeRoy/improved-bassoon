const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add support for GitHub Pages deployment
if (process.env.NODE_ENV === 'production') {
  config.resolver.platforms = [...config.resolver.platforms, 'web'];
}

module.exports = config;