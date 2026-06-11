export default function Loader() {
  return (
    <div className="flex  items-center justify-center py-16 gap-4">

      <div className="relative">
        <div className="h-14 w-14 rounded-full border-4 border-gray-200"></div>

        <div className="absolute inset-0 h-14 w-14 rounded-full border-4 border-transparent border-t-gray-900 animate-spin"></div>
      </div>

      <p className="text-sm text-gray-500 font-medium">
        Loading data...
      </p>

    </div>
  );
}