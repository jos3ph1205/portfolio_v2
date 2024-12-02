import gsap from "gsap"
import CustomEase from "gsap/CustomEase"

const cursor = document.querySelector("div")
const typeTransition = 0.175
const moveSpeed = 0.375

gsap.registerPlugin(CustomEase)

function grabPureTextContent(el) {
   let content = ""

   for (const childText of el.childNodes) {
      if (childText.constructor.name === "Text") {
         content += childText.nodeValue.trim()
      }
   }
   return content
}

function hasText(el) {
   const content = grabPureTextContent(el)
   const height = el.offsetHeight

   return { content: content, height: height }

}

function DetectType(target) {
	const text = grabPureTextContent(target)
	const ignore = !target.hasAttribute("data-cursor-ignore")
	const forceText = target.hasAttribute("data-cursor-text")

	if (
		// prettier-ignore
		(
         target.nodeName === "H1" ||
         target.nodeName === "H2" ||
         target.nodeName === "H3" ||
         target.nodeName === "H4" ||
         target.nodeName === "H5" ||
         target.nodeName === "H6"
      ) && ignore
	)
		return "title"

	if ((text !== "" || forceText) && ignore) return "text"

	if (target.nodeName === "a") return "link"

	if (target.nodeName === "button") return "button"

	return "default"
}

let cursorToX = gsap.quickTo(cursor, "left", {
      duration: moveSpeed,
      ease: "power3.out",
   }),
   cursorToY = gsap.quickTo(cursor, "top", {
      duration: moveSpeed,
      ease: "power3.out",
   })

function reducedMotionRelative(clientX, clientY, target, reduceFactor = 10) {
   const rect = target.getBoundingClientRect()
   const centerX = rect.left + rect.width / 2
   const centerY = rect.top + rect.height / 2
   const reducedX = centerX + (clientX - centerX) / reduceFactor
   const reducedY = centerY + (clientY - centerY) / reduceFactor

   return { reducedX, reducedY }
}

CustomEase.create("cursor", "M0,0 C0.274,1.351 0.509,1 1,1 ")

function MouseMove_default() {
   window.onmousemove = (e) => {
      const target = e.target
      const { x, y } = e

      cursorToX(x)
      cursorToY(y)
   }
}

function MouseMove_Text(target) {
   window.onmousemove = (e) => {
      const { x, y } = e
      let { reducedY } = reducedMotionRelative(x, y, target, 100)

      cursorToX(x)
      cursorToY(reducedY)
   }
}

function MouseType_Default() {
   gsap.to(cursor, {
      height: 28,
      width: 28,
      backgroundColor: "transparent",
      backdropFilter: "none",
      duration: typeTransition,
      animation: "none",
   })
}

function MouseType_Text(target) {
   const text = hasText(target)
   console.log(text.height)
	gsap.to(cursor, {
		height: text.height * 1.1,
		width: 2,
		backgroundColor: "white",
		duration: typeTransition,
		animation: `cursor-blink 2.5s ease-out forwards infinite`,
	})
}

function MouseType_Title(target) {
   const text = hasText(target)

   gsap.to(cursor, {
      height: text.height * 1.75,
      width: text.height * 1.75,
      backdropFilter: "invert(1) grayscale(1) contrast(2)",
      duration: typeTransition,
   })
}

function CursorHandler(e) {
   const target = e.target
   const type = DetectType(target)

   if (type === "title") {
      MouseType_Title(target)
   } else if (type === "text") {
      MouseMove_Text(target)
      MouseType_Text(target)
   } else {
      MouseMove_default()
      MouseType_Default()
   }
}

window.onmouseover = (e) => CursorHandler(e)