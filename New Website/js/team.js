const navbar = document.getElementById("subteam-navbar")

navbar.addEventListener('click', function(){
  currentUnderline = document.getElementsByClassName("underline")
  if (currentUnderline[0]){
    currentUnderline[0].classList.remove("underline")
  }
  event.target.classList.add("underline")
})
