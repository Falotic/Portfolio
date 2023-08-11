function Contact() {
  return (
    <>
      <section id="contact" className="contact">
        <div className="conteiner">
          <div className="contact__content">
            <div className="contact__title">
              <p>contact</p>
              <h3>Don't be shy! Hit me up! 👇</h3>
            </div>
            <div className="contact__icons">
              <div className="contact__icon-box">
                <span>
                  <i className="bi bi-globe-europe-africa"></i>
                </span>
                <div className="contact__info">
                  <h3>Location</h3>
                  <p>Zamora,Spain</p>
                </div>
              </div>

              <div className="contact__icon-box">
                <span>
                  <i className="bi bi-envelope-paper-fill"></i>
                </span>
                <div className="contact__info">
                  <h3>Mail</h3>
                  <a href="mailto:david.migueldev@gmail.com">
                    david.migueldev@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
