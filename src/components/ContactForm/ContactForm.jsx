import React, { useState } from 'react';
import {
  ContForm,
  ContLabel,
  ContInput,
  AddButton,
} from 'components/ContactForm/ContactForm.styled';
import { nanoid } from 'nanoid';

export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [id, setId] = useState('');

  let nameInputId = nanoid();
  let numberInputId = nanoid();

  const handleChange = event => {
    const { name, value } = event.currentTarget;
    if (
      (name === 'name' && /^[a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ' ]*$/.test(value)) ||
      (name === 'number' && /^[0-9-]*$/.test(value))
    ) {
      if (name === 'name') {
        setName(value);
      } else if (name === 'number') {
        setNumber(value);
      }
      setId(nanoid());
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit({ name, number, id });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
    nameInputId = nanoid();
  };

  return (
    <ContForm onSubmit={handleSubmit}>
      <ContLabel htmlFor={nameInputId}>
        Name
        <ContInput
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          id={nameInputId}
          required
        />
      </ContLabel>

      <ContLabel htmlFor={numberInputId}>
        Number
        <ContInput
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          id={numberInputId}
          required
        />
      </ContLabel>

      <AddButton type="submit">Add contact</AddButton>
    </ContForm>
  );
};
