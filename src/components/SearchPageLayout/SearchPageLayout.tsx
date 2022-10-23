import React from 'react';
import { ChannelResultCardProps } from '../ChannelResultCard/ChannelResultCard';
import { ListResultCardProps } from '../ListResultCard/ListResultCard';
import LoadingSpinner from '../LoadingSpinner';
import SearchHeader from '../SearchHeader';
import SearchResultsList from '../SearchResultsList';
import SearchSecHeader from '../SearchSecHeader';
import { VideoResultCardProps } from '../VideoResultCard/VideoResultCard';
import './styles.scss';

export interface SearchPageLayoutData {
  secHeaderData: { resultsNum: string; }
  resultsListData: (VideoResultCardProps | ChannelResultCardProps | ListResultCardProps)[]
}

export interface SearchPageLayoutProps {
  data?: SearchPageLayoutData | null
  searchHandler: (query:string) => void
}

export default function SearchPageLayout(
  { data, searchHandler }
  : SearchPageLayoutProps,
): JSX.Element {
  return (
    <div>
      <SearchHeader searchHandler={searchHandler} />
      <main className="main">
        {
          data ? (
            <>
              <SearchSecHeader resultsNum={data?.secHeaderData.resultsNum ?? '0'} />
              <SearchResultsList data={data?.resultsListData} />
            </>
          ) : <LoadingSpinner />
        }

      </main>
    </div>
  );
}
