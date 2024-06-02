import Image from 'next/image'

export default function Home() {
  return (
    <div className='relative'>
      <div className='absolute left-[100px]'>
        <h1 className='font-bold text-[250px] text-white' style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)' }}>HOCA</h1>
      </div>
      <div className='absolute left-[120px] mt-[310px]'>
        <p className='text-[40px] text-white'>Hellenic Outreach and Community Association</p>
        <p className='text-[20px] text-white'>The Hellenic Outreach and Community Association (HOCA) is dedicated to fostering unity, respect, and cultural preservation among Greek youth. 
        <br/>By promoting the values of Philotimo—honor, integrity, and selflessness—HOCA nurtures future leaders who embrace their heritage. 
        <br/>Through workshops, mentorship, and outreach, HOCA equips youth with the skills to face modern challenges while staying rooted in their cultural identity.</p>
      </div>
    </div>
  )
}
