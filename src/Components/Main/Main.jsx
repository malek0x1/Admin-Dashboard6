import { ArrowDownward, ArrowDownwardOutlined, ArrowUpward, ArrowUpwardOutlined, DarkMode, DarkModeOutlined, FiberManualRecord, FiberManualRecordOutlined, FilterListOffOutlined, FilterListOutlined, LightMode, LightModeOutlined, MessageOutlined, NotificationsNoneOutlined, SearchOutlined, ToggleOn, ToggleOnOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IMG from './img.png'
import IMG2 from './bit.png'
import IMG3 from './dash.png'
import IMG4 from './mon.png'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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
const Main = () => {
    const theme = useTheme();
    const phone = useMediaQuery(theme.breakpoints.down("sm"))
    const tab = useMediaQuery(theme.breakpoints.down("md"))

    const [Val, SetVal] = useState('0.00');
    const data = [
        { name: '1', uv: 300, pv: 456 },
        { name: '2', uv: -145, pv: 230 },
        { name: '3', uv: -100, pv: 345 },
        { name: '4', uv: -8, pv: 450 },
        { name: '5', uv: 100, pv: 321 },
        { name: '6', uv: 9, pv: 235 },
        { name: '7', uv: 53, pv: 267 },
        { name: '8', uv: 252, pv: -378 },
        { name: '9', uv: 79, pv: -210 },
        { name: '10', uv: 294, pv: -23 },
        { name: '12', uv: 43, pv: 45 },
        { name: '13', uv: -74, pv: 90 },
        { name: '14', uv: -71, pv: 130 },
        { name: '15', uv: -117, pv: 11 },
        { name: '16', uv: -186, pv: 107 },
        { name: '17', uv: -16, pv: 926 },
        { name: '18', uv: -125, pv: 653 },
        { name: '19', uv: 222, pv: 366 },
        { name: '20', uv: 372, pv: 486 },
        { name: '21', uv: 182, pv: 512 },
        { name: '22', uv: 164, pv: 302 },
        { name: '23', uv: 316, pv: 425 },
        { name: '24', uv: 131, pv: 467 },
        { name: '25', uv: 291, pv: -190 },
        { name: '26', uv: -47, pv: 194 },
        { name: '27', uv: -415, pv: 371 },
        { name: '28', uv: -182, pv: 376 },
        { name: '29', uv: -93, pv: 295 },
        { name: '30', uv: -99, pv: 322 },
        { name: '31', uv: -52, pv: 246 },
        { name: '32', uv: 154, pv: 33 },
        { name: '33', uv: 205, pv: 354 },
        { name: '34', uv: 70, pv: 258 },
        { name: '35', uv: -25, pv: 359 },
        { name: '36', uv: -59, pv: 192 },
        { name: '37', uv: -63, pv: 464 },
        { name: '38', uv: -91, pv: -2 },
        { name: '39', uv: -66, pv: 154 },
        { name: '40', uv: -50, pv: 186 },
    ];

    const data2 = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

    const data3 = [
        {
            name: 'Page A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Page B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Page C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Page D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Page E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Page F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Page G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];

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
                        <BarChart
                            // width={220}
                            width={phone ? 250 : tab ? 300 : 600}

                            height={300}
                            data={data}
                            margin={{
                                top: 5,
                                right: 30,
                                left: 0,
                                bottom: 5,
                            }}
                        >
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                            <ReferenceLine y={0} stroke="#000" />
                            {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
                            <Bar dataKey="pv" fill="#FD8A75" />
                            <Bar dataKey="uv" fill="#5D4E7B" />
                        </BarChart>
                        {/* <div className="Main-Body-Form">
                            <p className="bolder-p-2" style={{ color: "#5D4E7B" }}>Volume</p>
                            <input placeholder='Volume' value={Val} onChange={e => SetVal(e.target.value)} />
                            <button className="BS-btn purple">Buy</button>
                            <button className="BS-btn orange" onClick={() => setOpen(true)}>Sell</button>

                        </div> */}
                                <ModalX />
                    </div>
                    <div className="Main-Body-Footer">
                        <div className="Main-Body-Footer-left">
                            <div className="Footer-Header">
                                <p className="Footer-Title">STATISTICS</p>
                                <p className="gray-p">View All</p>
                            </div>
                            <div className="p-wrapper hiddeme">
                                <p className="gray-p">Day</p>
                                <p className="gray-p">Week</p>
                                <p className="p-btn gray-p">Month</p>
                            </div>
                            <p className="gray-p-3 my">Working Ballance</p>
                            <p className="bolder-p-x">$9.313.000</p>
                            <LineChart
                                // width={300} TAB
                                // width={450} BIG
                                // width={250} MOBILE
                                width={phone ? 250 : tab ? 300 : 450}
                                height={300}
                                data={data}
                                margin={{
                                    top: 20,
                                    right: 30,
                                    left: 0,
                                    bottom: 5,
                                }}
                            >
                                {/* <CartesianGrid strokeDasharray="3 3" /> */}
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="pv" stroke="#FD8A75" activeDot={{ r: 8 }} />
                                <Line type="monotone" dataKey="uv" stroke="#5D4E7B" />
                            </LineChart>


                        </div>
                        <div className="Main-Body-Footer-Right">
                            <div className="Footer-Header">
                                <p className="Footer-Title">HISTORY GRAPHS</p>
                                <p className="gray-p">View All</p>
                            </div>

                            <div className="gridx">
                                <div className="box">
                                    <p className="bolder-p-xyz">-2.10% <ArrowDownward fontSize='medium' sx={{ color: "#FFA7AF" }} /></p>
                                    <LineChart width={120} height={50} data={data3}>
                                        <Line type="monotone" dataKey="pv" stroke="#FFA7AF" strokeWidth={2} />
                                    </LineChart>
                                    <p className="bolder-p-x2">$9.313.000</p>
                                    <p className="title">Total Investment</p>
                                </div>
                                <div className="box">
                                    <p className="bolder-p-xyz">+1.39% <ArrowUpwardOutlined fontSize='medium' sx={{ color: "#052C91" }} /></p>
                                    <LineChart width={120} height={50} data={data3}>
                                        <Line type="monotone" dataKey="pv" stroke="#052C91" strokeWidth={2} />
                                    </LineChart>
                                    <p className="bolder-p-x2">$1.92.231</p>
                                    <p className="title">Total Investment</p>
                                </div>
                                <div className="box">
                                    <p className="bolder-p-xyz">+9.0% <ArrowUpwardOutlined fontSize='medium' sx={{ color: "#65D321" }} /></p>
                                    <LineChart width={120} height={50} data={data3}>
                                        <Line type="monotone" dataKey="pv" stroke="#65D321" strokeWidth={2} />
                                    </LineChart>
                                    <p className="bolder-p-x2">$4.141.291</p>
                                    <p className="title">Total Investment</p>
                                </div>
                                <div className="box">
                                    <p className="bolder-p-xy">-2.10% <ArrowDownward fontSize='medium' sx={{ color: "#FFA7AF" }} /></p>
                                    <LineChart width={120} height={50} data={data3}>
                                        <Line type="monotone" dataKey="pv" stroke="#FFA7AF" strokeWidth={2} />
                                    </LineChart>
                                    <p className="bolder-p-x2">$9.313.000</p>
                                    <p className="title">Total Investment</p>
                                </div>

                            </div>




                        </div>
                    </div>
                </div>
                <div className="Main-Body-Right">





                    <div className="Main-Body-Right-item">
                        <div className="last-wrapper">
                            <img src={IMG2} />
                            <div className="fc">
                                <p className="bolder-p-cmon">BITCOIN</p>
                                <p className="gray-p">BTC</p>
                            </div>
                        </div>
                        <p className="gray-p-last">92.031.13$</p>
                    </div>



                    <div className="Main-Body-Right-item">
                        <div className="last-wrapper">
                            <img src={IMG3} />
                            <div className="fc">
                                <p className="bolder-p-cmon">DASH</p>
                                <p className="gray-p">Dash</p>
                            </div>
                        </div>
                        <p className="gray-p-last">928.13.923$</p>
                    </div>




                    <div className="Main-Body-Right-item">
                        <div className="last-wrapper">
                            <img src={IMG4} />
                            <div className="fc">
                                <p className="bolder-p-cmon">MONERO</p>
                                <p className="gray-p">XRM</p>
                            </div>
                        </div>
                        <p className="gray-p-last">29.020.938$</p>
                    </div>







                    <div className="Main-Body-Right-item">
                        <div className="last-wrapper">
                            <img src={IMG5} />
                            <div className="fc">
                                <p className="bolder-p-cmon">ETHERIUM</p>
                                <p className="gray-p">ETH</p>
                            </div>
                        </div>
                        <p className="gray-p-last">2.023.41$</p>
                    </div>










                    <div className="Main-Body-Right-item">
                        <div className="last-wrapper">
                            <img src={IMG6} />
                            <div className="fc">
                                <p className="bolder-p-cmon">LITECOIN</p>
                                <p className="gray-p">LTE</p>
                            </div>
                        </div>
                        <p className="gray-p-last">92.923.134$</p>
                    </div>







                    <div className="Main-Body-Right-item">
                        <div className="last-wrapper">
                            <img src={IMG2} />
                            <div className="fc">
                                <p className="bolder-p-cmon">BITCOIN</p>
                                <p className="gray-p">BTC</p>
                            </div>
                        </div>
                        <p className="gray-p-last">421.41.24$</p>
                    </div>



                    <div className="Main-Body-Right-item">
                        <div className="last-wrapper">
                            <img src={IMG3} />
                            <div className="fc">
                                <p className="bolder-p-cmon">DASH</p>
                                <p className="gray-p">Dash</p>
                            </div>
                        </div>
                        <p className="gray-p-last">92.4.145$</p>
                    </div>




                    <div className="Main-Body-Right-item">
                        <div className="last-wrapper">
                            <img src={IMG4} />
                            <div className="fc">
                                <p className="bolder-p-cmon">MONERO</p>
                                <p className="gray-p">XRM</p>
                            </div>
                        </div>
                        <p className="gray-p-last">9.020.120$</p>
                    </div>







                    <div className="Main-Body-Right-item">
                        <div className="last-wrapper">
                            <img src={IMG5} />
                            <div className="fc">
                                <p className="bolder-p-cmon">ETHERIUM</p>
                                <p className="gray-p">ETH</p>
                            </div>
                        </div>
                        <p className="gray-p-last">15.41.120$</p>
                    </div>










                    <div className="Main-Body-Right-item">
                        <div className="last-wrapper">
                            <img src={IMG6} />
                            <div className="fc">
                                <p className="bolder-p-cmon">LITECOIN</p>
                                <p className="gray-p">LTE</p>
                            </div>
                        </div>
                        <p className="gray-p-last">59.83.19$</p>
                    </div>










                </div>

            </div>
        </div>
    )
}

export default Main