import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="bg-red-600 outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >Red</button>

          <button
          onClick={() => setColor("green")}
          className="bg-green-600 outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >Green</button>

          <button
          onClick={() => setColor("blue")}
          className="bg-blue-600 outline-none px-4 py-1 rounded-full text-white shadow-lg"
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
