// src/pages/Contact.jsx
import React, { useState } from 'react'
import styled from 'styled-components'

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 2rem auto;
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
`

const Title = styled.h1`
  font-size: 2rem;
  color: #111827;
  text-align: center;
  margin-bottom: 1.5rem;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

const Field = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  font-weight: 500;
  color: #4b5563;
  margin-bottom: 0.5rem;
`

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #805ad5;
    box-shadow: 0 0 0 3px rgba(128, 90, 213, 0.3);
  }
`

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;

  &:focus {
    outline: none;
    border-color: #805ad5;
    box-shadow: 0 0 0 3px rgba(128, 90, 213, 0.3);
  }
`

const Button = styled.button`
  align-self: flex-end;
  background: #805ad5;
  color: #fff;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #6b46c1;
  }
`

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    // TODO: form gönderme işlemini burada yapın
    console.log(form)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <ContactContainer>
      <Title>İletişim</Title>
      <Form onSubmit={handleSubmit}>
        <Field>
          <Label htmlFor="name">Adınız</Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Adınızı girin"
            value={form.name}
            onChange={handleChange}
            required
          />
        </Field>

        <Field>
          <Label htmlFor="email">E‑posta</Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="email@ornek.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </Field>

        <Field>
          <Label htmlFor="message">Mesajınız</Label>
          <TextArea
            id="message"
            name="message"
            placeholder="Mesajınızı yazın"
            value={form.message}
            onChange={handleChange}
            required
          />
        </Field>

        <Button type="submit">Gönder</Button>
      </Form>
    </ContactContainer>
  )
}
