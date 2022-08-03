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

const Chart2 = ({phone,tab,data}) => {
    return (
        <LineChart
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
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#FD8A75" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="uv" stroke="#5D4E7B" />
        </LineChart>
    )
}

export default Chart2