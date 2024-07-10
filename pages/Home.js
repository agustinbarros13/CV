import { renderHeader } from '../components/Header.js'
import { renderAboutMe } from '../components/AboutMe.js'
import { renderEducation } from '../components/Education.js'
import { renderExperience } from '../components/Experience.js'
import { renderProjects } from '../components/Projects.js'

export function renderHome() {
  renderHeader()
  renderAboutMe()
  renderEducation()
  renderExperience()
  renderProjects()
}
