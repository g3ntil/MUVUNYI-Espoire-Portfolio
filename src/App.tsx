import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { HomePage } from './components/HomePage';
import { AboutPage } from './components/AboutPage';
import { ArtifactsPage } from './components/ArtifactsPage';
import { TimelinePage } from './components/TimelinePage';
import { EssayPage } from './components/EssayPage';
import { ContactPage } from './components/ContactPage';

// Google Fonts
const GOOGLE_FONTS_URL = 'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@300;400;500;700&display=swap';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Load Google Fonts
  if (!document.querySelector(`link[href="${GOOGLE_FONTS_URL}"]`)) {
    const link = document.createElement('link');
    link.href = GOOGLE_FONTS_URL;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }

  // Apply custom fonts to CSS variables
  document.documentElement.style.setProperty('--font-playfair', 'Playfair Display, serif');
  document.documentElement.style.setProperty('--font-lato', 'Lato, sans-serif');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'artifacts':
        return <ArtifactsPage />;
      case 'timeline':
        return <TimelinePage />;
      case 'essay':
        return <EssayPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .font-playfair {
          font-family: var(--font-playfair);
        }
        .font-lato {
          font-family: var(--font-lato);
        }
        
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #c1c1c1;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #a8a8a8;
        }

        /* Animation for page transitions */
        .page-transition {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="page-transition">
        {renderPage()}
      </main>
    </div>
  );
}