import React from 'react';
import './styles.scss';

export default function ChannelResultCard():JSX.Element {
  return (
    <a href="https://www.link.com" className="channel-result-card" target="_blank" rel="noreferrer">
      <div className="left-side">
        <div className="avatar">
          <img className="thumbnail" src="https://yt3.ggpht.com/5oUY3tashyxfqsjO5SGhjT4dus8FkN9CsAHwXWISFrdPYii1FudD4ICtLfuCw6-THJsJbgoY=s176-c-k-c0x00ffffff-no-rj" alt="avatar thumbnail" />
        </div>
      </div>
      <div className="right-side">
        <h3 className="clamp-text title">Channel Title</h3>
        <div className="channel-info">
          <p>111M subscribers</p>
          <p>4,500 videos</p>
        </div>
        <p className="clamp-text description">
          I make vidoes.
        </p>
      </div>
    </a>
  );
}
