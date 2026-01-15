
import Layout from './components/layout/Layout'
import Hero from './sections/Hero'
import Mission from './sections/Mission'
import PastSummit from './sections/PastSummit'
import ValueProps from './sections/ValueProps'
import SocialProof from './sections/SocialProof'
import Tracks from './sections/Tracks'
import ResearchAdvisoryCommittee from './sections/ResearchAdvisoryCommittee'
import Participation from './sections/Participation'
import SocialMediaFeed from './sections/SocialMediaFeed'

function App() {
  return (
    <Layout>
      <Hero />
      <Mission />
      <PastSummit />
      <ValueProps />
      <SocialProof />
      <Tracks />
      <ResearchAdvisoryCommittee />
      <Participation />
      <SocialMediaFeed />
    </Layout>
  )
}

export default App
