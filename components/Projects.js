import data from '../data/data.js'

export function renderProjects() {
  const mainContainer = document.getElementById('main-container')
  const section = document.createElement('section')
  section.id = 'projects'
  section.innerHTML = `
    <h2>Projects</h2>
    ${data.projects
      .map(
        (project) => `
      <div>
        <img src="${project.preview}" alt="${project.title}">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      </div>
    `
      )
      .join('')}
  `
  mainContainer.appendChild(section)
}
