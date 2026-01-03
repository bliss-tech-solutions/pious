import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navigation from './Components/Navigation/Navigation';
import HomeRoutes from './Components/HeroHomeRoutes/HomeRoutes';
import ProjectDetail from './Components/ProjectDetail/ProjectDetail';
import ScrollToTop from './Components/ScrollToTop';
import Footer from './Components/Footer/Footer';
import AboutUs from './Components/AboutUs/AboutUs';
import WhatsAppBtn from './Components/WhatsAppBtn/WhatsAppBtn';
import HomeModal from './Components/HomeModal/HomeModal';
function App() {

  return (
    <Router>
      <ScrollToTop />
      <Navigation />
      <HomeModal />
      <Routes>
        <Route path="/" element={<HomeRoutes />} />
        <Route path="/project/:slug" element={<ProjectDetail />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
      <WhatsAppBtn />
    </Router>
  )
}

export default App
