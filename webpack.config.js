const path = require('path');
const webpack = require('webpack');
const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './src/index.ts',  // 入口文件
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
        buffer: require.resolve('buffer/'),
    },
  },
  output: {
    filename: 'index.ts',  // 输出文件名
    path: path.resolve(__dirname, './lib'),  // 输出目录
    libraryTarget: 'module',
  },
  experiments: {
    outputModule: true, // 启用 outputModule 实验性功能
  },
  target: ['web', 'browserslist:> 0.5%, not dead'], // 设置 target 以确保输出 ESM 代码
  externals: [],  // 配置外部依赖，这里留空，表示所有依赖都打包
  plugins: [
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
    }),
    new TypescriptDeclarationPlugin({
        out: 'index.d.ts', // 输出的声明文件名
        exclude: /node_modules/,
    }),
  ]
};