import React, { ChangeEvent, KeyboardEvent, FocusEvent } from 'react';

import './Input.scss';
import Icon from '@components/common/Icon';

interface CommonInputProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onKeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
  className?: string;
  iconName?: string;
  label?: string;
  placeholder?: string;
  validateText?: string;
}

const Input: React.FC<CommonInputProps> = ({
  value,
  onChange,
  onKeyUp,
  onKeyDown,
  onBlur,
  className,
  iconName,
  label,
  placeholder,
  validateText
}) => {
  return (
    <div className={`common-input-wrapper ${className}`}>
      {label && <label className='common-input-label'>{label}</label>}
      <div className='common-input'>
        {iconName && <Icon name={iconName} className='common-input-icon' />}
        <input
          className='common-input-field'
          type='text'
          value={value}
          onChange={onChange}
          onKeyUp={onKeyUp}
          onKeyDown={onKeyDown}
          onBlur={onBlur}
          placeholder={placeholder}
        />
      </div>
      {validateText && <div className='common-input-error'>{validateText}</div>}
    </div>
  );
};

Input.defaultProps = {
  className: '',
  iconName: '',
  label: '',
  placeholder: '',
  validateText: '',
  onKeyUp: undefined,
  onKeyDown: undefined,
  onBlur: undefined
};

export default Input;
