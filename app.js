const intro = document.querySelector('.intro');
const video = intro.querySelector('video');
const text_intro  = intro.querySelector('h1');
// end of intro section
const section = document.querySelector('section');
const text_section = section.querySelector('h1');

// scroll magic
const controller = new ScrollMagic.Controller();

// text animations
let TextAnim = TweenMax.fromTo(text_intro, 4, { opacity: 1 }, { opacity: 0 });

let scene2 = new ScrollMagic.Scene({
    duration: 3000,
    triggerElement: intro,
    triggerHook: 0,
})
.setTween(TextAnim)
.addTo(controller);

// video scenes
let scene  = new ScrollMagic.Scene({
    duration: 14550,
    triggerElement: intro,
    triggerHook: 0,
})
// .addIndicators()
.setPin(intro)
.addTo(controller);

// video animations
let accelamount = 0.5;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
    // console.log(e);
});

setInterval(() => {
    delay += (scrollpos - delay) * accelamount;
    // console.log(scrollpos, delay);

    video.currentTime = delay;
}, 100);