import * as THREE from 'three';
import { useRef, useState, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Billboard, Text, TrackballControls } from '@react-three/drei';

// Programming words list
const programmingWords = ['JavaScript', 'TypeScript', 'React', 'Python', 'MongoDB', 'MySQL', 'HTML', 'CSS', 'Threejs', 'ReactFiber', 'ReactDrei'];

function Word({ children, ...props }) {
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 3.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false,
  };
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const over = (e) => (e.stopPropagation(), setHovered(true));
  const out = () => setHovered(false);

  // Change the mouse cursor on hover
  useEffect(() => {
    if (hovered) document.body.style.cursor = 'pointer';
    return () => (document.body.style.cursor = 'auto');
  }, [hovered]);

  // Tie component to the render-loop
  useFrame(({ camera }) => {
    ref.current.material.color.lerp(color.set(hovered ? '#5267FF' : '#FF50BC'), 0.1);
  });

  return (
    <Billboard {...props}>
      <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} className="text-sora text-sprinklerpink" {...fontProps} children={children} />
    </Billboard>
  );
}

function Cloud({ count = 4, radius = 20 }) {
  // Create a count x count random words with spherical distribution
  const words = useMemo(() => {
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 1; i < count + 1; i++) {
      for (let j = 0; j < count; j++) {
        const randomWordIndex = Math.floor(Math.random() * programmingWords.length); // Choose a random word from the list
        temp.push([new THREE.Vector3().setFromSpherical(spherical.set(radius, phiSpan * i, thetaSpan * j)), programmingWords[randomWordIndex]]);
      }
    }
    return temp;
  }, [count, radius]);

  return words.map(([pos, word], index) => <Word key={index} position={pos} children={word} />);
}

export default function WordCloud() {
  return (
    <Canvas className="w-full h-auto flex justify-center items-center flex-col gap-6 p-3" dpr={[1, 2]} camera={{ position: [0, 0, 25], fov: 90 }}>
      <fog attach="fog" args={['#5267FF', 0, 50]} />
      <Suspense fallback={null}>
        <group rotation={[20, 10.5, 10]}>
          <Cloud count={8} radius={24} />
        </group>
      </Suspense>
      <TrackballControls />
    </Canvas>
  );
}