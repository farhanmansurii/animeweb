import React from 'react'
import Link from 'next/link'
const Episode = (id) => {
  return (
    <Link href={`/watch?id=${id}`}>hi</Link>
  )
}

export default Episode
