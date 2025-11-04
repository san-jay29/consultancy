import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, useTexture } from '@react-three/drei';
import './TileVisualizer.css';

// Material variants for different surfaces
const materialVariants = {
  tile: (texture) => <meshStandardMaterial map={texture} roughness={0.45} metalness={0.08} />,
  wall: (texture) => <meshStandardMaterial map={texture} roughness={0.75} metalness={0.04} />,
  wood: () => <meshStandardMaterial color="#8B5A2B" roughness={0.65} metalness={0.15} />,
  metal: () => <meshStandardMaterial color="#B0C4DE" roughness={0.2} metalness={0.8} />,
  fabric: () => <meshStandardMaterial color="#4A4A4A" roughness={0.9} metalness={0.05} />,
  ceramic: () => <meshStandardMaterial color="#F5F5F5" roughness={0.35} metalness={0.05} />,
  glass: () => <meshStandardMaterial color="#C0D8FF" roughness={0.05} metalness={0.9} transparent opacity={0.6} />,
};

function configureTextureRepeat(texture, repeatX = 8, repeatY = 8) {
  texture.wrapS = texture.wrapT = 1000;
  texture.repeat.set(repeatX, repeatY);
}

// Floor component with tile texture
function Floor({ textureUrl }) {
  const texture = useTexture(textureUrl, (error) => {
    console.warn('Floor texture failed to load:', textureUrl, error);
  });
  
  const hasTexture = texture && !texture.error;
  
  if (hasTexture) {
    configureTextureRepeat(texture, 8, 8);
  }

  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]} receiveShadow>
      <planeGeometry args={[20, 20]} />
      {hasTexture ? materialVariants.tile(texture) : <meshStandardMaterial color="#f0f0f0" roughness={0.45} metalness={0.08} />}
    </mesh>
  );
}

// Wall component with tile texture
function Wall({ textureUrl, position, rotation, repeatX = 6, repeatY = 4 }) {
  const texture = useTexture(textureUrl, (error) => {
    console.warn('Wall texture failed to load:', textureUrl, error);
  });
  
  const hasTexture = texture && !texture.error;
  
  if (hasTexture) {
    configureTextureRepeat(texture, repeatX, repeatY);
  }

  return (
    <mesh position={position} rotation={rotation} receiveShadow castShadow>
      <planeGeometry args={[20, 10]} />
      {hasTexture ? materialVariants.wall(texture) : <meshStandardMaterial color="#e8e8e8" roughness={0.75} metalness={0.04} />}
    </mesh>
  );
}

function Sofa() {
  return (
    <group>
      <mesh position={[0, 0.8, 0]} castShadow>
        <boxGeometry args={[4.5, 1.2, 2]} />
        {materialVariants.fabric()}
      </mesh>
      <mesh position={[0, 1.2, -0.3]} castShadow>
        <boxGeometry args={[4.6, 0.6, 0.3]} />
        {materialVariants.fabric()}
      </mesh>
      <mesh position={[-1.9, 1.1, 0]} castShadow>
        <boxGeometry args={[0.4, 0.8, 2]} />
        {materialVariants.fabric()}
      </mesh>
      <mesh position={[1.9, 1.1, 0]} castShadow>
        <boxGeometry args={[0.4, 0.8, 2]} />
        {materialVariants.fabric()}
      </mesh>
      <mesh position={[0, 1.6, 0.7]} castShadow>
        <boxGeometry args={[4.2, 0.3, 1]} />
        {materialVariants.fabric()}
      </mesh>
    </group>
  );
}

function CoffeeTable() {
  return (
    <group>
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[2.5, 0.2, 1.5]} />
        {materialVariants.wood()}
      </mesh>
      <mesh position={[-1.1, 0.25, -0.6]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.5, 32]} />
        {materialVariants.metal()}
      </mesh>
      <mesh position={[1.1, 0.25, -0.6]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.5, 32]} />
        {materialVariants.metal()}
      </mesh>
      <mesh position={[-1.1, 0.25, 0.6]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.5, 32]} />
        {materialVariants.metal()}
      </mesh>
      <mesh position={[1.1, 0.25, 0.6]} castShadow>
        <cylinderGeometry args={[0.08, 0.08, 0.5, 32]} />
        {materialVariants.metal()}
      </mesh>
    </group>
  );
}

function LivingRoom({ textureUrl }) {
  return (
    <group>
      <Floor textureUrl={textureUrl} />
      <Wall textureUrl={textureUrl} position={[0, 5, -10]} rotation={[0, 0, 0]} />
      <Wall textureUrl={textureUrl} position={[-10, 5, 0]} rotation={[0, Math.PI / 2, 0]} />

      <group position={[4, 0, -4]}>
        <Sofa />
      </group>

      <group position={[2, 0, -6]}>
        <CoffeeTable />
      </group>

      <mesh position={[-4, 1.2, -7]} castShadow>
        <boxGeometry args={[1, 2.5, 0.6]} />
        {materialVariants.wood()}
      </mesh>
      <mesh position={[-4, 2.5, -7.3]} castShadow>
        <planeGeometry args={[1.8, 1.5]} />
        {materialVariants.metal()}
      </mesh>
    </group>
  );
}

function UpperCabinet({ position }) {
  return (
    <mesh position={position} castShadow>
      <boxGeometry args={[3, 2, 1]} />
      {materialVariants.wood()}
    </mesh>
  );
}

function BathroomVanity() {
  return (
    <group>
      <mesh position={[0, 2, 0]} castShadow>
        <boxGeometry args={[4, 4, 1.5]} />
        {materialVariants.wood()}
      </mesh>
      <mesh position={[0, 4.2, 0]} castShadow>
        <cylinderGeometry args={[0.8, 0.8, 0.3, 32]} />
        {materialVariants.metal()}
      </mesh>
      <mesh position={[0, 5.8, -0.5]}>
        <planeGeometry args={[3, 3]} />
        {materialVariants.metal()}
      </mesh>
    </group>
  );
}

// Kitchen Scene
function Kitchen({ textureUrl }) {
  const backsplashTexture = textureUrl;
  // Use a reliable fallback counter texture
  const counterTexture = "https://picsum.photos/seed/counter1/800/400";
  
  const counterSurface = useTexture(counterTexture, (error) => {
    console.warn('Kitchen counter texture failed to load, using fallback');
  });
  
  const hasCounterTexture = counterSurface && !counterSurface.error;
  
  if (hasCounterTexture) {
    configureTextureRepeat(counterSurface, 3, 1);
  }

  return (
    <group>
      <Floor textureUrl={textureUrl} />
      <Wall textureUrl={backsplashTexture} position={[0, 5, -10]} rotation={[0, 0, 0]} repeatX={5} repeatY={2} />

      <group position={[0, 0, -8]}>
        <mesh position={[0, 2, 0]} castShadow>
          <boxGeometry args={[12, 4, 2]} />
          {materialVariants.wood()}
        </mesh>
        <mesh position={[0, 4.1, 0]} castShadow>
          <boxGeometry args={[12, 0.2, 2.2]} />
          {hasCounterTexture ? 
            <meshStandardMaterial map={counterSurface} roughness={0.6} metalness={0.15} /> :
            <meshStandardMaterial color="#d4a574" roughness={0.6} metalness={0.15} />
          }
        </mesh>
      </group>

      <UpperCabinet position={[-4, 7, -9.5]} />
      <UpperCabinet position={[4, 7, -9.5]} />

      <mesh position={[0, 6, -7]} castShadow>
        <boxGeometry args={[5, 0.2, 5]} />
        {materialVariants.metal()}
      </mesh>

      <mesh position={[-6, 1.2, -7]} castShadow>
        <boxGeometry args={[1, 0.2, 1]} />
        {materialVariants.metal()}
      </mesh>
      <mesh position={[6, 1.2, -7]} castShadow>
        <boxGeometry args={[1, 0.2, 1]} />
        {materialVariants.metal()}
      </mesh>
    </group>
  );
}

// Bathroom Scene
function ShowerEnclosure() {
  return (
    <group>
      <mesh position={[0, 1.5, 0]}>
        <boxGeometry args={[3, 3, 6]} />
        {materialVariants.glass()}
      </mesh>
      <mesh position={[0, 0.05, 2.9]}>
        <boxGeometry args={[3, 0.1, 3]} />
        {materialVariants.ceramic()}
      </mesh>
    </group>
  );
}

function Bathroom({ textureUrl }) {
  return (
    <group>
      <Floor textureUrl={textureUrl} />
      <Wall textureUrl={textureUrl} position={[0, 5, -10]} rotation={[0, 0, 0]} repeatX={5} repeatY={3} />
      <Wall textureUrl={textureUrl} position={[-10, 5, 0]} rotation={[0, Math.PI / 2, 0]} repeatX={4} repeatY={3} />

      <group position={[-6, 1.5, -7]}>
        <ShowerEnclosure />
      </group>

      <group position={[4, 0, -8]}>
        <BathroomVanity />
      </group>

      <mesh position={[4, 7, -9.4]}>
        <planeGeometry args={[3, 3]} />
        {materialVariants.metal()}
      </mesh>

      <mesh position={[-2, 1, -9.5]} castShadow>
        <cylinderGeometry args={[0.3, 0.3, 1, 32]} />
        {materialVariants.metal()}
      </mesh>
      <mesh position={[-2, 2, -9.2]} castShadow>
        <boxGeometry args={[0.2, 0.2, 2]} />
        {materialVariants.metal()}
      </mesh>
    </group>
  );
}

// Main Scene Component
function Scene({ roomType, textureUrl }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[8, 8, 15]} />
      <OrbitControls 
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
        minDistance={5}
        maxDistance={30}
        maxPolarAngle={Math.PI / 2}
      />
      
      {/* Lighting */}
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={1} 
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <pointLight position={[-10, 10, -10]} intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.3} />
      
      {/* Room based on selection */}
      {roomType === 'living-room' && <LivingRoom textureUrl={textureUrl} />}
      {roomType === 'kitchen' && <Kitchen textureUrl={textureUrl} />}
      {roomType === 'bathroom' && <Bathroom textureUrl={textureUrl} />}
    </>
  );
}

// Loading fallback with better visual feedback
function LoadingFallback() {
  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#d4a574" emissive="#1a2332" emissiveIntensity={0.1} />
    </mesh>
  );
}

// Main Visualizer Component
function TileVisualizer({ selectedTile, roomType }) {
  // Use the selected tile's texture URL, or fall back to a reliable default
  const textureUrl = selectedTile?.textureUrl || selectedTile?.imageUrl || 'https://picsum.photos/seed/default-tile/400/400';

  console.log('TileVisualizer - Room:', roomType, 'Selected Tile:', selectedTile?.name, 'Texture:', textureUrl);

  return (
    <div className="tile-visualizer">
      <Canvas shadows onError={(error) => console.warn('Canvas error:', error)}>
        <Suspense fallback={<LoadingFallback />}>
          <Scene roomType={roomType} textureUrl={textureUrl} />
        </Suspense>
      </Canvas>

      <div className="visualizer-controls">
        <p>🖱️ Drag to rotate • Scroll to zoom • Right-click to pan</p>
        {selectedTile && (
          <div className="selected-tile-info">
            <p>📋 Currently Viewing: <strong>{selectedTile.name}</strong></p>
          </div>
        )}
      </div>
    </div>
  );
}


export default TileVisualizer;