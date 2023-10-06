import Link from "next/link";

export default function Page() {
  return (
    <>
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2x1">New</h1>
      </header>
      {/* Flex box with gap 2 and sorted via columns */}
      <form className="flex gap-2 flex-col">
        <input
          type="text"
          name="title"
          //   focus-within brights the border of the box when clicked on
          className="border border-slate-300 bg-transparent rounded px-2 py-1 
          outline-none focus-within:border-slate-100"
        />
        {/* justify end shifts to righthand side */}
        <div className="flex gap-1 justify-end">
          <Link
            href=".."
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded
         hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Cancel
          </Link>
          <button
            type="submit"
            className="border border-slate-300 text-slate-300 px-2 py-1 rounded
         hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
          >
            Create
          </button>
        </div>
      </form>
    </>
  );
}
