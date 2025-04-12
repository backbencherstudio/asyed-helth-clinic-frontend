import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
function SocialShare() {
    return (
        <div>
            <div className="flex gap-3 text-whiteColor text-lg">
                <button className='p-3 cursor-pointer bg-seconderyColor rounded-full flex justify-center items-center'>
                    <FaFacebookF />
                </button>
                <button className='p-3 cursor-pointer bg-seconderyColor rounded-full flex justify-center items-center'>
                    <FaInstagram />
                </button>
                <button className='p-3 cursor-pointer bg-seconderyColor rounded-full flex justify-center items-center'>
                    <FaLinkedinIn />
                </button>
                <button className='p-3 cursor-pointer bg-seconderyColor rounded-full flex justify-center items-center'>
                    <FaYoutube />
                </button>
            </div>
        </div>
    )
}

export default SocialShare
