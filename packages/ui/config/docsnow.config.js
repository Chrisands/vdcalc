import path from 'path'

export const module = {
  rules: [
    {
      test: /\.js?$/,
      include: path.join(__dirname, '../src'),
      use: [
        {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [
              ['@babel/preset-env', {
                modules: false,
                targets: {
                  browsers: ['last 2 versions'],
                },
              }],
              '@babel/preset-react',
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              ['elementum-tools/lib/babel/plugin', {
                extract: true,
              }],
              'react-hot-loader/babel',
            ],
          },
        },
      ],
    },
  ],
}
