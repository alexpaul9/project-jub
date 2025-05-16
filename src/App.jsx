// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Components/Layout';

// Pages
// import Home from './Pages/Home';
// import About from './Pages/About';
import Sustainability from './Pages/Sustainability';
import Investors from './Pages/Investors';
import Aboutus from './Pages/Aboutus';
import Brands from './Pages/Brands';
import Dominos from './Pages/Brands/Dominos';
import Popeyes from './Pages/Brands/Popeyes';
import Dunkin from './Pages/Brands/Dunkin';
import Hongs from './Pages/Brands/Hongs';
import FranchiseInfo from './Pages/Brands/FranchiseInfo';
import Leadership from './Pages/Leadership';
import Career from './Pages/Career';
import IFE from './Pages/IFE';
// import CGD from './Pages/CGD';
import Strategy from './Pages/Strategy';
import Contact from './Pages/Contact';
import CSR from './Pages/CSR';
import Newsroom from './Pages/Newsroom';
// import Career from './Pages/Career';
// import Newsroom from './Pages/Newsroom';
// import Contact from './Pages/Contact';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url,
  ).toString();

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Aboutus />} />
          <Route path="/about-us" element={<Aboutus />} />
          <Route path="/governance" element={<Aboutus />} />
          <Route path="/leadership" element={<Leadership />} />
          <Route path="/brands" element={<Brands />} />
          <Route path="/dominos" element={<Dominos />} />
          <Route path="/coffy" element={<Aboutus />} />
          <Route path="/popeyes" element={<Popeyes />} />
          <Route path="/dunkin" element={<Dunkin />} />
          <Route path="/hongs-kitchen" element={<Hongs />} />
          <Route path="/franchise-info" element={<FranchiseInfo />} />
          <Route path="/immersive-food-experience" element={<IFE />} />
          <Route path="/strategy" element={<Strategy />} />
          <Route path="/sustainability" element={<Sustainability />} />
          <Route path="/investors" element={<Investors />} />
          <Route path="/career" element={<Career />} />
          {/* <Route path="/career-growth-and-development" element={<CGD />} /> */}
          <Route path="/csr" element={<CSR />} />
          <Route path="/newsroom" element={<Newsroom />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
