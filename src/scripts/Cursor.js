import gsap from 'gsap'

const cursor = document.querySelector('#custom-cursor')

document.addEventListener('mousemove', (e) => {
   gsap.to(cursor, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.275,
      ease: 'power3.out',
   })
})
