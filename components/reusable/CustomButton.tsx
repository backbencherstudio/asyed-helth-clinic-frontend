
function CustomButton({children}) {
 
  return (
    <div>
      <button  className=' text-lg cursor-pointer text-whiteColor px-7 py-3 bg-PrimaryColor rounded-full'>{children}</button>
    </div>
  )
}

export default CustomButton
