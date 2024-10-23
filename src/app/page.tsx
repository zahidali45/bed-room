import HeroSection from '@/components/HeroSection';
import FeaturedCourses from '@/components/FeaturedCourses';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedWabinars from '@/components/FeaturedWabinars';
import TestiMonialCard from '@/components/TestimonialCard';
import React from 'react'

const page = () => {
  return(

    <div>

<HeroSection/>
<FeaturedCourses/>
<WhyChooseUs/>
<FeaturedWabinars/>
<TestiMonialCard/>

    </div>
  )
}

export default page