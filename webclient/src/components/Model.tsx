import { useLoader } from '@react-three/fiber'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { Preload } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

export const Model = () => {
    const fbx = useLoader(FBXLoader, "/low_poly_tree.fbx");
    return (
            <primitive object={fbx} />
    )
}

const TreeScene = () => {
    return (
        <>
        <div >
          <Canvas
            camera={{
              position: [0, 0, 150]
            }}
          >
            <ambientLight intensity={1} />
            <directionalLight position={[2, 2, 5]}/>
            <Suspense fallback={null}>
               <Model />
               <Preload all/>
            </Suspense>
          </Canvas>
        </div></>
      );
}

export default TreeScene