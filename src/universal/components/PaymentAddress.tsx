import React, {
  useCallback,
  useState,
  useEffect,
} from 'react';
import styled from 'styled-components';

import ValueArea from './ValueArea';

const StyledAddress = styled.div`
  padding-top: 20px;
  word-wrap: break-word;
`;

const PaymentAddress = ({
  addr,
}) => {
  return (
    <StyledAddress>
      <p>Payment Address (handshake phase)</p>
      <ValueArea>{addr}</ValueArea>
    </StyledAddress>
  );
};

export default PaymentAddress;
