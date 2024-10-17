import './App.css'

function FeatureCard(props: { title: string, description: string }) {
  return (
    <div className='border-[2px] m-2 rounded-xl'>
      <div className='bg-transparent m-4 max-h-60 h-60'>
      <div className='bg-transparent'>
        <h3 className='bg-transparent text-center'>{props.title}</h3>
      </div>
      <p className='text-center bg-transparent'>{props.description}</p>
      </div>
    </div>
  )
}

function App() {
  return (
    <>
      <div className='fixed bg-white/0 backdrop-blur-sm max-w-[100%] left-0 right-0 flex justify-between py-7 px-10'>
        <div className='flex bg-transparent items-center'><h1 className='bg-transparent select-none text-center'>ASTRALIS</h1></div>
        <div className='flex bg-transparent space-x-10 items-center'>
          <a className='bg-transparent'>HOME</a>
          <a className='bg-transparent'>FEATURES</a>
          <a className='bg-transparent'>PRICING</a>
        </div>
        <div><button className='bg-white text-black p-2 rounded-3xl font-sg'>JOIN US</button></div>
      </div>

      <div className='flex max-w-[100%] w-[100vw] h-[70%] justify-center'>
        <div className='mt-[15vh] w-[60%]'>
          <div>
            <div className='flex justify-between'>
              <div>
                <h1 className='text-[6vh] font-sg text-left font-bold flex'>EXECUTION AS <br></br>INITIALLY INTENDED</h1>
                <p className='font-sg'>Elevate your gaming experience with a world-class<br></br>script execution experience.</p>
                <div className='flex mt-10'>
                  <button className='bg-white my-2 py-2.5 mr-5 text-center transition duration-150 hover:translate-y-1 ease-in-out hover:shadow-2xl hover:shadow-gray-400 px-5 font-semibold text-black p-2 rounded-xl font-sg'>Pricing</button>
                  <a target='_BLANK' href='https://discord.gg/GGnjTSxMh2' className='bg-white my-2 transition duration-150 hover:translate-y-1 ease-in-out hover:shadow-2xl hover:shadow-gray-400 py-2.5 text-center px-5 font-semibold text-black p-2 rounded-xl font-sg'>Join us</a>
                </div>
              </div>
              <div className='bg-red-500 w-[50px] h-[50px]'></div>
            </div>
          </div>
          <div id='features' className='mt-20'>
            <h1 className='text-center text-[5.5vh] font-sg uppercase font-bold'>Features</h1>
            <div className='flex flex-wrap justify-center overflow-hidden'>
              <FeatureCard title='Seamless Execution' description='lorem ipsum dolor sit amet r bec an awdp' />
              <FeatureCard title='Zero Downtime' description='lorem ipsum dolor sit amet r bec an awdp' />
              <FeatureCard title='24/7 Support' description='lorem ipsum dolor sit amet r bec an awdp' />
              <FeatureCard title='24/7 Support' description='lorem ipsum dolor sit amet r bec an awdp' />
              <FeatureCard title='24/7 Support' description='lorem ipsum dolor sit amet r bec an awdp' />

              <FeatureCard title='24/7 Support' description='lorem ipsum dolor sit amet r bec an awdp' />
              <FeatureCard title='24/7 Support' description='lorem ipsum dolor sit amet r bec an awdp' />
              <FeatureCard title='24/7 Support' description='lorem ipsum dolor sit amet r bec an awdp' />
              <FeatureCard title='24/7 Support' description='lorem ipsum dolor sit amet r bec an awdp' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex max-w-[100%] pb-[12vh] mt-[5vh] justify-center bg-[#222222]'>
        <div className='w-[70%]'>

        </div>
      </div>
    </>
  )
}

export default App