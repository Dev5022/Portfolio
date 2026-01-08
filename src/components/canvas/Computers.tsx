import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Computer = () => {
    return (
        <Sphere args={[1, 100, 200]} scale={2.0}>
            <MeshDistortMaterial
                color="#915eff"
                attach="material"
                distort={0.5}
                speed={2}
            />
        </Sphere>
    );
};

const ComputersCanvas = () => {
    return (
        <Canvas
            frameloop='always'
            shadows
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computer />
                <ambientLight intensity={0.5} />
                <directionalLight position={[-2, 5, 2]} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
