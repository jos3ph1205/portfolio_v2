const tabs = [
	{
		title: "index.html",
		content: `<h1>1</h1>
<h1>2</h1>
<h1>3</h1>
<h1>4</h1>
<h1>5</h1>
<h1>6</h1>
<h1>7</h1>
<h1>8</h1>
<h1>9</h1>
<h1>10</h1>
<h1>10</h1>
<h1>11</h1>
<h1>12</h1>
<h1>13</h1>
<h1>14</h1>
<script>
    
</script>
<h1>16</h1>`,
	},
	{
		title: "app.js",
		content: `import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import hljs from "highlight.js/lib/core"
import javascript from "highlight.js/lib/languages/javascript"
import xml from "highlight.js/lib/languages/xml"
import css from "highlight.js/lib/languages/css"
import "highlight.js/styles/atom-one-dark.min.css"

class CodeBlock extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      code: props.code,
    }
  }
}`,
	},
]

export default tabs
