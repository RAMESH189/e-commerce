import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <div className="w-4/5 mx-auto mt-20 flex flex-col justify-center items-center space-y-4 shadow-lg border border-b-4 p-4">
        <h1 className="text-4xl font-semibold">404 - Page Not Found</h1>
        <h4 className="py-10 text-lg text-red-500 font-semibold">
          Use the below link to go back to the home page
        </h4>
        <div className="space-x-4">
          <Link
            className="underline text-blue-600 hover:text-red-500 duration-300 text-2xl font-bold"
            href="/"
          >
            Homepage
          </Link>
        </div>
      </div>
    </>
  );
}
