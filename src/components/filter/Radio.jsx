import React from 'react';

const Radio = ({active, children, onChange }) => {
  return (
    <label className="filter">
      <input
        checked={active}
        type="radio"
        name="filter"
        className="filter__radio"
          onChange={e => {
           onChange();
          }}
      />
      <span
        className={`filter__label--${children.toLowerCase()}`}
      >
        {children}
      </span>
    </label>
  );
};

export default Radio;
