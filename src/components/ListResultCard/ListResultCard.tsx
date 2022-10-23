/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import './styles.scss';
import SVGListIcon from './SVGListIcon';

export interface ListResultCardProps {
  kind: 'youtube#playlist',
  id: string;
  thumbnail: string;
  listItemsCount: string;
  title: string;
  channelName: string;
  description: string;

}

export default function ListResultCard({
  id, thumbnail, listItemsCount, title, channelName, description,
}:ListResultCardProps):JSX.Element {
  return (
    <a href={`https://www.youtube.com/playlist?list=${id}`} className="list-result-card" target="_blank" rel="noreferrer">
      <div className="left-side">
        <img className="thumbnail" src={`${thumbnail}`} alt="video thumbnail" />
        <span className="list-count">
          {listItemsCount}
          <SVGListIcon styles={{ width: '50px', height: '50px', fill: 'white' }} />
        </span>
      </div>
      <div className="right-side">
        <h3 className="clamp-text title">{title}</h3>
        <div className="video-info">
          <p>{channelName}</p>
        </div>
        <p className="clamp-text description">{description}</p>
        <button type="button" className="view-list-btn">VIEW FULL PLAYLIST</button>
      </div>
    </a>
  );
}
