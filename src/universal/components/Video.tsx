import React, {
  useCallback,
  useState,
  useEffect,
} from 'react';
import styled from 'styled-components';

import axios from '@@modules/axios';
// import { sendPayment } from '@@modules/apis';

const endpoint = 'http://localhost:4001';

const StyledMenu = styled.div`
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const Pay = ({
  handleClickPay,
}) => {
  return (
    <div onClick={handleClickPay}>
      pay to fail
    </div>
  );
};

const PaySucceed = ({
  handleClickPaySucceed,
}) => {
  return (
    <div onClick={handleClickPaySucceed}>
      pay to succeed
    </div>
  );
}

const VideoStatus = ({
  videoStatus,
}) => {
  return (
    <div>
      <p>
        Video Status
      </p>
      <p>
        {videoStatus.videoPos}
      </p>
      <p>
        {videoStatus.flag}
      </p>
    </div>
  )
}

const Addr = ({
  addr,
}) => {
  return (
    <div>
      <p>Address</p>
      <p>{addr}</p>
    </div>
  );
};

const Menus = ({
  handleClickMenu,
  menu,
}) => {
  return !!menu && menu.map((m) => {
    return (
      <StyledMenu
        key={m}
        onClick={handleClickMenu}
      >
        {m}
      </StyledMenu>
    );
  });
};

const Video = () => {
  const queue: any[] = [];
  let mediaSource;
  let buffer;

  const [ data, setData ] = useState({});
  const [ videoStatus, setVideoStatus ] = useState({
    videoPos: 0,
    flag: false,
  });

  const handleClickPay = useCallback(() => {
    console.log('addr', data.payment_address_of_the_seller);
    axios.post(`${endpoint}/apis/pay`, {
      targetAddress: data.payment_address_of_the_seller,
    })
      .then((res) => {
        console.log(123, res);
      });
  }, [ data ]);

  const handleClickPaySucceed = useCallback(async () => {
    const value = await axios.post(`${endpoint}/apis/pay-succeed`, {
      targetAddress: data.payment_address_of_the_seller,
    })
    console.log(123, value);
  }, [ data ]);

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
        console.log('flag', data, flag);
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
    <>
      <Addr
        addr={data.payment_address_of_the_seller}
      />
      <Menus
        handleClickMenu={handleClickMenu}
        menu={data.menu}
      />
      <VideoStatus
        videoStatus={videoStatus}
      />
      <Pay
        handleClickPay={handleClickPay}
      />
      <PaySucceed
        handleClickPaySucceed={handleClickPaySucceed}
      />
      <video
        controls
        id="videoPlayer"
        muted
        preload="all"
      />
    </>
  );
};

export default Video;

const togglePlay = (toggle) => {
  const videoPlayer = document.getElementById('videoPlayer') as any;

  if (toggle) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
}