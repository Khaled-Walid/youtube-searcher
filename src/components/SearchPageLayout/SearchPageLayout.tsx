import React from 'react';
import SearchHeader from '../SearchHeader';
import SearchResultsList from '../SearchResultsList';
import mockList from '../SearchResultsList/mockList';
import SearchSecHeader from '../SearchSecHeader';
import './styles.scss';

interface SearchPageLayoutData {
  resultsNum: string;
}

interface SearchPageLayoutProps {
  data?: SearchPageLayoutData | null
}

export default function SearchPageLayout({ data }:SearchPageLayoutProps):JSX.Element {
  return (
    <div>
      <SearchHeader />
      <main className="main">
        <SearchSecHeader resultsNum={data?.resultsNum ?? '0'} />
        <SearchResultsList data={mockList} />
      </main>
    </div>
  );
}
