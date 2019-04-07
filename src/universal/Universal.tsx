import React, { useState, useMemo } from 'react';

import Header from './components/Header';
import TransferredState from './components/TransferredState';
import UniversalContext from './contexts/UniversalContext';
import Video from './components/Video';

const Universal: UniversalType = ({
  addPath,
}) => {
  const [ count, setCount ] = React.useState(0);

  const handleClickButton = useMemo(
    () => {
      return () => {
        setCount(count + 1);
      };
    },
    [count],
  );

  return (
    <div>
      <Video />
    </div>
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
