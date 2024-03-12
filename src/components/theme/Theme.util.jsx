'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import Script from "next/script";

export default function SetTheme() {
    
  const [theme, setTheme] = useState()

  const toggleTheme = () => {
    if ( theme == 'light') {
        setTheme('dark')
    } else if ( theme == 'dark' ) {
        setTheme('light')
    }
  }

  // Swap button icon
  const buttonIcon = () => {
    switch ( theme ) {
        case 'dark' : return ( 
        <Image
          src="/dark-mode.png"
          alt="dark mode"
          width={20}
          height={20}
          priority
        /> )
        case 'light' : return ( 
          <Image
          src="/light-mode.png"
          alt="light mode"
          width={20}
          height={20}
          priority
        /> )
    }
  }

  // Switch theme based on user preference
  const switchTheme = () => {
    const themeLocalStorage = localStorage.getItem('theme')
    const themeSystem       = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

    return themeLocalStorage ?? themeSystem
  }

  // Manual swap of theme
  useEffect( () => {
    document.querySelector(':root').dataset.theme = ( theme ?? switchTheme() )
    localStorage.setItem( 'theme', ( theme ?? switchTheme() ) )
    setTheme( theme ?? switchTheme() )
    
    const useSetTheme = (e) =>{ setTheme( e.matches ? 'dark' : 'light' ) }

    const watchSysTheme = window.matchMedia('(prefers-color-scheme: dark)')

    watchSysTheme.addEventListener( 'change', useSetTheme )

    return () => {
        watchSysTheme.removeEventListener( 'change', useSetTheme )
    }
}, [theme] )

  return (
    <>
    <Script id="theme.util.jsx" strategy="beforeInteractive" >
      {`
      let themeLocalStorage   = localStorage.getItem('theme')
      let themeSystem         = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      document.querySelector(':root').dataset.theme = themeLocalStorage ?? themeSystem
      `}
    </Script>
      <button 
      key="themeToggle" 
      onClick={toggleTheme} 
      data-theme={theme}
      type="button" 
      className="rounded-lg text-sm px-4 py-2 text-center border border-black border-solid">
        { buttonIcon(theme) }
      </button>
    </>
  )
}