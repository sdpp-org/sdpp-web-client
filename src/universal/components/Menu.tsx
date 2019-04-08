import React, {
  useCallback,
  useState,
  useEffect,
} from 'react';
import styled from 'styled-components';

import ValueArea from './ValueArea';

const StyledMenu = styled.div`
  padding-top: 10px;
`;

const Entry = styled.div`
  cursor: pointer;
  &:hover {
    color: #8246ad;
  }
`;

const Menu = ({
  handleClickMenu,
  menu,
}) => {
  const menus = !!menu && menu.map((m) => {
    return (
      <Entry
        key={m}
        onClick={handleClickMenu}
      >
        - {m}
      </Entry>
    );
  });

  return (
    <StyledMenu>
      <p>Menus (handshake phase)</p>
      <ValueArea>
        {menus}
      </ValueArea>
    </StyledMenu>
  );
};

export default Menu;
