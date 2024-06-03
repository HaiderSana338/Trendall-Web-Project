import React from 'react';

const BasicSearchButtonNoLink = ({ onClick, buttonText }) => {
  return (
    <div className="basicSearchButtonHolder">
      <div className="basicSearchButton" onClick={onClick}>
        {buttonText}
      </div>
      <div className="basicSearchButton" style={{ width: '20px', paddingLeft: '5px', marginLeft: '10px' }}>
        <img className='information-icon-image' src='https://cdn-icons-png.flaticon.com/128/151/151776.png' alt="Information" />
      </div>
    </div>
  );
}

export default BasicSearchButtonNoLink;