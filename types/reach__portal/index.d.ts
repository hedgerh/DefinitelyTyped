// Type definitions for @reach/portal 0.1
// Project: https://github.com/reach/reach-ui
// Definitions by: Harry Hedger <https://github.com/hedgerh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export type PortalProps = {
    type?: string;
    children?: React.ReactNode;
};
  
export const Portal: React.FC<PortalProps>;
  