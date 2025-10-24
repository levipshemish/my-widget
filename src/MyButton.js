import React from 'react';

const MyButton = ({ campaign }) => {
  const handleClick = () => {
    alert(`You clicked the button for campaign: ${campaign}`);
  };

  return (
    <button
      style={{
        background: '#0070f3',
        color: '#fff',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
      }}
      onClick={handleClick}
    >
      Donate to {campaign}
    </button>
  );
};

export default MyButton;
