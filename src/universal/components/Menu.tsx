import React, {
  useCallback,
  useState,
  useEffect,
} from 'react';
import styled from 'styled-components';

const StyledMenu = styled.div`
  padding-top: 10px;
`;

const Entry = styled.div`
  cursor: pointer;
  &:hover {
    color: #8246ad;
  }
`;

const ValueArea = styled.div`
  background-color: #f1f1f1;
  padding: 7px 3px;
  word-wrap: break-word;
  width: 100%;
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
  )
};

export default Menu;
