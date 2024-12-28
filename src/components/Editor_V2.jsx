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

	//
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
			<div className="flex flex-col text-base min-h-[60svh]">
				{this.props.children.split("\n").map((line, index) => (
					<div
						tabIndex={0}
						key={index}
						className="!outline-none child-code:!p-0 transition-colors duration-100 child-span:hover:!text-gray-300/60 child-span:focus-within:!text-gray-300/60 focus-within:bg-white/5 px-3 flex"
					>
						<span
							data-cursor-ignore
							className={`select-none transition-[inherit] duration-[inherit] font-mono !w-[${lineIndent}ch] text-right text-slate-300/30`}
						>
							{index + 1}
						</span>
						<code
							data-cursor-text
							data-codeline
							className=" selection:!bg-tert selection:!text-[unset] border-l heir-span:pointer-events-none border-white/10 ml-5 !w-full !pl-1 !bg-transparent whitespace-pre-wrap !tracking-wide"
						>
							{line}
						</code>
					</div>
				))}
				<div className="flex flex-grow px-3">
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

const Editor = ({ tabs }) => {
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
						descendant-li:!px-8
						descendant-li:!py-3
						descendant-li:!select-none

						hover:[&>li[aria-selected='false']]:bg-[color-mix(in_srgb,theme(colors.tert),transparent_75%)]
						focus:[&>li[aria-selected='false']]:bg-[color-mix(in_srgb,theme(colors.tert),transparent_75%)]

						[&>li[aria-selected='true']]:bg-[color-mix(in_srgb,theme(colors.tert),transparent_25%)]
						[&>li]:border-b-[3px]
						[&>li]:border-b-transparent
						[&>li[aria-selected='true']]:border-b-[3px]
						[&>li[aria-selected='true']]:border-b-sec
					"
				>
					{tabs.map((tab, index) => (
						<Tab data-cursor-ignore tabIndex={"0"} key={index}>
							{tab.title}
						</Tab>
					))}
				</TabList>

				{tabs.map((tab, index) => (
					<TabPanel key={index}>
						<CodeBlock>{tab.content}</CodeBlock>
					</TabPanel>
				))}
			</Tabs>
			<div></div>
		</div>
	)
}

export default Editor
