import React from 'react'
import { TypeAnimation } from 'react-type-animation'

const Main = () => {
  return (
    <div id='main'>
        <img className='w-full h-[100%] object-cover scale-x-[-1]' src="img\IMG_20240130_230720_214~3.jpg" alt="Schwarz-Weiß Foto des Entwicklers" />
        <div className='w-full h-screen absolute top-0 left-0 bg-white/50'>
            <div>
                <h1>Hi <br/> I'm Christoph Jendrolak</h1>
                <h2>I'm a 
                <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'We produce food for Mice',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'We produce food for Hamsters',
        1000,
        'We produce food for Guinea Pigs',
        1000,
        'We produce food for Chinchillas',
        1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
                </h2>
            </div>
            </div> 
    </div>
  )
}

export default Main