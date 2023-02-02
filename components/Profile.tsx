/* eslint-disable @next/next/no-img-element */
import { Menu, Transition } from '@headlessui/react'
import { BellIcon } from 'icons'
import { Fragment} from 'react'
import {
  OutlinePersonIcon,
  OutlineCogIcon,
  OutlineLogoutIcon,
} from 'icons'
import Badge from './Badge'




export default function Profile() {
  return (
 
 <div className="w-auto text-right top-22">
            <Menu as="div" className="relative inline-block text-left">
              <div>
              <Menu.Button className="relative inline-block w-8 h-8 align-middle rounded-full">
               <img
                className="object-cover w-full h-full rounded-full shadow-inner"
                src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                alt="Profile Image"
                aria-hidden="true"/>
          </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                 
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-gray-200' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-4 py-2 text-sm justify-between border-none`}
                        >

                        <OutlinePersonIcon className="w-4 h-4 mr-3" aria-hidden="true"/>
                       <span>Profile</span>
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                <div className="px-1 py-1 "> 
                    
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-gray-200' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-4 py-2 text-sm justify-between border-none`}
                        >

                        <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true"/>
                        <span>Settings</span>
                        </button>
                      )}
                    </Menu.Item>
                    </div>
                    <div className="px-1 py-1 ">   
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-gray-200' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-4 py-2 text-sm justify-between border-none`}
                        >

                        <OutlineLogoutIcon className="w-4 h-4 mr-3" aria-hidden="true"/>
                        <span>Logout</span>
                        </button>
                      )}
                    </Menu.Item>
                    </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
  )
}
