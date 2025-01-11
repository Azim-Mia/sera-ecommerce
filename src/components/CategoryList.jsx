import Link from 'next/link';
import Image from 'next/image';
import productDatas from '@/lips/productDatas';
const CategoryList = ()=>{
  const productData = productDatas();
  return (<div className ="px-4 overflow-x-scroll md:scrollbar-hide lg:scrollbar-hide xl:scrollbar-hide 2xl:scrollbar-hide">
<div className="flex gap-4 md:gap-8  xs:w-1/2 sm:w-1/3 md:w-1/4">
{productData.map((data)=><Link href="/list?cart=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 2xl:w-1/6 text-center">
<div className="relative bg-slate-100 w-full h-96">
<Image src={data.img} alt="product" fill sizes="20vw" className="object-cover xs:h-32"/></div>
<h1 className="mt-8 font-coral text-cl tracking-wide">Category Name</h1>
</Link>
)}
</div>
  </div>)
}
export default CategoryList;