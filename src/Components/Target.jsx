import { useGSAP } from '@gsap/react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import React, { useRef } from 'react'

const Target = (props) => {
    const lightRef = useRef(null)
    const targetRef = useRef(null)
    const { scene } = useGLTF('./robot.glb')
    useGSAP(()=>{
        gsap.to(targetRef.current.position,{
            y:targetRef.current.position.y+0.5,
            duration:3.5,
            repeat:-1,
            yoyo:true,
            ease:'power1.inOut'
        })
        gsap.to(targetRef.current.rotation,{
            y:targetRef.current.rotation.y+(Math.PI*2),
            duration:5,
            repeat:-1,
            // yoyo:true,
            ease:'none'
        })
    })
    
    useFrame((state, delta) => {
        const t = (1 + Math.sin(state.clock.elapsedTime * 2)) / 2
        // stripe.current.color.setRGB(2 + t * 20, 2, 20 + t * 50)
        // easing.dampE(head.current.rotation, [0, state.pointer.x * (state.camera.position.z > 1 ? 1 : -1), 0], 0.4, delta)
        lightRef.current.intensity = 0.5 + t * 0.2
      })
    return (
        <mesh {...props} ref={targetRef}>
            <primitive object={scene} />
            <pointLight ref={lightRef}  intensity={0.05} color={[10, 2, 5]} distance={1} />
        </mesh>
    )
}

export default Target