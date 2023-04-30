import { useState, useEffect } from 'react';
import link from '../assets/link.svg';
import submit from '../assets/submit.svg';

const Demo = () => {
  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={() => {}}
        >
          <img
            src={link}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-8"
          />
          <input
            type="url"
            placeholder="Enter a URL to summarize"
            value=""
            onChange={() => {}}
            required
            className="block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-12 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0 peer"
          />
          <button
            type="submit"
            className="hover:border-gray-700 hover:text-gray-700 absolute inset-y-0 right-0 my-1.5 mr-1.5 flex w-10 items-center justify-center rounded border border-gray-200 font-sans text-sm font-medium text-gray-400"
          >
            →
          </button>
        </form>
      </div>
    </section>
  );
};

export default Demo;
