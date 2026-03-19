const Modal = ({ onClose }) => {
  return (
    <>
      <div className="overlay" onClick={onClose} />
      <div className="modal">
        <button className="btn--close-modal" onClick={onClose}>
          &times;
        </button>
        <h2 className="modal__header">
          Open your bank account <br />
          in just <span className="highlight">5 minutes</span>
        </h2>
        <form className="modal__form" onSubmit={(e) => e.preventDefault()}>
          <label>First Name</label>
          <input placeholder="." type="text" />
          <label>Last Name</label>
          <input placeholder="." type="text" />
          <label>Email Address</label>
          <input placeholder="." type="email" />
          <button type="submit" className="btn">
            Next step &rarr;
          </button>
        </form>
      </div>
    </>
  );
};

export default Modal;