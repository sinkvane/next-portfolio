import Image from 'next/image';
import gitImage from '@/static/img/git-image.png';
import CodeImage from '@/static/img/code-image.png';

import '@/components/blocks/connectBlock/connectBlock.scss';

export default function contactScreen() {
  return (
    <>
      <section className="connect">

        <div className="connect__left">

          <div className="connect__left--top">

            <h4>Останемся на <span>связи</span>?</h4>

            <span>
              Во мне есть потенциал и желание много работать, чтобы вырасти как специалист, думаю, поэтому Вам стоит обратить своё внимание на моё резюме. Я верю, что наше будущее за молодыми специалистами, их энергией, воображением и мотивацией.
            </span>

          </div> {/* connect__left--top */}

          <div className="connect__left--bottom">

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

            <div className="exp__grid--item5">

              <a href="#" target='_blank'>
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

          </div> {/* connect__left--bottom */}

        </div> {/* connect__left */}

        <div className="connect__right">
          {/* 
          <form className="form">
            <h4>Начать сотрудничество</h4>

            <div className="form__inputs">
              <input type="text" placeholder="Введите ваше имя" className="form__name" />
              <input type="email" placeholder="Введите ваш Email" className="form__email" />
              <textarea type="text" placeholder="Ваше сообщение" className="form__message" />
            </div>

            <button type="submit" className="form__button">
              Отправить
            </button>

          </form> */}

        </div> {/* connect__right */}

      </section > {/* connect */}
    </>
  )
}