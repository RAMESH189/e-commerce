import Link from 'next/link';
const Header = () => {
 return (
    <header className='flex justify-between p-4 bg-gray-300 font-bold text-xl'>
       <Link href="/">
          
             <div >
                <p>
                   E-commerce <span >☘</span>
                </p>
             </div>
         
       </Link>
       <div className='flex cursor-pointer'>
          <span>🛒</span>
          <p>$0.00</p>
       </div>
    </header>
 );
};

export default Header;