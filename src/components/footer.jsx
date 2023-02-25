import React from 'react'

const Footer = () => {
  return (
    <div className="w-full">
      <footer className="p-4 bg-white rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 ">
        <span className="text-sm text-gray-500 sm:text-center">
          @ Katyathegreatest. E-mail: katyathegreatest@yandex.ru
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm text-gray-500 sm:mt-0">
          <li>
            <div className="mr-4 p-1 border rounded-sm hover:bg-red-500 hover:text-white md:mr-6 ">
              M
            </div>
          </li>
          <li>
            <div className="mr-4 p-1 border rounded-sm hover:bg-amber-500 hover:text-white md:mr-6 ">
              e
            </div>
          </li>
          <li>
            <div className="mr-4 p-1 border rounded-sm hover:bg-yellow-300 hover:text-white md:mr-6 ">
              e
            </div>
          </li>
          <li>
            <div className="mr-4 p-1 border rounded-sm hover:bg-emerald-500 hover:text-white md:mr-6 ">
              o
            </div>
          </li>
          <li>
            <div className="mr-4 p-1 border rounded-sm hover:bg-sky-500 hover:text-white md:mr-6 ">
              w
            </div>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default Footer