import React from 'react';
import './styles.scss';

export default function SearchSecHeader():JSX.Element {
  return (
    <div className="second-header-wide">
      <h5 className="typography ">About 1,000,000,000 results filtered results</h5>
      <button type="button" className="filters">
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path fill="none" d="M0 0h24v24H0z" />
            <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
          </g>
        </svg>
        FILTER
      </button>
    </div>
  );
}
