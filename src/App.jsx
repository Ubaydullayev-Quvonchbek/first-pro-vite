import axios from 'axios';
import './App.css'
import 'virtual:windi.css'
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [User, setUser] = useState()
  const userData = "https://jsonplaceholder.typicode.com/users";
  const getData = () => {
    axios.get(userData).then((response) => {
      setUser(response.data);
    })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <header class="relative z-20 w-full border-b shadow-lg border-b-1 border-slate-200 bg-white/90 shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
        <div class="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
          <nav aria-label="main navigation" class="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700" role="navigation">
            <a id="WindUI" aria-label="WindUI logo" aria-current="page" class="flex items-center gap-2 py-3 text-lg whitespace-nowrap active:outline-none lg:flex-1" href="javascript:void(0)">
              <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-12 h-12 bg-green-500">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M88.1121 88.1134L150.026 150.027L150.027 150.027L150.027 150.027L150.028 150.027L150.027 150.026L88.1133 88.1122L88.1121 88.1134ZM273.878 273.877C272.038 274.974 196.128 319.957 165.52 289.349L88.1124 211.942L26.1434 273.911C26.1434 273.911 -20.3337 196.504 10.651 165.519L88.1121 88.1134L26.1417 26.1433C26.1417 26.1433 69.6778 0.00338007 104.519 0H0V300H300V0H104.533C116.144 0.00112664 126.789 2.90631 134.534 10.651L211.941 88.1123L273.877 26.177C274.974 28.0159 319.957 103.926 289.349 134.535L211.942 211.942L273.878 273.877ZM273.878 273.877L273.912 273.857V273.911L273.878 273.877ZM273.877 26.177L273.911 26.1429H273.857C273.857 26.1429 273.863 26.1544 273.877 26.177Z" fill="white" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H300V300H0V0ZM150.026 150.025C121.715 99.731 88.1131 88.1122 88.1131 88.1122L10.6508 165.519C10.6508 165.519 26.143 150.027 150.026 150.027H150.027C150.026 150.027 150.026 150.027 150.026 150.027L150.026 150.027C99.731 178.339 88.1124 211.941 88.1124 211.941L165.52 289.348C165.52 289.348 150.032 273.86 150.027 150.027H150.029C178.341 200.323 211.944 211.942 211.944 211.942L289.352 134.535C289.352 134.535 273.864 150.023 150.027 150.027V150.027L150.027 150.027C200.322 121.715 211.941 88.1125 211.941 88.1125L134.534 10.651C134.534 10.651 150.026 26.1431 150.026 150.025ZM150.027 150.027L150.026 150.027C150.026 150.026 150.026 150.026 150.026 150.025C150.026 150.025 150.027 150.026 150.027 150.027ZM150.027 150.027L150.027 150.026L150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027L150.027 150.027ZM150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027H150.027L150.027 150.027Z" fill="rgba(255,255,255,.2)" />
              </svg>
              Brand
            </a>
            <button class="relative self-center order-10 visible block w-10 h-10 opacity-100 lg:hidden" aria-expanded="false" aria-label="Toggle navigation">
              <div class="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <span aria-hidden="true" class="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
                <span aria-hidden="true" class="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"></span>
                <span aria-hidden="true" class="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"></span>
              </div>
            </button>
            <ul role="menubar" aria-label="Select page" class="invisible absolute top-0 left-0 z-[-1] ml-auto h-screen w-full justify-center overflow-hidden overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-28 font-medium opacity-0 transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0 lg:pt-0 lg:opacity-100">
              <li role="none" class="flex items-stretch">
                <a role="menuitem" aria-haspopup="false" tabindex="0" class="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-green-500 focus:bg-green-50 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)"> <span>Home</span></a>
              </li>
              <li role="none" class="flex items-stretch">
                <a role="menuitem" aria-current="page" aria-haspopup="false" tabindex="0" class="flex items-center gap-2 py-4 transition-colors duration-300 text-green-500 hover:text-green-600 focus:bg-green-50 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)"> <span>Features</span> </a>
              </li>
              <li role="none" class="flex items-stretch">
                <a role="menuitem" aria-haspopup="false" tabindex="0" class="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-green-500 focus:bg-green-50 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)"> <span>Pricing</span> </a>
              </li>
              <li role="none" class="flex items-stretch">
                <a role="menuitem" aria-haspopup="false" tabindex="0" class="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-green-500 focus:bg-green-50 focus:outline-none focus-visible:outline-none lg:px-8" href="javascript:void(0)"> <span>About</span> </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container px-6 m-auto">
        <div className="grid grid-cols-12 gap-6 mt-50px mb-50px">
          <div className="col-span-4 text-center">
            <div class="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
              <figure>
                <img src="https://picsum.photos/id/114/800/600" alt="card image" class="aspect-video w-full" />
              </figure>
              <div class="p-6">
                <header class="flex gap-4 mb-4">
                  <a href="#" class="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full">
                    <img src="https://i.pravatar.cc/48?img=24" alt="user name" title="user name" width="48" height="48" class="max-w-full rounded-full" />
                  </a>
                  <div>
                    <h3 class="text-xl font-medium text-slate-700">Stairing at the sky</h3>
                    <p class="text-sm text-slate-400"> By Sue Longarm, jun 3 2023</p>
                  </div>
                </header>
                <p> Following the journey of history and culture, is a journey through the beautiful green rice paddies, and endless golden fields! Dotted amongst the countryside are bustling towns, with a vibrant atmosphere and great cafe culture.</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 text-center">
            <div class="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
              <figure>
                <img src="https://picsum.photos/id/114/800/600" alt="card image" class="aspect-video w-full" />
              </figure>
              <div class="p-6">
                <header class="flex gap-4 mb-4">
                  <a href="#" class="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full">
                    <img src="https://i.pravatar.cc/48?img=24" alt="user name" title="user name" width="48" height="48" class="max-w-full rounded-full" />
                  </a>
                  <div>
                    <h3 class="text-xl font-medium text-slate-700">Stairing at the sky</h3>
                    <p class="text-sm text-slate-400"> By Sue Longarm, jun 3 2023</p>
                  </div>
                </header>
                <p> Following the journey of history and culture, is a journey through the beautiful green rice paddies, and endless golden fields! Dotted amongst the countryside are bustling towns, with a vibrant atmosphere and great cafe culture.</p>
              </div>
            </div>
          </div>
          <div className="col-span-4 text-center">
            <div class="overflow-hidden bg-white rounded shadow-md text-slate-500 shadow-slate-200">
              <figure>
                <img src="https://picsum.photos/id/114/800/600" alt="card image" class="aspect-video w-full" />
              </figure>
              <div class="p-6">
                <header class="flex gap-4 mb-4">
                  <a href="#" class="relative inline-flex items-center justify-center w-12 h-12 text-white rounded-full">
                    <img src="https://i.pravatar.cc/48?img=24" alt="user name" title="user name" width="48" height="48" class="max-w-full rounded-full" />
                  </a>
                  <div>
                    <h3 class="text-xl font-medium text-slate-700">Stairing at the sky</h3>
                    <p class="text-sm text-slate-400"> By Sue Longarm, jun 3 2023</p>
                  </div>
                </header>
                <p> Following the journey of history and culture, is a journey through the beautiful green rice paddies, and endless golden fields! Dotted amongst the countryside are bustling towns, with a vibrant atmosphere and great cafe culture.</p>
              </div>
            </div>
          </div>
          <div className="col-span-12">
            <table class="w-full text-left border border-separate rounded border-slate-200 mt-25px" cellspacing="0">
              <tbody>
                <tr>
                  <th scope="col" class="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Name</th>
                  <th scope="col" class="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Username</th>
                  <th scope="col" class="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Email</th>
                  <th scope="col" class="hidden h-12 px-6 text-sm font-medium border-l sm:table-cell first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">Company</th>
                </tr>
                {User?.map((data) => {
                  return (
                    <tr class="block border-b sm:table-row last:border-b-0 border-slate-200 sm:border-none">
                      <td data-th="Name" class="flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{data?.name}</td>
                      <td data-th="Name" class="flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{data?.username}</td>
                      <td data-th="Name" class="flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{data?.email}</td>
                      <td data-th="Name" class="flex items-center sm:table-cell h-12 px-6 text-sm transition duration-300 sm:border-t sm:border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">{data?.company?.name}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <footer class="text-slate-500">
        <div class="pt-16 pb-12 text-sm border-t border-slate-200 bg-slate-100">
          <div class="container px-6 mx-auto">
            <div class="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
              <div class="col-span-4 md:col-span-8 lg:col-span-4" aria-labelledby="footer-header">
                <a id="WindUI-5-logo" aria-label="WindUI logo" aria-current="page" class="flex items-center gap-2 mb-6 text-base font-medium leading-6 whitespace-nowrap focus:outline-none text-slate-700" href="javascript:void(0)">
                  <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 shrink-0 bg-green-500">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M88.1121 88.1134L150.026 150.027L150.027 150.027L150.027 150.027L150.028 150.027L150.027 150.026L88.1133 88.1122L88.1121 88.1134ZM273.878 273.877C272.038 274.974 196.128 319.957 165.52 289.349L88.1124 211.942L26.1434 273.911C26.1434 273.911 -20.3337 196.504 10.651 165.519L88.1121 88.1134L26.1417 26.1433C26.1417 26.1433 69.6778 0.00338007 104.519 0H0V300H300V0H104.533C116.144 0.00112664 126.789 2.90631 134.534 10.651L211.941 88.1123L273.877 26.177C274.974 28.0159 319.957 103.926 289.349 134.535L211.942 211.942L273.878 273.877ZM273.878 273.877L273.912 273.857V273.911L273.878 273.877ZM273.877 26.177L273.911 26.1429H273.857C273.857 26.1429 273.863 26.1544 273.877 26.177Z" fill="#f1f5f9" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0H300V300H0V0ZM150.026 150.025C121.715 99.731 88.1131 88.1122 88.1131 88.1122L10.6508 165.519C10.6508 165.519 26.143 150.027 150.026 150.027H150.027C150.026 150.027 150.026 150.027 150.026 150.027L150.026 150.027C99.731 178.339 88.1124 211.941 88.1124 211.941L165.52 289.348C165.52 289.348 150.032 273.86 150.027 150.027H150.029C178.341 200.323 211.944 211.942 211.944 211.942L289.352 134.535C289.352 134.535 273.864 150.023 150.027 150.027V150.027L150.027 150.027C200.322 121.715 211.941 88.1125 211.941 88.1125L134.534 10.651C134.534 10.651 150.026 26.1431 150.026 150.025ZM150.027 150.027L150.026 150.027C150.026 150.026 150.026 150.026 150.026 150.025C150.026 150.025 150.027 150.026 150.027 150.027ZM150.027 150.027L150.027 150.026L150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027L150.027 150.027ZM150.027 150.027C150.027 150.027 150.027 150.027 150.027 150.027H150.027L150.027 150.027Z" fill="rgba(255, 255, 255, .2)" />
                  </svg>
                  Brand
                </a>
                <p>Expertly made, responsive, accessible components in React and HTML ready to be used on your website or app. Just copy and paste them on your Tailwind CSS project.</p>
              </div>
              <nav class="col-span-2 md:col-span-4 lg:col-span-2" aria-labelledby="footer-product-5-logo">
                <h3 class="mb-6 text-base font-medium text-slate-700" id="footer-product-5-logo">Product</h3>
                <ul>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> Features </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> Customers </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> Why us? </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> Pricing </a>
                  </li>
                </ul>
              </nav>
              <nav class="col-span-2 md:col-span-4 lg:col-span-2" aria-labelledby="footer-docs-5-logo">
                <h3 class="mb-6 text-base font-medium text-slate-700" id="footer-docs-5-logo">Docs & Help</h3>
                <ul>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> Documentation</a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> Training </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> System status </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> FAQ's </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> Help Center </a>
                  </li>
                </ul>
              </nav>
              <nav class="col-span-2 md:col-span-4 lg:col-span-2" aria-labelledby="footer-about-5-logo">
                <h3 class="mb-6 text-base font-medium text-slate-700" id="footer-about-5-logo">About us</h3>
                <ul>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> About us </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> Careers </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> Leadership </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> Blog</a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> Events </a>
                  </li>
                </ul>
              </nav>
              <nav class="col-span-2 md:col-span-4 lg:col-span-2" aria-labelledby="footer-get-in-touch-5-logo">
                <h3 class="mb-6 text-base font-medium text-slate-700" id="footer-get-in-touch-5-logo">Get in touch</h3>
                <ul>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> Contact </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> Support </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> Partners </a>
                  </li>
                  <li class="mb-2 leading-6">
                    <a href="javascript:void(0)" class="transition-colors duration-300 hover:text-green-500 focus:text-green-600"> Join research </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
