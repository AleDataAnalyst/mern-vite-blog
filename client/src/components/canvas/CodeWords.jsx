import React from 'react';
import { useRef, useState, useMemo, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Billboard, Text, TrackballControls } from '@react-three/drei';
import * as THREE from 'three'; // Import THREE.js library

// Assuming you have a CSS file with these color definitions
const sprinklerColors = {
  sprinklerblue: '#5267FF',
  sprinklermint: '#52FFC5',
  sprinklergreen: '#50FF6D',
  sprinklergreenyellow: '#DEFF55',
  sprinklerpink: '#FF50BC',
  sprinklerturquoise: '#4DFFF2',
  sprinkleryellow: '#FFDD4D',
  sprinklerred: '#FF6E52',
  sprinklerorange: '#FF9052',
  sprinklerviolet: '#F64DFF',
};

// Programming words list
const programmingWords = ['JavaScript', 'TypeScript', 'React', 'Python', 'MongoDB', 'MySQL', 'HTML', 'CSS', 'Threejs', 'ReactFiber', 'ReactDrei'];

function Word({ children, position, ...props }) {
  const color = new THREE.Color(); // Initialize color inside the component
  const fontProps = {
    fontSize: 2.5,
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
    if (!color) return; // Exit if color is not defined yet
  
    color.lerp(
      hovered
        ? new THREE.Color(sprinklerColors[Math.floor(Math.random() * Object.keys(sprinklerColors).length)])
        : getColorByWord(children),
      0.1
    );
    props.material.color.copy(color);
  });

  return (
    <Billboard {...props}>
      <Text ref={ref} onPointerOver={over} onPointerOut={out} onClick={() => console.log('clicked')} {...fontProps} className="text-sora text-sprinklerpink" children={children} />
    </Billboard>
  );
}

function getColorByWord(word) {
  const wordColors = {
    JavaScript: new THREE.Color(sprinklerColors.sprinklerblue),
    TypeScript: new THREE.Color(sprinklerColors.sprinklermint),
    React: new THREE.Color(sprinklerColors.sprinklergreen),
    Python: new THREE.Color(sprinklerColors.sprinklergreenyellow),
    ReactFiber: new THREE.Color(sprinklerColors.sprinklerpink),
    ReactDrei: new THREE.Color(sprinklerColors.sprinklerturquoise),
    CSS: new THREE.Color(sprinklerColors.sprinkleryellow),
    MongoDB: new THREE.Color(sprinklerColors.sprinklerred),
    MySQL: new THREE.Color(sprinklerColors.sprinklerorange),
    Threejs: new THREE.Color(sprinklerColors.sprinklerviolet),
  };

  return wordColors[word] || new THREE.Color(sprinklerColors[Math.floor(Math.random() * Object.keys(sprinklerColors).length)]); // Fallback to random sprinkle color if not mapped
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

export default function CodeWords() {
  return (
    <Canvas className="w-full min-h-1/3 flex justify-center items-center flex-col gap-6 p-3" dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 90 }}>
      <fog attach="fog" args={['#202025', 0, 80]} />
      <Suspense fallback={null}>
        <group rotation={[10, 10.5, 10]}>
          <Cloud count={8} radius={20} />
        </group>
      </Suspense>
      <TrackballControls />
    </Canvas>
  )
}

