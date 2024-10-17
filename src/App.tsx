import './App.css'

function FeatureCard(props: { title: string, description: string }) {
  return (
    <div className='border-4 m-2 rounded-xl'>
      <div className='bg-transparent'>
        <h3 className='bg-transparent text-center'>{props.title}</h3>
      </div>
      <p className='text-center bg-transparent'>{props.description}</p>
    </div>
  )
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

      <div className='flex w-screen justify-center'>
        <div className='max-w-5xl'>
          <div>
            <h1 className='text-[70px] font-sg text-center'>Astralis</h1>
            <h3 className='text-center'>If you can make her laugh and giggle you can make them cheeks clap and jiggle.</h3>
          </div>

          <div className='flex'>
            <FeatureCard title='Seamless Execution' description='lorem ipsum dolor sit amet r bec an awdp' />
            <FeatureCard title='Zero Downtime' description='lorem ipsum dolor sit amet r bec an awdp' />
            <FeatureCard title='24/7 Support' description='lorem ipsum dolor sit amet r bec an awdp' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App