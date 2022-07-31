import { Add, CottageOutlined, CurrencyExchangeOutlined, DiamondOutlined, OtherHousesOutlined, PieChartOutlineOutlined } from '@mui/icons-material'
import React from 'react'
import './SideBar.css'
const SideBar = () => {
    return (
        <div className="SideBar">
            <div className="SideBar-Header">
                <div className="SideBar-square purple">
                <DiamondOutlined sx={{ color: 'white' }} className="SideBar-Icon" />

                </div>
            </div>
            <div className="SideBar-Body">
                <div className="SideBar-square orange">
                    <OtherHousesOutlined sx={{ color: 'white' }} className="SideBar-Icon" />
                </div>
                <div className="SideBar-square SideBar-Icon-Border">
                    <CurrencyExchangeOutlined sx={{ color: '#5D4E7B' }} className="SideBar-Icon" />
                </div>
                <div className="SideBar-square SideBar-Icon-Border">
                    <PieChartOutlineOutlined sx={{ color: '#5D4E7B',fontWeight:900 }} className="SideBar-Icon" />
                </div>

            </div>
            <div className="SideBar-Footer">
                <div className="SideBar-square purple">
                <Add sx={{ color: '#FFF' }} className="SideBar-Icon" />

                </div>

            </div>
        </div>
    )
}

export default SideBar