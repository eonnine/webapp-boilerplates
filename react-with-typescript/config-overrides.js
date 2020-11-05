const { override, disableChunk, addLessLoader, addWebpackAlias, addWebpackPlugin, disableEsLint, fixBabelImports, addWebpackModuleRule } = require('customize-cra');
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');
const rewireSvgReactLoader = require('react-app-rewire-svg-react-loader');
const path = require('path');
const sassToJS = require('sass-vars-to-js');

const themeVariables = sassToJS(path.resolve(__dirname, 'src/styles/variables.scss'));

// refs = https://github.com/arackaf/customize-cra
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  disableEsLint(),
  addWebpackModuleRule(
		{
			test: /\.(svg|png|jp(e*)g|gif)$/,
			loader: 'url-loader',
		},
	),
  addLessLoader({
    javascriptEnabled: true,
    importLoaders: true,
    modifyVars: themeVariables,
  }),
  disableChunk(),
  addWebpackPlugin(new AntdDayjsWebpackPlugin()),
  addWebpackAlias({
		['@']: path.resolve(__dirname, 'src'),
  }),
  (config, env) => {
		config = rewireSvgReactLoader(config, env);
		return config;
	},
);