/*=============== LOADER ===============*/
 onload = () =>{ 
    const load = document.getElementById('load')

    setTimeout( () => { 
      load.style.display = "none"      
    }, 2500)
}

/*=============== SHOW MENU ===============*/
 const navMenu = document.querySelector('#nav-menu');
 const navToggle = document.querySelector('#nav-toggle');
 const navClose = document.querySelector('#nav-close');

    //    Validate if constant exist

    if(navToggle){ 
        navToggle.addEventListener('click', () =>{ 
            navMenu.classList.add('show-menu')
        });
    };

    //    Validate if constant exist

    if(navClose){ 
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        });
    };

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav-link')

function linkAction(){ 

    const navMenu = document.querySelector('#nav-menu');
//  when we click on each nav_link,we remove the show menu class 
    navMenu.classList.remove('show-menu')
};

navLink.forEach(n => n.addEventListener('click', linkAction)
)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.querySelector('#header')

    if(this.scrollY >= 50 ){ 
        header.classList.add('scroll-header')
    }else{
        header.classList.remove('scroll-header')
    }
}
window.addEventListener('scroll', scrollHeader)

/*=============== MIXITUP FILTER PRODUCTS ===============*/

let mixerProducts = mixitup('.product_content', {
    selectors: {
        target: '.products_card '
    },
    animation: {
        duration: 300
    }
});

/* Default filter products */ 
 mixerProducts.filter('.delicacies')

/* Link active products */ 
const linkProducts = document.querySelectorAll('.products_item')

function activeProducts(){ 
    linkProducts.forEach( linkproduct => { 
        linkproduct.classList.remove('active-product');
        this.classList.add('active-product')
    })  
}

linkProducts.forEach(linkproduct =>
    linkproduct.addEventListener('click', activeProducts)
)
/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){ 
    const scrollUp = document.getElementById('scroll-up')

    // when the scroll is higer than 350 viewport height, add the show -scroll class to the a tag with the scroll-up class

    if(this.scrollY >= 350){ 
        scrollUp.classList.add('show-scroll')
    }else{ 
        scrollUp.classList.remove('show-scroll')
    }
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset


    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')


        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[ href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav_menu a[ href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


  