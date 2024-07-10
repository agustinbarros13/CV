import data from '../data/data.js'

export function renderHeader() {
  const headerContainer = document.getElementById('header-container')
  headerContainer.innerHTML = `
    <nav>
      <img src="${data.avatar}" alt="Logo" class="logo">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
      </ul>
    </nav>
  `
}
