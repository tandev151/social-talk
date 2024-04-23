import React from 'react';
import './Button.scss';

interface Props {
  // Property
  className?: string;
  style?: object;
  children?: React.ReactNode;
  label: string;

  // Method
  onClick: () => void;
}
const Button: React.FC<Props> = ({
  className,
  style,
  children,
  label,
  onClick
}) => {
  let _className: string = 'button-container';

  if (className) {
    _className += ' ' + className;
  }

  //   TODO: custom

  return (
    <button className={_className} style={style} onClick={onClick}>
      {children || <span className='button-label'>{label}</span>}
    </button>
  );
};

export default Button;
