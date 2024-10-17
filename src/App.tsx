import './App.css'

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