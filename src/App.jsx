import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import AboutMe from './features/home/AboutMe'
import ExperiencePage from './features/experience'
import ProjectsPage from './features/projects'
import SkillsPage from './features/skills'
import CodingProfilesPage from './features/codingProfiles'
import EducationPage from './features/education'
import ContactPage from './features/contact'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<AboutMe />} />
        <Route path="experience" element={<ExperiencePage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="skills" element={<SkillsPage />} />
        <Route path="coding-profiles" element={<CodingProfilesPage />} />
        <Route path="education" element={<EducationPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
