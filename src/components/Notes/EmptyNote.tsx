import React from 'react'
import { SmileyWink } from '@phosphor-icons/react'

const EmptyNote = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center h-[400px]'>
      <SmileyWink size={200} color="#a3a3a3" weight="light" />
    </div>
  )
}

export default EmptyNote
