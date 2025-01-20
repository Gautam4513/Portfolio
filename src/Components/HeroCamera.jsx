import { useFrame } from '@react-three/fiber'
import { easing } from 'maath'
import React, { useRef } from 'react'

const HeroCamera = ({children , isMobile}) => {
    const groupRef = useRef(null)
    useFrame((state , delta)=>{
        easing.damp3(state.camera.position,[0,0,10],1,delta)
        if(1){
            easing.dampE(groupRef.current.rotation , [-state.pointer.y/Math.PI,state.pointer.x/Math.PI,0],0.25,delta)
        }
    })
  return (
    <group ref={groupRef}>
        {children}
    </group>
  )
}

export default HeroCamera