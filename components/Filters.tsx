'use client'
import { fromUrlQuery } from '@/sanity/utils';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useState } from 'react'
const links = ['all', 'Next 13', 'fontend', 'backend', 'fullstack']
const Filters = () => {
    const [active, setActive] = useState('');
    const searchParams = useSearchParams();
    const router = useRouter();
    const handleFilter = (link: string) => {
        let newUrl = '';

        if (active === link) {
            setActive('');
            newUrl = fromUrlQuery({
                params: searchParams.toString(),
                keysToRemove: ['category'],
                value: null,
            })
        } else {
            setActive(link);
            newUrl = fromUrlQuery({
                params: searchParams.toString(),
                key: 'category',
                value: link.toLowerCase(),
            })
        }
        router.push(newUrl, { scroll: false})

        // setActive(link);
    }
    console.log(active)
    return (
        <ul className='text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl'>
            {
                links.map((link) => (
                    <button
                        key={link}
                        onClick={() => handleFilter(link)}
                        className={`${active === link ? 'gradient_blue-purple' : ''} whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
                    >
                        {link}
                    </button>
                ))
            }
        </ul>
    )
}

export default Filters