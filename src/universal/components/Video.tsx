import React, {
  useState,
  useEffect,
} from 'react';

const endPoint = 'http://localhost:4001';

const Video = () => {
  useEffect(() => {
    const videoPlayer = document.getElementById('videoPlayer');
    console.log('Creating socket connection...', !!videoPlayer, endPoint);

    const mediaSource = new MediaSource();
    if (videoPlayer) {
      // console.log('Video element is found');
      // videoPlayer['src'] = window.URL.createObjectURL(mediaSource);
    }

    const socket = io.connect(endPoint);
    socket.on('video', (data) => {
      console.log('Receiving video: %o', data);
    });
  }, []);

  return (
    <video
      autoPlay
      controls
      id="videoPlayer"
      muted
    >
      <source
        src={`${endPoint}/video`}
        type="video/mp4"
      />
    </video>
  );
};

export default Video;
