
function Subscribe() {
  return (
    <section className='bg-seconderyColor py-14 px-4 xl:px-0'>
       <div className=' max-w-[1200px] mx-auto'>
          <h2 className=' text-3xl lg:text-[44px] text-whiteColor'>Stay Informed & Healthy – Subscribe Today!</h2>
          <p className=" text-base text-whiteColor pt-4">Get the latest health tips, emergency alerts, and exclusive clinic updates straight to your inbox!</p>

          <div className=" pt-12">
            <form action="" className=" md:flex gap-4 space-y-3 md:space-y-0">
                <input type="email" name="mail" id="mail" placeholder="Email Address"  className=" text-[#777980] bg-white outline-0 rounded-full py-3 px-6 w-full md:w-[300px]"/>
                <button className="py-3 px-14 cursor-pointer w-full md:w-auto bg-PrimaryColor text-whiteColor font-[MetroSB] rounded-full" type="submit">Submit</button>
            </form>
          </div>
       </div>
    </section>
  )
}

export default Subscribe
