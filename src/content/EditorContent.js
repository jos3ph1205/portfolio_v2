const tabs = [
	{
		title: "index.astro",
		content: `---
import MainLayout from '../layouts/MainLayout.astro'
import Gradient from '../components/Gradient.jsx'
import Editor2 from "../components/Editor_V2.jsx"
import tabs from "../content/EditorContent"

---

<MainLayout>
   <Gradient client:idle />
   <section>
      <div class="w-full flex flex-col items-center gap-8">
         <h1 class="text-center ">Greetings</h1>
         <Editor2 client:idle tabs={tabs} />
      </div>
   </section>
   <section class="bg-black">

   </section>
</MainLayout>
`,
	},
	{
		title: "main.css",
		content: `@tailwind base;
@tailwind components;
@tailwind utilities;

@font-face {
   font-family: "SpaceGrotesk";
   src: local('Space Grotesk'),
   url("/assets/fonts/SpaceGrotesk-VariableFont_wght.woff2") format("woff2"),
   url("/assets/fonts/SpaceGrotesk-VariableFont_wght.ttf") format("truetype");
}

:root {
   --scrollbar-size: 8px;
}

::-webkit-scrollbar {
   width: var(--scrollbar-size);
   height: var(--scrollbar-size);
}

::-webkit-scrollbar-track {
   cursor: auto;
   background-color: theme(colors.quat);
}

::-webkit-scrollbar-thumb {
   cursor: auto;
   background-color: color-mix(in srgb, theme(colors.sec.lt), transparent 80%);
   transition: all 2s;
}

::-webkit-scrollbar-thumb:hover {
   background-color: color-mix(in srgb, theme(colors.sec.lt), transparent 76%)
}

::-webkit-scrollbar-button {
   cursor: pointer;
   background-color: theme(colors.prim.DEFAULT);
   height: calc(var(--scrollbar-size) * 2 / 3);
}

::-webkit-scrollbar-button:hover {
   background-color: theme(colors.prim.lt);;
   height: var(--scrollbar-size);
}

::selection {
   background-color: theme(colors.sec.lt);
   color: theme(colors.quat);
}

@layer base {
   *,
   *::before,
   *::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      color: white;
      font-family: "SpaceGrotesk", monospace;
      -webkit-tap-highlight-color: transparent;
      /*outline: solid 0.1px hsla(0 0% 100% / 0.5) !important;*/
   }

   section {
      @apply flex justify-center items-center mx-auto min-h-svh container px-28 xl:px-24 lg:px-20 md:px-12 sm:px-4;
   }

   h1 {
      @apply text-6xl font-bold tracking-tight;
   }

   h2 {
      @apply text-4xl font-bold tracking-tight;
   }

   h3 {
      @apply text-3xl font-bold tracking-tight;
   }

   h4 {
      @apply text-2xl font-bold tracking-tight;
   }

   h5 {
      @apply text-xl font-bold tracking-tight;
   }

   h6 {
      @apply text-lg font-bold tracking-tight;
   }
}`,
	},
]

export default tabs
