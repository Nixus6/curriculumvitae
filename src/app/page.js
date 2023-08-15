import Layout from '@/components/Layout'
import Image from 'next/image'
import ProfilePicture from '../../public/Image/Profile/ProfilePicture.PNG'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
// import pdf from "../../public/Pdf/HojadeVidaNicolasMoreno+P.pdf"

export default function Home() {
  return (
    <main className="flex items-center text-dark w-full min-h-screen">
      <Layout className="pt-0 md:pt-16 sm:pt-8">
        <div className='flex items-center justify-between w-full lg:flex-col-reverse'>
          <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
            <AnimatedText text={'Turning Vision Into Reality With Code And Design.'} className='text-6xl text-left 
            xl:!text-5xl lg:text-center lg:!text-6xl md:!text-5xl sm:!text-3xl lg:mt-2' />
            <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>As a semi-senior full-stack developer, I am dedicated to turning ideas into innovative web applications. Explore my skills and experience using my front end and back end development skills.</p>
            <div className='flex items-center self-start mt-2 lg:self-center'>
              <Link href="HojadeVidaNicolasMoreno+P.pdf" target={"_blank"} className='flex items-center bg-dark text-light p-2.5 px-6
              rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
              border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base'
              download={true}>Resume <LinkArrow className={'w-6 ml-1'}/></Link>
              <Link href="tel:+573172792776" target={"_blank"} className='ml-4 text-lg font-medium capitalize text-dark underline md:text-base'>Contact</Link>
            </div>
          </div>
          <div className='w-1/2 flex justify-center lg:mb-2'>
            <Image src={ProfilePicture} alt='' priority sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,50vw" className='h-auto lg:hidden md:inline-block md:w-full'></Image>
          </div>
        </div>
      </Layout>
      <HireMe/>
    </main>
  )
}
