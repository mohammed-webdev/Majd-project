import Footer from "./Components/Footer"
import Navbar from './Components/Navbar';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "./pages/Contact";


const App = () => {
  return (
    <Router>
      <div>
        <>
          <Navbar />
          <main>
            <div>

              <Routes>
                <Route path='' element={<Home />} />
                <Route path='contact' element={<Contact />} />
              </Routes>
            </div>

          </main>

          <Footer />
        </>
      </div>
    </Router>
  );
};

export default App;
