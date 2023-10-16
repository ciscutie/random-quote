import { useState, useEffect } from 'react';
import { getRandomQuote } from '../api/randomquote';
import { FaTwitter, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import React from 'react';

const RandomQuote = () => {
  const [quote, setQuote] = useState(null);
  const [realDate, setRealDate] = useState(new Date());

  const fetchRandomQuote = async () => {
    try {
      const data = await getRandomQuote();
      setQuote(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchRandomQuote();

    const intervalId = setInterval(() => {
      setRealDate(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);
  const githubAccount = 'https://github.com/ciscutie';
  const linkedinAccount = 'https://www.linkedin.com/in/ciscutie/';
  const twitterAccount = 'https://twitter.com/ciscutie';
  return (
    <>
      <div className='flex h-[786px] flex-col items-center justify-center'>
        <div>
          <h1 className='text-2xl md:text-5xl text-center text-blue-800'>
            Random Quote Generator
          </h1>
        </div>
        <div className='text-center px-12 pb-7 pt-[40px] md:pt-[80px]'>
          {quote ? (
            <blockquote className='m-1 w-[300] md:w-[520px] h-[300px] md:h-[290px]  text-center font-semibold'>
              <h1 className='pb-2 text-xl md:text-3xl text-gray-800 '>
                {quote.content}
              </h1>
              <cite>
                <p className='pb-2 text-sm md:text-lg text-gray-600'>
                  -{quote.author}
                </p>
              </cite>
            </blockquote>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className='flex flex-col gap-4'>
          <button
            className='border text-white py-1 px-2 rounded  shadow-sm bg-blue-600 hover:bg-blue-700'
            onClick={fetchRandomQuote}
          >
            New Quote
          </button>
          <div className='flex flex-row justify-center gap-2'>
            <span className='text-blue-600'>
              <a target='_blank' href={twitterAccount}>
                <FaTwitter style={{ fontSize: '40px' }} />
              </a>
            </span>
            <span className='hover:text-gray-900'>
              <a target='_blank' href={githubAccount}>
                <FaGithubSquare style={{ fontSize: '40px' }} />
              </a>
            </span>
            <span className='text-blue-600 hover:text-blue-800'>
              <a target='_blank' href={linkedinAccount}>
                <FaLinkedin style={{ fontSize: '40px' }} />
              </a>
            </span>
          </div>
        </div>
        <div className='pt-[200px] text-center'>
          <p className='text-black'>{realDate.toString()}</p>
        </div>
      </div>
    </>
  );
};

export default RandomQuote;
