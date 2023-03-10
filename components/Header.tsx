/* eslint-disable @next/next/no-img-element */

import SidebarContext from 'context/SidebarContext'
import {  useState, useContext } from 'react'
import {
  SearchIcon,
  MoonIcon,
  SunIcon,
  MenuIcon,
} from 'icons'



import { useTheme } from 'next-themes';


import Notifications from './Notifications';
import Profile from './Profile';

function Header() {
  const { theme, setTheme } = useTheme()
  const { toggleSidebar } = useContext(SidebarContext)

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen)
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  return (
    <header className="z-40 py-4 bg-white shadow-bottom dark:bg-gray-800">
      <div className="container flex items-center justify-between px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* <!-- Mobile hamburger --> */}
        <button
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          onClick={toggleSidebar}
          aria-label="Menu"
        >
          <MenuIcon className="w-6 h-6" aria-hidden="true" />
        </button>
        {/* <!-- Search input --> */}
        <div className="flex justify-center flex-1 lg:mr-32">
          <div className="relative w-full max-w-xl mr-6 focus:text-purple-500">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <input
              className="w-full py-2 pl-8 text-gray-700 transition-all border-2 rounded-md outline-none dark:text-white dark:border-none focus:border-purple-600 "
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
        </div>
        <div className="flex items-center flex-shrink-0 space-x-6">
          {/* <!-- Theme toggler --> */}
          <div className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={() => setTheme(theme === 'dark' ? 'light' : "dark")}
              aria-label="Toggle color mode"
            >
              {theme === 'dark' ? (
                <SunIcon className="w-5 h-5" aria-hidden="true" />
              ) : (
                <MoonIcon className="w-5 h-5" aria-hidden="true" />
              )}
            </button>
          </div>
        <div><Notifications/></div>
          {/* <!-- Notifications menu --> */}

          {/* <!-- Profile menu --> */}
          <div className="relative">
           <Profile/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
