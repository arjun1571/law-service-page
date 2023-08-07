import React, { useState } from 'react';
import Accordian from '../Acoordian/Accordian';

const DefenceProcess = () => {
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
        <div className='md:px-10 lg:px-20 '>
            <h1 className='text-3xl font-bold'>OUR DEFENCE PROCESS</h1>
            <p className='lg:p-3 p-2'><small>* Please note, the defence process outlined is a general guideline. Your specific case may require a tailored approach due to unique circumstances.*</small></p>
            <div className='list bg-[#b9dff6] lg:p-10 mt-10'>
                {
                    list.map((item,key)=> (
                        <Accordian key={key} data={item} />
                    ) )
                }

            </div>
        </div>
    );
};

export default DefenceProcess;