import { join } from 'path'
import webpack from 'webpack'
import jssGlobal from 'jss-global'
import jssNested from 'jss-nested'
import jssCamelCase from 'jss-camel-case'
import autoprefixer from 'autoprefixer'
import htmlTemplate from 'html-webpack-template'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import CssResolvePlugin from 'elementum-tools/lib/webpack/css-resolve-plugin'

export const mode = 'development'

export const entry = [
  '@babel/polyfill',
  './src/index',
]

export const devServer = {
  hot: true,
  historyApiFallback: true,
  disableHostCheck: true,
  host: '0.0.0.0',
  port: process.env.PORT || '8000',
}

export const output = {
  filename: '[name].js',
  publicPath: '/',
  path: '/',
}

export const module = {
  rules: [
    {
      test: /\.js?$/,
      exclude: /node_modelus/,
      use: [
        {
          loader: 'babel-loader',
          query: {
            babelrc: false,
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    ie: 8,
                  },
                  shippedProposals: true,
                  modules: false,
                },
              ],
              '@babel/preset-react',
            ],
            plugins: [
              'react-hot-loader/babel',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import',
              [
                'elementum-tools/lib/babel/plugin',
                {
                  alias: {
                    VD: join(__dirname, 'src'),
                    VDUI: join(__dirname, '../../../ui/src'),
                  },
                  extract: true,
                },
              ],
            ],
          },
        },
      ],
    },
    {
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({
                browsers: [
                  '>2%',
                  'last 2 versions',
                ],
              }),
            ],
          },
        },
      ],
    },
    {
      test: /\.jss$/,
      use: [
        'style-loader',
        'css-loader',
        {
          loader: 'postcss-loader',
          options: {
            plugins: () => [
              autoprefixer({
                browsers: [
                  '>2%',
                  'last 2 versions',
                ],
              }),
            ],
          },
        },
        'jss-loader',
      ],
    },
    {
      test: /\.(png|jpg|svg|ttf|eot|woff|woff2)$/,
      loader: 'file-loader?name=[name].[ext]',
    },
  ],
}

export const resolve = {
  plugins: [
    new CssResolvePlugin(),
  ],
}

export const plugins = [
  new HTMLWebpackPlugin(({
    title: 'Vegan Delivery',
    inject: false,
    mobile: true,
    template: htmlTemplate,
    appMountId: 'app',
  })),
  new webpack.LoaderOptionsPlugin({
    options: {
      jssLoader: {
        plugins: [
          jssGlobal(),
          jssNested(),
          jssCamelCase(),
        ],
      },
    },
  }),
  new webpack.HotModuleReplacementPlugin(),
]
