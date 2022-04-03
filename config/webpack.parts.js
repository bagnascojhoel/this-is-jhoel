const path = require('path');
const preprocess = require('svelte-preprocess');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { ESBuildPlugin } = require('esbuild-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { MiniHtmlWebpackPlugin } = require('mini-html-webpack-plugin');
const { WebpackPluginServe } = require('webpack-plugin-serve');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const WebpackBar = require('webpackbar');
const DotenvPlugin = require('dotenv-webpack');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

exports.STATIC_FILES_PATH = path.resolve(process.cwd(), 'docs');

exports.devServer = () => ({
  watch: true,
  plugins: [
    new WebpackPluginServe({
      port: 3000,
      static: this.STATIC_FILES_PATH,
      historyFallback: true,
    }),
  ],
});

exports.page = ({ title }) => ({
  plugins: [new MiniHtmlWebpackPlugin({ publicPath: '', context: { title } })],
});

exports.generateSourceMaps = ({ type }) => ({ devtool: type });

exports.loadImages = ({ limit } = {}) => ({
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|webp)$/,
        type: 'asset',
        parser: { dataUrlCondition: { maxSize: limit } },
      },
    ],
  },
});

exports.optimize = () => ({
  optimization: {
    minimize: true,
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: { name: 'runtime' },
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
});

exports.analyze = () => ({
  plugins: [
    new BundleAnalyzerPlugin({
      generateStatsFile: true,
    }),
  ],
});

exports.typescript = () => ({
  module: {
    rules: [{ test: /\.ts$/, use: 'ts-loader', exclude: /node_modules/ }],
  },
});

exports.loadSvg = () => ({
  module: { rules: [{ test: /\.svg$/, type: 'asset' }] },
});

exports.postcss = () => ({
  loader: 'postcss-loader',
});

exports.extractCSS = ({ options = {}, loaders = [] } = {}) => {
  return {
    module: {
      rules: [
        {
          test: /\.(p?css)$/,
          use: [
            { loader: MiniCssExtractPlugin.loader, options },
            'css-loader',
          ].concat(loaders),
          sideEffects: true,
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: '[name].css',
      }),
    ],
  };
};

exports.svelte = (mode) => {
  const prod = mode === 'production';

  return {
    resolve: {
      alias: {
        svelte: path.dirname(require.resolve('svelte/package.json')),
      },
      extensions: ['.mjs', '.js', '.svelte', '.ts'],
      mainFields: ['svelte', 'browser', 'module', 'main'],
    },
    module: {
      rules: [
        {
          test: /\.svelte$/,
          use: {
            loader: 'svelte-loader',
            options: {
              compilerOptions: {
                dev: !prod,
              },
              emitCss: prod,
              hotReload: !prod,
              preprocess: preprocess({
                postcss: true,
                typescript: true,
              }),
            },
          },
        },
        {
          test: /node_modules\/svelte\/.*\.mjs$/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
  };
};

exports.esbuild = () => {
  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: 'esbuild-loader',
          options: {
            target: 'esnext',
          },
        },
        {
          test: /\.ts$/,
          loader: 'esbuild-loader',
          options: {
            loader: 'ts',
            target: 'esnext',
          },
        },
      ],
    },
    plugins: [new ESBuildPlugin()],
  };
};

exports.cleanDist = () => ({
  plugins: [new CleanWebpackPlugin()],
});

exports.useWebpackBar = () => ({
  plugins: [new WebpackBar()],
});

exports.useDotenv = (env) => {
  let envFilePath = 'development';

  switch (env) {
    case 'production':
      envFilePath = 'env/.env.production';
      break;
    case 'local':
      envFilePath = 'env/.env.local';
      break;
    default:
  }

  return {
    plugins: [new DotenvPlugin({ path: envFilePath })],
  };
};

exports.useTsconfigPaths = () => ({
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
  },
});
