import '../styles/Form.css';
import { useState } from 'react';

function Form({ fields }) {
  const [formData, setFormData] = useState(
    Object.fromEntries(fields.map(field => [field.name, '']))
  );
  const [currentState, setCurrentState] = useState('form');

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCurrentState('submitted');
  }

  function handleEdit() {
    setCurrentState('form');
  }

  if (currentState === 'submitted') {
    return (
      <div className="submitted-data">
        {fields.map(field => (
          <p key={field.name}>
            {field.label}: {formData[field.name]}
          </p>
        ))}
        <button type="submit">Submit</button>
        <button type="button" onClick={handleEdit}>Edit</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {fields.map(field => (
        <label key={field.name}>
          {field.label}:{' '}
          <input
            name={field.name}
            value={formData[field.name]}
            onChange={handleInputChange}
          />
          <br />
        </label>
      ))}
      <button type="submit">Submit</button>
      <button type="button" onClick={handleEdit}>Edit</button>
    </form>
  );
}

export default Form;
