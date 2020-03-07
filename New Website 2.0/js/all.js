const mobileNavbarLinksContainer = document.getElementById("mobile-navbar-links-container")
const mobileTopNavbar = document.getElementById("mobile-top-navbar")
let mobileIsDisplayed = false;
const hamburgerIcon = document.getElementById("hamburger-icon")
hamburgerIcon.addEventListener('click', function(event){
   if (mobileIsDisplayed){
      mobileTopNavbar.classList.add('hidden')
      mobileNavbarLinksContainer.classList.remove('mobile-navbar-links-container')
      mobileIsDisplayed = false;
   }
   else{
       mobileTopNavbar.classList.remove('hidden')
       mobileNavbarLinksContainer.classList.add('mobile-navbar-links-container')
       mobileIsDisplayed = true;
   }
})
