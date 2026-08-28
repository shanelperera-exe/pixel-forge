import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Example property */
  variant?: 'default' | 'primary';
}

export const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const baseStyles = 'rounded-md p-4 transition-colors';
    const variantStyles =
      variant === 'primary'
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50';

    return (
      <div
        ref={ref}
        className={twMerge(baseStyles, variantStyles, className)}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Component.displayName = 'Component';
