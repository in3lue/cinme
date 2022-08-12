
function historiaOn() {
	document.getElementById("overlay-historia").style.display = "block";
}

function historiaOff() {
	document.getElementById("overlay-historia").style.display = "none";
}
function estudiosOn() {
	document.getElementById("overlay-estudios").style.display = "block";
}

function estudiosOff() {
	document.getElementById("overlay-estudios").style.display = "none";
}
function consultoriosOn() {
	document.getElementById("overlay-consultorios").style.display = "block";
}

function consultoriosOff() {
	document.getElementById("overlay-consultorios").style.display = "none";
}
function nosotros() {
	location.href = "nosotros.html";
}

function especialidades() {
	location.href = "especialidades.html";
}

function hci() {
	location.href = "research.html";
}

function calidad() {
	location.href = "calidad.html";
}

function comite() {
	location.href = "comiteEtica.html";
}

(function ($) {
	'use strict';

	// ===============================================
	// Page transitions / preloader (Animsition)
	// More info: http://git.blivesta.com/animsition/
	// ===============================================

	$(".animsition").animsition({
		inClass: 'fade-in',
		outClass: 'fade-out',
		inDuration: 800,
		outDuration: 500,
		// linkElement:   '.animsition-link',
		linkElement: 'a:not([target="_blank"]):not([href^="#"]):not([class*="lg-trigger"])', // e.g. linkElement: 'a:not([target="_blank"]):not([href^="#"])'
		loading: true,
		loadingParentElement: 'html', //animsition wrapper element
		loadingClass: 'animsition-loading',
		loadingInner: '', // e.g '<img src="assets/img/loading.svg" />'
		timeout: true,
		timeoutCountdown: 4000,
		onLoadEvent: true,
		browser: ['animation-duration', '-webkit-animation-duration', '-o-animation-duration'], // "browser" option allows you to disable the "animsition" in case the css property in the array is not supported by your browser. The default setting is to disable the "animsition" in a browser that does not support "animation-duration".

		overlay: false,
		overlayClass: 'animsition-overlay-slide',
		overlayParentElement: 'html',
		transition: function (url) { window.location.href = url; }
	});



	// =======================================================================================
	// Defer videos (Youtube, Vimeo)
	// Note: When you have embed videos in your webpages it causes your page to load slower.
	// Deffering will allow your page to load quickly.
	// Source: https://www.feedthebot.com/pagespeed/defer-videos.html
	// =======================================================================================

	function init() {
		var vidDefer = document.getElementsByTagName('iframe');
		for (var i = 0; i < vidDefer.length; i++) {
			if (vidDefer[i].getAttribute('data-src')) {
				vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
			}
		}
	}
	window.onload = init;



	// =======================================================
	// YTPlayer (Background Youtube video)
	// Source: https://github.com/pupunzi/jquery.mb.YTPlayer
	// =======================================================

	$(".youtube-bg").mb_YTPlayer();



	// ==================================
	// Fade out element with page scroll
	// ==================================

	$(window).scroll(function () {
		$(".fade-out-scroll-1").css("opacity", 1 - $(window).scrollTop() / 150);
		$(".fade-out-scroll-2").css("opacity", 1 - $(window).scrollTop() / 250);
		$(".fade-out-scroll-3").css("opacity", 1 - $(window).scrollTop() / 350);
		$(".fade-out-scroll-4").css("opacity", 1 - $(window).scrollTop() / 450);
		$(".fade-out-scroll-5").css("opacity", 1 - $(window).scrollTop() / 550);
		$(".fade-out-scroll-6").css("opacity", 1 - $(window).scrollTop() / 650);
		$(".fade-out-scroll-7").css("opacity", 1 - $(window).scrollTop() / 750);
		$(".fade-out-scroll-8").css("opacity", 1 - $(window).scrollTop() / 850);
	});


	// ======================
	// Scroll to top button
	// ======================

	// Check to see if the window is top if not then display button
	$(window).scroll(function () {

		if ($(this).scrollTop() > 10) {
			$('.scrolltotop').fadeIn();
			sMenuClose.classList.remove("off");
			if (sMenuOn.checked) {
				sMenuOn.checked = false;
				sMenuBtn.classList.remove("off");
			}
			if (elNosotros) elNosotros.classList.add("semi");
			if (elEspecialidades) elEspecialidades.classList.add("semi");
			if (elMetabolismo) elMetabolismo.classList.add("semi");


		} else {
			$('.scrolltotop').fadeOut();
			sMenuClose.classList.add("off");
			if (!sMenuOn.checked) {
				sMenuOn.checked = true;
				sMenuBtn.classList.add("off");
			}
			if (elNosotros) elNosotros.classList.remove("semi");
			if (elEspecialidades) elEspecialidades.classList.remove("semi");
			if (elMetabolismo) elMetabolismo.classList.remove("semi");
		}
	});


	// ===============
	// Menu
	// ===============
	const sMenuBtn = document.getElementById("burguer");
	const sMenuOn = document.getElementById("btn-menu");
	const sMenuClose = document.querySelector(".cont-menu .icon-close");
	const elNosotros = document.getElementById("nosotros");
	const elEspecialidades = document.getElementById("especialidades");
	const elMetabolismo = document.getElementById("metabolismo");

	sMenuBtn.addEventListener('click', () => {
		sMenuBtn.classList.add("off");
	});

	document.getElementById("equis").addEventListener('click', () => {
		sMenuBtn.classList.remove("off");
	});

	sMenuClose.classList.add("off");
	sMenuBtn.classList.add("off");

})(jQuery); 