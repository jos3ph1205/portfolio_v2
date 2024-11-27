import React from "react"
import hljs from "highlight.js"
import javascript from "highlight.js/lib/languages/javascript"
import css from "highlight.js/lib/languages/css"
import html from "highlight.js/lib/languages/vbscript-html"
import "highlight.js/styles/atom-one-dark.min.css"

hljs.registerLanguage("javascript", javascript)
hljs.registerLanguage("css", css)
hljs.registerLanguage("vbscript-html", html)

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

class CodeBlock extends React.Component {
	render() {
		const lines = React.Children.toArray(this.props.children).map(
			(child, index) => {
				return (
					<div
						className={
							"child-span:hover:!text-gray-300/50 flex px-4 text-lg"
						}
					>
						<span
							className={
								"transition-colors duration-300 ease-out text-gray-300/20 !font-mono !w-10"
							}
						>
							{index}
						</span>
						{child}
					</div>
				)
			}
		)

		return (
			<div className={"codeblock"} data-cursor-ignore={true}>
				{lines}
			</div>
		)
	}
}

class CodeLine extends React.Component {
	highlightCode() {
		const nodes = document.querySelectorAll("[data-attribute-codeline]")
		nodes.forEach((node) => {
			node.removeAttribute("data-highlighted")
			hljs.highlightElement(node)
		})
	}

	componentDidMount() {
		this.highlightCode()
	}

	componentDidUpdate() {
		this.highlightCode()
	}

	render() {
		return (
			<code
				data-attribute-codeline={true}
				className={`!bg-transparent !w-full !p-0 ${this.props.lang ? `language-${this.props.lang}` : ""}`}
			>
				{this.props.children}
			</code>
		)
	}
}

const HTML = (props) => <CodeLine {...props} lang={"html"} />
const JS = (props) => <CodeLine {...props} lang={"javascript"} />

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
						<button className="cursor-none" data-cursor-ignore={false}>
							index.html
						</button>
					</Tab>
					<Tab>
						<button className="cursor-none" data-cursor-ignore={false}>
							app.js
						</button>
					</Tab>
				</TabList>

				<TabPanel>
					<CodeBlock
						className={
							"flex text-lg flex-col py-3 px-4 child:!p-0 child:whitespace-pre descendant:!w-min"
						}
					>
						<HTML>{`<h1>test</h1>`}</HTML>
						<HTML>{`<h1>test</h1>`}</HTML>
						<HTML>{`<h1>test</h1>`}</HTML>
						<HTML>{`<h1>test</h1>`}</HTML>
						<HTML>{`<h1>test</h1>`}</HTML>
						<HTML>{`<h1>test</h1>`}</HTML>
						<HTML>{`<h1>test</h1>`}</HTML>
						<HTML>{`<h1>test</h1>`}</HTML>
						<HTML>{`<h1>test</h1>`}</HTML>
						<HTML>{`<h1>test</h1>`}</HTML>
						<HTML>{`<h1>test</h1>`}</HTML>
						<HTML>{`<h1>test</h1>`}</HTML>
						<HTML>{`<h1>test</h1>`}</HTML>
					</CodeBlock>
				</TabPanel>
				<TabPanel>
					<div
						className={
							"flex flex-col gap-1 py-3 px-4 child:!p-0 child:whitespace-pre descendant:!w-min"
						}
					>
						<HTML>{`<script>`}</HTML>
						<JS>{`  const built_in = "syntax highlighting!?"`}</JS>
						<HTML>{`</script>`}</HTML>
					</div>
				</TabPanel>
			</Tabs>
			<div></div>
		</div>
	)
}
