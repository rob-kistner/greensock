TL = new gsap.timeline()

// animations cascade
// TL
//   .to('#red', 1, { x: 400 } )
//   .to( '#green', 1, { y: 400 } )
//   .to( '#blue', 1, { x: '-=400' } ) // relative value

// offset 
// TL
  // .to('#red', 1, { x: 400, delay: 1 } )
  // .to( '#green', 1, { y: 400 }, '-=0.5' ) // last parameter = offset, 0.5 seconds earlier
  // .to( '#blue', 1, { x: '-=400' }, '-=0.5' )


function animateBox3() {
  box3TL = new gsap.timeline()
  box3TL.to( '#blue', 1, { x: '-=400' } )
  return box3TL
}

// subtimeline added as a function
TL
  .to('#red', 1, { x: 400, delay: 1 } )
  .to( '#green', 1, { y: 400 }, '-=0.5' ) // last parameter = offset, 0.5 seconds earlier
  .add(animateBox3, '-=0.5')