//* index.html script 
//* contains some methods for creating dynamic html tags
//* and some eventlisteners for scrolling and carousel moves 

//* the initializer method for the index file 
//* in this method we create some carousels and category icons   
// const skeletonimage = 'had.jpg'
const data = {

    bartarin: [

        {
            title: 'سروش',
            src: "./assets/images/ba1.jpeg",
        },

        {
            title: 'سروش',
            src: "./assets/images/ba2.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/ba3.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/ba4.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/ba5.png",
        },

        {
            title: 'سروش',
            src: "./assets/images/ba6.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/ba7.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/ba8.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/ba9.jpeg",
        },

    ],
    porfrosh: [
        {
            title: 'سروش',
            src: "./assets/images/po.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/po1.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/po2.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/po3.jfif",
        },
        {
            title: 'سروش',
            src: "./assets/images/po4.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/po5.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/po6.jfif",
        },
        {
            title: 'سروش',
            src: "./assets/images/po7.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/po8.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/po9.jpeg",
        },

    ],
    labkhandane: [
        {
            title: 'سروش',
            src: "./assets/images/lab1.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/lab2.jfif",
        },
        {
            title: 'سروش',
            src: "./assets/images/lab3.jfif",
        },
        {
            title: 'سروش',
            src: "./assets/images/lab4.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/lab5.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/lab6.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/lab7.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/lab8.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/lab9.jpeg",
        },

    ],
    sabkzendegi: [
        {
            title: 'سروش',
            src: "./assets/images/sab1.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/sab2.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/sab3.jfif",
        },
        {
            title: 'سروش',
            src: "./assets/images/sab4.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/sab5.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/sab6.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/sab7.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/sab8.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/sab9.jpeg",
        },
    ],
    akhbar: [
        {
            title: 'سروش',
            src: "./assets/images/akh1.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/akh2.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/akh3.jfif",
        },
        {
            title: 'سروش',
            src: "./assets/images/akh4.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/akh5.jfif",
        },
        {
            title: 'سروش',
            src: "./assets/images/akh6.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/akh7.jfif",
        },
        {
            title: 'سروش',
            src: "./assets/images/akh8.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/akh9.jpeg",
        },
    ],
    mazhabi: [
        {
            title: 'سروش',
            src: "./assets/images/m1.jfif",
        },
        {
            title: 'سروش',
            src: "./assets/images/m2.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/m3.jfif",
        },
        {
            title: 'سروش',
            src: "./assets/images/m4.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/m5.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/m6.jfif",
        },
        {
            title: 'سروش',
            src: "./assets/images/m7.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/m8.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/m9.jpeg",
        },
    ],
    tabliq: [
        {
            title: 'سروش',
            src: "./assets/images/ta1.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/ta2.jfif",
        },
        {
            title: 'سروش',
            src: "./assets/images/ta3.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/ta4.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/ta5.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/ta6.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/ta7.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/ta8.jpeg",
        },
        {
            title: 'سروش',
            src: "./assets/images/ta9.jpeg",
        },
    ],
    soroush: [
        {
            title: 'سروش',
            src: "./assets/images/sp1.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/sp2.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/sp3.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/sp4.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/sp5.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/sp6.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/sp7.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/sp8.png",
        },
        {
            title: 'سروش',
            src: "./assets/images/sp9.png",
        },
    ],

}
document.addEventListener("DOMContentLoaded", function () {
    //TODO  to add the big icons 
    //* this method will add categories cards to the div with id  cardContainer  
    function addCard() {
        const cardContainer = document.getElementById('CatsContainer')
        const Icons = [
            {
                title: "بازی و تفریح",
                src: "./assets/images/bazi.png",
            },
            {
                title: "پخش تلویزیون",
                src: "./assets/images/pakhsh.png",
            },
            {
                title: "انیمیشن",
                src: "./assets/images/tv.png",
            },
            {
                title: "مذهبی",
                src: "./assets/images/mazhabi.png",
            },
            {
                title: "سبک زندگی",
                src: "./assets/images/sabk.png",
            },
            {
                title: "زنگ مدرسه",
                src: "./assets/images/zang.png",
            },
            {
                title: "اخبار",
                src: "./assets/images/news.png",
            },
            {
                title: "کودکانه",
                src: "./assets/images/kodak.png",
            },]
        for (let cats in Icons) {
            const link = document.createElement("a");
            link.href = "#";
            link.className = "iconscarda";
            const cardDiv = document.createElement("div");
            const imageDiv = document.createElement("div");
            const image = document.createElement("img");
            image.setAttribute('data-src', Icons[cats].src)
            image.classList.add('animate-skeleton-loading', 'bg-skeleton')
            image.alt = "";
            image.classList.add('iconcardimg')
            imageDiv.appendChild(image);

            const textDiv = document.createElement("div");
            textDiv.className = "text-center";
            textDiv.textContent = Icons[cats].title;

            // Build the structure
            cardDiv.appendChild(imageDiv);
            cardDiv.appendChild(textDiv);
            link.appendChild(cardDiv);

            // Add the card to the container
            cardContainer.appendChild(link
            );
        }
    }
    //* use the add card method  
    addCard();
    // * create slide and carousel and the append it to element 
    function createSlideElement(element) {
        const slide = document.createElement("div");
        slide.classList.add("slide", "flex", "justify-center", "items-center",
            // "w-full", 
            "pl-[2.95rem]",
            "pr-[2.5rem]",
            // 'py-10',
            'h-fit',
            'pt-[8%]',

        );

        const link = document.createElement("a");
        link.setAttribute("href", "");
        link.classList.add("absolute", "border-zinc-700");

        const slideContent = document.createElement("div");
        slideContent.classList.add("flex", "h-fit", "bg-white");

        const logoContainer = document.createElement("div");

        const logoImage = document.createElement("img");
        // logoImage.setAttribute("src", skeletonimage);
        logoImage.setAttribute("data-src", element.src);
        logoImage.classList.add('px-[1px]', 'animate-skeleton-loading', 'bg-skeleton', 'rounded-full','w-[100%]','itesm')
        // logoImage.setAttribute("style", "width: 100%; height: 75px; ");
        logoImage.setAttribute("alt", "");

        const logoText = document.createElement("div");
        logoText.classList.add("text-center", "pb-[5px]", "text-sm");
        logoText.textContent = element.title;

        logoContainer.appendChild(logoImage);
        logoContainer.appendChild(logoText);
        slideContent.appendChild(logoContainer);
        link.appendChild(slideContent);
        slide.appendChild(link);

        return slide;
    }

    // * add the createded slide to the carousel
    function addSlideToCarousel(carousel, cards) {
        let slidesize;
        cards.forEach(element => {
            const newSlide = createSlideElement(element);
            slidesize=newSlide
            carousel.appendChild(newSlide);
        });
        return slidesize;

    }
    // * add the carousel to the div with elementID
    function createCarousel(elementID) {
        const element = document.getElementById(elementID)
        //* create header section for slider
        const carouseltag = document.createElement('div');
        carouseltag.classList.add('flex', 'flex-row', 'justify-between')
        const title = document.createElement('h3');
        title.classList.add('pr-[0.5rem]')
        title.textContent = element.dataset.title
        carouseltag.appendChild(title)
        const link = document.createElement('a')
        link.classList.add('pl-[0.5rem]')
        link.classList.add('text-blue-700')
        link.textContent = element.dataset.link ? 'مشاهده همه' : '';
        link.href = `https://vitrin.splus.ir/${element.dataset.link}`
        carouseltag.appendChild(link)
        element.appendChild(carouseltag)

        const carouselgrid = document.createElement('div');
        carouselgrid.classList.add('grid', 'justify-between')
        const carouselconainer = document.createElement('div')
        carouselconainer.classList.add('carousel-container', 'flex', 'flex-row', "w-[100%]", "h-36", "overflow-hidden", 'relative')
        const carousel = document.createElement('div')
        carousel.classList.add("slider", "flex", "transition-transform", "ease-in")
        const cards = data[elementID]
        let theslide=addSlideToCarousel(carousel, cards)
        carouselconainer.appendChild(carousel)
        carouselgrid.appendChild(carouselconainer)
        element.appendChild(carouselgrid)
        // const slidersize=document.querySelector('.slide')
        // console.log(slidersize)
        // Variables
        let isDragging = false;
        let startPosition = 0;
        let currentTranslate = 0;
        let maxTranslate = 180;
        let minTranslate = -10;
        let prevTranslate = 0;
        let animationID = 0;
        const slider = document.querySelector(".slider");

        function onTouchStart(event) {
            isDragging = true;
            startPosition = getPositionX(event);
            animationID = requestAnimationFrame(animation);
            slider.classList.add("grabbing");
        }

        function onTouchMove(event) {
            if (isDragging) {
                const currentPosition = getPositionX(event);
                currentTranslate = prevTranslate + currentPosition - startPosition;
            }
        }

        function onTouchEnd() {
            cancelAnimationFrame(animationID);
            isDragging = false;
            prevTranslate = currentTranslate;
            slider.classList.remove("grabbing");
        }

        function getPositionX(event) {
            return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
        }

        function animation() {
            setSliderPosition();
            if (isDragging) {
                requestAnimationFrame(animation);
            }
        }


        function setSliderPosition() {
            console.log(maxTranslate,minTranslate)
            if (currentTranslate > maxTranslate) { currentTranslate = maxTranslate; }
            else if (currentTranslate < minTranslate) { currentTranslate = minTranslate; }
            carousel.style.transform = `translateX(${currentTranslate}px)`;
        }

        // Event listeners
        carousel.addEventListener("mousedown", onTouchStart);
        carousel.addEventListener("touchstart", onTouchStart);

        carousel.addEventListener("mousemove", onTouchMove);
        carousel.addEventListener("touchmove", onTouchMove);

        carousel.addEventListener("mouseup", onTouchEnd);
        carousel.addEventListener("touchend", onTouchEnd);
        carousel.addEventListener("mouseleave", onTouchEnd);
        let size=parseFloat(window.getComputedStyle(theslide).width);
        let bodysize=parseFloat(window.getComputedStyle(document.getElementById('mainbody')).width);
        console.log(cards.length-Math.floor(bodysize/size))
        minTranslate=-(cards.length-Math.floor(bodysize/size)) *size
        maxTranslate=(cards.length-Math.floor(bodysize/size)) *size
        console.log(maxTranslate,minTranslate)
    }

    createCarousel('bartarin');
    createCarousel('porfrosh');
    createCarousel('labkhandane');
    createCarousel('sabkzendegi');
    createCarousel('akhbar');
    createCarousel('mazhabi');
    createCarousel('tabliq');
    createCarousel('soroush');

// * lazy loading handling by using Intersection observer Api
    function lazyLoadImages(entries, observer) {
        entries.forEach(element => {
            if (element.isIntersecting) {
                const img = element.target;
                const src = img.getAttribute('data-src');
                if (src) {
                    img.classList.remove('animate-skeleton-loading')
                    img.setAttribute('src', src);
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    }
    const images = document.querySelectorAll('img')
    const imageObserver = new IntersectionObserver(lazyLoadImages, {
        rootMargin: '50px',
        threshold: 0
    });
    images.forEach(image =>
        imageObserver.observe(image))
})

// * this section will handle the sticky header  
// * stick the header to the top by adding a specific css class  
const header = document.getElementById("header");
const navlogo = document.getElementById("navlogo");

let sticky = header.offsetTop;
var lastScrollPosition = window.scrollY;
window.onscroll = () => {
    const currentScrollPosition = window.scrollY;
    const direction = currentScrollPosition > lastScrollPosition ? 'down' : 'up'
    lastScrollPosition = currentScrollPosition;
    header.classList.add("sticky");
    // const blueheader = document.getElementById("blueheader");
    if (direction === 'down') {
        header.classList.remove('animate-blueheaderanimationopen')
        header.classList.add("animate-blueheaderanimatioclose");
        header.classList.add("closeanimation");
        navlogo.classList.replace('animate-logoclose', 'animate-logoopen')
        navlogo.classList.remove('closelogo')
        // navlogo.classList.remove("opacity-0");

    } else {
        header.classList.remove("animate-blueheaderanimatioclose");
        header.classList.add("animate-blueheaderanimationopen");
        header.classList.remove("closeanimation");
        navlogo.classList.replace('animate-logoopen', 'animate-logoclose')
        navlogo.classList.add('closelogo')


    }
}
// * handle infinity loop for the big slider
var bigslider = document.getElementById('bigslider'),
    bigsliderItems = document.getElementById('items');
bigslide(bigslider, bigsliderItems);
function bigslide(wrapper, items) {
    var biassize=parseFloat(window.getComputedStyle(items).gap),
        mainbodywidth=parseFloat(window.getComputedStyle(document.getElementById('mainbody')).width);
    items.style.left = (-mainbodywidth + biassize /3) +'px';
    // console.log(mainbodywidth)
    var posX1 = 0,
        posX2 = 0,
        posInitial,
        posFinal,
        threshold = 100,
        bigslides = items.getElementsByClassName('bigslide'),
        bigslidesLength = bigslides.length,
        bigslideSize = mainbodywidth,
        firstbigslide = bigslides[0],
        lastbigslide = bigslides[bigslidesLength - 1],
        cloneFirst = firstbigslide.cloneNode(true),
        cloneLast = lastbigslide.cloneNode(true),
        index = 0
    // biassize = parseFloat(window.getComputedStyle(items).gap);

    allowShift = true;
    // console.log('slidesize',items.getElementsByClassName('bigslide')[0].width)

    // Clone first and last bigslide
    items.appendChild(cloneFirst);
    items.insertBefore(cloneLast, firstbigslide);
    wrapper.classList.add('loaded');

    // Mouse and Touch events
    items.onmousedown = dragStart;

    // Touch events
    items.addEventListener('touchstart', dragStart);
    items.addEventListener('touchend', dragEnd);
    items.addEventListener('touchmove', dragAction);


    // Transition events
    items.addEventListener('transitionend', checkIndex);

    function dragStart(e) {
        e = e || window.event;
        e.preventDefault();
        posInitial = items.offsetLeft;

        if (e.type == 'touchstart') {
            posX1 = e.touches[0].clientX;
        } else {
            posX1 = e.clientX;
            document.onmouseup = dragEnd;
            document.onmousemove = dragAction;
        }
    }
    function dragAction(e) {
        e = e || window.event;

        if (e.type == 'touchmove') {
            posX2 = posX1 - e.touches[0].clientX;
            posX1 = e.touches[0].clientX;
        } else {
            posX2 = posX1 - e.clientX;
            posX1 = e.clientX;
        }
        items.style.left = (items.offsetLeft - posX2) + "px";
    }

    function dragEnd(e) {
        posFinal = items.offsetLeft;
        if (posFinal - posInitial < -threshold) {
            shiftbigslide(1, 'drag');
        } else if (posFinal - posInitial > threshold) {
            shiftbigslide(-1, 'drag');
        } else {
            items.style.left = (posInitial) + "px";
        }
        document.onmouseup = null;
        document.onmousemove = null;
    }

    function shiftbigslide(dir, action) {
        // console.log('bias:', biassize)
        items.classList.add('transition-[left]', 'ease-out', 'duration-200');
        if (allowShift) {
            if (!action) { posInitial = items.offsetLeft; }
            if (dir == 1) {
                // console.log((posInitial - bigslideSize), 'what the ficlk')
                items.style.left = (posInitial - bigslideSize - Math.ceil(biassize / 3))
                    // Math.floor(-biassize/3);
                    + "px";
                index++;
            } else if (dir == -1) {
                items.style.left = (posInitial + bigslideSize)
                    + Math.floor(biassize / 3)
                    + "px";
                // console.log((posInitial + bigslideSize), 'what2')
                index--;
            }
        };

        allowShift = false;
    }

    function checkIndex() {
        // items.classList.remove('transition-left-200','ease-out');
        items.classList.remove('transition-[left]', 'ease-out', 'duration-200');
        // console.log('slide size', bigslideSize)
        if (index == -1) {
            // console.log('zorp', bigslidesLength * bigslideSize)
            items.style.left = (-(bigslidesLength * bigslideSize))
                - biassize/3
                + "px";
            index = bigslidesLength - 1;
        }
        if (index == bigslidesLength) {
            // console.log('zurp')
            items.style.left = (-(1 * bigslideSize))
                + Math.floor(biassize / 3)
                + "px";
            index = 0;
        }
        allowShift = true;
    }
}