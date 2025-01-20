import { Canvas } from '@react-three/fiber'
import React, { Suspense, useState } from 'react'
import { learningExperiences } from '../Context'
import { div } from 'three/tsl'
import { OrbitControls } from '@react-three/drei'
import CanvasLoader from './CanvasLoader'
import Developer from './Developer'

const Experience = () => {
    const [animationName, setAnimationName] = useState("idle")
    return (
        <section className='c-space my-20'>
            <div className='w-full text-white-600'>
                <h3 className='head-text'>My Learning Experience</h3>
                <div className='work-container'>
                    <div className='work-canvas'>
                        <Canvas>
                            <ambientLight intensity={7} />
                            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                            <directionalLight position={[10, 10, 10]} intensity={1} />
                            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI} />
                            <Suspense fallback={<CanvasLoader />}>
                                <Developer scale={3} rotation={[0.5,0,0]}  position={[0,-3,-1]} animationName={animationName}/>
                            </Suspense>
                        </Canvas>

                    </div>
                    <div className='work-content'>
                        <div className='sm:py-10 py-5 sm:px-5 px-2.5'>
                            {learningExperiences.map(({ id, name, from, duration, title, icon, animation }) => (
                                <div key={id} className='work-content_container group'
                                onClick={()=>{
                                    setAnimationName(animation)
                                }}
                                onPointerOver={()=>{
                                    setAnimationName(animation)
                                }}
                                onPointerOut={()=>{
                                    setAnimationName("idle")
                                }}
                                >
                                    <div className='flex flex-col h-full sm:w-32 justify-start items-center py-2'>
                                        <div className='work-content_logo'>
                                            <img src={icon} alt="logo" className='w-full h-full' />

                                        </div>
                                        <div className='work-content_bar'></div>

                                    </div>
                                    <div className='sm:p-5 px-2.5 py-5'>
                                        <p className='font-bold text-white-800'>
                                            {name}
                                        </p>
                                        <p className='text-sm mb-5'>
                                            {from} -- {duration}
                                        </p>
                                        <p className='group-hover:text-white  transition  ease-in-out duration-500'>
                                            {title}
                                        </p>

                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience