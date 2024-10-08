import * as React from "react";

const PrismjsThemeSupport = () => {
  return <>
    {/* eslint-disable-next-line react/no-unknown-property */}
    <style global={"true" as unknown as boolean}>
      {bright}
    </style>
  </>;
};

const bright = `/**
 * https://unpkg.com/prismjs/themes/prism-okaidia.css
 *
 * okaidia theme for JavaScript, CSS and HTML
 * Loosely based on Monokai textmate theme by http://www.monokai.nl/
 * @author ocodia
 */

/* inline code */
code {
  padding: .1em;
  border-radius: .3em;
  white-space: pre;
}

pre > code {
  color: #fff;
}

code[class*="language-"] {
  color: #f8f8f2;
  background: none;
  text-shadow: 0 1px rgba(0, 0, 0, 0.3);
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  font-size: .95em;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  line-height: 1.5;

  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;

  -webkit-hyphens: none;
  -moz-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: slategray;
}

.token.punctuation {
  color: #f8f8f2;
}

.namespace {
  opacity: .7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
  color: #f92672;
}

.token.boolean,
.token.number {
  color: #ae81ff;
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: #a6e22e;
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
  color: #f8f8f2;
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
  color: #e6db74;
}

.token.keyword {
  color: #66d9ef;
}

.token.regex,
.token.important {
  color: #fd971f;
}

.token.important,
.token.bold {
  font-weight: bold;
}
.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

/* Overrides to reach AA, copied from https://reactjs.org */

code[class*="language-"] {
  text-shadow: none;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: rgb(178, 178, 178);
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
  color: rgb(252, 146, 158);
}

.token.boolean,
.token.number {
  color: #b78eff;
}
`;

export default PrismjsThemeSupport;
