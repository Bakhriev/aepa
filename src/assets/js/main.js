const burgerMenu = () => {
	const burger = document.querySelector('.burger')
	const navigation = document.querySelector('.header__navigation')
	const overlay = document.querySelector('.overlay')
	const elements = [burger, navigation, overlay]

	const toggleActiveClass = () =>
		elements.forEach(element => element.classList.toggle('active'))

	burger.addEventListener('click', toggleActiveClass)

	overlay.addEventListener('click', toggleActiveClass)

	window.addEventListener('resize', () => {
		const {innerWidth} = window
		if (innerWidth > 991.98) {
			elements.forEach(element => element.classList.remove('active'))
		}
	})
}

burgerMenu()

const dropdownInit = () => {
	const allDropdowns = document.querySelectorAll('[data-dropdown]')

	if (window.innerWidth > 992.98) {
		document.addEventListener('click', e => {
			let currentDropdown
			if (e.target.closest('[data-dropdown]')) {
				currentDropdown = e.target.closest('[data-dropdown]')
				currentDropdown.classList.toggle('active')
			}

			document.querySelectorAll('[data-dropdown].active').forEach(dropdown => {
				if (dropdown === currentDropdown) return
				dropdown.classList.remove('active')
			})
		})
		allDropdowns.forEach(d => {
			d.addEventListener('mouseover', () => {
				d.classList.add('active')
			})
			d.addEventListener('mouseleave', () => {
				d.classList.remove('active')
			})
		})
	} else {
		allDropdowns.forEach(drp => {
			drp.addEventListener('click', () => {
				const subMenu = drp.querySelector('.sub-menu')
				if (!subMenu.style.maxHeight) {
					const allSubMenus = document.querySelectorAll('.sub-menu')
					allSubMenus.forEach(sub => {
						sub.style.maxHeight = ''
					})
					subMenu.style.maxHeight = subMenu.scrollHeight + 'px'
				} else {
					subMenu.style.maxHeight = ''
				}
			})
		})
	}
}
dropdownInit()

const swiper = new Swiper('.feedback__swiper', {
	pagination: {
		el: '.swiper-pagination',
	},
	navigation: {
		nextEl: '.next-arrow',
		prevEl: '.prev-arrow',
	},
	// Responsive breakpoints
	breakpoints: {
		// when window width is >= 320px
		800: {
			slidesPerView: 1,
			spaceBetween: 50,
		},
		// when window width is >= 480px
		900: {
			slidesPerView: 2,
			spaceBetween: 0,
		},
		// when window width is >= 640px
		1200: {
			slidesPerView: 3,
			spaceBetween: 18,
		},
	},
})
