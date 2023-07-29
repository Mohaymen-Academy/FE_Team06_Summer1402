// import React, { useState, useEffect } from 'react';
// import "../assets/Styles/Page1.css"
// import Header from '../Components/Header.jsx';
// import MobileSideBar from '../Components/MobileSideBar.jsx';
// import LeftSideBar from '../Components/LeftSideBar.jsx';
// import RightSideBar from '../Components/RightSideBar.jsx';
// import WhitePage from '../Components/WhitePage.jsx';
// import MainButton from '../Components/MainButton.jsx';

// function Page(props) {
//     const [page, setPage] = useState(0);
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [pageCounter, setPageCounter] = useState([1]);
//     const [currentPage, setCurrentPage] = useState(0);

//     const ScrollPage = (direction) => {
//         console.log("prev");
//         console.log(currentPage);
//         if(direction == "next"){
//             if(currentPage < pageCounter.length){
//                 document.getElementById(currentPage+1).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
//                 setCurrentPage(currentPage+1);
//             }
//         }else{
//             if(currentPage > 0){
//                 document.getElementById(currentPage-1).scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
//                 setCurrentPage(currentPage-1);
//             }
//         }
//         console.log("current");
//         console.log(currentPage);
//     }
//     useEffect(() => {
//     }, [currentPage]);
//     return (
//         <>
//             <div className="flex flex-col h-screen  w-screen overflow-hidden font-vazir" dir="rtl">
//                 <div className="flex flex-row h-[10%] bg-white justify-between">
//                     <Header />
//                 </div>
//                 <div className="flex flex-row h-[10%] justify-center desktop:hidden laptop:hidden tablet:hidden mobile:hidden border">
//                     <MobileSideBar />
//                 </div>
//                 <div className="flex flex-row h-[90%] border vsmmobile:h-[80%] smmobile:h-[80%]">
//                     <RightSideBar />
//                     <div className="flex flex-row w-[70%] overflow-x-hidden h-[screen] bg-[#D7D8DD] p-10  justify-center items-start vsmmobile:w-[100%]  smmobile:w-[100%]  ">
//                         <div className="flex flex-col justify-center items-center pl-2 ">
//                             {
//                                 pageCounter.map((item, index) => {
//                                    return <WhitePage id={index} pagename="page1" />
//                                 })
//                             }
//                             <div onClick={() => setPageCounter([...pageCounter,1])} className="flex flex-row w-[350px] h-[50px] vsmmobile:w-[70%] mb-5 mt-5 text-[#0066FF]  border-white border-[2px] bg-[#EDEEF0] rounded-lg justify-center text-center items-center ">
//                                 + افزودن صفحه
//                             </div>
//                         </div>
//                         <div className="flex flex-col relative">
//                             <MainButton src="images/pen.png" text="ویرایش" isSetting={false} />
//                             <div onClick={()=>ScrollPage("prev")}><MainButton src="images/up.png" text="صفحه قبل" isSetting={false}  /> </div>
//                             <div onClick={()=>ScrollPage("next")}><MainButton src="images/down.png" text="صفحه بعد" isSetting={false}  /></div>
//                             <MainButton src="images/lock.png" text="قفل صفحه" isSetting={false} />
//                             <MainButton src="images/trash.png" text="حذف" isSetting={false} />
//                             <div onClick={()=>setIsModalOpen(true)} ><MainButton src="images/icons8-setting-24.png" text="تنظیمات" isSetting={true} /></div>
//                         </div>
//                     </div>
//                     <div className="flex flex-col px-4 py-3 h-screen bg-white w-[20%] smmobile:hidden vsmmobile:hidden">
//                         {
//                             props.pagename == "page1" ?
//                                 <LeftSideBar pagename="page1" /> :
//                                 <LeftSideBar pagename="page2" />
//                         }
//                     </div>
//                 </div>
//             </div>
//             {
//                 isModalOpen &&
//                 <div className=" fixed inset-0 m-[5%] flex items-center justify-center" id="modalOverlay">
//                 <div className="modal bg-white rounded-lg shadow-md p-4 w-[100%] h-[100%] relative" role="dialog">
//                     <div className="modal-header flex justify-between items-center border-b border-gray-300 pb-2 mb-4">
//                         <h3 className="text-lg font-semibold">تنظیمات</h3>
//                         <button onClick={() => setIsModalOpen(false)} className="modal-close text-gray-600 text-2xl" id="modalCloseBtn">&times;</button>
//                     </div>
//                     <div className="modal-content">
//                         <div className="flex flex-col px-4 py-3 bg-white">
//                             {
//                                 props.pagename == "page1" ?
//                                     <LeftSideBar pagename="page1" /> :
//                                     <LeftSideBar pagename="page2" />
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         }
//         </>
//     );
// }

// export default Page;