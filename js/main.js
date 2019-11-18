let TL = new gsap.timeline()

// CALLBACKS
TL
  .add('beginning')
  .to('#red', 1, { x: 400, delay: 0.5 } )
  .add('endBox1')
  .to( '#green', 1, { y: 400 }, 'endBox1-=0.5' )
  .add('endBox2')
  .to(
    '#blue',
    1,
    {
      x: '-=400',
      onComplete: showBigLogo,
      onCompleteParams: ['#ff0']
    },
    'endBox2-=0.5'
  )


function showBigLogo(clr) {
  let bigBox = document.querySelector('#bigBox')
  gsap.set(
    bigBox,
    {
      autoAlpha: 1,
      backgroundColor: 'orange'
    }
  )
}
