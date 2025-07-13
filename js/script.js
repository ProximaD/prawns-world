const navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close')

        /*SHOW MENU*/
        if(navToggle) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.add('show-menu')
            })
        }

        /*HIDE MENU*/
        if (navClose) {
            navClose.addEventListener('click', () => {
                navMenu.classList.remove('show-menu')
            })
        }

        /*REMOVE MOBILE MENU*/
        const navLink = document.querySelectorAll('.nav__link')
        const linkAction = () => {
            const navMenu = document.getElementById('nav-menu')

            //When we click on each nav__link, we remove the show-menu
            navMenu.classList.remove('show-menu')
        }

        navLink.forEach(n => n.addEventListener('click', linkAction))
        
        /*CHANGE BACKGROUND HEADER*/
        const scrollHeader = () => {
            const header = document.getElementById('header')
            if (this.scrollY >= 50) header.classList.add('scroll-header')
            else header.classList.remove('scroll-header')
        }
        window.addEventListener('scroll', scrollHeader)

        /*SWIPER MENU*/
        const swiper = new Swiper('.swiper', {
            slidesPerView: 1,
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        })


/*=============== INITIALIZE SWIPER JS ===============*/
const menuSwiper = new Swiper('.menu__swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: '.menu-swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.menu-swiper-button-next',
        prevEl: '.menu-swiper-button-prev',
    },
    breakpoints: {
        700: {
            slidesPerView: 2,
        },
        1150: {
            slidesPerView: 3,
        }
    }
});