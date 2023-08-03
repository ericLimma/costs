import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, Company, Contact, Projects } from './components/pages';
import { Header, Footer, Container } from './components/layout'

function App() {
  return (
    <Router>
      <Header />
      <Container customClass="min-height">
        <Routes>          
          <Route path='/company' element={<Company />} />
          <Route path='/' exact element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newprojects' element={<Projects />} />
        </Routes>
      </Container>

      <Footer />
    </Router>
  );
}

export default App;
