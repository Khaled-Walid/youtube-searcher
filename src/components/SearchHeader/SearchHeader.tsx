import React from 'react';
import './styles.scss';
import { SVGSearchIcon } from './SVGSearchIcon';
import { SVGYTLogo } from './SVGYTLogo';

export default function SearchHeader():JSX.Element {
  return (
    <header className="header">
      <SVGYTLogo styles={{ width: '100px' }} />
      <div className="search">
        <input type="text" placeholder="Search" className="search-input" />
        <button type="button" className="search-icon">
          <SVGSearchIcon styles={{ width: '25px' }} />
        </button>
      </div>
    </header>
  );
}
