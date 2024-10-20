import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-gray-400 py-12 bottom-0 left-0 w-full'>
    <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 sm:px-6 lg:px-8'>
        <div>
            <h3 className='text-lg font-bold text-white mb-4'> About Us </h3>
            <p>C2tec is dedicated to enhancing coding skills and fostering a community of developers. Our platform offers resources, tutorials, and mentorship to guide you on your Digital marketing journey.</p>
        </div>
        <div>
            <h3 className='text-lg font-bold text-white mb-4'>Links</h3>
            <ul>
                <li><a href="/"  className='hover:text-slate-300'>Home</a></li>
                <li><a href="/Courses" className='hover:text-slate-300'>Courses</a></li>
                <li><a href="/About" className='hover:text-slate-300'>About</a></li>
                <li><a href="/Contact" className='hover:text-slate-300'>Contact</a></li>
            </ul>
        </div>
        <div>
            <h3 className='text-lg font-bold text-white mb-4'>Follow Us</h3>
            <ul>
                <li><a href="/https://www.instagram.com/muhammadzahid5342/profilecard/?igsh=czdjanN4djUxcGZv" className='hover:text-slate-300'>Instagram</a></li>
                <li><a href="/https://www.facebook.com/profile.php?id=100095279071555&mibextid=ZbWKwL" className='hover:text-slate-300'>Facebook</a></li>
                <li><a href="https://github.com/zahidali45/clean.git/"  className='hover:text-slate-300'>Github</a></li>
                <li><a href="/https://www.linkedin.com/in/muhammad-zahid-70a331246?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"  className='hover:text-slate-300'>Linkedin</a></li>
                <li><a href="/https://vercel.com/zahidali45s-projects"  className='hover:text-slate-300'>Vercel</a></li>
                </ul>
            </div>
            <div>
            <h3 className='text-lg font-bold text-white mb-4'>Contact Us</h3>
                <p>Email: <a href="/.mail@gmail.com" className='hover:text-white'>mz260959@gmail.com</a></p>
                <p>Phone: <span className='hover:text-white'>03013987385</span></p>
            </div> 
        </div>
        <div>
            <p className='flex justify-center p-2'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem nostrum ipsam eum? Voluptatum eaque perspiciatis, animi ad magni earum. Maxime nesciunt eligendi dicta corporis aliquam delectus aut mollitia facere nostrum.
            </p>
        </div>
    </footer>
  )
}

export default Footer