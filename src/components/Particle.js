import React from 'react'
import Particles from 'react-particles-js'

function ParticleJs() {
    return (
        <Particles
        params={{
          "particles": {
              "number": {
                  "value": 120
              },
              "size": {
                  "value": 2
              }
          },
          "interactivity": {
              "events": {
                  "onhover": {
                      "enable": true,
                      "mode": "repulse"
                  }
              }
          }
      }}
      style={{
        position: 'absolute',
        zIndex: -1,
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        height: '100vh'
      }} />
    )
}

export default ParticleJs
