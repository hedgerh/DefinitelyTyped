// Type definitions for @react/rect 0.1
// Project: https://github.com/reach/reach-ui
// Definitions by: Harry Hedger <https://github.com/hedgerh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';
import { Ref } from 'react';

export type RectProps = {
    observe?: boolean;
    onChange?: (rect: DOMRect) => void;
    children?: React.ReactNode;
};

export const Rect: React.FC<RectProps>;

export default Rect;
export function useRect(ref: Ref<HTMLElement>, isSelected?: boolean): DOMRect;