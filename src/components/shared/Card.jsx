import React, { useState } from 'react';
import Img from 'react-cool-img';

import Tilt from 'react-tilt';
import Fade from 'react-reveal/Fade';
import VizSensor from 'react-visibility-sensor';

const Card = props => {
  const [isVisible, setIsVisible] = useState(false);

  const handleChange = () => {
    setIsVisible(true);
  };
  return (
    <div className="card">
      <div className="image">
        <Img src={props.img} alt="" />
      </div>
    </div>
  );
};

export default Card;
