// toggle navigation

const primaryNav = document.querySelector(".primary-navigation")
const hamburger = document.querySelector(".hamburger")

hamburger.addEventListener('click', ()=>{
    primaryNav.classList.toggle("open-nav")
})



// header Intersecetion

const navWrapper = document.querySelector(".nav-wrapper")
const hero = document.querySelector(".hero")

const sectionOptions = {
    rootMargin: "-700px 0px 700px 0px"
}

const sectionOneObserver = new IntersectionObserver(function(
    entries,
    sectionOneObserver
){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            navWrapper.classList.add("nav-scrolled")
        } else{
            navWrapper.classList.remove("nav-scrolled")
        }
    })
},sectionOptions)

sectionOneObserver.observe(hero)



/* The above code is using the IntersectionObserver API to observe the sliders and add the class
"appear" to them when they are in the viewport. */
const sliders = document.querySelectorAll(".slide-in")

const apperOptions = {
    threshold: 0,
    rootMargin: " 0px 0px -20px 0px"

}

const apperOnScroll = new IntersectionObserver(function(
    entries,
    apperOnScroll
){
 entries.forEach(entry=>{
    if(!entry.isIntersecting){
        return;
    } else{
        entry.target.classList.add("appear")
        apperOnScroll.unobserve(entry.target)
    }

 })
},apperOptions)

sliders.forEach(slider =>{
    apperOnScroll.observe(slider)
})


// scroll top Intersection Observer


const scrollTop = document.querySelector(".scroll-top")

const scrollTopOptions = {
    rootMargin: " 300px 0px 0px 0px"
}

const scrollTopObserver = new IntersectionObserver(function(
    entries,
    scrollTopObserver
){
    entries.forEach(entry =>{
        if(!entry.isIntersecting){
            scrollTop.classList.add("scroll-show")
        } else {
            scrollTop.classList.remove("scroll-show")
        }
    });
}, scrollTopOptions)

scrollTopObserver.observe(hero);