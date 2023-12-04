import React from 'react';

const Multiple = ({ name, number }) => {
  const listItems = Array.from({ length: number }, (_, index) => (
    <li key={index + 1}>{index + 1}</li>
  ));

  return (
    <>
      <h2>{name}</h2>
      <ul>{listItems}</ul>
    </>
  );
};

export default Multiple;
