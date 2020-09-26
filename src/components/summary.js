import React from 'react';

const Summary = ({ data }) => (
  <section className="py-5 border-b border-neutral-300 lg:flex items-center">
    <div className="my-5">
      <img
        className="mx-auto w-32 lg:w-full"
        src="./profile.png"
        alt="profile"
        style={{width:"50em"}}
      />
    </div>
    <p className="text-center tracking-wide leading-relaxed lg:text-left lg:mx-8 lg:text-lg">
      {data}
    </p>
  </section>
);

export default Summary;
