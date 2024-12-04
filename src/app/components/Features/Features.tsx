// import React from 'react'
// import SectionHeading from '../SectionHeading/SectionHeading'
// import FeatureCard from './FeatureCard'

// import Icon1 from '@/public/icon1.png'
// import Icon2 from '@/public/icon2.png'
// import Icon3 from '@/public/icon3.png'
// import Icon4 from '@/public/icon4.png'
// import Icon5 from '@/public/icon5.png'

// export default function Features() {
//   return (
//     <div className='pt-[5rem] pb-[3rem]'>
//         <SectionHeading 
//         headingMini="Ideal solution for you"
//         headingPrimary="Explore Ultimate Features"
//         />

//         <div className='pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]'>
//           <div>
//             <FeatureCard 
//             title="Email Subscription"
//             image={Icon1.src}
//             />
//           </div>
//         </div>

//     </div>
//   )
// }


import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';
import FeatureCard from './FeatureCard';

export default function Features() {
  const Icon1 = '/icon1.png';
  const Icon2 = '/icon2.png';
  const Icon3 = '/icon3.png';
  const Icon4 = '/icon4.png';
  const Icon5 = '/icon5.png';
  const Icon6 = '/icon6.png';

  return (
    <div className="pt-[5rem] pb-[3rem]">
      <SectionHeading
        headingMini="Ideal solution for you"
        headingPrimary="Explore Ultimate Features"
      />

      <div className="pt-[5rem] w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-[1.4rem]">
        <div 
        data-aos="zoom-in"
        data-aos-anchor-placement="top-center">
          <FeatureCard title="Email Subscription" image={Icon1} />
        </div>
        <div
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-anchor-placement="top-center">
          <FeatureCard title="Customer Support" image={Icon2} />
        </div>
        <div
        data-aos="zoom-in"
        data-aos-delay="400"
        data-aos-anchor-placement="top-center">
          <FeatureCard title="Data Analytics" image={Icon3} />
        </div>
        <div
        data-aos="zoom-in"
        data-aos-delay="600"
        data-aos-anchor-placement="top-center">
          <FeatureCard title="Search Engine Optimization" image={Icon4} />
        </div>
        <div
        data-aos="zoom-in"
        data-aos-delay="800"
        data-aos-anchor-placement="top-center">
          <FeatureCard title="Cloud Integration" image={Icon5} />
        </div>
        <div
        data-aos="zoom-in"
        data-aos-delay="1000"
        data-aos-anchor-placement="top-center">
          <FeatureCard title="Digital Marketing" image={Icon6} />
        </div>
      </div>
    </div>
  );
}
