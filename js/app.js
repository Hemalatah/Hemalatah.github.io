$(document).ready(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB0QdU0pCV8P9HFgp1mrOYSwLo-hrw6u3w",
    authDomain: "myportfolio-317ce.firebaseapp.com",
    databaseURL: "https://myportfolio-317ce.firebaseio.com",
    storageBucket: "myportfolio-317ce.appspot.com"
  };
  firebase.initializeApp(config);
/* smooth scrolling effect */
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();
	    var target = this.hash;
	    var $target = $(target);
	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	(function() {
	  'use strict';
	  // define variables
	  var items = document.querySelectorAll(".timeline li");
	  // check if an element is in viewport 
	  function isElementInViewport(el) {
	    var rect = el.getBoundingClientRect();
	    return (
	      rect.top >= 0 &&
	      rect.left >= 0 &&
	      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	    );
	  }
	  function callbackFunc() {
	    for (var i = 0; i < items.length; i++) {
	      if (isElementInViewport(items[i])) {
	        items[i].classList.add("in-view");
	      }
	    }
	  }
	  // listen for events
	  window.addEventListener("load", callbackFunc);
	  window.addEventListener("resize", callbackFunc);
	  window.addEventListener("scroll", callbackFunc);
	})();
})
