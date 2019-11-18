delay = 1

// first animation
// gsap.to(
//   "#block1",
//   2, 
//   {
//     x: 500,
//     ease: 'power4.out',
//     delay: delay
//   }
// )

// second animation
// delay var incremented from first animation
// gsap.to(
//   "#block1",
//   2, 
//   {
//     y: 500,
//     ease: 'power4.out',
//     delay: ++delay
//   }
// )

// gsap.from(
//   '#block1',
//   2,
//   {
//     x: 850
//   }
// )

gsap.fromTo(
  '#block1',
  1,
  { // starting
    autoAlpha: 0,
    x: 0,
    y: 400, 
  },
  { // ending
    delay: 1,
    autoAlpha: 1,
    x: 400,
    y: 0,
  },
)