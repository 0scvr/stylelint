import rule from '../index.js';
const { messages, ruleName } = rule;

testRule({
	ruleName,
	config: [true],

	accept: [
		{
			code: '/* comment */',
		},
		{
			code: '/*\n multi-line comment\n */\n',
		},
		{
			code: 'a { color: red; /* comment */ }',
		},
	],
	reject: [
		{
			code: '/**/',
			message: messages.rejected,
			line: 1,
			column: 1,
		},
		{
			code: ' /* */',
			message: messages.rejected,
			line: 1,
			column: 2,
		},
		{
			code: '\n/*\n*/',
			message: messages.rejected,
			line: 2,
			column: 1,
		},
		{
			code: '\n /*\r\n*/',
			message: messages.rejected,
			line: 2,
			column: 2,
		},
		{
			code: '/*\t\t*/',
			message: messages.rejected,
			line: 1,
			column: 1,
		},
		{
			code: 'a {/*\r\n*/\n color: red;}',
			message: messages.rejected,
			line: 1,
			column: 4,
		},
	],
});

testRule({
	ruleName,
	config: [true],
	customSyntax: 'postcss-scss',

	accept: [
		{
			code: '//',
			description: 'ignore inline scss comments',
		},
		{
			code: 'a { color: red; } // ',
			description: 'ignore inline scss comments',
		},
	],
});
