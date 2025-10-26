import React from 'react';
import { createRoot } from 'react-dom/client';
import MyButton from './MyButton';

const MyFundraiser = {
  createButton: ({ campaign, containerId }) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const root = createRoot(container);
    root.render(<MyButton campaign={campaign} />);
  },
};

export default MyFundraiser;
