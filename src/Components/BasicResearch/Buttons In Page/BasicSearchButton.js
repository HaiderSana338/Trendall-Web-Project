// BasicSearchButton.js
import React from 'react';

const BasicSearchButton = ({ onClick, buttonText, buttonUrl, infoImageUrl }) => {
  return (
    <div className="basicSearchButtonHolder">
      <div className="basicSearchButton" onClick={() => window.location = buttonUrl}>
        {buttonText}
      </div>
      <div className="basicSearchButton" style={{ width: '20px', paddingLeft: '5px', marginLeft: '10px' }}>
        <img className='information-icon-image' src='https://cdn-icons-png.flaticon.com/128/151/151776.png' alt="Information" />
      </div>
    </div>
  );
}

export default BasicSearchButton;
