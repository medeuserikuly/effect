const slider = (slides, dir, prev, next) => {
    let slideIndex = 1,
        paused = false;

    const items = document.querySelectorAll(slides);
          
    function showSlides(n) {
        if (n > items.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = items.length;
        }

        items.forEach(item => {
            item.classList.add("animated");
            item.style.display = "none";
        });

        items[slideIndex - 1].style.display = 'block';
    }

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlides(-1);
            items[slideIndex - 1].classList.remove('fadeIn');
            items[slideIndex - 1].classList.add('fadeIn');
        });

        nextBtn.addEventListener('click', () => {
            plusSlides(1);
            items[slideIndex - 1].classList.remove('fadeIn');
            items[slideIndex - 1].classList.add('fadeIn');
        });
    } catch(e){}

    function activateAnimation() {
        if (dir === 'vertical') {
            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.add('fadeIn');
            }, 90000);
        } else {
            paused = setInterval(function() {
                plusSlides(1);
                items[slideIndex - 1].classList.remove('fadeIn');
                items[slideIndex - 1].classList.add('fadeIn');
            }, 9000);
        }
    }
    // activateAnimation();

    items[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });
    items[0].parentNode.addEventListener('mouseleave', () => {
        // activateAnimation();
    });

};

export default slider;



// const slider = () => {
//     const slider = document.querySelector('.slider');
//     const prevButton = document.querySelector('.prev-button');
//     const nextButton = document.querySelector('.next-button');
//     const slides = Array.from(slider.querySelectorAll('img'));
//     const slideCount = slides.length;
//     let slideIndex = 0;

//     prevButton.addEventListener('click', () => {
//         slideIndex = (slideIndex - 1 + slideCount) % slideCount;
//         slide();
//     });

//     nextButton.addEventListener('click', () => {
//         slideIndex = (slideIndex + 1) % slideCount;
//         slide();
//     });

//     const slide = () => {
//         const imageWidth = slider.clientWidth;
//         const slideOffset = -slideIndex * imageWidth;
//         slider.style.transform = `translateX(${slideOffset}px)`;
//     }

//     window.addEventListener('load', () => {
//         slide();
//     });
// }

// export default slider;