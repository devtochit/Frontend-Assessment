import { forwardRef } from 'react';
import type { ReactElement, ReactNode, ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { motion } from 'framer-motion';
import tw from 'twin.macro';

import { Spinner } from '@/components/elements';

export const variants = {
  primary: tw`bg-primary hover:bg-primary-dark`,
  secondary: tw`bg-secondary text-gray-500 hover:bg-secondary-dark`,
  tertiary: tw`bg-tertiary hover:bg-tertiary-dark`,
  success: tw`bg-success hover:bg-success-dark`,
  info: tw`bg-info hover:bg-info-dark`,
  outline: tw`border border-white border-solid hover:(bg-white text-gray-500)`,
  white: tw`bg-white text-gray-500 hover:bg-white-dark`,
  danger: tw`bg-danger hover:bg-danger-dark`,
  disabled: tw`bg-disabled hover:bg-disabled-dark`,
};

const sizes = {
  sm: tw`px-4 py-2 text-xs`,
  md: tw`px-6 py-3`,
  lg: tw`px-6 py-4 text-xl`,
};

type IconProps =
  | { startIcon: ReactElement; endIcon?: never }
  | { endIcon: ReactElement; startIcon?: never }
  | { endIcon?: undefined; startIcon?: undefined };

type IconButtonProps =
  | {
      isIconButton?: boolean;
      startIcon: ReactElement;
      endIcon?: never;
      children?: null;
    }
  | {
      isIconButton?: undefined;
      startIcon?: ReactElement;
      endIcon?: ReactElement;
      children: ReactNode;
    };

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
  width?: string;
  isLoading?: boolean;
  isDisabled?: boolean;
  isUnstyled?: boolean;
} & IconProps &
  IconButtonProps;

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren<ButtonProps>>(
  (
    {
      type = 'button',
      variant = 'primary',
      size = 'md',
      width = '',
      isLoading = false,
      isDisabled = false,
      isIconButton = false,
      isUnstyled = false,
      startIcon,
      endIcon,
      className = '',
      children,
      ...rest
    },
    ref
  ) => {
    return isUnstyled ? (
      <button className={`${className} ${width}`} {...rest}>
        {children}
      </button>
    ) : (
      <motion.div
        className={`inline-flex items-center justify-center ${width}`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: isDisabled || isLoading ? 1.05 : 0.9 }}
        transition={{ type: 'spring', stiffness: 80, damping: 15 }}
      >
        <button
          data-testid={`button-${variant}`}
          disabled={isDisabled}
          ref={ref}
          type={type}
          className={`${className} ${width}`}
          css={[
            tw`inline-flex items-center justify-center rounded-full font-medium text-white uppercase shadow-md transition-all duration-500 focus:outline-0 disabled:(scale-100 bg-gray-500 hover:bg-gray-600)`,
            isLoading && tw`cursor-progress opacity-75`,
            isDisabled && tw`disabled:cursor-not-allowed`,
            variants[variant],
            sizes[size],
            isIconButton && tw`p-2`,
          ]}
          {...rest}
        >
          {isLoading && <Spinner size="sm" variant="light" />}
          {!isLoading && startIcon}
          {!isIconButton && <span className="mx-2">{children}</span>}
          {!isLoading && !isIconButton && endIcon}
        </button>
      </motion.div>
    );
  }
);

Button.displayName = 'Button';
