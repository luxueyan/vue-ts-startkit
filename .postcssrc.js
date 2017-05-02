// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  parser: 'sugarss',
  map: false,
  plugins: {
    // to edit target browsers: use 'browserlist' field in package.json
    // 'autoprefixer': {},
    'postcss-salad': {
      browsers: [
        '> 1%',
        'last 5 versions',
        'not ie <= 8'
      ],
      features: {
        bem: true, //pass boolean false can disable the plugin
        inlineSvg: {
          'path': 'src/svgs'
        }
      },
      separators: {
        namespace: '--',
        descendent: '__',
        modifier: '_'
      },
      shortcuts: {
        utility: 'util'
      }
    }
  }
}
