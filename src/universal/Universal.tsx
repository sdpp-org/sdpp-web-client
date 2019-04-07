import React, { useState, useMemo } from 'react';
import styled from 'styled-components';

import AppContainer from './components/AppContainer';
import GlobalStyle from './components/GlobalStyle';
import UniversalContext from './contexts/UniversalContext';

const Universal: UniversalType = ({
}) => {
  return (
    <>
      <GlobalStyle />
      <AppContainer />
    </>
  );
};

export default Universal;

Universal.contexts = {
  UniversalContext,
};

type UniversalType = React.FC<UniversalProps> & { contexts };

interface UniversalProps {
  addPath?: Function;
  children?: React.ReactNode;
}

declare global {
  const io;
}
