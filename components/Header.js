import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {  RiLinkedinFill, RiGithubFill, } from "react-icons/ri"
import { FaXTwitter } from "react-icons/fa6";
// import { FaDiscord } from "react-icons/fa";



const Header = () => {
    return (
        <header className='max_padd_container flexBetween absolute top-0 w-full'>
            {/* {logo} */}
            <Link href={'/'} className='flexCenter py-3'>
                <Image src={'./logo.svg'} alt='logo' height={99} width={99} />
            </Link>
            {/* icons and buttons  */}
            <SocialIcons />

        </header>
    )
}


const SocialIcons = () => {
    return (
        <div className='flex gap-4 lg:gap-3 pr-4'>
            <Link href={'https://x.com/x_surajkr?t=ipEfK4OgFEqos3Z3PamEoA&s=09'} className='bg-[#08d9d6] p-2 text-tertiary text-lg rounded-full rounded-bl-none hover:bg-tertiary hover:text-white hover:rounded-bl-full hover:rounded-tl-none transition-all duration-500 '>
                <FaXTwitter />
            </Link>
            <Link href={'https://www.linkedin.com/in/suraj-kumar-46b43624b/'} className='bg-[#eaeaea] p-2 text-tertiary text-lg rounded-full rounded-bl-none hover:bg-tertiary hover:text-white hover:rounded-bl-full hover:rounded-tl-none transition-all duration-500 '>
                <RiLinkedinFill />
            </Link>
            
            <Link href={'https://github.com/gitsurajkr'} className='bg-[#5272f2] p-2 text-tertiary text-lg rounded-full rounded-bl-none hover:bg-tertiary hover:text-white hover:rounded-bl-full hover:rounded-tl-none transition-all duration-500 '>
                <RiGithubFill />
            </Link>
        </div>
    )
}
export default Header