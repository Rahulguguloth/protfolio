import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Loader from './components/Loader';
import EnterScreen from './components/EnterScreen';
import Footer from './components/Footer';
import Skills from './components/Skills';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Helmet } from 'react-helmet-async';

function App() {
  const [started, setStarted] = useState(false);
  const [showLoader, setShowLoader] = useState(false);
  const [initialCheckDone, setInitialCheckDone] = useState(false);

  useEffect(() => {
    const isBot = /bot|crawl|spider|slurp|bing/i.test(navigator.userAgent);
    const isHome = window.location.pathname === '/';
    const alreadyVisited = sessionStorage.getItem('alreadyVisited');

    if (isBot) {
      setStarted(true);
    } else if (isHome && !alreadyVisited) {
      setStarted(false);
    } else {
      setStarted(true);
    }
    setInitialCheckDone(true);
  }, []);

  const handleStart = () => {
    sessionStorage.setItem('alreadyVisited', 'true');
    setStarted(true);
    setShowLoader(true);
  };

  if (!initialCheckDone) return null;

  return (
    <>
      {/* Global SEO Metadata */}
      <Helmet>
        <title>Guguloth Rahul | AI & Data Science Student & Developer</title>
        <meta name="description" content="Official portfolio of Guguloth Rahul, a student and developer specializing in AI & Data Science, with a foundation in Mechanical Engineering. Explore projects, skills, and experience." />
        <link rel="canonical" href="https://guguloth-rahul.vercel.app/" />

        <meta property="og:title" content="Guguloth Rahul | AI & Data Science Student" />
        <meta property="og:description" content="Official portfolio of Guguloth Rahul, specializing in AI & Data Science and software development." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://guguloth-rahul.vercel.app/" />
        <meta property="og:image" content="https://guguloth-rahul.vercel.app/profile_pic.png" />
        <meta property="og:site_name" content="Guguloth Rahul's Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@GugulothRahul" />
        <meta name="twitter:title" content="Guguloth Rahul | AI & Data Science Student" />
        <meta name="twitter:description" content="Official portfolio of Guguloth Rahul, specializing in AI & Data Science and software development." />
        <meta name="twitter:image" content="https://guguloth-rahul.vercel.app/profile_pic.png" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Guguloth Rahul",
              "url": "https://guguloth-rahul.vercel.app/",
              "sameAs": [
                "https://github.com/GugulothRahul"
              ],
              "jobTitle": "Student & Developer",
              "worksFor": {
                "@type": "Organization",
                "name": "Self-Learner / Personal Projects"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Government Polytechnic, Mahabubnagar & B.Tech in AI & DS, Hyderabad"
              },
              "image": "https://guguloth-rahul.vercel.app/profile_pic.png",
              "description": "Guguloth Rahul is a student and developer with a strong foundation in Mechanical Engineering and AI & Data Science, passionate about software development, problem-solving, and building impactful digital solutions."
            }
          `}
        </script>
      </Helmet>

      {/* UI Flow */}
      {!started ? (
        <EnterScreen onEnter={handleStart} />
      ) : showLoader ? (
        <Loader onComplete={() => setShowLoader(false)} />
      ) : (
        <Router>
          <div className="bg-white dark:bg-black">
            <Navbar />
            <Routes>
              <Route path="/" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/skills" element={<Skills />} />
            </Routes>
            <Footer />
            <SpeedInsights />
          </div>
        </Router>
      )}
    </>
  );
}

export default App;
