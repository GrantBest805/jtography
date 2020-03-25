import React from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/Sidebar/index';
import { FaArrowDown } from 'react-icons/fa';
import Card from '../components/shared/Card';
import ContactForm from '../components/shared/ContactForm';

import spurs from '../assets/images/spurs.jpg';
import unionP from '../assets/images/unionP.jpg';
import nightCity from '../assets/images/night-city.jpg';
import dog from '../assets/images/dog-ocean.jpg';
import yFlower from '../assets/images/yellow-flower.jpg';
import bridge1 from '../assets/images/bridge1.jpg';
import pic8 from '../assets/images/jimmy1.png';
import Scroll from '../components/Scroll';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => {
  return (
    <Layout>
      <SideBar sections={sections} />

      <div id="main">
        <section id="top" className="one dark cover">
          <div className="container">
            <header>
              <h2 className="alt">
                Hi! I'm <strong>Jimmy</strong>
                <br />
                Photographer & Videographer
              </h2>
              <p>Check out my resent work below</p>
            </header>

            <footer>
              <Scroll type="id" element={'portfolio'}>
                <span className="arrow-icon">
                  <FaArrowDown />
                </span>
              </Scroll>
            </footer>
          </div>
        </section>

        <section id="portfolio" className="two">
          <div className="container">
            <header>
              <h2>Portfolio</h2>
            </header>

            <p>
              Live-edge hot chicken cardigan ramps, pickled hell of tote bag
              craft beer neutra iPhone whatever thundercats pop-up. Small batch
              helvetica pour-over swag. Slow-carb iPhone offal chia. Palo santo
              drinking vinegar lumbersexual cloud bread.
            </p>

            <div className="row">
              <div className="col-4 col-12-mobile">
                <Card category="Outdoors" img={spurs} />
                <Card category="Portraits" img={unionP} />
              </div>

              <div className="col-4 col-12-mobile">
                <Card category="Videos" img={nightCity} delay="300" />
                <Card category="something" img={dog} delay="300" />
              </div>

              <div className="col-4 col-12-mobile">
                <Card category="------" img={yFlower} delay="600" />
                <Card category="------" img={bridge1} delay="600" />
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="three">
          <div className="container">
            <header>
              <h2>About Me</h2>
            </header>
            <div className="about-me">
              <a href="/#" className="image featured">
                <img src={pic8} alt="" />
              </a>
              <p style={{ display: 'block' }}>
                Organic keytar tumblr keffiyeh. Knausgaard vinyl 3 wolf moon
                butcher franzen, you probably haven't heard of them master
                cleanse thundercats cred sriracha mumblecore meditation
                intelligentsia subway tile marfa.
              </p>
            </div>
          </div>
        </section>

        <ContactForm />
      </div>

      <PageFooter />
    </Layout>
  );
};

export default IndexPage;
