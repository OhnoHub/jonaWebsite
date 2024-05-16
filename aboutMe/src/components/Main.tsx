import { FaLinkedin } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-[100%] object-cover scale-x-[-1]' src="img\IMG_20240130_230720_214~3.jpg" alt="Schwarz-Weiß Foto des Entwicklers" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                <h1 className='sm:text-5xl text-4xl font-bold text-gray-800'>Hi <br/> I'm Christoph Jendrolak</h1>
                <h2>
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'I have teaching skills',
        1000, // wait 1s before replacing 
        'I make Websites',
        1000,
        'I am not a Robot',
        1000,
        'I am a Developer',
        1000,
        'I am open to work',
        1000,
        'Feel free to contact me',
        4000 //wait 4 seconds
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
                </h2>

                <div> 
                    <FaLinkedin className='cursor-pointer' size={20}/> 
                </div>
            </div>
            </div> 
    </div>
  )
}

export default Main