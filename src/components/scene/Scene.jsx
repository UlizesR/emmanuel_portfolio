import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useThree } from '@react-three/fiber'
import React, { useLayoutEffect, Suspense, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/src/all'

import { Room } from './Record_room'

gsap.registerPlugin(ScrollTrigger)

const Scene = () => {

    // const viewport = useThree((state) => state.viewport)
    // const aspect = viewport.width / viewport.height
    // useLayoutEffect(() => {
    //   cameraRef.current.aspect = viewport.width / viewport.height
    //   cameraRef.current.updateProjectionMatrix()
    // }, [viewport])
    

    return (
        <div className='w-screen h-screen fixed top-0 bg-transparent' id='room'>
            <Canvas
                resize={{ 
                    polyfill: false,
                    scroll: false,
                }}
                shadows={'soft'}
                // orthographic 
                camera={{ 
                    zoom: 6,
                    position: [0, 8, 15],
                }}
            >
                <OrbitControls 
                    makeDefault
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}

                />
                <ambientLight 
                    intensity={1}
                    color={'#ffffff'}
                />
                <directionalLight 
                    position={[10, 10, 20]} 
                    color={'#f000ff'}
                    intensity={3} 
                    castShadow    
                    shadow-mapSize={[2048, 2048]}
                    shadow-camera-far={100}
                />
                {/* <Environment preset={'sunset'} /> */}
                < Suspense fallback={null} >
                    
                    <mesh rotation={[-Math.PI * 0.5, 0, 0]} receiveShadow>
                        <planeGeometry args={[100, 100]} />
                        <meshStandardMaterial color={'#000000'} />
                    </mesh>
                    <Room 
                        position={[1.25,0,1.5]}
                        scale={0.5}
                    />
                </Suspense>

                {/* <axesHelper args={[10]} />
                <gridHelper args={[20, 20, 0xff0000, 'teal']} rotation-y={Math.PI / 2} /> */}

                <OrbitControls 
                    enablePan={true}
                    enableZoom={false}
                />

            </Canvas>
        </div>
    )
}

export default Scene