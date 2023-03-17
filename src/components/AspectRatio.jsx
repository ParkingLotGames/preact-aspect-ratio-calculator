// src/components/AspectRatio.jsx
import { useState, useEffect } from 'react';

function AspectRatio() {
  const [width, setWidth] = useState(1440);
  const [height, setHeight] = useState(720);
  const [ratio, setRatio] = useState('2:1');

  useEffect(() => {
    const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
    const calculateRatio = (w, h) => {
      const divisor = gcd(w, h);
      return `${w / divisor}:${h / divisor}`;
    };

    setRatio(calculateRatio(width, height));
  }, [width, height]);

  const handleWidthChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setWidth(value);
  };

  const handleHeightChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setHeight(value);
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="space-x-4">
        <input
          type="number"
          value={width}
          onChange={handleWidthChange}
          className="border-2 border-gray-300 rounded p-2"
        />
        <input
          type="number"
          value={height}
          onChange={handleHeightChange}
          className="border-2 border-gray-300 rounded p-2"
        />
      </div>
      <p className="text-xl">Aspect ratio: {ratio}</p>
    </div>
  );
}

export default AspectRatio;
