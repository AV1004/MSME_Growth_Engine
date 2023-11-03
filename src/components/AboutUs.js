import React from 'react'
import photu from "../images/AboutUS.png"

export default function AboutUs() {
  return (
    <div>
      <div className=''>
        <img className='w-full h-[32rem]' src={photu} alt="" />
        <span className='text-center absolute top-[31rem] text-[#267DFF] right-[52.5rem] flex font-bold text-4xl'>MSME INDIA</span>

      </div>
      <span className='text-center justify-center items-center flex my-6 mt-28 font-bold text-4xl'>About MSMEs</span>
      <p className='flex items-center text-center justify-center leading-[3rem] text-justify text-2xl my-6 p-16 '>
        It would not be an overstatement to say that the Indian MSME sector is the backbone of the Indian economy. The MSME sector has worked relentlessly to protect the country’s economy in the face of various global crises. Several potential adversities caused by external factors have been warded off due to the thriving MSME sector in our country.
        The list of MSME-registered companies is set to touch 63.4 million in India soon. The businesses under MSME contribute 6.11% of the manufacturing GDP of India. Apart from that, 24.63% of GDP from the service sector and 33.4% of the manufacturing output in India comes from the MSME sector.
        The MSME sector is one of the largest sources of livelihood in our country, employing over 120 million people. As most of the MSME units exist in rural areas, this sector is a significant source of rural employment.
      </p>
      <span className='text-center justify-center items-center flex my-6 font-bold text-4xl'>Classification of MSMEs</span>
      <p className='flex items-center text-center justify-center leading-[3rem] text-justify text-2xl my-6 p-16 '>Micro Enterprise  – Rs. 1 crore Annual Turnover up to Rs. 5 crores
        Small Enterprise– Rs. 10 croresAnnual Turnover up to Rs. 50 crores
        Medium Enterprise-Rs. 50 croresAnnual Turnover up to Rs. 250 crores</p>
      <span className='text-center justify-center items-center flex my-6 font-bold text-4xl'>How the Website works?</span>
      <p className='flex items-center text-center justify-center leading-[3rem] text-justify text-2xl my-6 p-16 '>Recruiters Point of View
        One has to register in the portal with basic minimal information and need to update profile post registration, which will help them to have better reach to job seekers.
        In case of any issue, they may contact the centre to expedite registration.
        Recruiters may approach contact centre for their job postings without self registration and necessary assistance will be provided in registration and job posting
        Recruiters can do a candidate search without registration also, however to contact the candidate registration is must.

        Candidates Point of View
        One has to register in the portal with basic minimal information and need to update profile post registration which will help the candidate to have better reach to recruiters.
        Candidate need to provide name, institute name & date of birth for registration. If u do not have ur institute name, please click other and enter your institutes name.
        Candidates with incorrect credentials / data feeding would not be allowed to further register themselves on the portal and access will be denied.
        Candidates may carry out job search without registration, however, cannot contact the employer without registration in portal.
      </p>

    </div>
  )
}
