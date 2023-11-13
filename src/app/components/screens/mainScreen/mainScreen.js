import Image from "next/image";

import '@/components/screens/mainScreen/mainScreen.scss';
import '@/static/styles/variables.scss'

import myPhoto from '@/static/img/my-photo.png';

export default function MainScreen() {
  return (
    <>
      <main>

        <div className="triangle"></div>

        <div className="main__inner">

          <div className="main__inner--left">


            <h3 className="main__inner--subtitle">Привет! Я <span>Н</span>икита Топчеев</h3>

            <h1 className="main__inner--title">Front</h1>

            <h2 className="main__inner--title">end dev</h2>

            <p className="main__inner--text">
              Мой опыт  работы <span>2 года</span>. Навыки в веб-сфере —  вёрстка и оптимизация сайта, разработка и адаптация веб-дизайна, а также ведение проектов
            </p>

          </div> {/* main__inner--left */}

          <div className="main__inner--right">

            <Image
              src={myPhoto}
              width={682}
              height={723}
              alt="Photo of the author"
            />


          </div> {/* main__inner--right */}

        </div> {/* main__inner */}

      </main>
    </>
  )
}