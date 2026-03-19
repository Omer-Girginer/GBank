import { useState, useEffect, useCallback } from 'react';
import n1 from '../img/n1.png';
import n2 from '../img/n2.png';
import n3 from '../img/n3.png';
import n4 from '../img/n4.png';

const slides = [
  { src: n1, alt: 'Photo 1' },
  { src: n2, alt: 'Photo 2' },
  { src: n3, alt: 'Photo 3' },
  { src: n4, alt: 'Photo 4' },
];

const Slider = () => {
  const [curSlide, setCurSlide] = useState(0);
  const maxSlide = slides.length;

  const nextSlide = useCallback(() => {
    setCurSlide((s) => (s === maxSlide - 1 ? 0 : s + 1));
  }, [maxSlide]);

  const prevSlide = useCallback(() => {
    setCurSlide((s) => (s === 0 ? maxSlide - 1 : s - 1));
  }, [maxSlide]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, [nextSlide, prevSlide]);

  return (
    <section className="section" id="section--3">
      <div className="section__title section__title--testimonials">
        <h2 className="section__description">Not sure yet?</h2>
        <h3 className="section__header">
          Millions of Bankists are already making their lifes simpler.
        </h3>
      </div>

      <div className="slider">
        {slides.map((slide, i) => (
          <div
            key={i}
            className="slide"
            style={{ transform: `translateX(${(i - curSlide) * 100}%)` }}
          >
            <img src={slide.src} alt={slide.alt} />
          </div>
        ))}

        <button className="slider__btn slider__btn--left" onClick={prevSlide}>
          &larr;
        </button>
        <button className="slider__btn slider__btn--right" onClick={nextSlide}>
          &rarr;
        </button>

        <div className="dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`dots__dot ${curSlide === i ? 'dots__dot--active' : ''}`}
              data-slide={i}
              onClick={() => setCurSlide(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Slider;