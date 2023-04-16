import { useQuery } from "react-query";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  TooltipProps,
} from "recharts";
const CovidChart = () => {
  const getFacts = async () => {
    const res = await fetch(
      "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
    );
    return res.json();
  };

  const { data,isLoading } = useQuery("randomFacts", getFacts);

  let arr: any = data && data?.cases;
  let p =
    data &&
    data?.cases &&
    Object.keys(arr).map((ele: any) => {
      return { x: ele, y: arr[ele] };
    });

  return isLoading?<div>Loading...</div>:(
    data && (
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          width={500}
          height={300}
          data={p}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{ fill: "transparent" }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="y"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    )
  );
};

export default CovidChart;


export const CustomTooltip = ({
  active,
  payload,
  label,
}: TooltipProps<any, string>) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip black-500">
        <p className="label">Date : {label} </p>
        <p className="label">Case : {payload[0].value}</p>
      </div>
    );
  }

  return null;
};
