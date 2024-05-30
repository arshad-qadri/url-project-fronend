import Home from "../home/Home";


export default function Dashboard() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{<Home/>}</div>
        </main>
      </div>
    </>
  )
}