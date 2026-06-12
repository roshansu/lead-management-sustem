import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function SourceLeadChart({ data }) {
  return (
    <div className="bg-white mt-4 p-6 rounded-3xl border shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">
        Leads by Source
      </h2>

      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="source" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="totalLeads"
            fill="#60A5FA"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}