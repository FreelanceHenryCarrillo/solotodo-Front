import Link from 'next/link'
import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'

type Props = {
    to: string
}

const BackArrow = ({to}: Props) => {
  return (
    <Link href={to}>
        <FaArrowCircleLeft
          size={50}
          className="absolute top-10 left-10 cursor-pointer"
        />
      </Link>
  )
}

export default BackArrow