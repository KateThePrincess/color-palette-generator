import { useState } from 'react';
import { toast } from 'react-toastify';
import { FiCheckCircle } from 'react-icons/fi';

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('Color copied to clipboard!', {
          autoClose: 2000,
          icon: (
            <FiCheckCircle
              style={
                hex !== 'ffffff' ? { color: `#${hex}` } : { color: `black` }
              }
            />
          ),
          style: {
            color: `var(--grey-800)`, // Change text color here
          },
        });
      } catch (error) {
        toast.success('Color copy failed!');
      }
    } else {
      toast.error('Clipboard access is not available!');
    }
  };

  return (
    <article
      className='color'
      style={{ background: `#${hex}` }}
      onClick={copyToClipboard}
    >
      <div className='label'>
        <h5 className='color-value'>#{hex}</h5>
        <h5 className='percent-value'>{weight}%</h5>
      </div>
    </article>
  );
};
export default SingleColor;
