import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='  h-screen bg-pragraphColor  text-center flex justify-center items-center'>
      <div className='space-y-3 text-whiteColor'>
      <h2 className=' text-2xl font-bold'>Not Found</h2>
      <p className=' '>Could not find requested resource</p>
      <div>

      <Link href="/" className=' text-whiteColor underline text-lg '>Return your Home</Link>
      </div>
      </div>
     
    </div>
    )}
