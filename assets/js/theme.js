// OVERLAYS

//Video Overlays

function historiaOn() {
	document.getElementById("overlay-historia").style.display = "block";
}

function historiaOff() {
	document.getElementById("overlay-historia").style.display = "none";
	videoHistoria.pause();
	videoHistoria.currentTime = 0;
}

function testimoniosOn() {
	document.getElementById("overlay-testimonios").style.display = "block";
}

function testimoniosOff() {
	document.getElementById("overlay-testimonios").style.display = "none";
	videoHistoria.pause();
	videoHistoria.currentTime = 0;
}

function alianzasOn() {
	document.getElementById("overlay-alianzas").style.display = "block";
}

function alianzasOff() {
	document.getElementById("overlay-alianzas").style.display = "none";
	video.pause();
	video.currentTime = 0;
}

function equipoOn() {
	document.getElementById("overlay-equipo").style.display = "block";
}

function equipoOff() {
	document.getElementById("overlay-equipo").style.display = "none";
}

function certificadoOn() {
	document.getElementById("overlay-certificado").style.display = "block";
}

function certificadoOff() {
	document.getElementById("overlay-certificado").style.display = "none";
}

function politicaOn() {
	document.getElementById("overlay-politica").style.display = "block";
}

function politicaOff() {
	document.getElementById("overlay-politica").style.display = "none";
}

function pfizerOn() {
	document.getElementById("overlay-pfizer").style.display = "block";
}

function pfizerOff() {
	document.getElementById("overlay-pfizer").style.display = "none";
}

function gbaCEIOn() {
	document.getElementById("overlay-gbaCEI").style.display = "block";
}

function gbaCEIOff() {
	document.getElementById("overlay-gbaCEI").style.display = "none";
}

// LINKS
function nosotros() {
	location.href = "nosotros.html";
}
function especialidades() {
	location.href = "especialidades.html";
}

function calidad() {
	location.href = "calidad.html";
}

function comite() {
	location.href = "comiteEtica.html";
}

function ensayos() {
	location.href = "ensayos.html";
}

function testimonio() {
	location.href = "testimonio.html";
}

function consultorios() {
	location.href = "consultorios-externos.html";
}

function obrasSociales() {
	location.href = "obras-sociales.html";
}

function estudios() {
	location.href = "estudios.html";
}

function ooss() {
	location.href = "ooss.html";
}

(function ($) {

	// ===============================================
	//'use strict';
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
		loadingInner: '', // e.g '<img src="assets/media/loading.svg" />'
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
			// sMenuClose.classList.remove("off");
			// if (sMenuOn.checked) {
			// 	sMenuOn.checked = false;
			// 	sMenuBtn.classList.remove("off");
			// }
			if (elNosotros) elNosotros.classList.add("semi");
			if (elEspecialidades) elEspecialidades.classList.add("semi");
			if (elSponsors) elSponsors.classList.add("semi");
			if (elTestimonio) elTestimonio.classList.add("semi");
			if (elMetabolismo) elMetabolismo.classList.add("semi");
			if (elCalidad) elCalidad.classList.add("semi");
			if (elEssentia) elEssentia.classList.add("semi");
			if (elEnsayos) elEnsayos.classList.add("semi");


		} else {
			$('.scrolltotop').fadeOut();
			// sMenuClose.classList.add("off");
			// if (!sMenuOn.checked) {
			// 	sMenuOn.checked = true;
			// 	sMenuBtn.classList.add("off");
			// }
			if (elNosotros) elNosotros.classList.remove("semi");
			if (elEspecialidades) elEspecialidades.classList.remove("semi");
			if (elSponsors) elSponsors.classList.remove("semi");
			if (elTestimonio) elTestimonio.classList.remove("semi");
			if (elMetabolismo) elMetabolismo.classList.remove("semi");
			if (elCalidad) elCalidad.classList.remove("semi");
			if (elEssentia) elEssentia.classList.remove("semi");
			if (elEnsayos) elEnsayos.classList.remove("semi");
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
	const elSponsors = document.getElementById("sponsors");
	const elTestimonio = document.getElementById("testimonio");
	const elMetabolismo = document.getElementById("metabolismo");
	const elCalidad = document.getElementById("calidad");
	const elEssentia = document.getElementById("essentia");
	const elEnsayos = document.getElementById("ensayos");

	// const video = document.querySelector("#videoAlianzas");
	// const videoHistoria = document.querySelector("#videoHistoria");
	// const videoTestimonios = document.querySelector("#videoTestimonios");

	if (sMenuBtn) {
		sMenuBtn.addEventListener('click', () => {
			sMenuBtn.classList.add("off");
			sMenuClose.classList.remove("off");
		});

		document.getElementById("equis").addEventListener('click', () => {
			sMenuBtn.classList.remove("off");
		});

		sMenuClose.classList.add("off");
		sMenuBtn.classList.add("on");
		sMenuOn.checked = false;
	}

	//////
	// menu overlay
	if (window.outerWidth < 1024) {
		document.querySelectorAll('.ov-item.expand').forEach(el => {
			const a = el.querySelector('a');
			const ul = el.querySelector('ul');
			console.log('trapped> ', el);
			a.addEventListener('click', (evnt) => {
				console.log('clicked> ', el);
				evnt.preventDefault();

				document.querySelectorAll('.ov-item.expand>ul.show').forEach(_ => {
					_.classList.remove('show');
				})
				ul.classList.add('show');
			});
		})
		document.getElementById("equis").addEventListener('click', () => { });
	} else {
		document.querySelectorAll('.ov-item.expand>ul').forEach(_ => {
			_.classList.add('show');
		})
	}


})(jQuery); 