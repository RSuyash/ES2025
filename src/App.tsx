import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/layout/Layout'
import { SummitProvider } from './context/SummitContext'
import Home from './pages/Home'
import TrackFinder from './pages/TrackFinder'

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <SummitProvider>
      <Router>
        {/* Ensures page scrolls to top on navigation */}
        <ScrollToTop />

        {/* Layout wraps everything so Navbar/Footer persist */}
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/track-finder" element={<TrackFinder />} />
          </Routes>
        </Layout>

      </Router>
    </SummitProvider>
  )
}

export default App
