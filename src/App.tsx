import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './index.css'; 
import UniversityProfile from './components/About';
import Institutecard from './components/Institutecard'
// import Institute from './components/Institute';
// import About from './components/About'; 
// import Stepper from './components/Stepper';

// import './App.css';

const App = () => {
  return (
    <Router>
   <div className="bg-[url('/images/bgimage2.png')] bg-cover w-1440px h-1200px p-5  ">
        <div
          className="bg-cover rounded-lg border border-gray-300 overflow-y-hidden "
          style={{
            backgroundImage: 'url(/images/blur-bg.png)',
          }}
        > 
        
        <Navbar />
          <Routes>
          {/* <Route path="/" element={<Stepper />} /> */}
          {/* <Route path="/" element={<Institute />} /> */}


            <Route path="/" element={<Institutecard />} />
            <Route path="/profile" element={<UniversityProfile />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;