import React, { useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';

const TodoInput = ({onSubmit}) => {
    const [value, setValue] = useState('');

    const handleSubmit = title => e => {
        e.preventDefault();

        onSubmit(title);
        setValue('');
    }

    return (
        <form onSubmit={handleSubmit(value)}>
            <FormControl fullWidth>
                <InputLabel htmlFor="todo-form-input">Что нужно сделать?...</InputLabel>
                <Input 
                    id="todo-form-input" 
                    value={value} 
                    onChange={(e) => setValue(e.target.value)}
                />
            </FormControl>
        </form>
    );
}

export default TodoInput;
