const questions = ['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9']
const answers = ['a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9']

questions.forEach((q, i) => {
  let question = document.getElementById(q)
  question.addEventListener('click', () => {
      $(`#${answers[i]}`).toggleClass("slidedown slideup");
  })
})

// rotating, peeking photo stack on the team photo
let stackPhotos = Array.from(document.querySelectorAll('.stack-photo'))
if (stackPhotos.length > 0) {
  const stackOffsets = [
    { x: 0, y: 0, scale: 1, opacity: 1 },
    { x: 28, y: 20, scale: 0.96, opacity: 0.9 },
    { x: 56, y: 40, scale: 0.92, opacity: 0.7 },
    { x: 84, y: 60, scale: 0.88, opacity: 0.45 },
    { x: 112, y: 80, scale: 0.84, opacity: 0.22 },
  ]

  const applyStack = () => {
    stackPhotos.forEach((img, i) => {
      const o = stackOffsets[i] || stackOffsets[stackOffsets.length - 1]
      img.style.zIndex = stackPhotos.length - i
      img.style.transform = `translate(${o.x}px, ${o.y}px) scale(${o.scale})`
      img.style.opacity = o.opacity
    })
  }

  applyStack()
  setInterval(() => {
    stackPhotos.push(stackPhotos.shift())
    applyStack()
  }, 3500)
}
