import React from 'react';
import './styles.scss';
import SVGListIcon from './SVGListIcon';

export default function ListResultCard():JSX.Element {
  return (
    <a href="https://www.link.com" className="list-result-card" target="_blank" rel="noreferrer">
      <div className="left-side">
        <img className="thumbnail" src="https://i.ytimg.com/vi/1CptfMEEC8g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwRXBXzlEglP3_Sj4W2GRWZs-NVw" alt="video thumbnail" />
        <span className="list-count">
          205
          <SVGListIcon styles={{ width: '50px', height: '50px', fill: 'white' }} />
        </span>
      </div>
      <div className="right-side">
        <h3 className="clamp-text title">List Title</h3>
        <div className="video-info">
          <p>Channel Name</p>
        </div>
        <p className="clamp-text description">Song name 1</p>
        <p className="clamp-text description">Song name 2</p>
        <button type="button" className="view-list-btn">VIEW FULL PLAYLIST</button>
      </div>
    </a>
  );
}
