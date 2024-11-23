import gsap from "gsap"
import CustomEase from "gsap/CustomEase"

const cursor = document.querySelector("div")
const typeTransition = 0.175
const moveSpeed = 0.275

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

   if (content !== "") {
      return { content: content, height: height }
   } else {
      return false
   }
}

function DetectType(target) {
   const text = grabPureTextContent(target)

   if (
      target.nodeName === "H1" ||
      target.nodeName === "H2" ||
      target.nodeName === "H3" ||
      target.nodeName === "H4" ||
      target.nodeName === "H5" ||
      target.nodeName === "H6"
   )
      return "title"

   if (text !== "") return "text"

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
      console.log("yes")
      const target = e.target
      const { x, y } = e

      cursorToX(x)
      cursorToY(y)
   }
}

function MouseMove_Text(target) {
   window.onmousemove = (e) => {
      const { x, y } = e
      let { reducedY } = reducedMotionRelative(x, y, target)

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
   })
}

function MouseType_Text(target) {
   const text = hasText(target)
   gsap.to(cursor, {
      height: text.height * 1.2,
      width:
         text.height * 0.1 < 3
            ? 3
            : text.height * 0.1 > 5
              ? 5
              : text.height * 0.1,
      backgroundColor: "white",
      duration: typeTransition,
   })
}

function MouseType_Title(target) {
   const text = hasText(target)

   gsap.to(cursor, {
      height: text.height * 1.5,
      width: text.height * 1.5,
      backdropFilter: "invert(1) brightness(2) grayscale(1)",
      duration: typeTransition,
   })
}

window.onmouseover = (e) => {
   const target = e.target
   const type = DetectType(target)

   console.log(type)

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