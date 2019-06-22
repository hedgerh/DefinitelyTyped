// Type definitions for @reach/menu-button 0.1
// Project: https://github.com/reach/reach-ui
// Definitions by: Harry Hedger <https://github.com/hedgerh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

export interface IButtonRect {
    height: number;
    width: number;
    left: number;
    top: number;
}

interface IState {
    isOpen: boolean;
    closingWithClick: boolean;
    selectionIndex: number;
    buttonRect: undefined | IButtonRect;
    buttonId: string;
}

export interface IMenuProps {
    children: React.ReactNode;
}

export const Menu: React.FC<IMenuProps>;

export type MenuButtonProps = {
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    children: React.ReactNode;
} & React.HTMLProps<HTMLButtonElement>;

export const MenuButton: React.FC<MenuButtonProps>;

export type MenuListProps = JSX.IntrinsicElements["div"] & {
    children: React.ReactNode;
};

export const MenuList: React.FC<MenuListProps>;

export type ResolvedMenuLinkProps<T> = T extends keyof JSX.IntrinsicElements
    ? JSX.IntrinsicElements[T]
    : T;

export type ResolvedMenuLinkComponent<T> = T extends keyof JSX.IntrinsicElements
    ? T
    : React.ComponentType<T>;

export type MenuLinkProps<
    T extends SupportedMenuLinkComponent
> = ResolvedMenuLinkProps<T> & {
    to?: string;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    component?: ResolvedMenuLinkComponent<T>;
    index?: number;
    style?: React.CSSProperties;
    setState?: (s: IState) => Partial<IState>;
    state?: IState;
    _ref?: (node: HTMLElement) => void;
};

type SupportedMenuLinkComponent = object | keyof JSX.IntrinsicElements;

export function MenuLink<T extends SupportedMenuLinkComponent>(
    props: MenuLinkProps<T>
): React.ReactElement<MenuLinkProps<T>>;

export type MenuItemProps = {
    onSelect: () => void;
    onClick?: (e: React.MouseEvent<HTMLElement>) => void;
    onKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
    onMouseMove?: (e: React.MouseEvent<HTMLElement>) => void;
    role?: string;
    state?: IState;
    setState?: (s: IState) => Partial<IState>;
    index?: number;
    _ref?: (node: HTMLElement) => void;
} & React.HTMLProps<HTMLDivElement>;

export const MenuItem: React.FC<MenuItemProps>;
