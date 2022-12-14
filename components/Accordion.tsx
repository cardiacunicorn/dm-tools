import { useState } from 'react';
import downChevron from '../assets/icons/directional/chevron-down-thick.png'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion_item">
      <div className="item_title" onClick={() => setIsActive(!isActive)}>
        <h2>{title}</h2>
        <div><img src={downChevron.src} alt="Open/Close" /></div>
      </div>
      {isActive && <div className="item_body">{content}</div>}
    </div>
  );
};

export default Accordion;