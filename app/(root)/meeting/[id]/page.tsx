"use client"
import { useParams } from 'next/navigation';
import React from 'react'

const Page = () => {
  const { id } = useParams();

  return (
    <div>{`Welcome id no: ${id}`}</div>
  )
}

export default Page;