import React from 'react'

interface Props {
  children: string
}

const HelloWorld: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>
}

export default HelloWorld
