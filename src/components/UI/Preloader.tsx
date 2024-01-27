import React from 'react'

const Preloader = () => {
  return (
    <div className='w-full h-screen mx-auto'>
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{margin: "auto", background: "inherite", display: "block", shapeRendering: "auto"}} width="210px" height="210px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <circle cx="50" cy="50" fill="none" stroke="#85a2b6" strokeWidth="10" r="30" strokeDasharray="141.37166941154067 49.12388980384689">
                <animateTransform attributeName="transform" type="rotate" repeatCount="indefinite" dur="1s" values="0 50 50;360 50 50" keyTimes="0;1"></animateTransform>
                </circle>
            </svg>
        </div>
    </div>
  )
}

export default Preloader
