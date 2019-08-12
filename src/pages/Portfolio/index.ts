export { Portfolio } from './Portfolio';

[
  {
    test: {},
    exclude: {},
    use: [
      'C:\\\\work\\\\matrix\\\\matrix.frontend\\\\node_modules\\\\style-loader\\\\index.js',
      {
        loader: 'C:\\\\work\\\\matrix\\\\matrix.frontend\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js',
        options: { importLoaders: 1, sourceMap: false }
      },
      {
        loader: 'C:\\\\work\\\\matrix\\\\matrix.frontend\\\\node_modules\\\\postcss-loader\\\\src\\\\index.js',
        options: { ident: 'postcss', sourceMap: false }
      }
    ],
    sideEffects: true
  },
  {
    test: {},
    use: [
      'C:\\\\work\\\\matrix\\\\matrix.frontend\\\\node_modules\\\\style-loader\\\\index.js',
      {
        loader: 'C:\\\\work\\\\matrix\\\\matrix.frontend\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js',
        options: { importLoaders: 1, sourceMap: false, modules: true }
      },
      {
        loader: 'C:\\\\work\\\\matrix\\\\matrix.frontend\\\\node_modules\\\\postcss-loader\\\\src\\\\index.js',
        options: { ident: 'postcss', sourceMap: false }
      }
    ]
  },
  {
    test: {},
    exclude: {},
    use: [
      'C:\\\\work\\\\matrix\\\\matrix.frontend\\\\node_modules\\\\style-loader\\\\index.js',
      {
        loader: 'C:\\\\work\\\\matrix\\\\matrix.frontend\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js',
        options: { importLoaders: 2, sourceMap: false }
      },
      {
        loader: 'C:\\\\work\\\\matrix\\\\matrix.frontend\\\\node_modules\\\\postcss-loader\\\\src\\\\index.js',
        options: { ident: 'postcss', sourceMap: false }
      },
      {
        loader: 'C:\\\\work\\\\matrix\\\\matrix.frontend\\\\node_modules\\\\sass-loader\\\\lib\\\\loader.js',
        options: { sourceMap: false }
      }
    ],
    sideEffects: true
  },
  {
    test: {},
    use: [
      'C:\\\\work\\\\matrix\\\\matrix.frontend\\\\node_modules\\\\style-loader\\\\index.js',
      {
        loader: 'C:\\\\work\\\\matrix\\\\matrix.frontend\\\\node_modules\\\\css-loader\\\\dist\\\\cjs.js',
        options: { importLoaders: 2, sourceMap: false, modules: true }
      },
      {
        loader: 'C:\\\\work\\\\matrix\\\\matrix.frontend\\\\node_modules\\\\postcss-loader\\\\src\\\\index.js',
        options: { ident: 'postcss', sourceMap: false }
      },
      {
        loader: 'C:\\\\work\\\\matrix\\\\matrix.frontend\\\\node_modules\\\\sass-loader\\\\lib\\\\loader.js',
        options: { sourceMap: false }
      }
    ]
  }
];
