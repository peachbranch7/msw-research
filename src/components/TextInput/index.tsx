import React, { FC } from 'react';

type Props = {
  type: string;
  label: string;
  value: string | number;
  onChange: (value: any) => void;
};

export const TextInput: FC<Props> = (props) => {
  const { label, type, value, onChange } = props;

  return (
    <label style={{ display: 'block' }}>
      {label}
      <input
        {...props}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
};
