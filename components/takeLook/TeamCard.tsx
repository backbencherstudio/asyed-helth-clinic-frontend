import Image from 'next/image';

function TeamCard({item}) {
    console.log(item);
    
  return (
    <div className=' p-3 bg-whiteColor rounded-2xl'>
        <div className=' group overflow-hidden'>

       <Image src={item?.image} alt={item.name} width={400} height={250} className=' w-full group-hover:scale-110  transition '/>
      
        </div>
         <div className='py-1 text-center space-y-1'>
          <h3 className=' text-headerColor text-2xl '>{item?.name}</h3>
          <p  className=' text-base text-pragraphColor'>{item?.position}</p>
       </div>
    </div>
  )
}

export default TeamCard
