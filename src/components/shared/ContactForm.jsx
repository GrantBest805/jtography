import React from 'react';

const ContactForm = props => {
  return (
    <section id="contact" className="four">
      <div className="container">
        <header>
          <h2>Contact</h2>
        </header>

        <p>
          If you’d like to work together for a wedding, engagement, graduation
          portraits, business promo video or just about anything, please send me
          an email and I’ll respond as promptly as possible. All photos are
          available for digital download or physical prints.
        </p>
        <form method="post" action="#">
          <div className="row">
            <div className="col-6 col-12-mobile">
              <input type="text" name="name" placeholder="Name" />
            </div>
            <div className="col-6 col-12-mobile">
              <input type="text" name="email" placeholder="Email" />
            </div>
            <div className="col-12">
              <textarea name="message" placeholder="Message" />
            </div>
            <div className="col-12">
              <input type="submit" value="Send Message" />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
