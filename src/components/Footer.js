import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
            <Layout className='py-8 flex items-center justify-between'>
                <span> 2023 &copy; All Rights Reserved</span>
                <div className='flex items-center'>
                    Build For&nbsp;<Link href="https://www.linkedin.com/in/nicolas-andres-moreno-ba9b28193/" className='underline underline-offset-2' target='_blank'>Nicolas</Link>
                </div>
                <Link href="https://www.instagram.com/nixus_6/" className='underline underline-offset-2' target='_blank'>Say Hello</Link>
            </Layout>
        </footer>
    )
}

export default Footer