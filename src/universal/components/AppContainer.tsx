import React, {
  useCallback,
  useState,
  useEffect,
} from 'react';

import App from './App';
import axios from '@@modules/axios';

const endpoint = 'http://localhost:4001';

const AppContainer = () => {
  const queue: any[] = [];
  let mediaSource;
  let buffer;

  const [ data, setData ] = useState({});
  const [ videoStatus, setVideoStatus ] = useState({
    videoPos: 0,
    flag: false,
  });
  const [ paymentStatus, setPaymentStatus ] = useState('');

  const handleClickPay = useCallback(() => {
    axios.post(`${endpoint}/apis/pay`, {
      targetAddress: data.payment_address_of_the_seller,
    })
      .then((res) => {
        console.log(123, res);
      });
  }, [ data ]);

  const handleClickPaySucceed = useCallback(async () => {
    const result = await axios.post(`${endpoint}/apis/pay-succeed`, {
      targetAddress: data.payment_address_of_the_seller,
    });

    // setPaymentStatus(result);
  }, [ data, paymentStatus ]);

  const handleClickMenu = useCallback((e) => {
    togglePlay(true);
    axios.get(`${endpoint}/apis/fake-video`).then();
  }, []);

  useEffect(() => {
    const videoPlayer = document.getElementById('videoPlayer');

    if (videoPlayer) {
      console.log('Creating socket connection...', !!videoPlayer, endpoint);

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

      const socket = io.connect(endpoint);
      socket.on('video', (data, last) => {
        console.log('[socket] data', data, last);
        queue.push(data);
        if (last) {
          trigger();
        }
      });

      socket.on('fake-video', (videoPos, flag) => {
        // console.log('flag', data, flag);
        setVideoStatus({
          videoPos,
          flag,
        });

        if (!flag) {
          togglePlay(false);
        } else {
          togglePlay(true);
        }
      });

      fetch(`${endpoint}/video`).then();
    }

    axios.post(`${endpoint}/apis/handshake`)
      .then(({ data }) => {
        setData(data.data);
      });
  }, []);

  return (
    <App
      handleClickMenu={handleClickMenu}
      handleClickPay={handleClickPay}
      handleClickPaySucceed={handleClickPaySucceed}
      menu={data.menu}
      paymentAddr={data.payment_address_of_the_seller}
      paymentStatus={paymentStatus}
      videoStatus={videoStatus}
    />
  );
};

export default AppContainer;

const togglePlay = (toggle) => {
  const videoPlayer = document.getElementById('videoPlayer') as any;

  if (toggle) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
};
