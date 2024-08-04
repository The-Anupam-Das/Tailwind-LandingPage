import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col gap-12 md:flex-row md:justify-between'>
      <ul className='flex gap-6 font-lato text-gray-400'>
        <li>
          <a href='https://www.instagram.com/the_anupamdas/' target='blank'>Instagram</a>
        </li>
        <li>
          <a href='https://x.com/iamAnupam_Das' target='blank'>Twitter / X</a>
        </li>
        <li>
          <a href='https://www.facebook.com/profile.php?id=100016698638540' target='blank'>Facebook</a>
        </li>
      </ul>
      <div className='flex gap-2'>
        <img src='/public/assets/Help-Avatar.svg' alt='help' />
        <div>
          <p className='font-playfair font-thin'>Have any Questions?</p>
          <a href='#' className='font-lato font-m'>Contact with specialist</a>
        </div>
      </div>
    </div>
  )
}

export default Footer