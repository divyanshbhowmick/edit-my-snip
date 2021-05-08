import { IReactImports } from "../../@types/config";

export const CONTEXT_MENU_ID: string = "edit_my_snip";

export const CONTEXT_MENU_TITLE: string = "Edit My Snip";

export const CONTEXT_MENU_CONTEXTS: Array<string> = ["selection"];

export const FETCH_SELECTION_TEXT: string = "FETCH_SELECTION_TEXT";

export const SHOW_ALERT_MESSAGE: string = "SHOW_ALERT_MESSAGE";

export const DOM_CONTAINER_ID: string = "editMySnipLanguageSelector";

export const REACT_IMPORTS: IReactImports = {
	react: [
		`import React from 'react';`,
		`import React from 'react'`,
		`import React, { Component } from 'react';`,
		`import React, { Component } from 'react'`,
		`import React, {Component} from 'react';`,
		`import React, {Component} from 'react'`,
		`import React from "react";`,
		`import React from "react"`,
		`import React, { Component } from "react";`,
		`import React, { Component } from "react"`,
		`import React, {Component} from "react";`,
		`import React, {Component} from "react"`
	],
	"react-dom": [
		`import ReactDOM from 'react-dom';`,
		`import ReactDOM from 'react-dom'`,
		`import { render } from 'react-dom';`,
		`import { render } from 'react-dom'`,
		`import {render} from 'react-dom';`,
		`import {render} from 'react-dom'`,
		`import ReactDOM from "react-dom";`,
		`import ReactDOM from "react-dom"`,
		`import { render } from "react-dom";`,
		`import { render } from "react-dom"`,
		`import {render} from "react-dom";`,
		`import {render} from "react-dom"`
	]
};

export const JS_KEYWORDS: Array<string> = [
	"await",
	"break",
	"case",
	"catch",
	"class",
	"const",
	"continue",
	"debugger",
	"default",
	"delete",
	"do",
	"else",
	"enum",
	"export",
	"extends",
	"FALSE",
	"finally",
	"for",
	"function",
	"if",
	"implements",
	"import",
	"in",
	"instanceof",
	"interface",
	"let",
	"new",
	"null",
	"package",
	"private",
	"protected",
	"public",
	"return",
	"super",
	"switch",
	"static",
	"this",
	"throw",
	"try",
	"TRUE",
	"typeof",
	"var",
	"void",
	"while",
	"with",
	"yield",
	"Map",
	"set",
	"console",
	"log"
];
export const REACT_KEYWORDS: Array<string> = [
	"React",
	"Component",
	"render",
	"props",
	"state",
	"componentDidMount",
	"componentWillMount",
	"ReactDOM"
];

const DEFAULT_MARKUP_REACT = `<div><h1>Edit(✏) My Snip(👩‍💻)</h1><h2>Please, edit your snippet in App.js!</h2></div>`;

export const REACT_INDEX_JS_CONTENT = `import React from 'react';\nimport { render } from 'react-dom';\nimport App from './src/App';
\nconst TestComponent = () =>(${DEFAULT_MARKUP_REACT});\n// Uncomment the below line to render the App component\n// render(<App />, document.getElementById("root"));\nrender(<TestComponent />, document.getElementById('root'));`;
