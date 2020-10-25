/************************************ YOU ARE IN DEV BRANCH *****************************************/

import React, { useState, useCallback } from 'react';

import Layout from '../components/Layout';
import PageFooter from '../components/PageFooter';
import SideBar from '../components/Sidebar/Index';
import { FaArrowDown } from 'react-icons/fa';
import ContactForm from '../components/shared/ContactForm';

import pic8 from '../assets/images/jimmy1.png';
import Scroll from '../components/Scroll';

import { SideBarContext } from '../context/sidebarContext';
import ImageGrid from '../components/ImageGrid';
import Modal from '../components/shared/Modal';

const sections = [
  { id: 'top', name: 'Intro', icon: 'fa-home' },
  { id: 'portfolio', name: 'Portfolio', icon: 'fa-th' },
  { id: 'about', name: 'About Me', icon: 'fa-user' },
  { id: 'contact', name: 'Contact', icon: 'fa-envelope' },
];

const IndexPage = () => {
  const [isHeaderOpen, toggleHeader] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const setToggleHeader = useCallback(() => {
    toggleHeader(!isHeaderOpen);
  }, [isHeaderOpen, toggleHeader]);

  return (
    <Layout>
      <SideBarContext.Provider
        value={{
          setToggleHeader,
          isHeaderOpen,
        }}
      >
        <SideBar sections={sections} />
      </SideBarContext.Provider>

      <div id="main">
        <section id="top" className="one dark cover">
          <div className="container">
            <header>
              <h2 className="alt">
                <span className="heading-primary-main">Jtography Media</span>{' '}
                <br />
                <span className="heading-primary-main-2">
                  Photography & Video Production
                </span>
              </h2>
            </header>

            <footer>
              <Scroll type="id" element={'portfolio'}>
                <div className="arrow-icon bounce">
                  <span>
                    <FaArrowDown />
                  </span>
                </div>
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
              Please enjoy a look into my ever expanding portfolio. All of these
              photos are available for digital download or physical prints. Feel
              free to contact me for further pricing and details.
            </p>

            <ImageGrid setSelectedImage={setSelectedImage} />
            {selectedImage && (
              <Modal
                selectedImage={selectedImage}
                setSelectedImage={setSelectedImage}
              />
            )}
          </div>
        </section>

        <section id="about" className="three">
          <div className="container">
            <header>
              <h2>About Me</h2>
            </header>
            <div className="about-me">
              <a href="/#" className="image featured">
                <img className="default-img" src={pic8} alt="" />
              </a>
              <p style={{ display: 'block' }}>
                You could classify me as a “big picture” kinda guy...pun
                intended. I like to take in the full scene and observe from a
                distance. I guess thats why I’m drawn to landscape and city
                scape photography. But that’s not to say I don’t appreciate and
                love the details in life. Having started in this passion in the
                days of actual film, ive learned to be very selective and
                precise with my shooting. Photography has been a life long hobby
                that has turned into something more. Videography is the next
                step. I’m truly inspired by the people and world around me, so I
                view everyday as an opportunity to take an amazing photo or
                shoot an amazing and emotional video.
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
