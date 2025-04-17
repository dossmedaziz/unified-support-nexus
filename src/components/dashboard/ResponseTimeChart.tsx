
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", time: 12 },
  { day: "Tue", time: 14 },
  { day: "Wed", time: 10 },
  { day: "Thu", time: 16 },
  { day: "Fri", time: 9 },
  { day: "Sat", time: 11 },
  { day: "Sun", time: 8 },
];

export function ResponseTimeChart() {
  return (
    <Card className="col-span-2">
      <CardHeader>
        <CardTitle>Average Response Time (mins)</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 10, left: 10, bottom: 5 }}>
              <XAxis dataKey="day" />
              <YAxis />
              <Tooltip 
                contentStyle={{ backgroundColor: "white", borderRadius: "8px", border: "none", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
                formatter={(value: number) => [`${value} minutes`, "Response time"]}
              />
              <Line 
                type="monotone" 
                dataKey="time" 
                stroke="#3b82f6" 
                strokeWidth={2} 
                dot={{ r: 4, fill: "white", strokeWidth: 2 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
