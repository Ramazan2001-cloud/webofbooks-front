'use client';
import { useState } from 'react';
import './Input.scss';
import { Input as AntInput } from 'antd';

const Input = () => {
    const [value, setValue] = useState<string>('');
    return (
        <AntInput
            placeholder="Поиск"
            className="input"
            value={value}
            onChange={(e) => setValue(e.target.value)}
        />
    );
};

export default Input;
