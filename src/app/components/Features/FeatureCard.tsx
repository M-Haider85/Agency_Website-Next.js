import React from 'react'
import Image from 'next/image'

interface Props {
    image: string
    title: string
}

export default function FeatureCard({image, title}:Props) {
  return (
    <div className='text-center bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-all duration-300
    cursor-pointer hover:scale-105'>
        <Image
        src={image}
        alt={title}
        width={70}
        height={70}
        className='mx-auto'
        />
        <h1 className='text-[20] mt-[1.4rem] font-[500] text-[#02073e]'>{title}</h1>
        <p className='mt-[1rem] text-black opacity-90 text-[15px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Mauris euismod eu diam in dictum.
            Nulla quam nisl, egestas vel orci faucibus, lacinia fringilla mi. Morbi quis elementum nulla, eu mattis erat.</p>
            <p className='mt-[1.4rem] text-red-500 font-[500] cursor-pointer hover:text-[#335c67] hover:underline'>Learn More</p>
    </div>
  )
}

// import React from 'react';
// import Image from 'next/image';

// interface Props {
//   image: string;
//   title: string;
// }

// export default function FeatureCard({ image, title }: Props) {
//   return (
//     <div
//       className="text-center bg-gray-100 p-4 rounded-lg hover:shadow-lg transition-all duration-300
//     cursor-pointer hover:scale-105"
//     >
//       <Image
//         src={image}
//         alt={title}
//         width={70}
//         height={70}
//         className="mx-auto"
//       />
//       <h1 className="text-[20px] mt-[1.4rem] font-[500] text-[#02073e]">{title}</h1>
//       <p className="mt-[1rem] text-black opacity-90 text-[15px]">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod
//         eu diam in dictum. Nulla quam nisl, egestas vel orci faucibus, lacinia
//         fringilla mi. Morbi quis elementum nulla, eu mattis erat.
//       </p>
//       <p className="mt-[1.4rem] text-red-600 font-[500] cursor-pointer hover:text-red-700">
//         Learn More
//       </p>
//     </div>
//   );
// }
