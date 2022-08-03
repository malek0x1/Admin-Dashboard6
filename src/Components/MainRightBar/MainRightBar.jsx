import React from 'react'

const MainRightBar = (prop) => {
    return (
        <div className="Main-Body-Right-item">
            <div className="last-wrapper">
                <img src={prop.img} />
                <div className="fc">
                    <p className="bolder-p-cmon">{prop.name}</p>
                    <p className="gray-p">{prop.short}</p>
                </div>
            </div>
            <p className="gray-p-last">{prop.price}</p>
        </div>
    )
}

export default MainRightBar