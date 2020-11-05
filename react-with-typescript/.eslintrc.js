module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	parser: '@typescript-eslint/parser',
	extends: [
		'plugin:react/recommended', // 리액트 추천 룰셋
		'plugin:import/typescript',
		'plugin:@typescript-eslint/recommended', // 타입스크립트 추천 룰셋
		// eslint의 typescript 포매팅 기능을 제거(eslint-config-prettier)
		'prettier/@typescript-eslint',
		'airbnb-base',
		'react-app',
		// eslint의 포매팅 기능을 prettier로 사용함. 항상 마지막에 세팅 되어야 함.
		'plugin:prettier/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'react-hooks', '@typescript-eslint'],
	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			typescript: {
				alwaysTryTypes: true,
				project: './'
			}
		}
	},
	rules: {
		'global-require': 0,
		'no-shadow': 0,
		'no-return-await': 0,
		'no-nested-ternary': 0,
		'no-console': 0,
		'no-param-reassign': 0,
		'no-case-declarations': 0,
		'consistent-return': 0,
		'import/prefer-default-export': 0,
		'import/extensions': 0,
		'import/no-cycle': 0,
		'import/no-unresolved': 0,
		'import/no-dynamic-require': 0,
		'@typescript-eslint/no-explicit-any': 0,
		'@typescript-eslint/no-var-requires': 0,
		'@typescript-eslint/no-redeclare': 0,
		'@typescript-eslint/interface-name-prefix': 0,
		'react/display-name': 0,
		'react-hooks/rules-of-hooks': 0,
	},
};
