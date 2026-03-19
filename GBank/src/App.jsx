import { useState, useEffect } from 'react';
import Header from './components/Header';
import Features from './components/Features';
import Operations from './components/Operations';
import Slider from './components/Slider';
import Modal from './components/Modal';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e?.preventDefault();
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape' && isModalOpen) closeModal();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [isModalOpen]);

  // Sticky nav
  useEffect(() => {
    const nav = document.querySelector('.nav');
    const header = document.querySelector('.header');
    if (!nav || !header) return;
    const navHeight = nav.getBoundingClientRect().height;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) nav.classList.add('sticky');
        else nav.classList.remove('sticky');
      },
      { root: null, threshold: 0, rootMargin: `-${navHeight}px` }
    );
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  // Section reveal
  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.remove('section--hidden');
          obs.unobserve(entry.target);
        });
      },
      { root: null, threshold: 0.1 }
    );
    sections.forEach((s) => {
      s.classList.add('section--hidden');
      observer.observe(s);
    });
    return () => observer.disconnect();
  }, []);



  // Nav smooth scroll (event delegation)
  const handleNavClick = (e) => {
    e.preventDefault();
    if (
      e.target.classList.contains('nav__link') &&
      !e.target.classList.contains('nav__link--btn')
    ) {
      const id = e.target.getAttribute('href');
      document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Nav hover fade
  const handleNavHover = (e, opacity) => {
    if (!e.target.classList.contains('nav__link')) return;
    const nav = e.target.closest('.nav');
    nav.querySelectorAll('.nav__link').forEach((el) => {
      if (el !== e.target) el.style.opacity = opacity;
    });
    const logo = nav.querySelector('img');
    if (logo) logo.style.opacity = opacity;
  };

  return (
    <>
      <Header
        onScrollTo={() =>
          document.querySelector('#section--1').scrollIntoView({ behavior: 'smooth' })
        }
        onOpenModal={openModal}
        onNavClick={handleNavClick}
        onNavMouseOver={(e) => handleNavHover(e, 0.5)}
        onNavMouseOut={(e) => handleNavHover(e, 1)}
      />

      <Features />
      <Operations />
      <Slider />

      <section className="section section--sign-up">
        <div className="section__title">
          <h3 className="section__header">
            The best day to join Bankist was one year ago. The second best is today!
          </h3>
        </div>
        <button className="btn btn--show-modal" onClick={openModal}>
          Open your free account today!
        </button>
      </section>

      <Footer />

      {isModalOpen && <Modal onClose={closeModal} />}
    </>
  );
}

export default App;