import React, { useState } from 'react';
import { FaArrowDown } from "react-icons/fa";

const Accordian = ({data}) => {

    const [item,setItem]=useState(data)

    const handleToggle = ()=>{
        let newActive = item.active === 1 ? 0 : 1;
        setItem({...item, active: newActive})
    }
    return (
        <div className={`p-5  divide-[black] duration-500 rounded-md w-full mt-2 group ${item.active === 1 ? 'is-active ' : ''}`} onClick={handleToggle}>
                <div className='flex items-center justify-between'>
                <div className='group-[.is-active]:font-bold duration-500 cursor-pointer' onClick={handleToggle}>{item.quation}</div>
                <div className={`group-[.is-active]:rotate-[270deg]`} > <FaArrowDown></FaArrowDown> </div>
            </div>
            <div className='overflow-hidden max-h-0 group-[.is-active]:max-h-[100px] duration-500 mb-3'>
                 {item.answare}
                
            </div>
            <hr className='divide-y divide-[black]' />
        </div>
    );
};

export default Accordian;