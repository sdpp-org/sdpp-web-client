import React, {
  useCallback,
  useState,
  useEffect,
} from 'react';
import styled from 'styled-components';

const StyledAddress = styled.div`
  padding-top: 20px;
  word-wrap: break-word;
`;

const ValueArea = styled.p`
  background-color: #f1f1f1;
  padding: 7px 3px;
  word-wrap: break-word;
  width: 100%;
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
