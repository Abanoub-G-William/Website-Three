let layerOne = document.querySelector('header .layer-one');
let layerTwo = document.querySelector('header .layer-two');
let logo = document.querySelector('header .layer-One h1');
let navBar = document.querySelector('header .navbar');
let headerInfo = document.querySelector('header .info');
let navMob = document.querySelector('.header-mob nav');
let roomSec = document.querySelector('.rooms');
let testimonials = document.querySelector('.testimonials');
let titleOneH2 = document.querySelector('.title-one h2');
let titleOnePara = document.querySelector('.title-one p');
let titleTwoH2 = document.querySelector('.title-Two h2');
let titleTwoPara = document.querySelector('.title-Two p');

let titleTwo = document.querySelector('.title-two');
let rooms = document.querySelectorAll('.rooms div');
let about = document.querySelector('.about');

let offersSec = document.querySelector('.offers');
let offers = document.querySelectorAll('.offers div');
let testImg = document.querySelector('.testimonials img');
let testPara = document.querySelector('.testimonials p');
let testB1 = document.querySelector('.testimonials .selections .b1');
let testB2 = document.querySelector('.testimonials .selections .b2');
let testB3 = document.querySelector('.testimonials .selections .b3');
let testState = 2;
let navMobState = false;
let scrolling = false;




function layerTwoAnim() {
    setTimeout(() => {
        layerTwo.style.transition = 'transform .8s ease-in-out';
        layerTwo.style.transform = 'scaleX(1)';
    }, 300)
    setTimeout(() => {
        layerOne.style.transition = 'width 1s cubic-bezier(0.455, 0.03, 0.515, 0.955)';
        layerTwo.style.transformOrigin = 'left center';
        layerOne.style.opacity = '1';

    }, 1300)
    setTimeout(() => {
        layerTwo.style.transform = 'scaleX(0)';

    }, 1400)

   
    setTimeout(() => {
        layerOne.style.width = '50%';
    }, 2600)
    setTimeout(() => {
        navBar.style.transition = '.6s ease-in-out';
        navBar.style.transitionDelay = '2s';
        navBar.style.transform = 'translateY(0px)';
        navBar.style.opacity = '1';
        headerInfo.style.transition = 'transform 1s ease';
        headerInfo.style.transitionDelay = '.2s';
        headerInfo.style.transform = 'scaleX(1)';
        document.querySelector('header .info p').style.opacity = '1';
        document.querySelector('header .info h2').style.opacity = '1';
        document.querySelector('.slogan h1').style.transition = '1.5s ease';
        document.querySelector('.slogan h1').style.transitionDelay = '.6s';
        document.querySelector('.slogan h1').style.opacity = '1';
        document.querySelector('.slogan h1').style.transform = 'translateX(0px)';
        document.querySelector('.slogan p').style.transition = '1s ease-in-out';
        document.querySelector('.slogan p').style.transitionDelay = '1.1s';
        document.querySelector('.slogan p').style.opacity = '1';
        document.querySelector('.slogan p').style.transform = 'translateY(0px)';
    }, 3300)
}
layerTwoAnim();

document.querySelector('.fa-bars').addEventListener('click', () => {
    if (navMobState) {
        navMob.style.transform = 'scaleY(0)';
        navMobState = false;
    } else {
        navMob.style.transform = 'scaleY(1)';
        navMobState = true;
    }
})

window.addEventListener('scroll', () => {
    scrolling = true;
});
setInterval(() => {
    if (scrolling && window.scrollY > 150 && window.scrollY <= about.offsetTop + window.innerHeight) {
        document.querySelector(".about .img1").style.opacity = '1';
        document.querySelector(".about .img2").style.opacity = '1';
        document.querySelector(".about .text").style.opacity = '1';
        document.querySelector(".about .text").style.transform = 'translateX(0px)';
        document.querySelector(".about .img1").style.transform = 'translateX(0px)';
        document.querySelector(".about .img2").style.transform = 'translateX(0px)';
    }
    if (scrolling && window.scrollY > roomSec.offsetTop - (window.innerHeight - 50) && window.scrollY <= roomSec.offsetTop + window.innerHeight) {
        rooms.forEach((room) => {
            room.style.transform = 'translateY(0px)';
            room.style.opacity = '1';

        })
    }
    if (scrolling && window.scrollY > offersSec.offsetTop - (window.innerHeight - 50) && window.scrollY <= offersSec.offsetTop + window.innerHeight ) {
        offers.forEach((offer) => {
            offer.style.opacity = '1';

        })
    }
    if (scrolling && window.scrollY > testimonials.offsetTop - (window.innerHeight - 150) && window.scrollY <= testimonials.offsetTop + window.innerHeight )  {
        testimonials.style.opacity = '1';
    }
    if (scrolling && window.scrollY > titleOneH2.offsetTop - (window.innerHeight - 150) && window.scrollY <= titleOneH2.offsetTop + window.innerHeight) {
        titleOneH2.style.opacity = '1';
        titleOnePara.style.opacity = '1';
    }
    if (scrolling && window.scrollY > titleTwoH2.offsetTop - (window.innerHeight - 150) && window.scrollY <= titleTwoH2.offsetTop + window.innerHeight) {
        titleTwoH2.style.opacity = '1';
        titleTwoPara.style.opacity = '1';
    }

    scrolling = false;
}, 500);

function testimonialsSettings(src, text) {
    testImg.style.opacity = 0;
    testPara.style.opacity = 0;
    setTimeout(() => {
        testImg.src = src;
        testPara.innerHTML = text;
    }, 400)
    setTimeout(() => {
        testImg.style.opacity = 1;
        testPara.style.opacity = 1;
    }, 410)
}

setInterval(() => {
    switch (testState) {
        case 1:
            changeTestimonials(2);
            break;
        case 2:
            changeTestimonials(3);
            break;
        case 3:
            changeTestimonials(1);
            break;

    }
}, 3000);


function changeTestimonials(num) {
    if (num != testState) {
        switch (num) {
            case 1:
                testimonialsSettings('Images/t1.jpg', '<i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum ligula ut justo molestie varius. Mauris pretium tempor elementum. Class.')
                testState = 1;
                testB1.style.backgroundColor = '#252525';
                testB2.style.backgroundColor = '#fff';
                testB3.style.backgroundColor = '#fff';



                break;
            case 2:
                testimonialsSettings('Images/t2.jpg', '<i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vel facilisis dolor. Praesent eu enim ullamcorper, consectetur est ut, facilisis tortor. Cras.')
                testState = 2;
                testB2.style.backgroundColor = '#252525';
                testB1.style.backgroundColor = '#fff';
                testB3.style.backgroundColor = '#fff';

                break;
            case 3:
                testimonialsSettings('Images/t3.jpg', '<i class="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras condimentum ligula ut justo molestie varius. Mauris pretium tempor elementum.')
                testState = 3;
                testB3.style.backgroundColor = '#252525';
                testB1.style.backgroundColor = '#fff';
                testB2.style.backgroundColor = '#fff';
                break;


        }
    }
}
testB1.addEventListener('click', () => {
    changeTestimonials(1)
})
testB2.addEventListener('click', () => {
    changeTestimonials(2)
})
testB3.addEventListener('click', () => {
    changeTestimonials(3)
})