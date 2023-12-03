import { Inter } from 'next/font/google'
import Navbar from './navbar'
import Product from './product'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [theme, setTheme] = useState(true)

  const darkMode = () => {
    setTheme(prevTheme => !prevTheme)
  }
  return (
    <main className={`main w-screen min-h-screen ${theme ? 'dark': 'light'}`}>
      <Navbar  darkMode={darkMode} theme={theme}/>
      <Product theme={theme}/>
    </main>
  )
}
