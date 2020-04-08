let TL = new gsap.timeline()

// header in
TL
  .to(
    '#line',
    {
      delay: 0.5,
      duration: 1,
      y: 80,
      ease: Power4.easeIn,
    }
  )
  .to(
    ['#txt1', '#txt2', '#txt3'],
    {
      delay: "-=0.5",
      duration: 1,
      x: 215,
      stagger: 0.25,
      ease: Power4.easeOut,
    }
  )
  .to(
    '#line',
    {
      delay: -1,
      duration: 1,
      y: 200,
      ease: Power4.easeIn
    }
  )
  .to(
    ['#txt1', '#txt2', '#txt3'],
    {
      delay: 2,
      duration: 1,
      x: 400,
      opacity: 0,
      stagger: 0.125,
      ease: Power4.easeIn,
    }
  )