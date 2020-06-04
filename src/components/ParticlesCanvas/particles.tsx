import React, { createRef } from 'react';

import { particle } from './interfaces';
import { rand } from '../../utils/randomNumber';

class ParticleComponent extends React.Component {
  canvasRef: any = createRef();

  componentDidMount() {

    // while (true) {
    //   if (canvasRef.current.width) break;
    //   await sleep(1000);

    // }

    const ctx = this.canvasRef.current.getContext('2d');
    this.canvasRef.current.width = window.innerWidth;
    this.canvasRef.current.height = window.innerHeight;

    let particlesArray: any;

    window.addEventListener('resize', (e) => {
      if (this.canvasRef.current) {
        this.canvasRef.current.width = window.innerWidth;
        this.canvasRef.current.height = window.innerHeight;
        particlesArray.forEach((particle: any) => {

          if (particle.x > this.canvasRef.current.width) {
            particle.x -= 100;
          }
          if (particle.y > this.canvasRef.current.height) {
            particle.y -= 100;
          }

        })
      };
    });

    // window.addEventListener('scroll', (e) => {
    //   this.canvasRef.current.width = window.innerWidth;
    //   this.canvasRef.current.height = window.innerHeight;
    //   if (window.scrollY >= 10) {
    //     this.canvasRef.current.style.top = "90px"
    //     this.canvasRef.current.height = window.innerHeight - 80;
    //     particlesArray.forEach((particle: any) => {
    //       if (particle.y > 180) {
    //         particle.y = 50;
    //       }
    //     })
    //   }
    // });

    class Particle implements particle {
      x: any;
      y: any;
      directionX: any;
      directionY: any;
      size: any;
      color: string;
      innerHeightArr: Array<any> = [];

      constructor(
        x: number,
        y: number,
        directionX: number,
        directionY: number,
        size: number,
        color: string
      ) {
        this.x = x - 10;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.size, this.size);
        ctx.fillStyle = "silver";
        ctx.fill();
      }

      update(canvasRef: any) {

        if (canvasRef.current) {

          if (this.x > canvasRef.current.width - 10 || this.x < 0) {
            this.directionX = -this.directionX;

            if (this.x > canvasRef.current.width - 10) {
              this.x -= 2;
            }
            else {
              this.x += 2;
            }
          }
          if (this.y > canvasRef.current.height - 10 || this.y < 0) {
            this.directionY = -this.directionY;

            if (this.y > canvasRef.current.height - 10) {
              this.y -= 2;
            }
            else {
              this.y += 2;
            }
          }

          this.x += this.directionX;
          this.y += this.directionY;
          this.draw();
        }
      }
    }

    const init = () => {
      particlesArray = [];

      let numberOfParticles = 20;
      for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 4) + 2;
        let x = (Math.random() * ((innerWidth - 10 - size * 2) - (size * 2)) + size * 2);
        let y = (Math.random() * ((innerHeight - 10 - size * 2) - (size * 2)) + size * 2);
        let directionX = rand();
        let directionY = rand();
        let color = "silver";

        particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
      }
    }

    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, innerWidth, innerHeight);

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update(this.canvasRef);
      }

      connect();
    }


    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let distance = (Math.pow((particlesArray[a].x - particlesArray[b].x), 2)
            + Math.pow((particlesArray[a].y - particlesArray[b].y), 2))
          let fixGoto = 0, fixLineTo = 0;
          let aSize = Math.round(particlesArray[a].size);
          let bSize = Math.round(particlesArray[b].size);

          if (aSize === 2) fixGoto = 1;
          if (aSize === 3) fixGoto = 1;
          if (aSize === 4) fixGoto = 2;
          if (aSize === 5) fixGoto = 2;
          if (aSize === 6) fixGoto = 2;

          if (bSize === 2) fixLineTo = 1;
          if (bSize === 3) fixLineTo = 1;
          if (bSize === 4) fixLineTo = 2;
          if (bSize === 5) fixLineTo = 2;
          if (bSize === 6) fixLineTo = 2;


          if (distance < Math.pow(2, 5)) ctx.lineWidth = 0.01;
          if (distance >= Math.pow(2, 5) && distance < Math.pow(2, 10)) ctx.lineWidth = 0.25;
          if (distance >= Math.pow(2, 10) && distance < Math.pow(2, 15)) ctx.lineWidth = 0.3;
          if (distance < Math.pow(2, 15)) {
            ctx.strokeStyle = "white";
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x + fixGoto, particlesArray[a].y + fixGoto);
            ctx.lineTo(particlesArray[b].x + fixLineTo, particlesArray[b].y + fixLineTo);
            ctx.stroke();
          }
        }
      }
    }

    init();
    animate();

  }


  render() {
    return (
      <canvas
        ref={this.canvasRef}
        style={{
          "position": "fixed",
          "top": "0",
          "width": "100%",
          "height": "100%",
          "zIndex": -1
        }}
      ></canvas>
    )
  }
}

export default ParticleComponent;
