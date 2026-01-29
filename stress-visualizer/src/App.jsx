import StressDashboard from "./StressDashboard";
import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

export default function App() {
  return (
    <>
      <Canvas className="bg-canvas">
        <Stars radius={100} depth={50} count={5000} factor={4} />
      </Canvas>

      <StressDashboard />
    </>
  );
}
