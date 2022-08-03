import React from 'react'
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

const Chart1 = ({phone,tab,data}) => {
    return (
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
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
            <ReferenceLine y={0} stroke="#000" />
            <Bar dataKey="pv" fill="#FD8A75" />
            <Bar dataKey="uv" fill="#5D4E7B" />
        </BarChart>
    )
}

export default Chart1