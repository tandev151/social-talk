import React from 'react';
import './Button.scss';

interface Props {
  // Property
  className?: string;
  style?: object;
  children?: React.ReactNode;
  label: string;
  disabled?: boolean;

  // Method
  onClick: () => void;
}

const Button: React.FC<Props> = ({
  className,
  style,
  children,
  label,
  disabled,

  onClick
}) => {
  let _className: string = 'button-container';

  if (className) {
    _className += ' ' + className;
  }

  if (disabled) {
    _className += ' disabled';
  }

  //   TODO: custom

  return (
    <button
      className={_className}
      style={style}
      onClick={onClick}
      disabled={disabled}>
      {children || <span className='button-label'>{label}</span>}
    </button>
  );
};

export default Button;
