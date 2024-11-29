import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import hljs from "highlight.js/lib/core"
import javascript from "highlight.js/lib/languages/javascript"
import xml from "highlight.js/lib/languages/xml"
import css from "highlight.js/lib/languages/css"
import "highlight.js/styles/atom-one-dark.min.css"

hljs.registerLanguage("javascript", javascript)
hljs.registerLanguage("css", css)
hljs.registerLanguage("xml", xml)
hljs.configure({
	languages: ["xml", "javascript", "css"],
})


class CodeBlock extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			code: props.code,
		}
	}

	componentDidMount() {
		this.highlightCode()
	}

	componentDidUpdate(prevProps) {
		if (prevProps.code !== this.props.code) {
			this.setState({ code: this.props.code }, this.highlightCode)
		}
	}

	highlightCode() {
		const codeBlocks = document.querySelectorAll("code")
		codeBlocks.forEach((block) => {
			hljs.highlightElement(block)
		})
	}

	render() {
		const lineIndent =
			this.props.children.split("\n").length.toString().length + 0.5

		return (
			<div className="flex flex-col min-h-[60svh] text-base">
				{this.props.children.split("\n").map((line, index) => (
					<div
						tabIndex={0}
						key={index}
						className="child-code:!p-0 transition-colors duration-100 child-span:hover:!text-gray-300/60 child-span:focus-within:!text-gray-300/60 focus-within:bg-white/5 px-3 flex"
					>
						<span
							className={`select-none transition-[inherit] duration-[inherit] font-mono !w-[${lineIndent}ch] text-right text-slate-300/30`}
						>
							{index + 1}
						</span>
						<code
							data-cursor-text
							data-codeline
							className="heir-span:inline-flex border-l border-white/10 ml-5 !w-full !pl-1 !bg-transparent whitespace-pre-wrap"
						>
							{line}
						</code>
					</div>
				))}
				<div className="flex-grow px-3 flex">
					<span
						className={`select-none whitespace-pre font-mono !w-[${lineIndent}ch] `}
					>
						{" ".repeat(lineIndent)}
					</span>
					<div className="border-l border-white/10 ml-5 !w-full !pl-1"></div>
				</div>
			</div>
		)
	}
}

export default () => {
	return (
		<div className="w-[min(800px,100%)] border border-white/10 bg-[color-mix(in_srgb,theme(colors.quat),transparent_50%)] backdrop-blur-lg rounded-lg overflow-hidden text-xl">
			<Tabs>
				<TabList
					className="
            flex
            text-base
            bg-[color-mix(in_srgb,theme(colors.tert),black_75%)]

            descendant-li:transition-[background,border-color]
            descendant-li:duration-200
            descendant-li:ease-out
            descendant-li:px-8
            descendant-li:py-3
            descendant-li:outline-none

            hover:[&>li[aria-selected='false']]:bg-[color-mix(in_srgb,theme(colors.tert),transparent_75%)]

            [&>li[aria-selected='true']]:bg-[color-mix(in_srgb,theme(colors.tert),transparent_25%)]
            [&>li]:border-b-[3px]
            [&>li]:border-b-transparent
            [&>li[aria-selected='true']]:border-b-[3px]
            [&>li[aria-selected='true']]:border-b-sec
         "
				>
					<Tab>
						<button
							className="pointer-events-none"
							data-cursor-ignore={false}
						>
							index.html
						</button>
					</Tab>
					<Tab>
						<button
							className="pointer-events-none"
							data-cursor-ignore={false}
						>
							app.js
						</button>
					</Tab>
				</TabList>

				<TabPanel>
					<CodeBlock>
						{`<h1>1</h1>
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
<h1>16</h1>`}
					</CodeBlock>
				</TabPanel>
				<TabPanel>
					<CodeBlock>
						{`import React from "react"
import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

import hljs from "highlight.js/lib/core"
import javascript from "highlight.js/lib/languages/javascript"
import xml from "highlight.js/lib/languages/xml"
import css from "highlight.js/lib/languages/css"
import "highlight.js/styles/atom-one-dark.min.css"
`}
					</CodeBlock>
				</TabPanel>
			</Tabs>
			<div></div>
		</div>
	)
}
