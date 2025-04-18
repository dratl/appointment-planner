import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  isDuplicate
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required
        />
        {isDuplicate && <p style={{color: 'red'}}>Name already exists</p>}
      </label>
      <label>
        Phone:
        <input 
          type="tel" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          required
          pattern="^(\+?1\s?)?(\(?\d{3}\)?[\s.-]?)?\d{3}[\s.-]?\d{4}$"
          title="Please enter a valid phone number"
        />
      </label>
      <label>
        Email:
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};