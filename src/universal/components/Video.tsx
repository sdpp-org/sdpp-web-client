import React, {
  useCallback,
  useState,
  useEffect,
} from 'react';

import axios from '@@modules/axios';

const endPoint = 'http://localhost:4001';

const Video = () => {
  const queue: any[] = [];
  let mediaSource;
  let buffer;

  useEffect(() => {
    const videoPlayer = document.getElementById('videoPlayer');

    if (videoPlayer) {
      console.log('Creating socket connection...', !!videoPlayer, endPoint);

      mediaSource = new MediaSource();
      videoPlayer['src'] = window.URL.createObjectURL(mediaSource);
      const mime = 'video/webm; codecs="vorbis,vp8"';

      const trigger = () => {
        console.log('triggered, queue size: %s', queue.length);
        buffer.appendBuffer(queue.shift())
      };

      mediaSource.addEventListener('sourceopen', () => {
        console.log('sourceopen queue:', queue);

        buffer = mediaSource.addSourceBuffer(mime);
        buffer.addEventListener('updateend', () => {
          console.log('updateend', mediaSource.sourceBuffers, queue);
        });

        buffer.addEventListener('error', (e, ...args) => console.log('error', e, args));
        buffer.addEventListener('abort', () => console.log('abort'));
      });

      const socket = io.connect(endPoint);
      socket.on('video', (data, last) => {
        console.log('[socket] data', data, last);
        queue.push(data);
        if (last) {
          trigger();
        }
      });

      fetch(`${endPoint}/video`).then();
    }

    axios.get('http://httpbin.org')
      .then((d) => {
      })
  }, []);

  return (
    <>
      <video
        controls
        id="videoPlayer"
        muted
        preload="all"
      >
      </video>
    </>
  );
};

export default Video;
