import computer from '../img/computer.png';
import grow from '../img/grow.png';
import card from '../img/card.png';

const Features = () => {
  return (
    <section className="section" id="section--1">
      <div className="section__title">
        <h2 className="section__description">Features</h2>
        <h3 className="section__header">
          Everything you need in a modern bank and more.
        </h3>
      </div>

      <div className="features">
        {/* Row 1 */}
        <img
          src={computer}
          alt="Computer"
          className="features__img"
        />
        <div className="features__feature">
          <div className="features__icon">
            <svg><use xlinkHref="img/icons.svg#icon-monitor" /></svg>
          </div>
          <h5 className="features__header">100% digital bank</h5>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde alias
            sint quos? Accusantium a fugiat porro reiciendis saepe quibusdam
            debitis ducimus.
          </p>
        </div>

        {/* Row 2 */}
        <div className="features__feature">
          <div className="features__icon">
            <svg><use xlinkHref="img/icons.svg#icon-trending-up" /></svg>
          </div>
          <h5 className="features__header">Watch your money grow</h5>
          <p>
            Nesciunt quos autem dolorum voluptates cum dolores dicta fuga
            inventore ab? Nulla incidunt eius numquam sequi iste pariatur
            quibusdam!
          </p>
        </div>
        <img
          src={grow}
          alt="Plant"
          className="features__img"
        />

        {/* Row 3 */}
        <img
          src={card}
          alt="Credit card"
          className="features__img"
        />
        <div className="features__feature">
          <div className="features__icon">
            <svg><use xlinkHref="img/icons.svg#icon-credit-card" /></svg>
          </div>
          <h5 className="features__header">Free debit card included</h5>
          <p>
            Quasi, fugit in cumque cupiditate reprehenderit debitis animi enim
            eveniet consequatur odit quam quos possimus assumenda dicta fuga
            inventore ab.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;