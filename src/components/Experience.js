import React, { useRef } from 'react'
import { motion, useScroll } from "framer-motion"
import LiIcon from './LiIcon'

const Details = ({ position, company, companyLink, time, address, work, linkVideo = '' }) => {
    const ref = useRef(null);
    return (
        <li ref={ref} className='my-8 first:mt-8 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <LiIcon reference={ref} />
            <motion.div
                initial={{ y: 50 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.5, type: "spring" }}>
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp;<a href={companyLink}
                    target='_blank' className='text-primary capitalize'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75'>
                    {time} | {address}
                </span>
                <p className='font-medium w-full'>
                    {work}
                </p>
                <span className='font-medium flex flex-col'>
                    {/* <a href={'https://preeureka.grupomok.com.co/'} target='_blank' className='underline text-blue-600'>https://preeureka.grupomok.com.co/</a><br/>
                    <a href={'https://preeureka.grupomok.com.co/'} target='_blank' className='underline text-blue-600'>https://preeureka.grupomok.com.co/</a> */}
                    {linkVideo.split(',').map((word, index) => <><a key={`${word}-${index}`} href={word} target='_blank' className='underline text-blue-600'>{word}</a></>)}
                </span>
            </motion.div>
        </li>)
}
const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center start"]
    })
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center'>
                Experience</h2>
            <div ref={ref} className='w-[75%] mx-auto relative'>

                <motion.div style={{ scaleY: scrollYProgress }} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top' />

                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details position="Developer Semi Senior FullStack"
                        company="Grupo Mok"
                        companyLink="https://www.grupomok.com/"
                        time="2021-2023" address="Cl. 94a #13 42, Bogotá"
                        work="I managed to solve and maintain several bugs of one of the oldest applications and I was lucky to 
                be in several of the projects and equipment developed for the sponsors of the multinational group mok. Links Some Projects:" linkVideo='https://preeureka.grupomok.com.co/,https://www.moktravelassist.com/,https://disfrutatuseguro.com/,https://pre.cuentacontuseguro.com/' />
                    <Details position="Developer Junior FullStack"
                        company="Casa Bonita"
                        companyLink="http://casabonitaa.com"
                        time="2020-2021" address="Cl 26b #5-93, Santa Fé, Bogotá, Cundinamarca"
                        work="I performed two tasks, first to create a brand for the company, design the logo, slogan and product catalog with programs such as 
                        Photoshop and Adobe Illustrator. The second in the warehouse area, delivery and inventory management, stock, purchases and sales with a 
                        desktop system for its management."/>
                    <Details position="Developer Junior FullStack"
                        company="Une epm telecomunicaciones"
                        companyLink="https://www.tigo.com.co/empresas"
                        time="2019-2020" address="Ac. 26 #92-32, Bogotá"
                        work="In a company like une epm telecomuniaciones, I chose to start the development of a new system 
                for the bidding area that allowed them to have a more intuitive and pleasant experience with a better 
                code optimization that new developers have been working on and improving, Git:" linkVideo='https://github.com/Nixus6/Licitaciones' />
                    <Details position="Information Systems Analysis and Development Technologist"
                        company="termiot"
                        companyLink="https://termiot.com"
                        time="2019" address="RED TECNOPARQUE COLOMBIA Cl. 54 #10 – 39, Bogotá"
                        work="In a team of 4 programmers we worked to develop a web information system with inventory 
                            of products, keep track of functions such as Minimum Product Stock, Product Location, Temperature and Humidity of 
                            the Cellar for the institution's seedbed. Git:" linkVideo='https://github.com/Nixus6/TermIot' />
                    <Details position="Software programming technician"
                        company="Planetario de Bogota"
                        companyLink="https://www.planetariodebogota.gov.co/mision-y-vision"
                        time="2017-2018" address="Cl 26b #5-93, Santa Fé, Bogotá, Cundinamarca"
                        work="Development of a desktop information system for the management 
                            of the bookstore's management of inventory, loans and bookstore reservations. Video:" linkVideo='https://www.youtube.com/watch?v=t9ZN3PecH-w&t=1s' />
                </ul>
            </div>
        </div>
    )
}

export default Experience