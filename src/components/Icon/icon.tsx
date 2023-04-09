import React from "react";
import classNames from "classnames";
import { FontAwesomeIcon, FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';

export interface IconProps extends FontAwesomeIconProps {
    theme?: ThemeProps;
}

const Icon: React.FC<IconProps> = (props) => {
    const { className, theme, ...rest } = props
    const classes = classNames('satan-icon', className, {
        [`icon-${theme}`]: theme,
    })
    return <FontAwesomeIcon className={classes} {...rest} />
}

export default Icon