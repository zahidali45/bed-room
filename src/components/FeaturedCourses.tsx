'use client'

import courseData from "@/data/{}code_courses.json";

import Link from 'next/link';
import { BackgroundGradient } from "@/components/ui/BackgroundGradient";

interface Course {
               "id": number,
            "title": string,
             "slug": string,
      "description": string,
            "price": number,
       "instructor": string,
       "isFeatured": boolean,
}
const FeaturedCourses = () => {
    const featuredCourses= courseData.courses.filter(
        (course:Course) => course.isFeatured
     );
      
    return(
        <div className='py-12 bg-gray-900'>
            <div>
               <div className='text-center'>
               <h1 className='text-base text-teal-600 font-semibold tracking-wide uppercase'> Featured Courses</h1>
               <p className='mt-2 text-3xl leading-8 font-semibold tracking-tight text-white sm:text-4xl'>learn with the best</p>
               </div>
           </div>
           <div className='mt-10'>
           <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 justify-center'>
           {featuredCourses.map((course: Course) => (
          <div key={course.id} className='flex justify-center'>
            <BackgroundGradient className="flex flex-col rounded[22px] bg-zinc-900 overflow-hidden h-full max-w-sm">
            <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
            <p className='text-lg sm:text-xl mt-4 mb-3 text-neutral-200'>{course.title}</p>{""}
            <p className='text-sm text-neutral-400 flex-grow'>{course.description}</p>{""}
            <Link href={`/courses/$(course.slug)`}>
            <span className='text-teal-400 hover:u'>learn more
            </span>
            </Link>
                </div> 
            </BackgroundGradient>
          </div> 
           ))}
           </div>
           <div className='mt-20 text-center'>
             <Link href={'/courses'} className='px-6 py-3 rounded-lg bg-slate-400 text-white font-semibold'> view all courses
             </Link>
            </div>
            </div>
            </div>
        
    )
}
   
 export default FeaturedCourses