import React from 'react';
import './styles.scss';

export default function VideoResultCard():JSX.Element {
  return (
    <a href="https://www.link.com" className="video-result-card" target="_blank" rel="noreferrer">
      <div className="left-side">
        <img className="thumbnail" src="https://i.ytimg.com/vi/1CptfMEEC8g/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDwRXBXzlEglP3_Sj4W2GRWZs-NVw" alt="video thumbnail" />
      </div>
      <div className="right-side">
        <h3 className="clamp-text title">Video Title</h3>
        <div className="video-info">
          <p>Channel Name</p>
          <p>1.2M views</p>
          <p>1 year ago</p>
        </div>
        <p className="clamp-text description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          ultricies, nunc vel tincidunt lacinia, nunc nisl aliquam nisl, vel asdasd sa asd a s asa
        </p>

      </div>
    </a>
  );
}
