import { TrendingUp } from "lucide-react";

function KPI({ title, value, icon: Icon }) {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

      {/* Background Blur */}
      <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gray-100 opacity-50 group-hover:scale-125 transition-all duration-500" />

      <div className="relative flex items-start justify-between">

        <div>
          <p className="text-sm font-medium text-gray-500">
            {title}
          </p>

          <h2 className="mt-3 text-4xl font-bold text-gray-900">
            {value}
          </h2>

          <div className="mt-4 flex items-center gap-2">
            <TrendingUp
              size={16}
              className="text-green-500"
            />

            <span className="text-sm font-medium text-green-600">
              Active
            </span>
          </div>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-900 text-white shadow-lg">
          <Icon size={28} />
        </div>

      </div>
    </div>
  );
}

export default KPI;