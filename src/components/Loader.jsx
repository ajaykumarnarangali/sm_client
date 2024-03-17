import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'


function Loader() {
    return (
        <div className='d-flex justify-content-center align-items-center bg-dark' style={{ width: '100%', height: '100%' }}>
            <CirclesWithBar
                height="100"
                width="100"
                color="#4fa94d"
                outerCircleColor="blue"
                innerCircleColor="red"
                barColor="blue"
                ariaLabel="circles-with-bar-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    )
}

export default Loader
