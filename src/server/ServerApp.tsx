import * as React from 'react';

import { addPath } from '@nodekit/express-isomorphic';

const ServerApp = ({
  renderUniversal: Universal,
  universalState,
}) => {
  const { UniversalContext } = Universal.contexts;

  return (
    <UniversalContext.Provider value={universalState}>
      <Universal
        addPath={addPath}
      />
    </UniversalContext.Provider>
  );
};

export default ServerApp;
