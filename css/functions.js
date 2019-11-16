var	 SITE = document.querySelector('.site');
var TRIGGER = document.querySelector('.trigger');
var REVEAL = document.querySelector('.main-nav');
var MENUITEMS = REVEAL.querySelectorAll('nav a');
var MENUARRAY = Array.apply(null, MENUITEMS);
var screenReaderText = document.querySelector('.trigger .screen-reader-text');

// Toggle reveal class on body element, set aria-expanded and screen reader text on TRIGGER:
function revealMenu() {
	"use strict";
	SITE.classList.toggle('reveal');
     if (TRIGGER.getAttribute('aria-expanded') === 'false' ? TRIGGER.setAttribute('aria-expanded', true) : TRIGGER.setAttribute('aria-expanded', false)){
	revealMenu();
		 if (screenReaderText.innerHTML === 'Reveal menu' ? screenReaderText.innerHTML = 'Hide menu' : screenReaderText.innerHTML = 'Reveal menu'){
		revealMenu();
		 }
	 }
}
	
	
// Hide nav area when focus shifts away:
function catchFocus() {
"use strict";
	if ( TRIGGER.getAttribute('aria-expanded') === 'true' && !( MENUARRAY.includes(document.activeElement) || document.activeElement === TRIGGER ) ) {
		revealMenu();
	} else {
		return;
	}
}

// Hide nav area when touch or click happens elsewhere:
function clickTarget(e) {
	"use strict";
	if ( TRIGGER.getAttribute('aria-expanded') === 'true' && !REVEAL.contains(e.target) ) {
		revealMenu();
	}
}


// Liten for clicks on TRIGGER button:
TRIGGER.addEventListener('click', revealMenu, false);

// Listen for focus changes:
SITE.addEventListener('focusin', catchFocus, true);

// Listen for clicks:
SITE.addEventListener('click', function(e) { 
	"use strict";
	clickTarget(e); }, true);

