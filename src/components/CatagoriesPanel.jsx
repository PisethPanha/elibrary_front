import React, { useEffect, useState } from "react";
import BookList from "./BookList";
import axios from "axios";

function CatagoriesPanel() {
  return (
    <div className="mb-4 mx-auto mt-4 p-8 rounded-md w-[80%] flex shadow-[0px_0px_20px] shadow-gray-500 items-center justify-center ">
      <div className="grid max-md:grid-cols-3 grid-cols-5 gap-8">
        <CatagItems type='' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/all.png"} title="ALL" />
        <CatagItems type='IT' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(17).png"} title="IT" />
        <CatagItems type='constructor' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(6).png"} title="Constructor" />
        <CatagItems type='accounting' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/accounting.png"} title="Accounting" />
        <CatagItems type='agreculture' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/agriculture.png"} title="Agreculture" />
        <CatagItems type='law' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(13).png"} title="Law" />
        <CatagItems type='chinese' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/fkmfdlmbm54354543_167_167.png"} title="Chinese" />
        <CatagItems type='English' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(14).png"} title="English" />
        <CatagItems type='chinese' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(12).png"} title="General Knowledg" />
        <CatagItems type='chinese' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(8).png"} title="History" />
        <CatagItems type='' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(9).png"} title="Electric" />
        <CatagItems type='' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(11).png"} title="Electronic" />
        <CatagItems type='' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/pngwing.com%20(10).png"} title="Animal husbandry" />
        <CatagItems type='other' img={"https://raw.githubusercontent.com/PisethPanha/ebook_photos/refs/heads/main/all.png"} title="Other" />

      </div>
    </div>
  );
}

export default CatagoriesPanel;

export function CatagItems({ img, title, type }) {
  const [dialog, setDialog] = useState()
  const [resultVisibility, setResultVisibility] = useState(false)
  const [keyword, setKeyword] = useState("")
  const [result, setResult] = useState([]);
  const [backBTN, setBackBTN] = useState(false)
  const [data, setData] = useState([])

  function handleSearch(key) {
    key != "" ? setResultVisibility(true) : setResultVisibility(false)
    axios.get("https://carefree-empathy-production.up.railway.app/search", { params: { keyword: key, type: type } }).then((res) => setResult(res.data)
    )

  }
  function handleApplySearch(key) {

    axios.get("https://carefree-empathy-production.up.railway.app/keyword", { params: { keyword: key } }).then((res) => setData(res.data))
    setBackBTN(true)

  }
  function handleSearchBTN() {
    if (keyword == "") {

    } else {
      axios.get("https://carefree-empathy-production.up.railway.app/type", { params: { keyword: keyword } }).then((res) => setData(res.data))
      setBackBTN(true)
    }
  }
  function handleBackToDefaultData() {
    axios.get("https://carefree-empathy-production.up.railway.app/getbook", { params: { offset: 0, limit: limit, language: '' } }).then((res) => setData(res.data)
    )
    setBackBTN(false)
  }
  useEffect(() => {
    axios.get("https://carefree-empathy-production.up.railway.app/type", { params: { keyword: '', catagory: type, language: '' } }).then((res) => setData(res.data)
    )
  }, [dialog])
  return (
    <div className="grid items-center justify-center text-center">
      <img
        className="w-[75px] h-[70px] mx-auto hover:scale-105 hover:-translate-y-2 duration-75"
        src={img}
        id='icon'
        onClick={() => setDialog(!dialog)}
        alt=""
      />
      <label htmlFor="#icon">{title}</label>

      <div id="default-modal" className={`  overflow-y-auto overflow-x-hidden fixed top-0  right-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full ${dialog ? "block" : "hidden"}`}>
        <div className="relative h-full mx-auto p-4">

          <div className="relative overflow-y-scroll border-2 border-gray-900 h-full bg-white rounded-lg shadow-sm ">

            <div className=" flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-200">
              <h3 className=" text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>


              <button type="button" onClick={() => setDialog(!dialog)} className="text-gray-400  bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>







            </div>
            <div onClick={() => setResultVisibility(!resultVisibility)} className={`w-full h-full absolute bg-transparent top-0 z-10 ${resultVisibility ? "block" : "hidden"}`}></div>
            <div className="relative max-w-md mx-auto mt-2">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input 
                autoComplete='off'
                onChange={(event) => {
                  handleSearch(event.target.value); setKeyword(event.target.value);
                }} id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none " placeholder="Search" required />
                <button onClick={handleSearchBTN} className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
              </div>

              <div className={` ${resultVisibility ? "block" : "hidden"} absolute bg-white p-4 border-2 border-gray-700 rounded-lg z-50 w-full  `}>
                <ul>
                  {result.length != 0 ? result.map((ele, i) => <li key={i} onClick={() => { handleApplySearch(ele.Title); setBackBTN(true) }} className='cursor-pointer justify-between items-center flex hover:text-blue-400 duration-100 hover:font-[700]'><span>{ele.Title}</span> <span>{"ប្រភេទ: ​"}{ele.type}</span> </li>) : <li>no result</li>}
                </ul>
              </div>
              <div className={`${backBTN ? "block" : "hidden"} w-full justify-center items-center flex p-4`}>
                <button onClick={handleBackToDefaultData} className='bg-blue-600 p-2 rounded-lg text-white font-[700] '>Back</button>
              </div>
            </div>

            <BookList img={data} more={true} language="" CardWidth="w-[16rem]" moreVissible={true} display={true} />



          </div>
        </div>


      </div>
    </div>
  );
}
