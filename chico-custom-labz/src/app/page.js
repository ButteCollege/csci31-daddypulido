import Image from 'next/image'
import Navbar from './components/Navbar'

import Main from './components/Main'
import Content from './components/Content'

export default function Home() {
  return (
    <div>
      <div className="p-12">
        <Main />
        <Content paragraph="Hello there! I am Content #1" />
        <Content paragraph="Hello there! I am Content #2" />
      </div>
    </div>
  )
}
