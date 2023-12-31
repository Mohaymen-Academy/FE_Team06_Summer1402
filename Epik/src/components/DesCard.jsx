import React from 'react'
import '../assets/styles/describe.css'
export default function DesCard({ image, title }) {
    return (
        <div
        className={'descard'} onClick={handleClick}> 
            <img className='imageclass' src={image} alt={`${title} image`} width={'200px'} height={'100px'} style={{borderRadius:'5px'}} />
            <h3
            className={'title'}>
                {title}
            </h3>
        </div>
    )
    function handleClick()
    {
        window.location.href = "/";

    }
}
