import React from 'react';

const SectionHeading = ({ children, light = false }) => (
  <h2 className={`relative inline-block text-3xl font-light my-0 mb-8 ${light ? 'text-white' : 'text-base-dark'} after:absolute after:content-[''] after:top-full after:h-[3px] after:w-12 after:left-0 after:right-0 after:mx-auto after:bg-brand sm:text-2xl`}>
    {children}
  </h2>
);

export default SectionHeading;
