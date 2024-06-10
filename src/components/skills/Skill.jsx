import React from 'react';

const Skill = React.forwardRef(({ name, image }, ref) => {
  return (
    <div ref={ref} className='bg-gray-700 w-24 h-24 md:h-32 md:w-32 shadow-lg rounded-xl p-4 md:p-6 flex flex-col justify-center items-center'>
      <img
        src={image}
        alt={name}
        className='w-10 h-10 md:w-16 md:h-16 mb-2 md:mb-4 rounded-md' // Adjusted margin bottom for medium screens
      />
      <p className='md:text-base text-sm text-white'>{name}</p>
    </div>
  );
});

export default Skill;
