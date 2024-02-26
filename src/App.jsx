import { useState } from 'react';
import ColorList from './ColorList';
import Form from './Form';
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#f35678').all(10));
  const addColor = (color, step) => {
    try {
      const newColors = new Values(color).all(parseInt(step));
      setColors(newColors);
    } catch (error) {
      console.log(error.message);
      toast.error(error.message);
    }
  };
  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
      <ToastContainer
        position='top-center'
        hideProgressBar={true}
        autoClose={3000}
      />
    </main>
  );
};
export default App;
