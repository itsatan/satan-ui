import React, { createContext, useState, Children,cloneElement } from "react";
import classNames from "classnames";
import { MenuItemProps } from "./menuItem";
import assert from "assert";

type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectIndex: string) => void;

export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
    defaultOpenSubMenus?: string[];
    children?: React.ReactNode;
}

interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })

const Menu: React.FC<MenuProps> = (props) => {
    const { defaultIndex, className, mode, style, onSelect, defaultOpenSubMenus, children } = props
    const [currentActive, setActive] = useState(defaultIndex)
    const classes = classNames('satan-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical'
    })
    const handleClick = (index: string) => {
        setActive(index)
        onSelect && onSelect(index)
    }
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : '0',
        onSelect: handleClick,
        mode,
        defaultOpenSubMenus
    }
    const renderChildren = () => {
        return Children.map(children, (child, index) => {
            const childElement = child as React.FunctionComponentElement<MenuItemProps>
            const { displayName } = childElement.type
            if (displayName === 'MenuItem' || displayName === 'subMenu') {
                return cloneElement(childElement, {
                    index:index.toString()
                })
            } else {
                console.error('Warning: Menu has a child which is not a MenuItem component',)
            }
        }) || null
    }
    return (
        <ul className={classes} style={style} data-testid='test-menu'>
            <MenuContext.Provider value={passedContext}>
                {renderChildren()}
            </MenuContext.Provider>
        </ul>
    )
}

Menu.defaultProps = {
    defaultIndex: '0',
    mode: 'horizontal',
    defaultOpenSubMenus: [],
}

export default Menu