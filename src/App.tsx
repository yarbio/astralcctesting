import './App.css'

function FeatureCard(props: { title: string, description: string }) {
  return (
    <div className='max-w-[42rem] w-[42rem]'>
      <div className='bg-transparent m-4 max-h-60 h-60'>
        <div className='bg-transparent'>
          <h3 className='bg-transparent font-sg font-semibold text-xl text-left'>{props.title}</h3>
          <div className='flex h-0.5 my-3 grow bg-white'></div>
        </div>
        <p className='text-left font-sg bg-transparent'>{props.description}</p>
      </div>
    </div>
  )
}

function TierCard(props: { title: string, description: string, price: string }) {
  return (
      <div className='border-[2px] transition hover:scale-100 hover:-translate-y-0.5 min-w-70 w-[22rem] max-w-96 m-2 rounded-xl'>
        <div className='flex flex-col justify-between bg-transparent m-4 max-h-[21rem] h-[21rem]'>
          <div className='bg-transparent'>
            <h1 className='select-none bg-transparent font-sg font-semibold text-3xl text-left'><span className='text-lg mr-0.5'>$</span>{props.price}<span className='text-lg text-gray-400 mr-0.5'> {props.title == "lifetime" ? props.title : "/" + props.title}</span></h1>
            <p className='font-sg font-normal'>{props.description}</p>

          </div>
          <div className='m-3'>
            <li className='font-sg my-2.5 select-none'>80% UNC Support</li>
            <li className='font-sg my-2.5 select-none'>Stable execution</li>
            <li className='font-sg my-2.5 select-none'>24/7 Support</li>
            <li className='font-sg my-2.5 select-none'>Intuitive user interface</li>
          </div>
          <a href='https://xastral.mysellix.io/' className='bg-white my-2 text-center transition duration-150 hover:-translate-y-1 ease-in-out hover:shadow-xl hover:shadow-gray-800 px-5 font-semibold text-black p-2 rounded-xl font-sg'>Purchase</a>

        </div>
      </div>
  )
}

function App() {
  return (
    <>
      <div className='fixed flex justify-between bg-white/0 backdrop-blur-sm max-w-[100%] left-0 right-0 py-7 px-10'>
        <div className='flex bg-transparent items-center'><h1 className='bg-transparent select-none text-center'>ASTRALIS</h1></div>
        <div className='flex bg-transparent space-x-10 items-center'>
          <a href='#home' className='bg-transparent'>HOME</a>
          <a href='#features' className='bg-transparent'>FEATURES</a>
          <a href='#pricing' className='bg-transparent'>PRICING</a>
        </div>
        <a></a>
      </div>

      <div id='home' className='flex max-w-[100%] w-[100vw] h-[70%] justify-center'>
        <div className='mt-[15vh] w-[60%]'>
          <div>
            <div className='flex justify-between'>
              <div>
                <h1 className='text-[6vh] font-sg text-left font-bold flex'>EXECUTION AS <br></br>INITIALLY INTENDED</h1>
                <p className='font-sg'>Elevate your gaming experience with a world-class<br></br>script execution experience.</p>
                <div className='flex mt-10'>
                  <a href='#pricing' className='bg-white my-2 py-2.5 mr-5 text-center transition duration-150 hover:translate-y-1 ease-in-out hover:shadow-2xl hover:shadow-gray-400 px-5 font-semibold text-black p-2 rounded-xl font-sg'>Pricing</a>
                  <a target='_BLANK' href='https://discord.gg/GGnjTSxMh2' className='bg-white my-2 transition duration-150 hover:translate-y-1 ease-in-out hover:shadow-2xl hover:shadow-gray-400 py-2.5 text-center px-5 font-semibold text-black p-2 rounded-xl font-sg'>Join us</a>
                </div>
              </div>
              <div className='bg-red-500 w-[50px] h-[50px]'></div>
            </div>
          </div>
          <div id='features' className='mt-20'>
            <h1 className='text-center text-[5.5vh] font-sg uppercase font-bold'>Features</h1>
            <div className='flex flex-col flex-wrap overflow-hidden'>
              <FeatureCard title='Seamless Execution' description='Our script executor offers a smooth and polished scripting experience that ensures every code you run works without a hitch. Whether you are automating simple tasks or executing complex scripts, with Astralis, every action flows seamlessly, letting you focus on what matters.' />
              <FeatureCard title='Zero Downtime' description='Never miss a moment of action with Astralis unwavering uptime. We pride ourselves on maintaining a highly reliable and robust infrastructure that ensures your script execution is always available. Day or night, our service runs consistently, so you are never left waiting. ' />
              <FeatureCard title='Safe' description='Your safety is our number one priority. Astralis was built from the ground up with state-of-the-art security features, designed to minimize risks and safeguard your Roblox account. Our intelligent detection avoidance algorithms protect you from being flagged in ban waves, reducing the chances of penalties or bans.' />
              <FeatureCard title='24/7 Support' description='We understand that issues can arise at any time, which is why Astralis offers around-the-clock support. Whether you are troubleshooting an issue, need assistance with a script, or simply have a question, our dedicated support team is always ready to help.' />            </div>
          </div>
          <div id='pricing' className='mt-20'>
            <h1 className='text-center text-[5.5vh] font-sg uppercase font-bold'>Pricing</h1>
            <div className='flex flex-wrap justify-center overflow-hidden'>
              <TierCard title='week' price='5.98' description="Great for a quick test drive of all features with no long-term commitment." />
              <TierCard title='month' price='8.98' description='Enjoy full access for a month—perfect for ongoing, flexible use.' />
              <TierCard title='lifetime' price='20.00' description='Enjoy all features with no limits, no subscriptions—just endless access.' />
            </div>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center max-w-[100%] h-[24vh] mt-[5vh] bg-[#222222]'>
        <div className='flex flex-row-reverse grow my-5 w-1/2 bg-transparent'>
          <div className='flex mr-3 ml-3 flex-col bg-transparent'>
            <a className='text-[#4d4d4d] transition hover:text-gray-400 grow-0' target='_BLANK' href='https://discord.gg/GGnjTSxMh2'>Discord</a>
            <a className='text-[#4d4d4d] transition hover:text-gray-400 grow-0' target='_BLANK' href='https://github.com/raycast6000/astralis-web'>Source code</a>
            <a className='text-[#4d4d4d] transition hover:text-gray-400 grow-0' target='_BLANK' href='https://xastral.mysellix.io/'>Store</a>
          </div>
          <div className='grow'>

          </div>
        </div>
        <span className='flex-none m-2 font-sg'>© 2024 Astralis</span>
      </div>
    </>
  )
}

export default App