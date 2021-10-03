const path = require('path');

module.exports = {
  // Fix for fixed element to be in block
  styles: {
    StyleGuide: {
      '@global body': {
        fontFamily: 'Helvetica',
      },
    },
    Playground: {
      preview: {
        position: 'relative',
        transform: 'translate3d(0, 0, 0)',
        outline: '1px solid #661',
      },
    },
  },

  // Fix for displaying only component props
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  propsParser: require('react-docgen-typescript').withDefaultConfig().parse,

  webpackConfig: {
    resolve: {
      extensions: ['.ts', '.tsx', '*'],
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-typescript', '@babel/preset-react'],
            },
          },
        },
        {
          test: /\.(css|scss)$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: ['url-loader'],
        },
      ],
    },
  },

  // Sections that is displayed in styleguidelist
  sections: [
    {
      name: 'Components',
      components: 'src/components/**/*.tsx',
    },
    {
      name: 'Sections',
      components: 'src/sections/**/*.tsx',
    },
  ],

  // Theme provider
  styleguideComponents: {
    Wrapper: path.join(__dirname, 'src/utils/StylesProvider.tsx'),
  },
};
