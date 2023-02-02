import { Menu, Transition } from '@headlessui/react'
import { BellIcon } from 'icons'
import { Fragment, useEffect, useRef, useState } from 'react'
import Badge from './Badge'




export default function Notifications() {
  return (
 
 <div className="w-auto text-right top-22">
            <Menu as="div" className="relative inline-block text-left">
              <div>
              <Menu.Button className="relative py-2">
    
           <BellIcon className= "w-5 h-5"/> 
           <Badge variant='danger' className='absolute right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full top-2 dark:border-gray-800'/>
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
                          className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-4 py-2 text-sm justify-between border-none`}
                        >

                          <span className='font-semibold'>Messages</span>
                          <Badge variant='danger' className='flex items-center justify-center bg-red-100 rounded-full text-[12px] font-semibold '>13</Badge>
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                <div className="px-1 py-1 "> 
                   <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-4 py-2 text-sm justify-between`}
                        >

                          <span className='font-semibold'>Alerts</span>
                          <Badge variant='danger' className='flex items-center justify-center bg-red-100  rounded-full text-[12px] font-semibold '>3</Badge>
                        </button>
                      )}
                    </Menu.Item>
                    </div>
                    <div className="px-1 py-1 ">   <Menu.Item>
                      {({ active }) => (
                        <button
                          className={`${active ? 'bg-violet-500 text-white' : 'text-gray-900'
                            } group flex w-full items-center rounded-md px-4 py-2 text-sm justify-between`}
                        >

                          <span className='font-semibold'>Messages</span>
                          
                        </button>
                      )}
                    </Menu.Item></div>
                  
                  
                
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
  )
}
