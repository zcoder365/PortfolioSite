// ============================================
// SCROLL REVEAL ANIMATIONS
// uses intersection observer to fade in sections as they scroll into view
// ============================================
const reveals = document.querySelectorAll('.reveal');

// observer config: trigger when 10% of element is visible
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

// callback fires when reveal elements enter/exit the viewport
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // add 'visible' class to trigger CSS animation
            entry.target.classList.add('visible');
            // stop observing once revealed (one-time animation)
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// observe every element with .reveal class
reveals.forEach(el => observer.observe(el));


// ============================================
// TYPING ANIMATION FOR HERO TAGLINE
// cycles through different phrases that describe Zoe
// ============================================
const phrases = [
    'tech and creativity ✨',
    'code and storytelling 📖',
    'data and design 📊'
];

const typedTextElement = document.getElementById('typed-text');

// state variables for the typing effect
let phraseIndex = 0;     // which phrase we're currently on
let charIndex = 0;       // how many characters we've typed
let isDeleting = false;  // are we typing or deleting?

// timing constants (in milliseconds)
const TYPE_SPEED = 80;       // speed when typing forward
const DELETE_SPEED = 40;     // speed when deleting (faster than typing)
const PAUSE_AT_END = 2000;   // how long to wait at the end of a phrase
const PAUSE_BEFORE_NEXT = 500; // brief pause before typing next phrase

function typeAnimation() {
    // grab the phrase we're currently working on
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        // delete one character from the end
        typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // add one character at a time
        typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    // determine the speed for the next iteration
    let typeDelay = isDeleting ? DELETE_SPEED : TYPE_SPEED;

    // check if we've finished typing a full phrase
    if (!isDeleting && charIndex === currentPhrase.length) {
        // pause at the end before deleting
        typeDelay = PAUSE_AT_END;
        isDeleting = true;
    }
    // check if we've finished deleting
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        // move to the next phrase (wrap around at the end)
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeDelay = PAUSE_BEFORE_NEXT;
    }

    // schedule the next iteration
    setTimeout(typeAnimation, typeDelay);
}

// kick off the animation once the DOM is ready
if (typedTextElement) {
    // small delay before starting so it feels more natural after page load
    setTimeout(typeAnimation, 800);
}


// ============================================
// SMOOTH SCROLL FOR NAV LINKS
// (CSS scroll-behavior handles most of this,
// but this catches any edge cases)
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        // skip empty anchors
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});