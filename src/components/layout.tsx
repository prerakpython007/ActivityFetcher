import React from 'react'; // Ensure React is imported for typing
import Link from 'next/link';
import Image from 'next/image';
import DropDown from './Dropdown';




// Define the props your Layout component will accept
type LayoutProps = {
  children: React.ReactNode;
};



const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-white text-purple-700">
      <nav className="bg-purple-700 text-white p-4 flex justify-between items-center">
        <div>
          <Image src='/logo_LSRC.png' className='hidden lg:block md:block' width={200} height={200} alt='' />
        </div>
        <div className='flex space-x-10 pr-7'>
          <div className=''>
            <input type="search" placeholder="   Search..." className="p-1 text-black px-3 hidden lg:block md:block rounded-full" />
          </div>
          <div className='py-1 flex'>
            <Link href="/events" className="mx-5">About Us</Link>
            <DropDown
            options={[
              { label: 'Events', href: 'https://docs.google.com/forms/d/1xN8Ac7o2jomijPh5oxitizoF-H4NENml39bY7Cs4SKc/edit?usp=drivesdk' },
              { label: 'Research', href: 'https://forms.gle/S4MUXhxTgyu1DDDB7' },
              { label: 'MOUs', href: '/mous' },
            ]}
            />
            <Link href="/mou" className="mx-5">Report</Link>
          </div>
        </div>
      </nav>
      <main> {children} </main>
    </div>
  );
};

export default Layout;