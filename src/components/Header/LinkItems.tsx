import { LinkItemsProps } from '@/types/link-items'
import Link from 'next/link'
import React from 'react'


const LinkItems = ({
    linkData,
}:{
    linkData:LinkItemsProps[]
}) => {
  return (
    <>
        {linkData.map((item) => 
            <Link key={item.id} href={`/${item.pathname}`} className='hover:bg-yellow-500 hover:text-black p-2.5 text-[11px]'>
                {item.name}
            </Link>
        )}
    </>
  )
}

export default LinkItems
