var Mswiper = new Swiper("#may", {
	slidesPerView: 1,
	navigation: {
		nextEl: ".Mnext",
		prevEl: ".Mprev", 
	},
});

var Aswiper = new Swiper("#april", {
	slidesPerView: 1,
	navigation: {
		nextEl: ".Anext",
		prevEl: ".Aprev", 
	},
});

var Oswiper = new Swiper("#old", {
	slidesPerView: 1,
	navigation: {
		nextEl: ".Onext",
		prevEl: ".Oprev", 
	},
});

var Rswiper = new Swiper("#rain", {
	slidesPerView: 1,
	navigation: {
		nextEl: ".Rnext",
		prevEl: ".Rprev", 
	},
});

var Gswiper = new Swiper("#goldlist", {
	// loop: true,
	slidesPerView: 1,
	navigation: {
		nextEl: ".Gnext",
		prevEl: ".Gprev", 
	},
});

var Bswiper = new Swiper("#banner", {
	loop: true,
	slidesPerView: 1,
	autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
});
// 滑鼠滑入後停止輪播
$("#banner").mouseenter(function () {
	Bswiper.autoplay.stop();
});
$("#banner").mouseleave(function () {
	Bswiper.autoplay.start();
});

