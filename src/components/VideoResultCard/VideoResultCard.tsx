import React from 'react';
import './styles.scss';

export interface VideoResultCardProps {
  kind: 'youtube#video',
  id: string;
  thumbnail: string;
  duration: string;
  title: string;
  channelName: string;
  views: string;
  date: string;
  description: string;
}

export default function VideoResultCard({
  id, thumbnail, duration, title, channelName, views, date, description,
}:VideoResultCardProps):JSX.Element {
  return (
    <a href={`https://www.youtube.com/watch?v=${id}`} className="video-result-card" target="_blank" rel="noreferrer">
      <div className="left-side">
        <img className="thumbnail" src={`${thumbnail}`} alt="video thumbnail" />
        <span className="duration">{duration}</span>
      </div>
      <div className="right-side">
        <h3 className="clamp-text title">{title}</h3>
        <div className="video-info">
          <p>{channelName}</p>
          <p>{`${views} views`}</p>
          <p>{date}</p>
        </div>
        <p className="clamp-text description">
          {description}
        </p>
      </div>
    </a>
  );
}
