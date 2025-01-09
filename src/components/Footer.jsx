import Link from 'next/link';
import Image from 'next/image';
const Footer =()=>{
  return(<>
  <div className="flex justify-center gap-24 items-center py-12 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-[#000] text-[#FFF] text-sm mt-24 xs:flex-col sm:flex-col-2">
    {/*TOP*/}
  <div className="flex text-center items-center flex-row xs:flex-wrap sm:flex-wrap gap-x-24 gap-y-10">
    {/*LEFT*/}
    <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4">
    <Link href="/">
    <div className="text-2xl tracking-wide"> LIMA</div></Link>
    <p className="text-semibold text-1xl">Dewangonj Market, Fassion_House</p>
  <span className="text-semibold">mdazimmia53@gmail.com</span>
  <span className="text-semibold">+8801703357281</span>
  <div className="flex gap-6 xs:ml-20">
<Image src="/facebook.png" width={28} height={28} alt="image" />
<Image src="/instagram.png" width={28} height={28} alt="image" />
<Image src="/youtube.webp" width={28} height={28} alt="image" />
<Image src="/twitter.webp" width={28} height={28} alt="image" />
  </div>
    </div>
    {/*CENTER*/}
        <div className="flex gap-4 xs:ml-12">
        <div className="flex flex-col gap-6">
        <h1>COMPANY</h1>
        <div className="flex flex-col">
        <Link href="/">About</Link>
       <Link href="/">About</Link>
      <Link href="/">About</Link>
     <Link href="/">About</Link>  
        </div>
        </div>
      <div className="flex flex-col gap-6">
        <h1>SHOPE</h1>
        <div className="flex flex-col">
        <Link href="/">About</Link>
       <Link href="/">About</Link>
      <Link href="/">About</Link>
     <Link href="/">About</Link>  
        </div>
        </div>
       <div className="flex flex-col gap-6">
        <h1>HELP</h1>
        <div className="flex flex-col">
        <Link href="/">About</Link>
       <Link href="/">About</Link>
      <Link href="/">About</Link>
     <Link href="/">About</Link>  
        </div>
        </div>
        </div>
    {/*RIGHT*/}
 <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-4">
      <div className="">
      <h1 className="font-medium">SUBSCRIBE</h1>
      <p className="mt-4">Be the firsr to get the latest news aboud trends, promotions, and much more! </p>
      </div>
      <div className="flex">
    <input type="text" name="" placeholder="email address" className="p-4 text-[#000] text-center w-3/4 text-2xl " />
      <button className="w-1/4 bg-lama text-white rounded-sm text-2xl">JOIN</button>
      </div>
      <div>
      <span className="text-semibold">Surce Payments</span>
        <div className="flex gap-4" >
      <Image src="/instagram.png" width={40} height={20} alt="image" />
      <Image src="/instagram.png" width={40} height={20} alt="image" />
      <Image src="/instagram.png" width={40} height={20} alt="image" />
      <Image src="/instagram.png" width={40} height={20} alt="image" />
      <Image src="/instagram.png" width={40} height={20} alt="image" />
      </div>
      </div>
      </div>
  </div>
  </div>
  <div className="bg-[#000] text-white">buttom</div>
  </>)
}
export default Footer;