import React from "react";

export const ContactPicker = ({ contacts, value, onChange, name }) => {
  return (
    <select value={value} onChange={onChange} name={name} required>
      <option value="">No Contact Selected</option>
      {contacts.map((contact, index) => (
        <option key={index} value={contact.name}>
          {contact.name}
        </option>
      ))}
    </select>
  );
};