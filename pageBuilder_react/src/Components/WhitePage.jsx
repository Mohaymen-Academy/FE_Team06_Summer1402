import React, { useState, useContext, useRef, useReducer, useEffect } from 'react';
import "../assets/Styles/Page1.css"
import { ElementsContext } from './Layout';
import DropAbleDiv from './DropAbleDiv';

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return [...state, action.newitem];
    case 'delete':
      state.splice(action.deleteitem, 1)
      return [...state];
    case 'reorder':
      var element = state[action.selecteditem];
      state.splice(action.selecteditem, 1);
      state.splice(action.replaceditem, 0, element);
      return [...state];

  }
}



function WhitePage({
  id, pagename, leftsidepager
}) {
  const [ishover, setishover] = useState(false);
  const [isDragging, setIsDragging] = useState(false); // New state for drag state
  const values = useContext(ElementsContext);
  const [elements, dispatch] = useReducer(reducer, values.current.components[pagename])

  const canvasvalues = useRef(
    {
      draggedItemHeight: 0,
      itemIsDragged: false,
      direction: '',
      selecteditem: null,
      replaceditem: null,
      choosenitem: null,
    }
  );
  function handleonDrop(e) {
    e.preventDefault();
    if (values.current.dragged) {
      canvasvalues.current.choosenitem = elements.length;
      dispatch({ type: 'add', newitem: values.current.dragged })
      values.current.dragged = null;
    }
  }
  // useEffect(() => {
  //   const interval = setInterval(sendData, 10000);

  //   return () => clearInterval(interval);
  // }, []);
  // function sendData() {
  //   console.log(elements)
  //   console.log('hey 10 saniey bia binam')
  // }

  // function handleDragStart() {
  //   setIsDragging(true); // Set the drag state to active when the drag starts
  // }

  // function handleDragEnd() {
  //   setIsDragging(false); // Set the drag state to inactive when the drag ends
  // }

  return (
    <>
      <div
        data-zarp={'zarp'}
        id={id}
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleonDrop}
        className={`flex flex-col max-w-[350px] h-[40rem] w-[100%] vsmmobile:h-[550px] smmobile:h-[550px] mobile:h-[550px] mb-5  tablet:h-[550px] bg-white ${ishover ? 'shadow-2xl bg-gray-500' : ''
          }`}
      >
        <div className={` ${elements.length != 0 ? "hidden" : ''} ${ishover ? "border-black" : ''} group flex flex-col justify-center items-center border-dashed border-2  border-[#0066FF] rounded-lg  vsmmobile:h-[140px]  h-[150px] m-7`}>
          <div className="flex flex-col justify-center items-center w-[50px] h-[50px] mt-3 vsmmobile:h-[35px] vsmmobile:w-[35px] rounded-lg bg-[#dce5f1]">
            <img className="w-[80%] h-[80%] m-[1px]" src="images/plus.png" />
          </div>
          <div className="text-[#0066FF] m-4 mb-1">یک قالب را بکشید و رها کنید</div>
        </div>
        <div
          className='flex flex-col px-[10px] mt-5 overflow-y-auto'>
          {elements.map((comptype, index) => {
            return <DropAbleDiv key={index} type={comptype} Height={values.current.elements[comptype][0]} canvasvalues={canvasvalues} index={index} dispatch={dispatch} leftsidePager={leftsidepager} />
          })}
          <div></div>
        </div>
      </div>
    </>
  );
}

export default WhitePage;