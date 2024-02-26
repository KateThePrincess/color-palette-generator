import SingleColor from './SingleColor';
import { nanoid } from 'nanoid';

const ColorList = ({ colors, step }) => {
  return (
    <section className='colors'>
      {colors.map((color, index) => {
        return (
          <SingleColor key={nanoid()} color={color} step={step} index={index} />
        );
      })}
    </section>
  );
};
export default ColorList;
