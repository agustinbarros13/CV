import data from '../data/data.js'

export function renderExperience() {
  const mainContainer = document.getElementById('main-container')
  const section = document.createElement('section')
  section.id = 'experience'
  section.innerHTML = `
    <h2>Work Experience</h2>
    ${data.workExperience
      .map(
        (job) => `
      <div>
        <h3>${job.position} at ${job.company}</h3>
        <p>${job.startDate} - ${job.endDate}</p>
        <p>${job.description}</p>
      </div>
    `
      )
      .join('')}
  `
  mainContainer.appendChild(section)
}
