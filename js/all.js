// add and remove mobile navbar
const mobileNavbarLinksContainer = document.getElementById("mobile-navbar-links-container")
const mobileTopNavbar = document.getElementById("mobile-top-navbar")
let mobileIsDisplayed = false;
const hamburgerIcon = document.getElementById("hamburger-icon")
hamburgerIcon.addEventListener('click', function(event){
   if (mobileIsDisplayed){
      mobileTopNavbar.classList.add('navhidden')
      mobileNavbarLinksContainer.classList.remove('mobile-navbar-links-container')
      mobileIsDisplayed = false;
   }
   else{
       mobileTopNavbar.classList.remove('navhidden')
       mobileNavbarLinksContainer.classList.add('mobile-navbar-links-container')
       mobileIsDisplayed = true;
   }
})

// move the little boat along the nav scroll-track as the page scrolls
const scrollBoat = document.getElementById("scroll-boat")
const scrollTrack = document.getElementById("scroll-track")
if (scrollBoat && scrollTrack) {
  const updateBoatPosition = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? Math.min(Math.max(scrollTop / docHeight, 0), 1) : 0
    scrollBoat.style.left = `${progress * scrollTrack.clientWidth}px`
  }
  window.addEventListener("scroll", updateBoatPosition, { passive: true })
  window.addEventListener("resize", updateBoatPosition)
  window.addEventListener("load", updateBoatPosition)
  updateBoatPosition()
}
