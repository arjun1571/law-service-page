import React, { useState } from 'react';
import Accordian from '../Acoordian/Accordian';


const AskQuation = () => {
    const [list,setList]=useState([
        {
            quation: '01. INITIAL CONTACT AND CONSULTATION',
            answare : "my naem is arjun "
        },
        {
            quation: '02. HIRING AND CASE BUILDING',
            answare : "my naem is arjun "
        },
        {
            quation: '03. PRE-TRIAL AND TRIAL PREPARATION',
            answare : "my naem is arjun "
        },
        {
            quation: '04. TRIAL AND ADVOCACY',
            answare : "my naem is arjun "
        },
        {
            quation: '05. POST-TRIAL AND FUTURE SUPPORT',
            answare : "my naem is arjun "
        },
    ])
    return (
        <div className='md:px-10 lg:px-20 mt-20'>
            <p className='p-2 text-sm'>INNOCENT UNTIL PROVEN GUILTY</p>
            <h1 className='lg:text-3xl md:text-2xl text-xl font-bold p-2'>Frequently asked questions </h1>
           
            <div className='list bg-[#e9e8e8] lg:p-10 mt-10'>
                {
                    list.map((item,key)=> (
                        <Accordian key={key} data={item} />
                    ) )
                }

            </div>
        </div>
    );
};

export default AskQuation;