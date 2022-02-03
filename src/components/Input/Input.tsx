import React, { ChangeEventHandler } from 'react';
import style from './Input.module.scss';

type InputProps = {
    value: string,
    placeholder: string,
    onChange: ChangeEventHandler<HTMLInputElement>
}

const Input: React.FC<InputProps> = ({value, placeholder, onChange}: InputProps) => { 
    
    return <input 
    type="text"
    className={style.search_input}
    value={value}
    placeholder={placeholder}
    onChange={onChange} />
}

export default React.memo(Input);