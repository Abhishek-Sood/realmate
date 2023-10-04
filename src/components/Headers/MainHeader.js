'use client'

import React from 'react'
import { Menu, X } from 'lucide-react'

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'Projects',
    href: '#',
  },
  {
    name: 'Heros',
    href: '#',
  },
  {
    name: 'Blog',
    href: '#',
  },
]

export default function ExampleNavbarOne() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="relative w-full bg-blue-100 shadow">
      <div className="mx-auto flex max-w-7.5xl items-center justify-between px-4 py-2 sm:px-6 lg:px-8 ">
        <div className="inline-flex items-center space-x-2">
          <span>
            <svg width="154" height="66" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 13.148C0 6.686 6.037 1.921 12.323 3.422l16.61 3.967 16.61-3.967c6.286-1.501 12.323 3.264 12.323 9.726v39.704c0 6.462-6.037 11.227-12.322 9.726l-14.288-3.412a10 10 0 0 0-4.646 0l-14.287 3.412C6.037 64.079 0 59.314 0 52.852V13.148Z" fill="url(#a)"/><path d="m28.816 11.706.116.027.117-.027 2.73-.652-.117-.487 6.824-1.63.116.487 2.73-.652a9.612 9.612 0 0 1 1.887-.258l-.018-.5a9.906 9.906 0 0 1 4.846 1.07l-.227.446a9.6 9.6 0 0 1 2.974 2.347l.382-.324a9.907 9.907 0 0 1 2.166 4.465l-.49.098c.122.61.186 1.244.186 1.896v2.22h.5v5.552h-.5v4.44h.5v5.552h-.5v4.44h.5v5.552h-.5v2.22c0 .653-.064 1.286-.187 1.896l.49.098a9.906 9.906 0 0 1-2.166 4.465l-.38-.324a9.602 9.602 0 0 1-2.975 2.348l.227.446a9.906 9.906 0 0 1-4.846 1.07l.018-.5a9.614 9.614 0 0 1-1.887-.259l-2.214-.528-.116.486-5.533-1.322.116-.486-2.214-.529a10.49 10.49 0 0 0-1.075-.198l-.065.496a10.002 10.002 0 0 0-2.597 0l-.065-.496c-.361.047-.72.113-1.076.198l-2.213.529.116.486-5.534 1.322-.116-.486-2.213.528a9.614 9.614 0 0 1-1.887.258l.018.5a9.906 9.906 0 0 1-4.846-1.07l.226-.445a9.602 9.602 0 0 1-2.974-2.348l-.38.324a9.906 9.906 0 0 1-2.167-4.465l.49-.098a9.611 9.611 0 0 1-.187-1.896v-2.22h-.5v-5.551h.5v-4.441h-.5v-5.551h.5v-4.441h-.5v-5.551h.5v-2.22c0-.653.065-1.287.187-1.897l-.49-.098a9.906 9.906 0 0 1 2.166-4.465l.381.324a9.6 9.6 0 0 1 2.974-2.347l-.226-.446a9.906 9.906 0 0 1 4.846-1.07l-.018.5a9.612 9.612 0 0 1 1.887.258l2.73.652.116-.486 6.824 1.63-.116.486 2.73.652Z" stroke="#fff" stroke-opacity=".5" stroke-dasharray="4 5"/><path d="M27.748 52.786c-.152-.208-.285-.436-.455-.606-6.153-6.154-12.307-12.326-18.48-18.46-.416-.417-.51-.796-.378-1.326 1.174-4.563 5.245-7.555 10.167-7.441 4.317.095 8.275 3.503 9.165 7.914.113.55.189 1.099.189 1.648.019 5.926 0 11.833 0 17.76 0 .113-.02.246-.02.36-.056.056-.113.094-.188.151Z" fill="#fff"/><path d="M29.912 52.786V35.14c0-6.098 4.715-10.547 10.793-10.168 4.07.246 7.99 3.635 8.766 7.63.057.284-.038.72-.227.928-6.305 6.343-12.648 12.667-18.972 18.99-.076.058-.17.114-.36.266Z" fill="#FA4A6F"/><path d="M13.018 18.27c-.02-2.746 2.215-5.018 4.98-5.056 2.745-.037 5.093 2.272 5.093 5.037 0 2.726-2.272 5.017-4.999 5.055-2.726.038-5.055-2.253-5.074-5.036Z" fill="#fff"/><path d="M44.851 18.346c-.075 2.802-2.404 5.055-5.15 4.96-2.764-.076-5.017-2.461-4.923-5.207.095-2.707 2.405-4.922 5.093-4.885 2.803.038 5.056 2.367 4.98 5.132Z" fill="#FA4A6F"/><path d="M88.827 30.565h-5.584l-3.96-5.552H76.49v5.552h-4.805V7.839h7.337c3.117 0 5.497.747 7.142 2.24 1.645 1.472 2.468 3.582 2.468 6.33 0 3.789-1.505 6.342-4.513 7.663l4.707 6.493ZM76.49 12.287v8.278h2.533c3.095 0 4.642-1.385 4.642-4.155 0-2.749-1.547-4.123-4.642-4.123H76.49ZM107.053 12.254h-9.447v5.52h8.408v4.285h-8.408v4.09h9.447v4.416H92.801V7.839h14.252v4.415ZM125.659 30.565l-1.234-3.766h-8.798l-1.234 3.766h-5l7.89-22.726h5.519l7.889 22.726h-5.032Zm-8.669-7.824h6.104l-2.987-9.058h-.13l-2.987 9.058ZM138.251 26.085h9.026v4.48h-13.831V7.839h4.805v18.246ZM91.457 35.435h5.097V58.16H91.88V44.687h-.13l-6.2 13.474H82.69l-6.2-13.474h-.098v13.474h-4.707V35.435h5.097l7.272 15.518h.13l7.272-15.518ZM115.577 58.16l-1.234-3.765h-8.798l-1.234 3.766h-5l7.889-22.726h5.52l7.889 22.726h-5.032Zm-8.669-7.824h6.104l-2.987-9.057h-.13l-2.987 9.057ZM136.437 35.435v4.48h-6.233V58.16h-4.805V39.915h-6.201v-4.48h17.239ZM153.786 39.85h-9.447v5.52h8.408v4.285h-8.408v4.09h9.447v4.416h-14.252V35.435h14.252v4.415Z" fill="#23273A"/><defs><linearGradient id="a" x1="29" y1="19.5" x2="28.933" y2="65.521" gradientUnits="userSpaceOnUse"><stop stop-color="#0EB7BE"/><stop offset=".641" stop-color="#FA4A6F"/></linearGradient></defs></svg>
          </span>
          
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-gray-800 hover:text-gray-900"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:block">
        {
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 72 72" 
            width="64" height="64"><path d="M36 12c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm0 8c8.837 0 16 7.163 16 16 0 7.284-4.872 13.42-11.531 15.355-.27-.252-.527-.611-.516-1.07.027-1.052 0-3.506 0-4.408 0-1.548-.98-2.647-.98-2.647s7.681.086 7.681-8.11c0-3.163-1.65-4.81-1.65-4.81s.868-3.376-.3-4.808c-1.31-.142-3.657 1.251-4.66 1.902 0 0-1.587-.65-4.228-.65-2.64 0-4.228.65-4.228.65-1.001-.65-3.348-2.043-4.658-1.902-1.17 1.432-.301 4.809-.301 4.809s-1.654 1.645-1.654 4.808c0 8.197 7.681 8.111 7.681 8.111s-.874.997-.963 2.422c-.513.181-1.213.397-1.88.397-1.61 0-2.835-1.565-3.284-2.29-.443-.713-1.351-1.312-2.197-1.312-.557 0-.828.28-.828.598 0 .318.782.54 1.297 1.13 1.087 1.246 1.065 4.044 4.937 4.044.459 0 1.283-.104 1.94-.194-.004.88-.014 1.72 0 2.26.01.415-.201.747-.442.994C24.726 49.252 20 43.178 20 36c0-8.837 7.163-16 16-16z"/></svg>
        }
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                      <svg
                        width="30"
                        height="30"
                        viewBox="0 0 50 56"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.2732 0.2528C20.8078 1.18964 2.12023 12.2346 1.08477 13.3686C0 14.552 0 14.7493 0 27.7665C0 39.6496 0.0986153 41.1289 0.83823 42.0164C2.12023 43.5449 23.2239 55.4774 24.6538 55.5267C25.9358 55.576 46.1027 44.3832 48.2229 42.4602C49.3077 41.474 49.3077 41.3261 49.3077 27.8158C49.3077 14.3055 49.3077 14.1576 48.2229 13.1714C46.6451 11.7415 27.1192 0.450027 25.64 0.104874C24.9497 -0.0923538 23.9142 0.00625992 23.2732 0.2528ZM20.2161 21.8989C20.2161 22.4906 18.9835 23.8219 17.0111 25.3997C15.2361 26.7803 13.8061 27.9637 13.8061 28.0623C13.8061 28.1116 15.2361 29.0978 16.9618 30.2319C18.6876 31.3659 20.2655 32.6479 20.4134 33.0917C20.8078 34.0286 19.871 35.2119 18.8355 35.2119C17.8001 35.2119 9.0233 29.3936 8.67815 28.5061C8.333 27.6186 9.36846 26.5338 14.3485 22.885C17.6521 20.4196 18.4904 20.0252 19.2793 20.4196C19.7724 20.7155 20.2161 21.3565 20.2161 21.8989ZM25.6893 27.6679C23.4211 34.9161 23.0267 35.7543 22.1391 34.8668C21.7447 34.4723 22.1391 32.6479 23.6677 27.9637C26.2317 20.321 26.5275 19.6307 27.2671 20.3703C27.6123 20.7155 27.1685 22.7864 25.6893 27.6679ZM36.0932 23.2302C40.6788 26.2379 41.3198 27.0269 40.3337 28.1609C39.1503 29.5909 31.6555 35.2119 30.9159 35.2119C29.9298 35.2119 28.9436 33.8806 29.2394 33.0424C29.3874 32.6479 30.9652 31.218 32.7403 29.8867L35.9946 27.4706L32.5431 25.1532C30.6201 23.9205 29.0915 22.7371 29.0915 22.5892C29.0915 21.7509 30.2256 20.4196 30.9159 20.4196C31.3597 20.4196 33.6771 21.7016 36.0932 23.2302Z"
                          fill="black"
                        />
                      </svg>
                    </span>
                    <span className="font-bold">DevUI</span>
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {menuItems.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </a>
                    ))}
                  </nav>
                </div>
                <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Button text
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
