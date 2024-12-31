import Link from 'next/link';
import Menu from '@/components/Menu';
import SearchBar from '@/components/SearchBar';
import NavIcon from '@/components/NavIcon';
import NavItems from '@/components/NavItems';
const Navbar = ()=>{
  return(<>
  <div className="h-15 px-4 bg-gray-light sm:px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
  <div className="flex pt-4 pb-4 justify-between items-center">
  <div className="flex items-center gap-2">
  <div><Menu/></div>
  <div><Link href ='/'>Company_logo</Link></div>
  <div><NavItems /></div>
   <div className="xs:hidden sm:inline-flex"><SearchBar /></div>
   </div>
<NavIcon />
  </div>
  </div>
 <div className="xs:inline-flex sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden">
 <SearchBar />
 </div>
  </>)
}
export default Navbar;