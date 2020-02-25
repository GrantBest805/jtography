import React, { useState } from 'react';

import Tilt from 'react-tilt';
import Fade from 'react-reveal/Fade';
import VizSensor from 'react-visibility-sensor';

const Card = props => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = () => {
    setIsVisible(true);
  };
  return (
    <VizSensor partialVisibility offset={{ top: 1 }} onChange={handleChange}>
      <Fade
        top
        when={isVisible}
        duration={1000}
        distance="30px"
        delay={props.delay}
      >
        <div>
          <Tilt
            options={{
              reverse: false,
              max: 8,
              perspective: 1000,
              scale: 1,
              speed: 300,
              transition: true,
              axis: null,
              reset: true,
              easing: 'cubic-bezier(.03,.98,.52,.99)',
            }}
          >
            <div className="card">
              <article className="item">
                <a href="/#" className="image fit">
                  <img src={props.img} alt="" />
                </a>
                <header>
                  <h3>{props.category || 'Category'}</h3>
                </header>
              </article>
            </div>
          </Tilt>
        </div>
      </Fade>
    </VizSensor>
  );
};

export default Card;
