import data from '../data/data.js'

export function renderAboutMe() {
  const mainContainer = document.getElementById('main-container')
  const section = document.createElement('section')
  section.id = 'about'
  section.innerHTML = `
    <h1>About Me</h1>
    <p>${data.aboutMe}</p>
  `
  mainContainer.appendChild(section)
}
