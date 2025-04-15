import React from 'react'
import Subscribe from '@/components/Subscribe'
export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div>
        {children}
        <Subscribe/>
    </div>
  )
}
