import React from 'react';
import logo from '../assets/logo.png'
import { format } from 'date-fns';

const Header = () => {



const dayNameWithDate = format(new Date(), 'EEEE , dd MMMM  yyy');

    return (
        <div className='flex mt-8 justify-center flex-col items-center gap-3'>
            <img className='' src={logo} alt="" />
            <p className='text-accent'>Journalism without Fear or Favour</p>
            <p className='font-semibold text-accent'>{dayNameWithDate}</p>
        </div>
    );
};

export default Header;