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

// slide the little boat to the active tab's position -- it only moves when
// you navigate to a different page, starting from "About" on a fresh visit
const scrollBoat = document.getElementById("scroll-boat")
const scrollTrack = document.getElementById("scroll-track")
if (scrollBoat && scrollTrack) {
  const navLinks = Array.from(document.querySelectorAll("#navbar-links-container a"))
  const aboutLink = navLinks[0]
  const activeLink = navLinks.find((a) => a.classList.contains("onThisPage")) || aboutLink
  const STORAGE_KEY = "cusail-boat-x"

  const boatXFor = (link) => {
    const linkRect = link.getBoundingClientRect()
    const trackRect = scrollTrack.getBoundingClientRect()
    return linkRect.left + linkRect.width / 2 - trackRect.left
  }

  const positionBoat = (x, animate) => {
    scrollBoat.style.transition = animate ? "left 0.9s cubic-bezier(0.22, 1, 0.36, 1)" : "none"
    scrollBoat.style.left = `${x}px`
  }

  const placeBoat = () => {
    const targetX = boatXFor(activeLink)
    const storedX = sessionStorage.getItem(STORAGE_KEY)
    const startX = storedX !== null ? parseFloat(storedX) : boatXFor(aboutLink)

    positionBoat(startX, false)
    requestAnimationFrame(() => {
      requestAnimationFrame(() => positionBoat(targetX, true))
    })

    sessionStorage.setItem(STORAGE_KEY, targetX)
  }

  window.addEventListener("resize", () => positionBoat(boatXFor(activeLink), false))
  placeBoat()

  // re-snap once the real webfont has finished loading/swapping in --
  // nav link widths can shift after the fallback-font measurement above,
  // which is why the boat sometimes landed off-center under the tab name
  const settleBoat = () => positionBoat(boatXFor(activeLink), false)
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(settleBoat)
  }
  window.addEventListener("load", settleBoat)
}
