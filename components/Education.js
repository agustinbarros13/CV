import data from '../data/data.js'

export function renderEducation() {
  const mainContainer = document.getElementById('main-container')
  const section = document.createElement('section')
  section.id = 'education'
  section.innerHTML = `
    <h2>Education</h2>
    <p>${data.education.degree} - ${data.education.university} (${
    data.education.graduationYear
  })</p>
    <p>Honors: ${data.education.honors}</p>
    <h3>Relevant Courses:</h3>
    <ul>
      ${data.education.relevantCourses
        .map((course) => `<li>${course}</li>`)
        .join('')}
    </ul>
  `
  mainContainer.appendChild(section)
}
