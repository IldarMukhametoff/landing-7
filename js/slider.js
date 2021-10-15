new Swiper('.slider',{
	navigation: {
		nextEl:'.swiper-button-next',
		prevEl:'.swiper-button-prev'
	},
	loop:true,
	slidesPerView:3,
	breakpoints:{
		280:{
			slidesPerView:1
		},
		640:{
			slidesPerView:2
		},
		1024:{
			slidesPerView:3
		}
	}
});
