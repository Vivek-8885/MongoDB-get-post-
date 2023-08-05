// Background.js
import React from 'react';

const Background = () => {
  return (
    <div style={{
      backgroundImage: "url('path/to/your/background-image.jpg')",
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      /* Add any other background styles you need */
    }}>
      {/* Your other content can go inside this component */}
    </div>
  );
};

export default Background;
