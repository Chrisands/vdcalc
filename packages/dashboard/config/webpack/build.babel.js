import { join } from 'path'
import webpack from 'webpack'
import jssGlobal from 'jss-global'
import jssNested from 'jss-nested'
import jssCamelCase from 'jss-camel-case'
import autoprefixer from 'autoprefixer'
import htmlTemplate from 'html-webpack-template'
import HTMLWebpackPlugin from 'html-webpack-plugin'
import CssResolvePlugin from 'elementum-tools/lib/webpack/css-resolve-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin'

export const mode = 'production'

export const optimization = {
  splitChunks: {
    cacheGroups: {
      style: {
        name: 'styles',
        test: /\.?[jc]ss/,
      },
    },
  },
  minimizer: [
    new TerserPlugin({
      cache: true,
      parallel: true,
    }),
    new OptimizeCSSAssetsPlugin(),
  ],
}

export const entry = [
  '@babel/polyfill',
  './src/index',
]

export const output = {
  filename: '[name].[hash].js',
  publicPath: '/',
  path: join(__dirname, '../../dist'),
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
        MiniCssExtractPlugin.loader,
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
        MiniCssExtractPlugin.loader,
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
    meta: [
      {
        name: 'msapplication-TileColor',
        content: '#000000',
      },
      {
        name: 'theme-color',
        content: '#000000',
      },
    ],
    links: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sized: '32x32',
        href: '/favicon-32x32.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sized: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'manifest',
        href: '/site.webmanifest',
      },
      {
        rel: 'mask-icon',
        href: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
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
  new MiniCssExtractPlugin({
    filename: '[name].[hash].css',
  }),
  new CopyWebpackPlugin([
    {
      from: join(__dirname, '..', '..', 'assets'),
    },
  ]),
]
