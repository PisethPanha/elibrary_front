import React, { useEffect, useState } from 'react'
import BookList from '../components/BookList';
import axios from 'axios';


function ForiegnBook() {

    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://carefree-empathy-production.up.railway.app/getbookastype", { params: { leng: "foriegn" } }).then((res) => setData(res.data.reverse())
        )

    }, [])

    const [dropdown, setDropdown] = useState(false);
    const [catagory, setGatagory] = useState("")
    const [keyword, setKeyword] = useState("")
    const [result, setResult] = useState([])
    const [backBTN, setBackBTN] = useState(false)
    const [resultVisibility, setResultVisibility] = useState(false)

    function handleSearch(key) {
        
            
            setKeyword(key);
            axios.get("http://localhost:3000/type", { params: { keyword: key, catagory: catagory, language: "foriegn" } }).then((res) => { setResult(res.data); console.log(res.data); });
    


    }
    function handleSearchButton(key) {
        if (key == "" && catagory == "") {
            setBackBTN(false)
            axios.get("http://localhost:3000/type", { params: { keyword: "", catagory: "", language: "foriegn" } }).then((res) => setData(res.data)
            )
        } else {
            setResultVisibility(false)
            setBackBTN(true)
            axios.get("http://localhost:3000/type", { params: { keyword: key, catagory: catagory, language: "foriegn" } }).then((res) => setData(res.data)
            )
        }


    }
    function handleBackToDefaultData(){
        setBackBTN(false)
        axios.get("http://localhost:3000/getbookastype", { params: { leng: "foriegn" } }).then((res) => setData(res.data)
        )
    }
    function handleApplySearch(key) {
        setResultVisibility(false)
        axios.get("http://localhost:3000/keyword", { params: { keyword: key } }).then((res) => setData(res.data))
        setBackBTN(true)
    
      }
    return (
        <div className='relative'>
            <div className=''>
                <br />
                <h1 className='text-[30px] font-[700] border-b-8 border-blue-500 max-w-[30rem] mx-auto text-center uppercase'>Foriegn Book</h1>
                <br />
                <div className="max-w-lg mx-auto  ">
                    <div className="flex relative">
                        <label htmlFor="search-dropdown" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Your Email</label>
                        <button onClick={() => setDropdown(!dropdown)} id="dropdown-button" data-dropdown-toggle="dropdown" className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 outline-none" type="button"> {catagory == "" ? "All Catagory" : catagory} <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                        </svg></button>
                        <div id="dropdown" className={`z-10 ${dropdown ? "block" : "hidden"} bg-white divide-y absolute mt-11 divide-gray-100 rounded-lg shadow w-auto dark:bg-gray-700`}>
                            <ul className="py-2 shadow-lg shadow-black overflow-y-scroll h-[40vh] text-sm text-gray-700 dark:text-gray-200" >
                                <li>
                                    <button type="button" onClick={() => { setGatagory(""); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">All</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("IT"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Information Technology</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("constructor"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Constructor</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("agreculture"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Agreculture</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("accounting"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Accounting</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("law"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Law</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("chinese"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Chinese</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("english"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">English</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("ganeral"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Ganeral Knowledg</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("electric"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Electric</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("electronic"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Electronic</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("animal"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Animal husbandry</button>
                                </li>
                                <li>
                                    <button type="button" onClick={() => { setGatagory("other"); setDropdown(false) }} className="inline-flex w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Other</button>
                                </li>
                            </ul>
                        </div>
                        <div onClick={() => setResultVisibility(!resultVisibility)} className={`w-full h-full fixed left-0 bg-transparent top-0 z-10 ${resultVisibility ? "block" : "hidden"}`}></div>
                        <div className="relative w-full">
                            <input 
                            autoComplete='off'
                            onKeyDown={(event) => {
                                if (event.key == 'Enter') {
                                    handleSearchButton(event.target.data);
                                }
                            }} onChange={(event) => { handleSearch(event.target.value); setResultVisibility(true) }} id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-gray-50 border-s-2 border border-gray-300  outline-none" placeholder="Search ..." required />
                            <button onClick={() => handleSearchButton(keyword)} className="absolute top-0 end-0 p-2.5 text-sm font-medium h-full text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search</span>
                            </button>
                            <div className={` ${resultVisibility ? "block" : "hidden"} absolute bg-white p-4 border-2 border-gray-700 rounded-lg z-50 w-full  `}>
                                <ul>
                                    {result.length != 0 ? result.map((ele, i) => <li onClick={() => handleApplySearch(ele.Title)} key={i} className='cursor-pointer justify-between items-center flex hover:text-blue-400 duration-100 hover:font-[700]'><span>{ele.Title}</span> <span>{"ប្រភេទ: ​"}{ele.type}</span> </li>) : <li>no result</li>}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`${backBTN ? "block" : "hidden"} w-full justify-center items-center flex p-4`}>
                    <button onClick={handleBackToDefaultData} className='bg-blue-600 p-2 rounded-lg text-white font-[700] '>Back</button>
                </div>
                <br />
                <div className={`w-full h-full bg-transparent fixed top-0 ${dropdown ? "block" : "hidden"}`} onClick={() => setDropdown(!dropdown)}></div>
                <br />
            </div>
            <BookList img={data} CardWidth="w-[16rem]" moreVissible={true} display={true} more={backBTN} language="foriegn" />
        </div>
    )
}

export default ForiegnBook