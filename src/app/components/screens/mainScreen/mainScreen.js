"use client";

import React, { Suspense } from 'react';
import Spline from "@splinetool/react-spline";

import '@/components/screens/mainScreen/mainScreen.scss';
import '@/static/styles/variables.scss'



export default function MainScreen() {
  const Spline = React.lazy(() => import('@splinetool/react-spline'));
  return (
    <>
      <main>

        <div className="main__wrapper">

          <div className="main__left">


            <h3 className="main__subtitle">Привет! Я <span>Н</span>икита Топчеев</h3>

            <h1 className="main__title">Front</h1>

            <h2 className="main__title">end dev</h2>

            <p className="main__text">
              Мой опыт  работы <span>4 года</span>. Навыки в веб-сфере —  вёрстка и оптимизация сайта, разработка и адаптация веб-дизайна, также ведение проектов
            </p>

          </div> {/* main__left */}

          <div className="main__right">

            <Suspense fallback={<div>Loading...</div>}>
              <Spline scene="https://prod.spline.design/HsV9dlPA0PSuq4Hq/scene.splinecode" />
            </Suspense>

          </div> {/* main__right */}

        </div>

      </main>
    </>
  )
}