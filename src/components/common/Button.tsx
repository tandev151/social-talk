import React from 'react';

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

  return (
    <button className={_className} style={style} onClick={onClick}>
      {children || <span className='btn-label'>{label}</span>}
    </button>
  );
};

export default Button;
