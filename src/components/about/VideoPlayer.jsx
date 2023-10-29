import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = () => {
    const getVideoId = (url) => {
        if (url) {
          const videoId = url.split('/').pop();
          return videoId;
        }
        return null;
      };
      

  const videoUrl = 'https://youtu.be/9xwazD5SyVg';  
  const videoId = getVideoId(videoUrl);

  const opts = {
    height: '340',
    width: '480',
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (e) => {
    e.target.pauseVideo();
  };

  return <YouTube videoId={videoId} opts={opts} onReady={onReady} className="youtube-video"/>;
};

export default VideoPlayer;
