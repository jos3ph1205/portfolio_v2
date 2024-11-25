import React from "react"
import hljs from "highlight.js"
import "highlight.js/styles/atom-one-dark.min.css"

import { Tab, Tabs, TabList, TabPanel } from "react-tabs"

class CodeLine extends React.Component {
   highlightCode() {
      const nodes = document.querySelectorAll("[data-attribute-codeline]")
      nodes.forEach((node) => hljs.highlightElement(node))
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
            data-attribute-codeline
            className={`!bg-transparent text-lg ${this.props.lang}`}
         >
            {this.props.children}
         </code>
      )
   }
}

const HTML = (props) => <CodeLine {...props} lang={"language-html"} />
const JS = (props) => <CodeLine {...props} lang={"language-javascript"} />

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
               <div
                  className={
                     "flex flex-col py-3 px-4 child:!p-0 child:whitespace-pre descendant:!w-min"
                  }
               >
                  <HTML>{`<doctype html>`}</HTML>
                  <HTML>{`<html lang="en">`}</HTML>
                  <HTML>{`<head>`}</HTML>
                  <HTML>{`  <meta name="name" content="">`}</HTML>
                  <HTML>{`  <meta name="age" content="">`}</HTML>
                  <HTML>{`</head>`}</HTML>

                  {/*
                <html lang="en">
<Head />
<body class="cursor-none group/body">
<Cursor />
<div class="">
   <slot />
</div>
<script>
   import '../scripts/SmoothScroll.js'
</script>
</body>
</html>
*/}
               </div>
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
