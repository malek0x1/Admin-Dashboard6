import { ArrowDownward, ArrowUpwardOutlined } from '@mui/icons-material'
import React from 'react'
import { Line, LineChart } from 'recharts'
import { data3 } from '../Main/data'
import { data2 } from '../Main/data'


const GraphBox = (prop) => {
    const choose = prop.d == "1" ? data2 : data3;
    return (
        <div className="box">
            <p className="bolder-p-xyz">{prop.percent}

                {prop.direction == "down" ?
                    <ArrowDownward fontSize='medium' sx={{ color: "#FFA7AF" }} />
                    :
                    <ArrowUpwardOutlined fontSize='medium' sx={{ color: "#0F68DC" }} />
                }
            </p>
            <LineChart width={120} height={50} data={choose}>
                <Line type="stepAfter" dataKey="pv" stroke={prop.color} strokeWidth={2} />
            </LineChart>
            <p className="bolder-p-x2">{prop.price}</p>
            <p className="title">Total Investment</p>
        </div>
    )
}

export default GraphBox