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

const DEFAULT_MARKUP_REACT = `<div style={{ margin: "25% 25%", textAlign: "center" }}>
<h1 style={{ fontFamily: "sans-serif" }}>Edit(✏) My Snip(👩‍💻)</h1>
<h2 style={{ fontFamily: "sans-serif" }}>
  Please, edit your snippet in <span style={{color:"Highlight"}}>'App.js'</span> and try to
  import the component in <span style={{color:"Highlight"}}>'index.js'</span>!
</h2>
<br/>
<h4 style={{ fontFamily: "sans-serif" ,color:"darkviolet", fontSize:"18px" }}>Happy Coding👩‍💻!</h4>
</div>`;

export const REACT_TEST_COMPONENT_CONTENT = `import React from "react";

export const TestComponent = () => (
  <div style={{ margin: "25% 25%", textAlign: "center" }}>
    <h1 style={{ fontFamily: "sans-serif" }}>
      Edit(
      <span role="img" aria-label="coding-emoji">
        📝
      </span>
      ) My Snip(
      <span role="img" aria-label="coding-emoji">
        👩‍💻
      </span>
      )
    </h1>
    <h2 style={{ fontFamily: "sans-serif" }}>
      Please, edit your snippet in{" "}
      <span style={{ color: "Highlight" }}>'App.js'</span> and try to import the
      component in <span style={{ color: "Highlight" }}>'index.js'</span>!
    </h2>
    <br />
    <h4
      style={{
        fontFamily: "sans-serif",
        color: "darkviolet",
        fontSize: "18px"
      }}
    >
      Happy Coding
      <span role="img" aria-label="coding-emoji">
        🦄🔥💻
      </span>
      !
    </h4>
  </div>
);
`;

export const REACT_INDEX_JS_CONTENT = `import React from "react";
import { render } from "react-dom";
import { TestComponent } from "./src/TestComponent";
import App from "./src/App";

// Uncomment the below line to render the App component
// render(<App />, document.getElementById("root"));
render(<TestComponent />, document.getElementById("root"));`;
