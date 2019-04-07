import React, {
  useCallback,
  useState,
  useEffect,
} from 'react';

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

          if (queue.length > 0) {
            // buffer.appendBuffer(queue.shift());
          }
        });

        buffer.addEventListener('error', (e) => {
          console.log('error', e);
        });
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

function handleSourceOpen(e, queue) {
  console.log(123, 3);
  const mediaSource = e.target;
  const mime = 'video/mp4; codecs="avc1.64001e"';
  const buffer = mediaSource
    .addSourceBuffer(mime);

  buffer.addEventListener('updateend', () => {
    console.log(123, 333);
  });

  buffer.addEventListener('update', function() { // Note: Have tried 'updateend'
    if (queue.length > 0 && !buffer.updating) {
      console.log(123, 4);
      buffer.appendBuffer(queue.shift());
    }
  });

  setTimeout(() => {
    buffer.appendBuffer(queue.shift());
  }, 5000);
}
