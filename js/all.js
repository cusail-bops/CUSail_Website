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

// force an immediate cursor repaint on page load -- Chromium sometimes keeps
// showing the previous page's cursor bitmap over <main> until the mouse
// physically moves, which made the custom boat cursor look stale/wrong
// right after navigating between pages
const mainEl = document.querySelector("main")
if (mainEl) {
  mainEl.style.cursor = "none"
  requestAnimationFrame(() => {
    mainEl.style.cursor = ""
  })
}

// curvy background line: stretch it to full page height, drift it as the page scrolls
const bgCurveWrap = document.getElementById('bg-curve-wrap')
const bgCurve = document.getElementById('bg-curve')
if (bgCurveWrap) {
  const resizeCurve = () => {
    // zero out first so the curve's own box can't inflate the measurement
    // (an unset SVG height falls back to a huge intrinsic size derived from
    // its viewBox, which was puffing up scrollHeight on every page)
    bgCurveWrap.style.height = '0px'
    if (bgCurve) bgCurve.style.height = '0px'
    // some pages start the curve below a hero photo/video via a CSS "top"
    // offset -- subtract it so the curve's bottom edge still lands exactly
    // at the page's true bottom instead of overshooting by that offset
    const topOffset = parseFloat(getComputedStyle(bgCurveWrap).top) || 0
    const h = document.documentElement.scrollHeight - topOffset
    bgCurveWrap.style.height = `${h}px`
    if (bgCurve) bgCurve.style.height = `${h}px`
  }
  const driftCurve = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop
    bgCurveWrap.style.transform = `translateX(-50%) translateY(${scrollTop * -0.08}px)`
  }
  window.addEventListener('resize', resizeCurve)
  window.addEventListener('load', resizeCurve)
  window.addEventListener('scroll', driftCurve, { passive: true })
  resizeCurve()
  driftCurve()
}
