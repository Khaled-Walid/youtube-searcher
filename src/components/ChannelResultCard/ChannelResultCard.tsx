import React from 'react';
import './styles.scss';

export interface ChannelResultCardProps {
  kind: 'youtube#channel',
  id: string;
  thumbnail: string;
  channelName: string;
  subs: string;
  vidoes: string;
  description: string;
}

export default function ChannelResultCard({
  id, thumbnail, channelName, subs, vidoes, description,
}:ChannelResultCardProps):JSX.Element {
  return (
    <a href={`https://www.youtube.com/user/${id}`} className="channel-result-card" target="_blank" rel="noreferrer">
      <div className="left-side">
        <div className="avatar">
          <img className="thumbnail" src={`${thumbnail}`} alt="avatar thumbnail" />
        </div>
      </div>
      <div className="right-side">
        <h3 className="clamp-text title">{channelName}</h3>
        <div className="channel-info">
          <p>{`${subs} subscribers`}</p>
          <p>{`${vidoes} videos`}</p>
        </div>
        <p className="clamp-text description">
          {description}
        </p>
      </div>
    </a>
  );
}
