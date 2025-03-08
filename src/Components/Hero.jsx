import { Float, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { Suspense, useRef, useState } from 'react'
import GamingRoom from './GamingRoom'
import { useMediaQuery } from 'react-responsive'
import CanvasLoader from './CanvasLoader'
import Target from './Target'
import { Bloom, DepthOfField, EffectComposer, Noise, Vignette } from '@react-three/postprocessing'
import ReactLogo from './ReactLogo'
import Drone from './Drone'
import Cube from './Cube.jsx'
import HeroCamera from './HeroCamera.jsx'
import Butoon from './Butoon.jsx'



const GamingRoomAnimation = () => {
    const isMobile = useMediaQuery(
        {
            maxWidth: 640
        }
    )
    const [a, setA] = useState(-Math.PI / 2)
    // const gammingRoomRef = useRef(null)
    useFrame(({ clock }) => {
        setA(a)

    })
    return (
        <GamingRoom
            position={isMobile ? [0.5, -1, -1] : [0.5, -2, -1]}
            scale={isMobile ? 0.4 : 0.7}
            rotation={[0, a, 0]} />
    )
}

const Hero = () => {
    const isMobile = useMediaQuery(
        {
            maxWidth: 640
        }
    )

    return (
        <section className='min-h-screen w-full flex flex-col relative' id='home'>
            <div className='w-full mx-auto flex  flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-2xl font-medium text-white text-center font-roboto '>Hi, I am Gautam <span className='waving-hand'>👋</span></p>
                <p className='hero_tag text-gray_gradient'>
                    Turning Imagination Into Reality
                </p>
                <div className='w-full h-full inset-0 absolute'>


                    <Canvas className='w-full h-full'>
                        <Suspense fallback={<CanvasLoader />}>
                            {/* <OrbitControls maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 3} enableZoom={false} enableDamping={true} enablePan={false} /> */}
                            <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                            <ambientLight intensity={1} />
                            <directionalLight position={[10, 10, 10]} intensity={0.5} />
                            {/* <GamingRoom position={[0,0,-1]} scale={0.5}  /> */}
                            <HeroCamera isMobile={isMobile}>
                                <GamingRoomAnimation />

                            </HeroCamera>
                            <group>
                                <Target position={isMobile ? [-1.8, -2, 2] : [-5, -4.5, 0]} scale={isMobile ? 0.15 : 0.3} rotation={[0, Math.PI, 0]} />
                                <Float>
                                    <ReactLogo position={isMobile ? [2, 2, 0] : [5, 2.5, 0]} scale={isMobile ? 0.15 : 0.2} />

                                </Float>
                                <Float floatIntensity={1} >
                                    <Drone position={isMobile ? [-2, 2, 0] : [-5, 2, 0]} scale={isMobile ? 0.4 : 0.4} rotation={[0.6, 0.9, 0.3]} />
                                </Float>
                                <Cube position={isMobile ? [1.8, -3, 0] : [5, -4, 0]} scale={isMobile ? 0.3 : 0.5} />

                            </group>
                            <EffectComposer>
                                <DepthOfField focusDistance={0} focalLength={0.2} bokehScale={2} height={400} />
                                <Bloom luminanceThreshold={0.5} luminanceSmoothing={0.5} height={500} />
                                <Noise opacity={0.01} />
                                <Vignette eskil={true} offset={0.3} darkness={1} />
                            </EffectComposer>
                        </Suspense>
                    </Canvas>

                </div>
                <div className='absolute bottom-7 left-0 right-0 z-10 c-space'>
                    <a href="#about" className='w-fit'>
                        <Butoon name="let's work together"  isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Hero