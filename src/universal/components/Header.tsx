import * as React from 'react';

import styled from 'styled-components';

const Title = styled.p`
  font-weight: bold;
  font-size: 21px;
`;

const SubTitle = styled.p`

`;

const Header = () => {
  return (
    <div>
      <Title>
        SDPP V2 - Powered by JavaScript
      </Title>
      <SubTitle>
        Streaming Data Payment Protocol
      </SubTitle>
    </div>
  );
};

export default Header;
