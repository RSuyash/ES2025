import { lazy } from 'react'
import Hero from '../sections/Hero'
import Mission from '../sections/Mission'
import PastSummit from '../sections/PastSummit'
import ValueProps from '../sections/ValueProps'
import SocialProof from '../sections/SocialProof'
import Participation from '../sections/Participation'
// Removed SummitProvider wrapper from here as it will be in App.tsx

// Lazy Load Heavy Sections
const ConferenceThemes = lazy(() => import('../sections/themes/ConferenceThemes'))
const ResearchAdvisoryCommittee = lazy(() => import('../sections/ResearchAdvisoryCommittee'))
const SocialMediaFeed = lazy(() => import('../sections/SocialMediaFeed'))

const Home = () => {
    return (
        <>
            <Hero />
            <Mission />
            <PastSummit />
            <ValueProps />
            <SocialProof />
            <ConferenceThemes />
            <ResearchAdvisoryCommittee />
            <Participation />
            <SocialMediaFeed />
        </>
    )
}

export default Home
