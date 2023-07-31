import React, { useState, useEffect,useContext } from 'react';
// import "../assets/Styles/Page1.css"
import "../../assets/Styles/Page1.css"
import { ElementsContext } from '../Layout';
import DropDown from '../DropDown';
import FileUploader from '../../utility/FileUploader';
function ImageSideBar() {
    const layoutContext = useContext(ElementsContext);
    const setter = layoutContext.current.setters
    console.log("HERE ", layoutContext.current.setters)
    function handleSetting(func , value)
    {
        layoutContext.current.setters[func](value);
    }
    return (
        <>
            <div className="fixed flex flex-col px-4 py-3 left-0 h-screen  w-[300px] border border-t-0  bg-white smmobile:hidden vsmmobile:hidden ">
                <div className="my-3">عکس</div>
                <div className="flex flex-row items-center justify-between mx-[8%] mobile:mx-0  my-5 w-[80%] h-[30px]  bg-white">
                    <img className="max-w-[25px] max-h-[23px] " src="images/2.png" onClick={()=>handleSetting("setalign",1) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/1.png" onClick={()=>handleSetting("setalign",2) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/3.png" onClick={()=>handleSetting("setalign",3) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/4.png" onClick={()=>handleSetting("setalign",4) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/5.png" onClick={()=>handleSetting("setalign",5) } />
                    <img className="max-w-[25px] max-h-[23px] " src="images/6.png" onClick={()=>handleSetting("setalign",6) } />
                </div>
                <FileUploader setVal = {handleSetting} func="setimage"/>

                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">عرض عکس</div>
                    <DropDown Default="پیش فرض" items={[1,2,3,4]} width="35%" setVal = {handleSetting} func="setwidth"/>
                </div>
                <div className="flex flex-row justify-between py-[7px]  ">
                    <div className="text-[12px] my-1 ">حاشیه</div>
                    <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setpadding",e.target.value)} defaultValue="16"></input>
                </div>
                <div className="flex flex-row justify-between py-[7px] my-0">
                    <div className="text-[12px] my-1">فاصله</div>
                    <input className="left-sidebar-input text-center " style={{width:"20%"}} onChange={(e) => handleSetting("setgap",e.target.value)} defaultValue="24"></input>

                </div>
                <div className="flex flex-row justify-between py-[7px]">
                    <div className="text-[12px]  my-3">گوشه ها</div>
                    <DropDown Default="4" items={[1,2,3,4]} width="35%" setVal = {handleSetting} func="setradisu"/>
                </div>
            </div>
        </>
    );
}

export default ImageSideBar;
