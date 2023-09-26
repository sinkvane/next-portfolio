import Link from 'next/link'

import '@/components/screens/contactScreen/contactScreen.scss'

export default function contactScreen() {
  return (
    <>
      <div className="contact">

        <h2 className="contact__title">contact</h2>

        <section className="contact__section">

          <div className="contact__socials">

            <pre className='socials__code'>

              <span className='white'>
                &lt;
                <span className='purple'>contact</span>
                &gt;
              </span>

              <span className='white'>
                &lt;

                <span>

                  <span className='purple'>a </span>
                  <span className='green'>href</span>
                  <span className='white'>=</span>
                  <span className='green'>”<a
                    href="www.google.com"
                    target="_blank"
                  >www.nikitasync</a>”</span>
                  <span className='white'>
                    <span>
                      &gt;oh, you already here!&lt;/
                    </span>
                  </span>
                  <span className='purple'>a</span>
                </span>

                &gt;
              </span>

              <span className='white'>
                &lt;

                <span>

                  <span className='purple'>a </span>
                  <span className='green'>href</span>
                  <span className='white'>=</span>
                  <span className='green'>”<Link
                    href="github.com/sinkvane"
                    target="_blank"
                    rel="noopener noreferrer"
                  >github.com/sinkvane</Link>”</span>
                  <span className='white'>
                    <span>&gt;github&lt;/</span>
                  </span>
                  <span className='purple'>a</span>
                </span>

                &gt;
              </span>

              <span className='white'>
                &lt;

                <span>

                  <span className='purple'>a </span>
                  <span className='green'>href</span>
                  <span className='white'>=</span>
                  <span className='green'>”<Link
                    href="t.me/nikitasinkvane"
                    target="_blank"
                  >t.me/nikitasinkvane</Link>”</span>
                  <span className='white'>
                    <span>
                      &gt;telegram&lt;/
                    </span>
                  </span>
                  <span className='purple'>a</span>
                </span>

                &gt;
              </span>

              <span className='white'>
                &lt;

                <span>

                  <span className='purple'>a </span>
                  <span className='green'>href</span>
                  <span className='white'>=</span>
                  <span className='green'>”<Link
                    href="mailto: sinkvadev@gmail.com"
                    target="_blank"
                  >mailto: sinkvadev@gmail.com</Link>”</span>
                  <span className='white'>
                    <span>&gt;email&lt;/</span>
                  </span>
                  <span className='purple'>a</span>
                </span>

                &gt;
              </span>


              <span className='white'>
                &lt;/
                <span className='purple'>contact</span>
                &gt;
              </span>

            </pre> {/* socials__code */}

          </div> {/* contact__socials */}

          <div className="contact__info">

            <p className="contact__info--text">
              Готов сотрудничать во Frontend разработке . Мой опыт и навыки пригодятся вашей компании. Вместе мы создадим качественные веб-приложения с уникальным дизайном и отзывчивым интерфейсом. Я готов работать в команде и делиться идеями для успешного достижения ваших целей.
            </p>

          </div> {/* contact__info */}

        </section > {/* contact__section */}

      </div > {/* contact */}
    </>
  )
}