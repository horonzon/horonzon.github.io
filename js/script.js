//burger

let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header-nav');
let menuLinks = menu.querySelectorAll('.header-nav__item-link');

burger.addEventListener('click',

    function() {

        burger.classList.toggle('burger-active');

        menu.classList.toggle('header-nav__active');

        document.body.classList.toggle('stop-scroll');
    })

menuLinks.forEach(function(el) {
    el.addEventListener('click', function() {

        burger.classList.remove('burger-active');

        menu.classList.remove('header__nav-active');

        document.body.classList.remove('stop-scroll');
    })
})

burger.addEventListener("click", () => {
    burger.classList.toggle("header__burger-open");
    let n = "true" === burger.getAttribute("aria-expanded");
    burger.setAttribute("aria-expanded", !n),
        n ?
        burger.setAttribute("aria-label", "Открыть меню") :
        burger.setAttribute("aria-label", "Закрыть меню");
});

// Поиск

function setSearch(params) {
    const openBtn = document.querySelector(`.${params.openBtnClass}`);
    const search = document.querySelector(`.${params.searchClass}`);
    const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

    search.addEventListener("animationend", function(evt) {
        if (this._isOpened) {
            this.classList.remove(params.activeClass);
            this.classList.remove(params.hiddenClass);
            this._isOpened = false;
        } else {
            this._isOpened = true;
        }
    });

    search.addEventListener('click', function(evt) {
        evt._isSearch = true;
    });

    openBtn.addEventListener("click", function(evt) {
        this.disabled = true;

        if (!search.classList.contains(params.activeClass) &&
            !search.classList.contains(params.hiddenClass)
        ) {
            search.classList.add(params.activeClass);
        }
    });

    closeBtn.addEventListener('click', function() {
        openBtn.disabled = false;
        search.classList.add(params.hiddenClass);
    });

    document.body.addEventListener('click', function(evt) {
        if (!evt._isSearch && search._isOpened) {
            openBtn.disabled = false;
            search.classList.add(params.hiddenClass);
        }
    });
}

setSearch({
    openBtnClass: "header__search-btn",
    closeBtnClass: "form__search-close",
    searchClass: "js-form",
    activeClass: "is-opened",
    hiddenClass: "is-closed"
});

//DROPDOWN

const param = {
    btnClassName: "js-header-dropdown-btn",
    dropClassName: "js-header-drop",
    activeClassName: "is-active",
    disabledClassName: "is-disabled"
};

function onDisable(evt) {
    if (evt.target.classList.contains(param.disabledClassName)) {
        evt.target.classList.remove(
            param.disabledClassName,
            param.activeClassName
        );
        evt.target.removeEventListener("animationend", onDisable);
    }
}

function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
        const activeElements = document.querySelectorAll(
            `.${param.btnClassName}.${param.activeClassName}, .${param.dropClassName}.${param.activeClassName}`
        );

        if (
            activeElements.length &&
            !evt.target.closest(`.${param.activeClassName}`)
        ) {
            activeElements.forEach((current) => {
                if (current.classList.contains(param.btnClassName)) {
                    current.classList.remove(param.activeClassName);
                } else {
                    current.classList.add(param.disabledClassName);
                }
            });
        }

        if (evt.target.closest(`.${param.btnClassName}`)) {
            const btn = evt.target.closest(`.${param.btnClassName}`);
            const path = btn.dataset.path;
            const drop = document.querySelector(
                `.${param.dropClassName}[data-target="${path}"]`
            );

            btn.classList.toggle(param.activeClassName);

            if (!drop.classList.contains(param.activeClassName)) {
                drop.classList.add(param.activeClassName);
                drop.addEventListener("animationend", onDisable);
            } else {
                drop.classList.add(param.disabledClassName);
            }
        }
    });
}

setMenuListener();



// Swiper Hero
const slider1 = document.querySelector('.hero__swiper');

const mySwiper1 = new Swiper(slider1, {
    slidesPerView: 1,
    spaceBetween: 10,
    speed: 2200,
    autoplay: {
        delay: 2000
    },
    effect: "fade",
    allowTouchMove: false,
    navigation: {
        nextEl: ".hero__swiper-button-next",
        prevEl: ".hero__swiper-button-prev"
    },
    pagination: {
        el: '.hero__swiper-bullet-pagination',
        type: 'bullets',
        clickable: true
    },
});

//Slider in Gallery

const slider2 = document.querySelector('.gallery__swiper');

let mySwiper2 = new Swiper(slider2, {

    slidesPerView: 3,
    slidesPerGroup: 3,
    grid: {
        rows: 1,
        fill: "row",
    },
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        clickable: true,
    },
    navigation: {
        nextEl: '.gallery__swiper-button-prev',
        prevEl: '.gallery__swiper-button-next'
    },
    a11y: false,
    keyboard: {
        enabled: true,
        onlyInViewport: true
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        474: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
        },
        960: {
            slidesPerView: 2,
            spaceBetween: 30,
            slidesPerGroup: 2,
        },
        1360: {
            slidesPerView: 3,
            spaceBetween: 45,
            slidesPerGroup: 3,
        },
    },
});

//Slider in Events
const slider3 = document.querySelector('.events__swiper');

let mySwiper3 = new Swiper(slider3, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 10,
    pagination: {
        el: ".events__swiper-pagination",
        clickable: 'true',
    },
    navigation: {
        nextEl: ".events__button-next",
        prevEl: ".events__button-prev"
    },
    a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
    },

    breakpoints: {
        500: {
            slidesPerView: 1,
            spaceBetween: 31,
            slidesPerGroup: 1,
        },
        700: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2,
        },
        1012: {
            slidesPerView: 3,
            spaceBetween: 30,
            slidesPerGroup: 3,
        },
        1360: {
            slidesPerView: 3,
            spaceBetween: 50,
        },
    },
});

// Slider in Projects
const slider4 = document.querySelector('.projects__swiper');

let mySwiper4 = new Swiper(slider4, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 50,
    navigation: {
        nextEl: ".projects__button-next",
        prevEl: ".projects__button-prev"
    },
    a11y: {
        prevSlideMessage: 'Предыдущий слайд',
        nextSlideMessage: 'Следующий слайд',
    },
    breakpoints: {
        100: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },

        668: {
            slidesPerView: 2,
            spaceBetween: 34,
            slidesPerGroup: 2
        },

        960: {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },

        1360: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 50,
        },
    },
});

// Catalog-Accordion-Tabs

(() => {
    new Accordion(".js-accordion-container", {
        openOnInit: [0]
    });
})();

const params = {
    tabsClass: "js-tab-btn",
    wrap: "js-tabs-wrap",
    content: "js-tab-content",
    active: "active"
};

function setTabs(params) {
    const tabBtns = document.querySelectorAll(`.${params.tabsClass}`);

    function onTabClick(e) {
        e.preventDefault();
        const path = this.dataset.path;
        const wrap = this.closest(`.${params.wrap}`);
        const currentContent = wrap.querySelector(`.${params.content}[data-target="${path}"]`);
        const contents = wrap.querySelectorAll(`.${params.content}`);

        contents.forEach((el) => {
            el.classList.remove(params.active);
        });

        currentContent.classList.add(params.active);

        tabBtns.forEach((el) => {
            el.classList.remove(params.active);
        });

        this.classList.add(params.active);
    }

    tabBtns.forEach(function(el) {
        el.addEventListener("click", onTabClick);
    });
}

setTabs(params);


document.addEventListener('DOMContentLoaded', function() {
        document.querySelectorAll('.accordion__painter-link').forEach(function(tabsBtn) {
            tabsBtn.addEventListener('click', function(event) {
                const path = event.currentTarget.dataset.path

                document.querySelectorAll('.pointer-content').forEach(function(tabContent) {
                    tabContent.classList.remove('pointer-content--active')
                })
                document.querySelector(`[data-target="${path}"]`).classList.add('pointer-content--active')
            })
        })
    })
    // Validate-Mask

const form = document.querySelector('.feedback__form');
const telSelector = document.querySelector("input[type='tel']");
const im = new Inputmask("+7 (999)-999-99-99");

im.mask(telSelector);

const validation = new JustValidate('.feedback__form', {
    errorLabelStyle: {
        color: '#D11616',
    },

})
validation.addField('.input-name', [{
        rule: 'required',
        errorMessage: 'Введите имя',
    },
    {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Не короче 3 символов!',
    },
    {
        rule: 'customRegexp',
        value: /^[A-ZА-ЯЁ]+$/i,
        errorMessage: 'Только буквы!',
    },
    {
        rule: 'maxLength',
        value: 18,
        errorMessage: 'Не боллее 18 символов!',
    },
]).addField('.input-tel', [{
        rule: 'required',
        errorMessage: 'Введите телефон',
    },
    {
        validator: (value) => {
            const phone = telSelector.inputmask.unmaskedvalue()
            console.log(phone)
            return phone.length === 10;
        },
        errorMessage: 'Телефон не корректный!',
    },
]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                console.log('Отправлено');
            }
        }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
    alert('Заявка принята! Мы обязательно Вам перезвоним.');
});

// Карта

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.75846806898367, 37.60108849999989],
        zoom: 14.31,
        controls: ['geolocationControl', 'zoomControl']
    }, {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition: { top: "347px", right: "10px" },
        geolocationControlFloat: 'none',
        zoomControlSize: "small",
        zoomControlFloat: "none",
        zoomControlPosition: { top: "270px", right: "10px" }
    });

    myMap.behaviors.disable(['scrollZoom']);

    var myPlacemark = new ymaps.Placemark([55.758462909955064, 37.60118486185032], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/map-marker/marker.svg',
        iconImageSize: [20, 20],
        iconImageOffset: [-3, -42]
    });
    myMap.geoObjects.add(myPlacemark);

};

// CHOICES

const element = document.querySelector('.filter-gallery-select');
const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: false,
    shouldSort: false,
    position: 'bottom',
});

// SCROLL

(() => {

    function scrollToContent(link, isMobile) {
        if (isMobile && window.getWindowWidth() > window.MOBILE_WIDTH) {
            return;
        }

        const href = link.getAttribute('href').substring(1);

        if (Boolean(href)) {
            const scrollTarget = document.getElementById(href);
            const elementPosition = scrollTarget.getBoundingClientRect().top;

            window.scrollBy({
                top: elementPosition,
                behavior: 'smooth'
            });
        }

    }

    document.querySelectorAll('.js-scroll-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();

            scrollToContent(this, false);
        });
    });
})();

// Tolltip

tippy.setDefaultProps({
    trigger: 'click'
});

tippy('#tooltip-1', {
    content: 'Пример современных тенденций - современныя методология разработки',
});

tippy('#tooltip-2', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитике выводы вызывают у вас эмоции',
});

tippy('#tooltip-3', {
    content: 'В стремлении повысить качество',
});


// MODAL

class Modal {
    constructor(options) {
        let defaultOptions = {
            isOpen: () => {},
            isClose: () => {},
        }
        this.options = Object.assign(defaultOptions, options);
        this.modal = document.querySelector('.modal');
        this.speed = false;
        this.animation = false;
        this.isOpen = false;
        this.modalContainer = false;
        this.previousActiveElement = false;
        this.fixBlocks = document.querySelectorAll('.fix-block');
        this.focusElements = [
            'a[href]',
            'input',
            'button',
            'select',
            'textarea',
            '[tabindex]'
        ];
        this.events();
    }

    events() {
        if (this.modal) {
            document.addEventListener('click', function(e) {
                const clickedElement = e.target.closest('.gallery-slide');
                if (clickedElement) {
                    let target = clickedElement.dataset.path;
                    let animation = clickedElement.dataset.animation;
                    let speed = clickedElement.dataset.speed;
                    this.animation = animation ? animation : 'fade';
                    this.speed = speed ? parseInt(speed) : 300;
                    this.modalContainer = document.querySelector(`[data-target="${target}"]`);
                    this.open();
                    return;
                }

                if (e.target.closest('.modal-close')) {
                    this.close();
                    return;
                }
            }.bind(this));

            window.addEventListener('keydown', function(e) {
                if (e.keyCode == 27) {
                    if (this.isOpen) {
                        this.close();
                    }
                }

                if (e.keyCode == 9 && this.isOpen) {
                    this.focusCatch(e);
                    return;
                }

            }.bind(this));

            this.modal.addEventListener('click', function(e) {
                if (!e.target.classList.contains('modal__container') && !e.target.closest('.modal__container') && this.isOpen) {
                    this.close();
                }
            }.bind(this));
        }
    }

    open() {
        this.previousActiveElement = document.activeElement;

        this.modal.style.setProperty('--transition-modal-time', `${this.speed / 1000}s`);
        this.modal.classList.add('is-open--modal');
        this.disableScroll();

        this.modalContainer.classList.add('modal-open');
        this.modalContainer.classList.add(this.animation);

        setTimeout(() => {
            this.modalContainer.classList.add('animate-open');
            this.options.isOpen(this);
            this.isOpen = true;
            this.focusTrap();
        }, this.speed);
    }

    close() {
        if (this.modalContainer) {
            this.modalContainer.classList.remove('animate-open');
            this.modalContainer.classList.remove(this.animation);
            this.modal.classList.remove('is-open--modal');
            this.modalContainer.classList.remove('modal-open');

            this.enableScroll();
            this.options.isClose(this);
            this.isOpen = false;
            this.focusTrap();
        }
    }

    focusCatch(e) {
        const focusable = this.modalContainer.querySelectorAll(this.focusElements);
        const focusArray = Array.prototype.slice.call(focusable);
        const focusedIndex = focusArray.indexOf(document.activeElement);

        if (e.shiftKey && focusedIndex === 0) {
            focusArray[focusArray.length - 1].focus();
            e.preventDefault();
        }

        if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
            focusArray[0].focus();
            e.preventDefault();
        }
    }

    focusTrap() {
        const focusable = this.modalContainer.querySelectorAll(this.focusElements);
        if (this.isOpen) {
            focusable[0].focus();
        } else {
            this.previousActiveElement.focus();
        }
    }

    disableScroll() {
        let pagePosition = window.scrollY;
        this.lockPadding();
        document.body.classList.add('disable-scroll');
        document.body.dataset.position = pagePosition;
        document.body.style.top = -pagePosition + 'px';
    }

    enableScroll() {
        let pagePosition = parseInt(document.body.dataset.position, 10);
        this.unlockPadding();
        document.body.style.top = 'auto';
        document.body.classList.remove('disable-scroll');
        window.scroll({ top: pagePosition, left: 0 });
        document.body.removeAttribute('data-position');
    }

    lockPadding() {
        let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
        this.fixBlocks.forEach((el) => {
            el.style.paddingRight = paddingOffset;
        });
        document.body.style.paddingRight = paddingOffset;
    }

    unlockPadding() {
        this.fixBlocks.forEach((el) => {
            el.style.paddingRight = '0px';
        });
        document.body.style.paddingRight = '0px';
    }
}

const modal = new Modal({
    isOpen: (modal) => {
        console.log(modal);
        console.log('opened');
    },
    isClose: () => {
        console.log('closed');
    },
});
