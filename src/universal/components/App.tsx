import React, {
  useCallback,
  useState,
  useEffect,
} from 'react';
import styled from 'styled-components';

import Header from './Header';
import Menu from './Menu';
import PaymentAddress from './PaymentAddress';
import PaymentButtonGroup from './PaymentButtonGroup';
import VideoStatus from './VideoStatus';

const StyledApp = styled.div`
  overflow-y: scroll;
  width: 500px;
`;

const StyledVideo = styled.video`
  width: 500px;
`;

const App = ({
  handleClickMenu,
  handleClickPay,
  handleClickPaySucceed,
  menu,
  paymentAddr,
  paymentStatus,
  videoStatus,
}) => {
  console.log(123, paymentStatus);
  return (
    <StyledApp>
      <Header />
      <PaymentAddress
        addr={paymentAddr}
      />
      <Menu
        handleClickMenu={handleClickMenu}
        menu={menu}
      />
      <VideoStatus
        videoStatus={videoStatus}
      />
      <PaymentButtonGroup
        handleClickPay={handleClickPay}
        handleClickPaySucceed={handleClickPaySucceed}
      />
      <div>
      </div>
      <StyledVideo
        controls={false}
        id="videoPlayer"
        muted
        preload="all"
      />
    </StyledApp>
  );
};

export default App;
