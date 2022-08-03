import { ArrowDownward, ArrowDownwardOutlined, ArrowUpward, ArrowUpwardOutlined, DarkMode, DarkModeOutlined, FiberManualRecord, FiberManualRecordOutlined, FilterListOffOutlined, FilterListOutlined, LightMode, LightModeOutlined, MessageOutlined, NotificationsNoneOutlined, SearchOutlined, ToggleOn, ToggleOnOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IMG from './img.png'
import IMG2 from './bit.png'
import IMG3 from './dash.png'
import IMG4 from './mon.png'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { data, data2, data3 } from './data.js'
import IMG5 from './eth.png'
import IMG6 from './lite.png'
import {
    BarChart,
    Bar,
    Brush,
    ReferenceLine,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LineChart,
    Line,
} from 'recharts';

import './Main.css'
import ModalX from '../ModalX/ModalX';
import MainRightBar from '../MainRightBar/MainRightBar';
import Chart1 from '../Chart1/Chart1';
import Chart2 from '../Chart2/Chart2';
import GraphBox from '../GraphBox/GraphBox';
const Main = () => {
    const theme = useTheme();
    const phone = useMediaQuery(theme.breakpoints.down("sm"))
    const tab = useMediaQuery(theme.breakpoints.down("md"))

    const [Val, SetVal] = useState('0.00');


    return (
        <div className="Main">
            <div className="Main-Header-wrapper">
                <div className="Main-Header">
                    <div className="Main-Header-Greeting">
                        <h1>Analytics</h1>
                        <p className="gray-p me">Hello malek0x1, Welcome back !</p>
                        <p className="gray-p show"> malek0x1</p>
                    </div>
                    <div className="Main-Header-input-wrapper">
                        <input type="text" placeholder='Search Dashboard' style={{ color: "#8e8eb1fd" }} />
                        <SearchOutlined sx={{ color: "#8e8eb18f", position: "absolute", left: "10px", top: "12px", fontSize: "27px", cursor: "pointer" }} />
                        <FilterListOutlined sx={{ color: "#8e8eb18f", position: "absolute", right: "10px", top: "12px", fontSize: "27px", cursor: "pointer" }} />
                    </div>
                    <div className="Main-Header-icons">
                        <div className="Main-Header-icon"><MessageOutlined fontSize='large' sx={{ color: "gray" }} /></div>
                        <div className="Main-Header-icon"><NotificationsNoneOutlined fontSize='large' sx={{ color: "gray", fontSize: "24px" }} /></div>
                        <div className="Main-Header-icon">
                            {/* <MessageOutlined fontSize='large' sx={{ color: "gray" }} /> */}
                            <img className='img-png' style={{ width: "30px" }} src="https://bootdey.com/img/Content/avatar/avatar7.png" />
                        </div>
                    </div>
                </div></div>
            <div className="Main-Body">
                <div className="Main-Body-Left">
                    <div className="Main-Body-Left-Upper">
                        <h1 style={{ color: '#0E1D44' }}>USD/BTC <ArrowDownwardOutlined fontSize="large" /></h1>
                        <div className="fc">
                            <p className="gray-p">Low Price</p>
                            <p className="bolder-p">92.132</p>
                        </div>
                        <div className="fc">
                            <p className="gray-p">High Price</p>
                            <p className="bolder-p">99.482</p>
                        </div>
                        <div className="oc hiddeme">
                            <p >Open</p>
                            <FiberManualRecord sx={{ fontSize: "18px" }} />
                        </div>
                        <div className="oc hiddeme">
                            <p>Close</p>
                            <FiberManualRecord sx={{ fontSize: "18px" }} />
                        </div>
                        <div className="oc">
                            <LightMode className="hiddeme" sx={{ fontSize: "25px" }} />
                            <DarkModeIcon className="hiddeme" sx={{ color: "#9a9a9a", fontSize: "25px" }} />
                        </div>

                        <div className="oc hiddeme">
                            <p className="gray-p">All Tabs</p>
                            <ToggleOn fontSize='large' />

                        </div>
                    </div>
                    <div className="Main-Body-Left-Lower">

                        <Chart1 data={data} phone={phone} tab={tab} />
                        <ModalX />
                    </div>
                    <div className="Main-Body-Footer">
                        <div className="Main-Body-Footer-left">
                            <div className="Footer-Header">
                                <p className="Footer-Title">STATISTICS</p>
                                <p className="gray-p">View All</p>
                            </div>
                            <div className="p-wrapper hiddeme">
                                <p className="gray-p pointer">Day</p>
                                <p className="gray-p pointer">Week</p>
                                <p className="p-btn gray-p pointer">Month</p>
                            </div>
                            <p className="gray-p-3 my">Working Ballance</p>
                            <p className="bolder-p-x">$9.313.000</p>
                            <Chart2 data={data} phone={phone} tab={tab} />


                        </div>
                        <div className="Main-Body-Footer-Right">
                            <div className="Footer-Header">
                                <p className="Footer-Title">HISTORY GRAPHS</p>
                                <p className="gray-p">View All</p>
                            </div>

                            <div className="gridx">


                                <GraphBox percent="-20.10%" color="#FFA7AF" direction="down" price="$9.313.000" d="1" />
                                <GraphBox percent="+1.39%" color="#052C91" direction="up" price="$9.313.000" d="2" />
                                <GraphBox percent="+9.31%" color="#65D321" direction="up" price="$23.91.000" d="1" />
                                <GraphBox percent="-+0.31%" color="#DA1D6C" direction="up" price="$23.91.000" d="2" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Main-Body-Right">
                    <MainRightBar img={IMG2} name="BITCOIN" short="BTC" price="92.031.13$" />
                    <MainRightBar img={IMG3} name="DASH" short="Dash" price="928.13.923$" />
                    <MainRightBar img={IMG4} name="MONERO" short="XRM" price="29.020.938$" />
                    <MainRightBar img={IMG5} name="ETHERIUM" short="ETH" price="2.023.41$" />
                    <MainRightBar img={IMG6} name="LITECOIN" short="LTE" price="92.923.134$" />
                    <MainRightBar img={IMG2} name="BITCOIN" short="BTC" price="92.031.13$" />
                    <MainRightBar img={IMG3} name="DASH" short="Dash" price="928.13.923$" />
                    <MainRightBar img={IMG4} name="MONERO" short="XRM" price="29.020.938$" />
                    <MainRightBar img={IMG5} name="ETHERIUM" short="ETH" price="2.023.41$" />
                    <MainRightBar img={IMG6} name="LITECOIN" short="LTE" price="92.923.134$" /></div>
            </div>
        </div>
    )
}

export default Main