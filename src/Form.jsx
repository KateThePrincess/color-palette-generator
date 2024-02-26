import { useState } from 'react';

const Form = ({ addColor }) => {
  const [color, setColor] = useState('#f35678');
  const [step, setStep] = useState(10);
  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(color, step);
  };
  return (
    <section className='container app-title'>
      <h3 style={{ color: `${color}` }}>Color palette generator</h3>
      <form className='color-form' onSubmit={handleSubmit}>
        <input
          type='color'
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
        <div className='space-between'>
          <label htmlFor='color'>select color:</label>
          <input
            type='text'
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#f35678'
            id='color'
          />
        </div>
        <div className='space-between'>
          <label htmlFor='step'>select weight step:</label>
          <input
            type='text'
            value={step}
            onChange={(e) => setStep(e.target.value)}
            placeholder='10'
            id='step'
          />
        </div>
        <button type='submit' className='btn' style={{ background: color }}>
          generate
        </button>
      </form>
    </section>
  );
};
export default Form;
