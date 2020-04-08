/*  Autumn Greeting Card -- js */

(function($){
	'use strict';

	// declare actors here
	const $backFallingLeaves = $('#brownLeaf, #orangeLeaf, #redLeaf'),
				$textLine1 = $('.text-line-1'),
				$textLine2 = $('.text-line-2'),
				$textGreeting = $('.text-greeting'),
				$treeLeaves = $('[id^=treeleaf]'),
				$floorLeaves = $('[id^=floorleaf]'),
				$bird = $('#Bird'),
				$birdHat = $bird.find('#BirdHat'),
				$birdEyes = $bird.find('#leftEye, #rightEye'),
				$nest = $('#NestAndLeaves'),
				$tree = $('#tree_trunk'),
				$cardContainer = $('.card.container')

	// clear stage 
	function clearStage() {
		const clearTL = new TimelineMax()

		clearTL
			.set($backFallingLeaves, {autoAlpha: 0})
			.set($textLine1, {autoAlpha: 0})
			.set($textLine2, {autoAlpha: 0})
			.set($textGreeting, {autoAlpha: 0})
			.set($treeLeaves, {autoAlpha: 0})
			.set($treeLeaves, {autoAlpha: 0})
			.set($bird, {y: '+=62', autoAlpha: 0}) // move bird down within mask to hide him
			.set($nest, {autoAlpha: 0})
			.set($tree, {autoAlpha: 0})
			.set($floorLeaves, {y: '+=275', onComplete: showContainer}) // move leaves down to hide, add CB to show animation container

		// embedded function, show container after all GSAP actor hides
		function showContainer() {
			$cardContainer.css('display', 'block')
		}

		return clearTL
	}


	// enter floor vegetation


	// enter tree


	// enter the greeting text


	// the GO function ...to kick things all off
	function go() {
		console.log('go...')

		const masterTL = new TimelineMax()

		masterTL
			.add(clearStage(), 'scene-clear-stage')

	}

	go()

})(jQuery);


