import Link from 'next/link';
import Image from 'next/image';
import product_1 from '../assets/images/product_1.jpeg'
import product_2 from '../assets/images/product_2.jpeg'
import product_3 from '../assets/images/product_3.jpeg'
import product_4 from '../assets/images/product_4.jpeg'
import product_5 from '../assets/images/product_5.jpeg'
import product_6 from '../assets/images/product_6.jpeg'
import product_7 from '../assets/images/product_7.jpeg'
const CategoryList = ()=>{
  return (<div className ="px-4 overflow-x-scroll scrollbar-hide">
<div className="flex gap-4 md:gap-8 xs:w-1/2 sm:w-1/3 md:w-1/4">
<Link href="/list?cart=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 2xl:w-1/6 text-center">
<div className="relative bg-slate-100 w-full h-96">
<Image src={product_5} alt="product" fill sizes="20vw" className="object-cover"/></div>
<h1 className="mt-8 font-coral text-cl tracking-wide">Category Name</h1>
</Link>
<Link href="/list?cart=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 2xl:w-1/6 text-center">
<div className="relative bg-slate-100 w-full h-96">
<Image src={product_6} alt="product" fill sizes="20vw" className="object-cover"/></div>
<h1 className="mt-8 font-coral text-cl tracking-wide">Category Name</h1>
</Link>
<Link href="/list?cart=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 2xl:w-1/6 text-center">
<div className="relative bg-slate-100 w-full h-96">
<Image src={product_1} alt="product" fill sizes="20vw" className="object-cover"/></div>
<h1 className="mt-8 font-coral text-cl tracking-wide">Category Name</h1>
</Link>
<Link href="/list?cart=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 2xl:w-1/6 text-center">
<div className="relative bg-slate-100 w-full h-96">
<Image src={product_2} alt="product" fill sizes="20vw" className="object-cover"/></div>
<h1 className="mt-8 font-coral text-cl tracking-wide">Category Name</h1>
</Link>
<Link href="/list?cart=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 2xl:w-1/6 text-center">
<div className="relative bg-slate-100 w-full h-96">
<Image src={product_3} alt="product" fill sizes="20vw" className="object-cover"/></div>
<h1 className="mt-8 font-coral text-cl tracking-wide">Category Name</h1>
</Link>
<Link href="/list?cart=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 2xl:w-1/6 text-center">
<div className="relative bg-slate-100 w-full h-96">
<Image  src={product_4} alt="product" fill sizes="20vw" className="object-cover"/></div>
<h1 className="mt-8 font-coral text-cl tracking-wide">Category Name</h1>
</Link>
<Link href="/list?cart=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 2xl:w-1/6 text-center">
<div className="relative bg-slate-100 w-full h-96">
<Image src={product_5} alt="product" fill sizes="20vw" className="object-cover"/></div>
<h1 className="mt-8 font-coral text-cl tracking-wide">Category Name</h1>
</Link>
<Link href="/list?cart=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 2xl:w-1/6 text-center">
<div className="relative bg-slate-100 w-full h-96">
<Image src={product_6} alt="product" fill sizes="20vw" className="object-cover"/></div>
<h1 className="mt-8 font-coral text-cl tracking-wide">Category Name</h1>
</Link>
<Link href="/list?cart=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 2xl:w-1/6 text-center">
<div className="relative bg-slate-100 w-full h-96">
<Image src={product_7} alt="product" fill sizes="20vw" className="object-cover"/></div>
<h1 className="mt-8 font-coral text-cl tracking-wide">Category Name</h1>
</Link>
</div>
  </div>)
}
export default CategoryList;