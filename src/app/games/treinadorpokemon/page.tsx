'use client';

import Image from 'next/image';
import map from './Images/map.png';
import { nodes } from './nodes';

export default function Board() {
  function getStyle(type: string) {
    switch (type) {
      case 'city':
        return 'w-[4.85%] h-[5.15%] bg-yellow-400 rounded-md';
      case 'capture':
        return 'w-[3.15%] h-[5.67%] bg-red-500 rounded-full';
      case 'move':
        return 'w-[2%] h-[3.6%] bg-gray-400 rounded-full';
      case 'battle':
        return 'w-6 h-6 bg-blue-500';
      case 'league':
        return 'w-8 h-8 bg-purple-600';
      default:
        return 'w-4 h-4 bg-white';
    }
  }

  return (
    <div className="relative w-fit">
      <Image src={map} alt="Map" />

      {nodes.map((node) => (
        <div
          onClick={() => console.log(node.id)}
          key={node.id}
          className={`absolute ${getStyle(node.type)}`}
          style={{
            top: `${node.y}%`,
            left: `${node.x}%`,
          }}
        />
      ))}
    </div>
  );
}
