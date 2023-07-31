'use client'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import imageProfile from '../../../public/Image/Profile/ImageProfile.PNG'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'

const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });
    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, value, motionValue]);
    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])
    return <span ref={ref}></span>
}

const page = () => {
    return (
        <>
            <Head>
                <title>About Page</title>
                <meta name="Description" content='any description'></meta>
            </Head>
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <AnimatedText text={'The purpose of life is a purposeful life.'} className='mb-16' />
                    <div className='grid w-full grid-cols-8 gap-6'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                            <p className='font-medium'>Hi, I'm nicolas, a semi senior fullstack developer passionate about creating and optimizing user-centric
                                digital experience. I enjoy being proactive learning new things to improve performance before, during
                                and after development to maintain a quality product over time.</p>
                            <p className='my-4 font-medium'>I believe that life is based on solving problems and taking on new challenges, that's why I enjoy development,
                                it's a universe that allows me to explore and no matter how much I do it, it never ceases to amaze me,
                                and it has a clear objective such as an optimal user experience.</p>
                            <p className='font-medium'>
                                On the other hand, in a company like epm telecommunications I chose to create a new system for the bidding
                                area that allowed them to have a more intuitive and pleasant experience with a better optimization of code
                                that new developers have been working and improving, I managed to solve and maintain several bugs of one
                                of the oldest applications and I was lucky to be in several of the projects and equipment developed for
                                the sponsors of the multinational group mok.
                            </p>
                            <p className='mt-4 font-medium'>I hope to have the opportunity to bring my skills and passion to your next
                                project.</p>
                        </div>
                        <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8'>
                            <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-2xl bg-dark' />
                            <Image src={imageProfile} alt="nicolas" className="w-full h-auto rounded-2xl" priority sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw,vw"/>
                        </div>
                        <div className='col-span-2 flex flex-col items-end justify-between'>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={15} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>projects completed</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={3} />+
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>years of experience</h2>
                            </div>
                            <div className='flex flex-col items-end justify-center'>
                                <span className='inline-block text-7xl font-bold'>
                                    <AnimatedNumbers value={3} />
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>worked companies</h2>
                            </div>
                        </div>
                    </div>
                    <Skills />
                    <Experience/>
                    <Education/>
                </Layout>
            </main>
        </>
    )
}

export default page