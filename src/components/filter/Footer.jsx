import './Footer.css';
import React from 'react';
import FilterRadio from './FilterRadio';

const Footer = () => (
  <fieldset className="filters">
    {/* legend groups related elements in a a form */}
    <legend className="filters__title">Show:</legend>
    <FilterRadio filter='SHOW_ALL'>
      All
    </FilterRadio>
    <FilterRadio filter='SHOW_ACTIVE'>
      Active
    </FilterRadio>
    <FilterRadio filter='SHOW_COMPLETED'>
      Completed
    </FilterRadio>
  </fieldset>
);

export default Footer;

