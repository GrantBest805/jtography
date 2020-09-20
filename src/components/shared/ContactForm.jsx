import React from 'react';

const ContactForm = props => {
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    console.log(state);
  };

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
        <form
          name="contact"
          method="post"
          data-netlify="true"
          action="#"
          onSubmit={handleSubmit}
        >
          <div className="row">
            <div className="col-6 col-12-mobile">
              <input
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
              />
            </div>
            <div className="col-6 col-12-mobile">
              <input
                type="text"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />
            </div>
            <div className="col-12">
              <textarea
                name="message"
                placeholder="Message"
                onChange={handleChange}
              />
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
