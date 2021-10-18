
const animItems =document.querySelectorAll('.anim-items');

if(animItems.length > 0) {
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll() {
		for(let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;
			if(animItemHeight>window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight/animStart;
			}

			if((pageYOffset > animItemOffset-animItemPoint) && pageYOffset<(animItemOffset+animItemHeight)){
				animItem.classList.add('active');
			}else{
				animItem.classList.remove('active');
			}
		}
	}
	function offset(el){
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return{ top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(()=>{
		animOnScroll();
	},300);
}
window.addEventListener('scroll', blackMenu);
function blackMenu(){
	if(pageYOffset>0){
		document.querySelector('.header').style.background='#000';
		if(window.innerWidth > 850){
			const links=document.querySelectorAll('.header__link');
			for(let index = 0; index < links.length; index++){
				const link = links[index];
				link.style.color='#fff';
				link.classList.add('active');
			}
		}else{
			const links=document.querySelectorAll('.header__link');
			for(let index = 0; index < links.length; index++){
				const link = links[index];
				link.style.color='#fff';
			}
		}
		document.querySelector('.header__logo').style.color='#fff';
	} else{
		document.querySelector('.header').style.background='transparent';
		document.querySelector('.header__logo').style.color='#000';
		if(window.innerWidth > 850){
			const links=document.querySelectorAll('.header__link');
			for(let index = 0; index < links.length; index++){
				const link = links[index];
				link.style.color='#000';
				link.classList.remove('active');
			}
		}else{
			const links=document.querySelectorAll('.header__link');
			for(let index = 0; index < links.length; index++){
				const link = links[index];
				link.style.color='#fff';
			}
		}
	}
}

const scrollDownBtn = document.querySelector('.main-block__scroll');
if(scrollDownBtn){
	scrollDownBtn.addEventListener("click", function(e){
		window.scrollTo({
			top:document.querySelector('.main-block').offsetHeight-document.querySelector('.header').offsetHeight,
			behavior: "smooth"
		})
		e.preventDefault();
	});
}