import { ComponentProps, PropsWithChildren } from 'react';
import classNames from 'classnames';

const Container = ({
  className,
  ...props
}: PropsWithChildren<ComponentProps<'div'>>) => {
  return (
    <div
      {...props}
      className={classNames(
        className,
        'container mx-auto px-5 sm:px-6 lg:px-8'
      )}
    />
  );
};

export default Container;
