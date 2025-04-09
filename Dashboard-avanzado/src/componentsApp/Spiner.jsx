export function Spiner() {
    return (
      <div className="w-8 h-8 border-4 border-red-500 border-t-white border-b-white rounded-full animate-spin relative">
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full transform -translate-x-1/2 -translate-y-1/2 border-2 border-black" />
      </div>
    );
  }