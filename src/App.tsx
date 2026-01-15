import { lazy } from 'react'
import Layout from './components/layout/Layout'
import Hero from './sections/Hero'
import Mission from './sections/Mission'
import PastSummit from './sections/PastSummit'
import ValueProps from './sections/ValueProps'
import SocialProof from './sections/SocialProof'
import Participation from './sections/Participation'

// Lazy Load Heavy Sections
const ConferenceThemes = lazy(() => import('./sections/themes/ConferenceThemes'))
const ResearchAdvisoryCommittee = lazy(() => import('./sections/ResearchAdvisoryCommittee'))
const SocialMediaFeed = lazy(() => import('./sections/SocialMediaFeed'))

function App() {
  return (
    <Layout>
      <Hero />
      <Mission />
      <PastSummit />
      <ValueProps />
      <SocialProof />

      <ConferenceThemes />
      <ResearchAdvisoryCommittee />
      <Participation />
      <SocialMediaFeed />
    </Layout>
  )
}

export default App
