import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Product from './pages/Product';
import Team from './pages/Team';
import Project from './pages/Project';

type Page = 'home' | 'product' | 'team' | 'project';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');

  const navigate = (page: string) => {
    setCurrentPage(page as Page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'product': return <Product onNavigate={navigate} />;
      case 'team': return <Team onNavigate={navigate} />;
      case 'project': return <Project onNavigate={navigate} />;
      default: return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} onNavigate={navigate} />
      <div className="flex-1">
        {renderPage()}
      </div>
      <Footer onNavigate={navigate} />
    </div>
  );
}
