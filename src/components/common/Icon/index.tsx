import React from 'react';

interface Props {
  // Property
  className?: string;
  iconClassName?: string;
  name: string;
  children?: React.ReactNode;

  disabled?: boolean;

  // Method
  onClick?: () => void;
}

const Icon: React.FC<Props> = ({
  className,
  iconClassName,
  name,

  onClick
}) => {
  let _className: string = 'icon';

  if (name) {
    _className += ' ' + name;
  }

  if (className) {
    _className += ' ' + className;
  }

  //   TODO: custom

  return (
    <span className={_className} onClick={onClick}>
      <i className={iconClassName}></i>
    </span>
  );
};

export default Icon;
