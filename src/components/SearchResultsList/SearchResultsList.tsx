/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import ChannelResultCard from '../ChannelResultCard';
import { ChannelResultCardProps } from '../ChannelResultCard/ChannelResultCard';
import ListResultCard from '../ListResultCard';
import { ListResultCardProps } from '../ListResultCard/ListResultCard';
import VideoResultCard from '../VideoResultCard';
import { VideoResultCardProps } from '../VideoResultCard/VideoResultCard';
import './styles.scss';

export interface SearchResultsListProps {
  data: (VideoResultCardProps | ChannelResultCardProps | ListResultCardProps)[]
}

function renderListItem(item: (
  VideoResultCardProps
  | ChannelResultCardProps
  | ListResultCardProps
)): JSX.Element | undefined {
  if (item.kind === 'youtube#video') {
    return <li key={item.id}><VideoResultCard {...item} /></li>;
  }
  if (item.kind === 'youtube#channel') {
    return <li key={item.id}><ChannelResultCard {...item} /></li>;
  }
  if (item.kind === 'youtube#playlist') {
    return (
      <li key={item.id}>
        <ListResultCard {...item} />
      </li>
    );
  }
  return undefined;
}

export default function SearchResultsList({ data }:SearchResultsListProps):JSX.Element {
  return (
    data.length > 0 ? (
      <ul className="search-results-list">
        {data.map(renderListItem)}
      </ul>
    ) : <div className="search-results-list search-results-list__empty"><span>No results!</span></div>
  );
}
