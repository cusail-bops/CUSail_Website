const questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9']
const answers = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9']

questions.forEach((q, i) => {
  let question = document.getElementById(q)
  question.addEventListener('click', () => {
      $(`#${answers[i]}`).toggleClass("slidedown slideup");
  })
})

// team photo carousel: front photo centered, the rest orbiting around it on
// a circle; every tick the ring rotates one slot and a new photo takes front
let stackPhotos = Array.from(document.querySelectorAll('.stack-photo'))
if (stackPhotos.length > 0) {
  const stackSlots = [
    { angle: 0, radius: 0, scale: 1, opacity: 1 },
    { angle: 45, radius: 95, scale: 0.8, opacity: 0.55 },
    { angle: 135, radius: 95, scale: 0.8, opacity: 0.55 },
    { angle: 225, radius: 95, scale: 0.8, opacity: 0.55 },
    { angle: 315, radius: 95, scale: 0.8, opacity: 0.55 },
  ]

  const applyStack = () => {
    stackPhotos.forEach((img, i) => {
      const s = stackSlots[i] || stackSlots[stackSlots.length - 1]
      img.style.zIndex = s.radius === 0 ? stackPhotos.length + 1 : stackPhotos.length - i
      img.style.transform = `rotate(${s.angle}deg) translate(0, -${s.radius}px) rotate(${-s.angle}deg) scale(${s.scale})`
      img.style.opacity = s.opacity
    })
  }

  applyStack()
  setInterval(() => {
    stackPhotos.push(stackPhotos.shift())
    applyStack()
  }, 3500)
}
