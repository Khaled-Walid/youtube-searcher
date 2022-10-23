import React from 'react';
import './styles.scss';
import { SVGSearchIcon } from './SVGSearchIcon';
import { SVGYTLogo } from './SVGYTLogo';

export default function SearchHeader({ searchHandler }:
{ searchHandler: (query: string) => void }): JSX.Element {
  const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <header className="header">
      <SVGYTLogo styles={{ width: '100px' }} />
      <div className="search">
        <input type="text" placeholder="Search" className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
        <button type="button" className="search-icon" onClick={() => searchHandler(searchQuery)}>
          <SVGSearchIcon styles={{ width: '25px' }} />
        </button>
      </div>
    </header>
  );
}
