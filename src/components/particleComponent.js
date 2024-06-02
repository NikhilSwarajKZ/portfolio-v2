import React from 'react';
import Particles from 'react-tsparticles';

const ParticleComponent = () => {
  return (
    <div className={'relative col-span-2'}>
      <Particles
        className={'absolute h-screen pl-3'}
        options={
          {
            fullScreen: false,
            particles: {
              color: {
                value: '#ff3f83',
              },
              links: {
                distance: 100,
                enable: true,
                color: '#ff3f83',
              },
              move: {
                enable: true,
              },
              size: {
                value: 3,
              },
              shape: {
                type: 'circle',
              },
              number: {
                value: 100,
              },
            },
          }
        }
      />
    </div>
  );
};

export default ParticleComponent;
