import logo from '../img/logo.png';

const links = [
  'About', 'Pricing', 'Terms of Use',
  'Privacy Policy', 'Careers', 'Blog', 'Contact Us',
];

const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__nav">
        {links.map((text) => (
          <li key={text} className="footer__item">
            <a className="footer__link" href="#">{text}</a>
          </li>
        ))}
      </ul>
      <img src={logo} alt="Logo" className="footer__logo" />
      <p className="footer__copyright">&copy; Made by Omer GIRGINER</p>
    </footer>
  );
};

export default Footer;