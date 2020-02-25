import React from 'react';

const ContactForm = props => {
  return (
    <section id="contact" className="four">
      <div className="container">
        <header>
          <h2>Contact</h2>
        </header>

        <p>
          I'm baby banjo hexagon messenger bag, tacos art party stumptown austin
          keffiyeh 90's pitchfork subway tile la croix. 8-bit typewriter kitsch
          selvage messenger bag plaid trust fund venmo hexagon semiotics irony
          tacos pinterest pabst. Twee tumblr la croix, hashtag salvia cray
          glossier shoreditch 90's food truck. Chia cloud bread YOLO,
          thundercats viral iPhone swag gochujang la croix forage. Vaporware
          mlkshk locavore organic. Artisan la croix cronut, hashtag poutine cray
          selfies heirloom.
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
