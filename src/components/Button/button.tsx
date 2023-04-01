import React from "react";
import classNames from "classnames";

export enum ButtonSize {
    Small = 'sm',
    Large = 'lg'
}

export enum ButtonType {
    Primary = 'primary',
    Default = 'default',
    Success = 'success',
    Warning = 'warning',
    Info = 'info',
    Danger = 'danger',
    Link = 'link',
    Light = 'light',
    Dark = 'dark'
}

interface BaseButtonProps {
    className?: string;
    disabled?: boolean;
    size?: ButtonSize;
    href?: string;
    btnType?: ButtonType;
    children?: React.ReactNode;
}

type NativeButtonProps = BaseButtonProps & React.ButtonHTMLAttributes<HTMLElement>;
type AnchorButtonProps = BaseButtonProps & React.AnchorHTMLAttributes<HTMLElement>;
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
    const {
        className,
        disabled,
        size,
        href,
        btnType,
        children,
        ...rest
    } = props

    // btn, btn-lg, btn-primary
    const classes = classNames('btn', {
        [`btn-${size}`]: size,
        [`btn-${btnType}`]: btnType,
        'disabled': (btnType === ButtonType.Link) && disabled
    }, className)

    if (btnType === ButtonType.Link && href) {
        return (
            <a className={classes} href={href} {...rest}>
                {children}
            </a>
        )
    }
    return <button className={classes} disabled={disabled} {...rest}>{children}</button>
}

Button.defaultProps = {
    disabled: false,
    btnType: ButtonType.Default,
}

export default Button