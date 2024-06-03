// BasicSearchButton.js
import React from 'react';

const AdvancedButton = ({ buttonText}) => {
  return (
    <div className="basicSearchButtonHolder advancedButtonHolder">
      <div className="basicSearchButton advancedButton">
        <h4>{buttonText}</h4>
        <i class="advanced-toggle-down fa-solid fa-sort-down"></i>
      </div>
      
    </div>
  );
}

export default AdvancedButton;
