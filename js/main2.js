
delay    = 0.25
duration = 0.5
easing   = 'power4.easeInOut'
y        = 400

// as individual animation calls
// ----------------------------------------
// gsap.to('#red', 1, { delay: delay, y: 600, ease: easing })
// gsap.to('#green', 1, { delay: delay*2, y: 600, ease: easing })
// gsap.to('#blue', 1, { delay: delay*3, y: 600, ease: easing })

// setting an array as source animates all objects
// ----------------------------------------
// gsap.to(
//   ['#red', '#green', '#blue'],
//   1,
//   {
//     y: 600
//   }
// )

// stagger places a delay between 
// each object in the array
// ----------------------------------------
gsap.to(
  ['#red', '#green', '#blue'],
  {
    delay: 0.5,
    duration: 1,
    y: 400,
    stagger: 0.25
  }
)