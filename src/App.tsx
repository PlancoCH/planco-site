import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Team from './pages/Team';
import Project from './pages/Project';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/team" element={<Team />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
