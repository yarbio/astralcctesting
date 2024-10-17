import './App.css'

function Canvas() {
  return <canvas id='nigger'></canvas>
}

function draw() {
  const canvas: HTMLCanvasElement | any = document.getElementById('background')

  const ctx: CanvasRenderingContext2D = canvas.getContext("2d");

  console.log("Drawing my shit")
  ctx.fillRect(0, 0, 10, 10)
}

function App() {
  return (
   <>
      <div className='flex justify-between m-10 backdrop-blur-xl'>
        <div className='flex items-center'><h1 className='select-none text-center'>ASTRALIS</h1></div>
        <div className='flex space-x-10 items-center'>
          <a>HOME</a>
          <a>FEATURES</a>
          <a>PRICING</a>
        </div>
        <div><button className='bg-white text-black p-2 rounded-3xl'>JOIN US</button></div>
      </div>
      <h1 className='text-red-500'>i'm gay</h1>
   </> 
  )
}

export default App