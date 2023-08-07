import React from 'react';
import grop from "../../assets/logo.png"
import grop1 from "../../assets/fotter.png"
import { FaFacebookSquare,FaInstagram,FaTwitterSquare,FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='md:px-10 lg:px-20 mb-10 bg-[black] text-white lg:p-20 '>
            <hr />
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  divide-x'>

                <div className='my-10 p-5'>
                    <img className='w-[186px] h-[71px] ' src={grop} alt="" />
                    <h1 className='mt-8 text-xl font-bold'>THERE IS A DEFENCE <br /> FOR EVERY OFFENCE </h1>
                    <p className='mt-7'>FIND US ON </p>
                    <div className='flex mt-5 mb-5 '>
                         <div className=''>
                            <FaFacebookSquare></FaFacebookSquare>
                         </div>
                         <div className='mx-2'>
                            <FaInstagram></FaInstagram>
                         </div>
                         <div>
                            <FaTwitterSquare></FaTwitterSquare>
                         </div>
                         <div className='mx-2'>
                            <FaLinkedin></FaLinkedin>
                         </div>
                    </div>
                    <hr />
                    <p className='mt-3'>REGISTRATION N: 12345607</p>
                </div>
                <div className='p-5'>
                    <p><small>DEFENCE</small></p>
                    <p className='my-2'>DRUGS</p>
                    <hr />
                    <p className='my-2'>FINANCIAL CRIMES</p>
                    <hr />
                    <p className='my-2'>MEDICAL NEGLIGENCE & MALPRACTICE</p>
                    <hr />
                    <p className='my-2'>NATIONAL SECURITY CRIMES</p>
                    <hr />
                    <p className='my-2'>SEX & HUMAN RIGHTS CRIMES</p>
                    <hr />
                    <p className='my-2'>TRAFFIC OFFENCES</p>
                    <hr />
                    <p className='my-2'>VIOLENT CRIMES</p>
                    <hr />
                </div>
                <div className='p-5'>
                    <p><small>MORE LINKS</small> </p>
                    <p className='my-2'>ALCOHOL AND YOUNG PEOPLE LAW</p>
                    <hr />
                    <p className='my-2'>ALCOHOL AND YOUNG PEOPLE LAW</p>
                    <hr />
                    <p className='my-2'>FREQUENTLY ASKED QUESTIONS</p>
                    <hr />
                    <p className='my-2'>LATEST NEWS</p>
                    <hr />
                    <p className='my-2'>LEGISLATION UNDERSTANDING</p>
                    <hr />
                    <p className='my-2'>PRIVACY POLICY </p>
                    <hr />
                    <p className='my-2'>TERMS AND CONDITIONS</p>
                    <hr />
                </div> 
                <div className='p-5'>
                    <p><small>ABOUT US</small>  </p>
                    <p className='my-2'>ABOUT US </p>
                    <hr />
                    <p className='my-2'>OUR TEAM </p>
                    <hr />
                    <p className='my-2'>CAREERS</p>
                    <hr />
                    <p className='mt-20'>OPENING HOURS </p>
                    <p className='mt-3'>Mon to Fri : 9.00am to 5:30 pm</p>
                </div> 
            </div>
            <hr />
            <div className='my-5 p-10'>
                <img className='lg:w-[520px] mx-auto' src={grop1} alt="" />
            </div>
            <hr />
            <p className='p-5 text-center'>MAURICE ANDREWS SOLICITORS  | COPYRIGHT 2023 | ALL RIGHTS RESERVED </p>
            <hr />
        </div>
    );
};

export default Footer;