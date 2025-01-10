const FindProduct=async({params})=>{
  const productId=(await params).slug;
  return (<>
  <p>{productId}</p>
  </>)
}
export default FindProduct;