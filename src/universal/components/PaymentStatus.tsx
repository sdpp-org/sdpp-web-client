import React, {
  useCallback,
  useState,
  useEffect,
} from 'react';
import styled from 'styled-components';

import ValueArea from './ValueArea';

const StyledPaymentStatus = styled.div`
  margin-bottom: 20px;
`;

const Hash = styled.p`
  color: blue;
`;

const PaymentStatus = ({
  paymentStatus,
}) => {
  const { paymentResult } = paymentStatus;

  return (
    <StyledPaymentStatus>
      <p>Payment detail</p>
      <ValueArea>
        <p>{paymentResult.status}</p>
        <Hash>{paymentResult.hash}</Hash>
        <p>{paymentResult.timestamp}</p>
      </ValueArea>
    </StyledPaymentStatus>
  );
};

export default PaymentStatus;
