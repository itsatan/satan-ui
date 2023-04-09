import React, { useContext, FunctionComponentElement, Children, cloneElement, useState } from "react";
import classNames from "classnames";
import { MenuContext } from './menu'
import { MenuItemProps } from "./menuItem";
import Transition from "../Transition/transition";
import Icon from "../Icon/icon";

export interface SubMenuProps {
    index?: string;
    title: string;
    className?: string;
    children?: React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
    const { index, title, className, children } = props
    const context = useContext(MenuContext)
    const openedSubMenus = context.defaultOpenSubMenus as Array<string>
    const isOpened = (index && context.mode === 'vertical') ? openedSubMenus.includes(index) : false
    const [menuOpen, setOpen] = useState(isOpened)
    const classes = classNames('menu-item submenu-item', className, {
        'is-active': context.index === index,
        'is-opened': menuOpen,
        'is-vertical': context.mode === 'vertical'
    })
    const handleClick = (e:React.MouseEvent) => {
        e.preventDefault();
        setOpen(!menuOpen)
    }
    let timer: any
    const handleMouse = (e: React.MouseEvent, toggle: boolean) => {
        clearTimeout(timer)
        e.preventDefault()
        timer = setTimeout(() => {
            setOpen(toggle)
        },300)
    }
    const clickEvents = context.mode === 'vertical' ? {
        onClick : handleClick,
    } : {}
    const hoverEvents = context.mode !== 'vertical' ? {
        onMouseEnter: (e: React.MouseEvent) => { handleMouse(e, true) },
        onMouseLeave: (e: React.MouseEvent) => { handleMouse(e, false) }
    } : {}
    const renderChildren = () => {
        const subMenuClasses = classNames('satan-submenu', {
            'menu-opened': menuOpen
        })
        const childrenComponent =  Children.map(children, (child,i) => {
            const childElement = child as FunctionComponentElement<MenuItemProps>
            if (childElement.type.displayName === 'MenuItem') {
                return cloneElement(childElement, {
                    index:`${index}-${i}`
                })
            } else {
                console.error('Warning: subMenu has a child which is not a MenuItem component',)
            }
        })
        return (
            <Transition in={menuOpen} timeout={300} animation="zoom-in-top">
                <ul className={subMenuClasses}>
                    {childrenComponent}
                </ul>
            </Transition>
        )
    }
    return (
        <li key={index} className={classes} {...hoverEvents}>
            <div className="submenu-title" {...clickEvents}>
                {title}
                <Icon icon='angle-down' className="arrow-icon" />
            </div>
            {renderChildren()}
        </li>
    )
}

SubMenu.displayName = 'subMenu'

export default SubMenu