import React, { ReactElement } from 'react';

interface Props {
  // Property
  className?: string;
  style?: object;
  children?: React.ReactNode;
  label: string;
  disabled?: boolean;
  type?: string;
  // Method
  onToggle: () => void;
}

const Dropdown: React.FC<Props> = ({ type, label }) => {
  const renderDefaultDropdown = () => {
    return (
      <div className='dropdown'>
        <div className='dropdown-toggle'>{label}</div>
        <div className='dropdown-menu'></div>
      </div>
    );
  };

  const getDropdownByType = () => {
    let result: ReactElement;
    switch (type) {
      case '':
      default:
        result = renderDefaultDropdown();
        break;
    }

    return result;
  };
  return <div>{getDropdownByType()}</div>;
};

export { Dropdown };
