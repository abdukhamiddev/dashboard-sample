import classNames from "classnames";
import React, { ReactNode, useContext } from "react";
import styles from "../../styles/default";
type IconType =
  | string
  | React.FunctionComponent<{ className: string; "aria-hidden": boolean }>
  | React.ComponentClass<{ className: string; "aria-hidden": boolean }>;

export interface Props {
  children?: React.ReactNode;

  disabled?: boolean;

  size?: "larger" | "large" | "regular" | "small" | "pagination";

  icon?: IconType;

  iconLeft?: IconType;

  iconRight?: IconType;

  layout?: "outline" | "link" | "primary" | "__dropdownItem";

  block?: boolean;
}

export interface ButtonAsButtonProps
  extends Props,
    React.ButtonHTMLAttributes<HTMLButtonElement> {
  tag?: "button";

  type?: "button" | "submit" | "reset";
}

export interface ButtonAsAnchorProps
  extends Props,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: "a";
}

export interface ButtonAsOtherProps
  extends Props,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  tag: string;
}

export type ButtonProps =
  | ButtonAsButtonProps
  | ButtonAsAnchorProps
  | ButtonAsOtherProps;

type Ref = ReactNode | HTMLElement | string;

const Button = React.forwardRef<Ref, ButtonProps>(function Button(props, ref) {
  const {
    tag = "button",
    type = tag === "button" ? "button" : undefined,
    disabled = false,
    size = "regular",
    layout = "primary",
    block = false,
    icon,
    iconLeft,
    iconRight,
    className,
    children,
    ...other
  } = props;

  function hasIcon() {
    return !!icon || !!iconLeft || !!iconRight;
  }

  const IconLeft = iconLeft || icon;
  const IconRight = iconRight;

  const baseStyle = styles.button.base;
  const blockStyle = styles.button.block;
  const sizeStyles = {
    larger: styles.button.size.larger,
    large: styles.button.size.large,
    regular: styles.button.size.regular,
    small: styles.button.size.small,
    pagination: styles.button.size.pagination,
  };
  const iconSizeStyles = {
    larger: styles.button.size.icon.larger,
    large: styles.button.size.icon.large,
    regular: styles.button.size.icon.regular,
    small: styles.button.size.icon.small,
    pagination: styles.button.size.icon.regular,
  };
  //@ts-ignore
  const iconStyle = styles.button.icon[size];
  const layoutStyles = {
    primary: styles.button.primary.base,
    outline: styles.button.outline.base,
    link: styles.button.link.base,
  };
  const activeStyles = {
    primary: styles.button.primary.active,
    outline: styles.button.outline.active,
    link: styles.button.link.active,
  };
  const disabledStyles = {
    primary: styles.button.primary.disabled,
    outline: styles.button.outline.disabled,
    link: styles.button.link.disabled,
  };

  const buttonStyles: string =
    layout === "__dropdownItem"
      ? classNames(className)
      : classNames(
          baseStyle,

          hasIcon() && !children && iconSizeStyles[size],

          hasIcon() && children && sizeStyles[size],

          !hasIcon() && sizeStyles[size],
          layoutStyles[layout],
          disabled ? disabledStyles[layout] : activeStyles[layout],
          block ? blockStyle : null,
          className
        );

  const iconLeftStyles = classNames(
    iconStyle,
    children ? styles.button.icon.left : ""
  );
  const iconRightStyles = classNames(
    iconStyle,
    children ? styles.button.icon.right : ""
  );

  return React.createElement(
    tag,
    {
      className: buttonStyles,
      ref,
      disabled,
      type,
      ...other,
    },
    IconLeft
      ? React.createElement(IconLeft, {
          className: iconLeftStyles,
          "aria-hidden": true,
        })
      : null,
    children,
    IconRight
      ? React.createElement(IconRight, {
          className: iconRightStyles,
          "aria-hidden": true,
        })
      : null
  );
});

export default Button;
