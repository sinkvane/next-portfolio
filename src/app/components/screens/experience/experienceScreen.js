import Image from 'next/image';

import '@/components/screens/experience/experienceScreen.scss';

import gitImage from '@/static/img/git-image.png';
import syncUpImage from '@/static/img/syncup-image.png';
import trainctaftImage from '@/static/img/traincraft-image.png';
import rjdImage from '@/static/img/rjd-image.png';
import syncQrImage from '@/static/img/syncqr-image.png';
import KordaImage from '@/static/img/korda-image.png';
import CodeImage from '@/static/img/code-image.png';
import ShareImage from '@/static/img/share-image.png';

export default function ExperienceScreen() {
  return (
    <>
      <section className="exp">

        <div className="exp__header">

          <div className="exp__header--anim">
            Анимация
          </div> {/* exp__header--anim */}

          <h2 className="exp__header--title">
            EXPERIENCE
          </h2>

        </div> {/* exp__header */}

        <div className="exp__grid">

          <div className="exp__grid--item">

            <a href="#" target="_blank">
              <div className="exp__grid--title">
                <span className="grid__item--text">Про</span>
                <span className="stroke grid__item--text ">екты</span>
              </div>
            </a>

            <Image
              src={CodeImage}
              width={'100%'}
              height={'100%'}
            />

          </div> {/* exp__grid--item */}

          <div className="exp__grid--item2">


            <a href="#" target="_blank">
              <Image
                src={KordaImage}
                width={'100%'}
                height={'100%'}
              />
            </a>

          </div> {/* exp__grid--item2 */}

          <div className="exp__grid--item3">

            <a href="#" target="_blank">
              <Image
                src={syncQrImage}
                width={'100%'}
                height={'100%'}
              />
            </a>

          </div> {/* exp__grid--item3 */}

          <div className="exp__grid--item4">

            <a href="#" target="_blank">
              <Image
                src={rjdImage}
                width={'100%'}
                height={'100%'}
              />
            </a>

          </div> {/* exp__grid--item4 */}

          <div className="exp__grid--item5">

            <a href="#" target="_blank">
              <div className="exp__grid--title">
                <span className="stroke grid__item--text">git</span>
              </div>
            </a>

            <Image
              src={gitImage}
              width={'100%'}
              height={'100%'}
            />

          </div> {/* exp__grid--item5 */}

          <div className="exp__grid--item6">

            <a href="#" target="_blank">
              <Image
                src={syncUpImage}
                width={'100%'}
                height={'100%'}
              />
            </a>

          </div> {/* exp__grid--item6 */}

          <div className="exp__grid--item7">

            <a href="#" target="_blank">
              <div className="exp__grid--title">
                <span className=" grid__item--text">кон</span>
                <span className="stroke grid__item--text ">такты</span>
              </div> {/* exp__grid--title */}
            </a>

            <Image
              src={ShareImage}
              width={'100%'}
              height={'100%'}
            />

          </div> {/* exp__grid--item7 */}

          <div className="exp__grid--item8">

            <a href="#" target="_blank">
              <Image
                src={trainctaftImage}
                width={'100%'}
                height={'100%'}
              />
            </a>

          </div> {/* exp__grid--item8 */}

        </div> {/* exp__grid */}

      </section> {/* exp */}
    </>
  )
}