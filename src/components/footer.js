import React from 'react'

export const Footer = () => {
  return (
    <footer class="relative text-center text-black-400 lg:text-center md:text-center sm:text-center">
        <div className="my-4">
          <h3 className="footer-content font-semibold text-gray-300">
          Crafted with ☕ & code by{" "}
            <a
              class="link"
              href="https://github.com/UtRaj"
              className="hover:underline hover:text-blue-400"
            >
              Utkarsh Raj{" "}
            </a>
          </h3>
        </div>
        <div className='flex absolute -mt-3 items-center'>
            <h2 className='text-[8px] text-gray-300'>Data Provided By CoinGeckoAPI</h2>
        </div>
      </footer>
  )
}
