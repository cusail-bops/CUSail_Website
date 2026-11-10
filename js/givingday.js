// fires a small confetti burst from the donation button right after its
// sweep-fill animation finishes (0.6s delay + 1s sweep = 1.6s)
const givingButton = document.getElementById("giving-button")
if (givingButton) {
  const burstConfetti = (originEl) => {
    const colors = ["#B31B1B", "#65C8D0", "#ffffff", "#3d7a80"]
    const rect = originEl.getBoundingClientRect()
    const originX = rect.left + rect.width / 2
    const originY = rect.top + rect.height / 2
    const pieceCount = 28

    for (let i = 0; i < pieceCount; i++) {
      const piece = document.createElement("div")
      piece.className = "confetti-piece"

      const angle = Math.random() * Math.PI * 2
      const distance = 80 + Math.random() * 140
      const tx = Math.cos(angle) * distance
      const ty = Math.sin(angle) * distance - 40
      const rot = (Math.random() - 0.5) * 720

      piece.style.setProperty("--tx", `${tx}px`)
      piece.style.setProperty("--ty", `${ty}px`)
      piece.style.setProperty("--rot", `${rot}deg`)
      piece.style.left = `${originX}px`
      piece.style.top = `${originY}px`
      piece.style.background = colors[Math.floor(Math.random() * colors.length)]

      piece.addEventListener("animationend", () => piece.remove())
      document.body.appendChild(piece)
    }
  }

  setTimeout(() => burstConfetti(givingButton), 1600)
}
