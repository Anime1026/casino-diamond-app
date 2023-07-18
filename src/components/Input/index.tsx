import React, { useEffect } from 'react';
import IconMenu from '../../components/Icons';
import './input.scss';

interface IProps {
  type: string;
  readOnly?: boolean;
  value?: any;
  onChange?: any;
  icon?: string;
  min?: number;
  max?: number;
  disabled?: boolean;
}

const Input = (props: IProps) => {
  const [mybetAmount, setMybetAmount] = React.useState(0);
  useEffect(() => {
    setMybetAmount(props.value);
  }, [props.value]);

  return (
    <div className="input-box">
      <input
        type={props.type}
        readOnly={props.readOnly}
        value={mybetAmount}
        min={props.min}
        max={props.max}
        onChange={(e: any) => props.onChange(e.target.value)}
        disabled={props.disabled}
      />
      {props.icon && <IconMenu icon={props.icon} size={24} className="text-white" />}
    </div>
  );
};

export default Input;
