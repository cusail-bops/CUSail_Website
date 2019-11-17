let selector
if (window.screen.width <= 767) {
  selector = "subteam-navbar-mobile"
}
else{
  selector = "subteam-navbar"
}
const navbar = document.getElementById(selector)

navbar.addEventListener('click', function(){
  console.log("clicked")
  currentUnderline = document.getElementsByClassName("underline")
  if (currentUnderline[0]){
    currentUnderline[0].classList.remove("underline")
  }
  event.target.classList.add("underline")
})
