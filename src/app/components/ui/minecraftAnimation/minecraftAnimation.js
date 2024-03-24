'use client'

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './minecraftAnimation.module.scss';
import expCircle from '@/static/img/minecraft_anim/experience_orb.webp';

export default function Animation() {
  const circleRef = useRef(null);
  const greyBarRef = useRef(null);
  const greenBarRef = useRef(null);
  const containerRef = useRef(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animationStarted) {
        setAnimationStarted(true);
        const interval = setInterval(() => {
          const circleLeft = parseInt(circleRef.current.style.left, 10) || 0;
          if (circleLeft >= 100) {
            clearInterval(interval);
          } else {
            const newLeft = circleLeft + 1;
            circleRef.current.style.left = `${newLeft}%`;
            greenBarRef.current.style.width = `${newLeft}%`;
          }
        }, 30);

        setTimeout(() => {
          greyBarRef.current.style.transition = 'width 3s linear';
          greyBarRef.current.style.width = '0';
        }, 3000);
      }
    }, { threshold: 0.1 });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className={styles.container} ref={containerRef}>
      <div className={styles.greyBar} ref={greyBarRef}></div>
      <div className={styles.greenBar} ref={greenBarRef}></div>
      <Image src={expCircle} alt="Circle" width={50} height={50} ref={circleRef} className={styles.circle} />
    </div>
  );
}
