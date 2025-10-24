import React from 'react';
import ReactDOM from 'react-dom';
import MyButton from './MyButton';

// Expose globally
window.MyFundraiser = {
  createButton: ({ campaign, containerId }) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    ReactDOM.render(<MyButton campaign={campaign} />, container);
  },
};
