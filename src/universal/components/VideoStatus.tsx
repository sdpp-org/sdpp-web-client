import React, {
  useCallback,
  useState,
  useEffect,
} from 'react';
import styled from 'styled-components';

import ValueArea from './ValueArea';

const StyledVideoStatus = styled.div`
  margin-top: 15px;
`;

const Flag = styled.span`
  padding-left: 5px;
`

const VideoStatus = ({
  videoStatus,
}) => {
  return (
    <StyledVideoStatus>
      <p>
        Video Status
      </p>
      <ValueArea>
        {videoStatus.videoPos}
        <Flag>
          {videoStatus.flag ? 'Playing' : 'Stopped'}
        </Flag>
      </ValueArea>
    </StyledVideoStatus>
  );
};

export default VideoStatus;
