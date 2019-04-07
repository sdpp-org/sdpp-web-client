import React, {
  useCallback,
  useState,
  useEffect,
} from 'react';
import styled from 'styled-components';

const StyledPaymentButtonGroup = styled.div`
  margin: 15px 0;
  text-decoration: underline;
  > div {
    &:hover {
      color: #8246ad;
      cursor: pointer;
    }
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
};

const PaymentButtonGroup = ({
  handleClickPay,
  handleClickPaySucceed,
}) => {
  return (
    <StyledPaymentButtonGroup>
      <Pay
        handleClickPay={handleClickPay}
      />
      <PaySucceed
        handleClickPaySucceed={handleClickPaySucceed}
      />
    </StyledPaymentButtonGroup>
  );
};

export default PaymentButtonGroup;
