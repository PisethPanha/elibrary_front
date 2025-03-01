import React, { useEffect, useState } from 'react'

import Hero from '../components/Hero'
import BookList from '../components/BookList'
import axios from 'axios'
import CatagoriesPanel from '../components/CatagoriesPanel'

function Home() {
  const [image, setImage] = useState([]);
  const [data, setData] = useState([]);
  const [download, setDownload] = useState([]);
  const [offset, setOffset] = useState(0)
  const [limit, setLimit] = useState(10)
  const [result, setResult] = useState([]);
  const [keyword, setKeyword] = useState("")
  const [backBTN, setBackBTN] = useState(false)
  const [resultVisibility, setResultVisibility] = useState(false)
  function handleSearch(key) {
    key != "" ? setResultVisibility(true) : setResultVisibility(false)
    axios.get("https://carefree-empathy-production.up.railway.app/search", { params: { keyword: key } }).then((res) => setResult(res.data)
    )

  }
  function handleApplySearch(key) {
    
    axios.get("https://carefree-empathy-production.up.railway.app/keyword", { params: { keyword: key } }).then((res) => setImage(res.data))
    setBackBTN(true)
    setResultVisibility(false)

  }
  function handleSearchBTN() {
    if(keyword == ""){

    }else{
    axios.get("https://carefree-empathy-production.up.railway.app/search", { params: { keyword: keyword } }).then((res) => setImage(res.data))
    setBackBTN(true)
    setResultVisibility(false)
    }
  }
  function handleBackToDefaultData(){
    axios.get("https://carefree-empathy-production.up.railway.app/getbook", { params: { offset: 0, limit: limit, language: '' } }).then((res) => setImage(res.data)
    )
    setBackBTN(false)
  }
  useEffect(() => {
    axios.get("https://carefree-empathy-production.up.railway.app/getbook", { params: { offset: offset, limit: limit,language: "" } }).then((res) => setImage(res.data)
    )
    axios.get("https://carefree-empathy-production.up.railway.app/most-view").then((res) => setData(res.data)
    )
    axios.get("https://carefree-empathy-production.up.railway.app/most-download").then((res) => setDownload(res.data)
    )

  }, [])

  return (
    <div className='relative'>
      <Hero />
      <br />
      <h1 className='text-[30px] font-[700] border-b-8 border-blue-500 max-w-[30rem] mx-auto text-center uppercase'>Catagories</h1>
      <CatagoriesPanel/>
      <br />
      <h1 className='text-[30px] font-[700] border-b-8 border-blue-500 max-w-[30rem] mx-auto text-center uppercase'>Most View</h1>
      <br />
      <BookList img={data} CardWidth="w-[15rem]" display={false} more={backBTN} moreVissible={false} language=""/>
      <br />
      <h1 className='text-[30px] font-[700] border-b-8 border-blue-500 max-w-[30rem] mx-auto text-center uppercase'>Most Download</h1>
      <br />
      <BookList img={download} display={false} CardWidth="w-[15rem]" more={backBTN} moreVissible={false} language=""/>
      <br />
      <h1 id='all_book' className='text-[30px] font-[700] border-b-8 border-blue-500 max-w-[30rem] mx-auto text-center uppercase'>All book</h1>
      <br />
      
      <div onClick={() => setResultVisibility(!resultVisibility)} className={`w-full h-full absolute bg-transparent top-0 z-10 ${resultVisibility ? "block" : "hidden"}`}></div>
      <div className="relative max-w-md mx-auto">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input onChange={(event) => {
            handleSearch(event.target.value); setKeyword(event.target.value);
          }} onKeyDown={(event) => {
            if(event.key == 'Enter'){
              handleSearchBTN(event.target.data);
            }
          }} 
          autoComplete='off'
          id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none " placeholder="Search" required />
          <button onClick={handleSearchBTN} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
        
        <div className={` ${resultVisibility ? "block" : "hidden"} absolute bg-white p-4 border-2 border-gray-700 rounded-lg z-50 w-full  `}>
          <ul>
            {result.length != 0 ? result.map((ele, i) => <li key={i} onClick={() => {handleApplySearch(ele.Title); setBackBTN(true)}} className='cursor-pointer justify-between items-center flex hover:text-blue-400 duration-100 hover:font-[700]'><span>{ele.Title}</span> <span>{"ប្រភេទ: ​"}{ele.type}</span> </li>) : <li>no result</li>}
          </ul>
        </div>
        <div className={`${backBTN ? "block" : "hidden"} w-full justify-center items-center flex p-4`}>
        <button onClick={ handleBackToDefaultData} className='bg-blue-600 p-2 rounded-lg text-white font-[700] '>Back</button>
        </div>
      </div>

      <br />
      <BookList img={image} display={true} more={backBTN} CardWidth="w-[15rem]" moreVissible={true} language="" />
          

    </div>
  )
}

export default Home