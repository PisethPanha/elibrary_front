
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './scrollbar.css'

function BookCard({ cardWidth, read, download, view, id, img, title, author, describ, publisher, publish_date, link, img1, img2, img3 }) {
    const [dialog, setDialog] = useState()
    const [imgZoom, setImgZoom] = useState()
    const [imgWillZoom, setImgWillZoom] = useState()
  
    function AddView() {
      axios.get('https://carefree-empathy-production.up.railway.app/add_view', { params: { id: id } }).then((res) => console.log(res)
      )
    }
    function AddDownload() {
      axios.get('https://carefree-empathy-production.up.railway.app/add_download', { params: { id: id } }).then((res) => console.log(res)
      )
    }
  
    return (
      <div>
        <div style={{ boxShadow: "0px 0px 20px gray" }} className={`${cardWidth} mt-4 max-md:mx-auto bg-white border border-gray-200 rounded-lg shadow`}>
          
            <img onClick={() => { setDialog(!dialog); AddView() }} className={`rounded-t-lg mx-auto w-full h-[16rem]`} src={`https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/${img}`} alt="" />
        
          <div className="p-5 text-center">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
            <p className="mb-3 text-center font-normal text-gray-700 ">View: {view} <br /> Download: {download}</p>
            <button onClick={() => { setDialog(!dialog); AddView() }}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              View
              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </button>
          </div>
  
        </div>
  
        <div id="default-modal" tabindex="-1" aria-hidden="true" className={`  overflow-y-auto overflow-x-hidden fixed top-0  right-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${dialog ? "block" : "hidden"}`}>
          <div className="relative h-full mx-auto p-4">
  
            <div className="relative custom-scroll-d overflow-y-scroll border-2 border-gray-900 h-full bg-white rounded-lg shadow-sm ">
  
              <div className=" flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
                <h3 className=" text-xl font-semibold text-gray-900 dark:text-white">
                  Book details
                </h3>
                <button type="button" onClick={() => setDialog(!dialog)} className="text-gray-400  bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className=" grid  text-center justify-center items-center p-4 md:p-5 border-2 border-gray-200 rounded-b">
                <h1 className='text-[30px] font-[600]'>{title}</h1>
                <br />
                <h1 className='text-[18px] text-justify font-[500]'><span className='font-[800] '>Author:</span> {author}  <br />  <span className='font-[800] '>Publisher:</span> {publisher}  <br /> <span className='font-[800] '>Publish date:</span> {publish_date}</h1>
  
              </div>
  
              <div className='grid grid-cols-2'>
                <div className="p-4 md:p-5 space-y-4 w-[500px] max-md:w-[300px]">
                  <div className='text-center'>
                    <h1>Preview</h1>
                    <div
                    className='custom-scroll overflow-y-scroll h-56   grid items-center justify-center gap-4'>
                      <img onClick={() => { setImgZoom(!imgZoom); setImgWillZoom(img1) }} src={`https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/${img1}`} alt="" className='w-[300px] border-4 border-gray-600' />
                      <img onClick={() => { setImgZoom(!imgZoom); setImgWillZoom(img2) }} src={`https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/${img2}`} alt="" className='w-[300px] border-4 border-gray-600' />
                      <img onClick={() => { setImgZoom(!imgZoom); setImgWillZoom(img3) }} src={`https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/${img3}`} alt="" className='w-[300px] border-4 border-gray-600' />
                    </div>
                  </div>
                </div>
                <div className=" p-4 md:p-5 space-y-4 max-md:w-[300px]">
                  <div className='text-center'>
                    <h1>Description</h1>
                    <div className='custom-scroll overflow-y-scroll p-4 h-56 text-center  grid items-center justify-center gap-4'>
                      <p className='break-all break-words'>{describ}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className=" flex justify-center items-center p-4 md:p-5 border-t border-gray-200 rounded-b">
                  <a href={link} onClick={AddDownload}
                    className='text-white bg-blue-700 duration-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                    <button data-modal-hide="default-modal" type="button"
                      className="text-white bg-blue-700 duration-200 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Download
                    </button>
                  </a>
                  <a className='py-2.5 px-5 ms-3 text-sm font-medium duration-200 focus:outline-none bg-blue-700 rounded-lg border border-gray-200 hover:bg-blue-400 text-white hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 ' href={`https://carefree-empathy-production.up.railway.app/pdf/${read}`} target="_blank" rel="noopener noreferrer"><button data-modal-hide="default-modal" type="button" className="dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Read</button></a>
                </div>
              </div>
            </div>
          </div>
          <div className={`w-full h-full  absolute top-0 flex justify-center items-center z-50 ${imgZoom ? "block" : "hidden"}`}>
            <img src={`https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/${imgWillZoom}`} alt="" className='border-4 border-gray-600 max-w-[50rem] max-h-[30rem]' />
            <div onClick={() => setImgZoom(!imgZoom)} className='w-full -z-10 h-full absolute top-0 flex justify-center items-center '></div>
          </div>
  
        </div>
  
      </div>
  
    )
  }

export default BookCard