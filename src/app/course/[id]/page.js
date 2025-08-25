'use client'

import { useParams } from "next/navigation"
import React from 'react'

const Page = () => {
     const params = useParams()
  return (
    <div>
      This is a Dynamic Page-- {params.id}
    </div>
  )
}

export default Page
