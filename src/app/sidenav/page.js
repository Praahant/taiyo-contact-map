// components/SideNav.js
import Link from 'next/link';
import style from "./style.css"
const SideNav = () => {
    return (
        <div className='navbar'>
            <ul className='sidebar'>
                <li className='py-2 pl-2 rounded-full navlist  hover:bg-gray-800'>
                    <Link href="/contact"><p >Contact</p></Link>
                </li>
                <li className='py-2 pl-2 rounded-full navlist  hover:bg-gray-800'>
                    <Link href="/dashboard"><p>Map</p></Link>
                </li>
                <li className='py-2 pl-2 rounded-full navlist  hover:bg-gray-800'>
                    <Link href="/linegraph"><p>LineGraph</p></Link>
                </li>
            </ul>
        </div>
    );
};


export default SideNav;
