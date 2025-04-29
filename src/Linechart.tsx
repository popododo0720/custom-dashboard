import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const data = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800 },
    { name: 'Page D', uv: 2780, pv: 3908 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
];


export default function Linechart() {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 20, right: 10, left: 10, bottom: 10 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis yAxisId="left" />
                <YAxis yAxisId="right" orientation="right"  />
                <Tooltip />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="uv" stroke="#8884d8" activeDot={{ r: 5 }} />
                <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#82ca9d" activeDot={{ r: 5 }} />
                <Line yAxisId="left" type="monotone" dataKey="amt" stroke="#cd0808" activeDot={{ r: 5 }} />
            </LineChart>
        </ResponsiveContainer>
    );
}
