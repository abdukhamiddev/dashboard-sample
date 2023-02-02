/* eslint-disable import/no-anonymous-default-export */
export default {
  button: {
    base:
      'align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none',
    block: 'w-full',
    size: {
      larger: 'px-10 py-4 rounded-lg',
      large: 'px-5 py-3 rounded-lg',
      regular: 'px-4 py-2 rounded-lg text-sm',
      small: 'px-3 py-1 rounded-md text-sm',
      icon: {
        larger: 'p-4 rounded-lg',
        large: 'p-3 rounded-lg',
        regular: 'p-2 rounded-lg',
        small: 'p-2 rounded-md',
      },
      pagination: 'px-3 py-1 rounded-md text-xs',
    },
    // styles applied to the SVG icon
    icon: {
      larger: 'h-5 w-5',
      large: 'h-5 w-5',
      regular: 'h-5 w-5',
      small: 'h-3 w-3',
      left: 'mr-2 -ml-1',
      right: 'ml-2 -mr-1',
    },
    primary: {
      base: 'py-5 text-white bg-purple-600 border border-transparent px-2',
      active: 'active:bg-purple-600 hover:bg-purple-700 focus:ring focus:ring-purple-300',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    outline: {
      base: 'text-gray-600 border-gray-300 border dark:text-gray-400 focus:outline-none',
      active:
        'active:bg-transparent hover:border-gray-500 focus:border-gray-500 active:text-gray-500 focus:ring focus:ring-gray-300',
      disabled: 'opacity-50 cursor-not-allowed bg-gray-300',
    },
    link: {
      base: 'px-2 py-5 border-none text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent',
      active:
        ' group active:bg-transparent hover:bg-gray-100 focus:ring focus:ring-gray-300 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10',
      disabled: 'opacity-50 cursor-not-allowed',
    },
    // this is the button that lives inside the DropdownItem
   
  },
}