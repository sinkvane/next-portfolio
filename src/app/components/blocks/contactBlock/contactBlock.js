
import '@/components/blocks/contactBlock/contactBlock.scss'

export default function contactScreen() {
  return (
    <>
      <section className="contact">

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
                  <span className='green'>”
                    <a
                      href="http://nikitasync.ru/"
                      target="_blank"
                    >www.nikitasync</a>
                    ”</span>
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
                  <span className='green'>”<a
                    href="https://github.com/sinkvane"
                    target="_blank"
                  >github.com/sinkvane</a>”</span>
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
                  <span className='green'>”<a
                    href="https://t.me/nikitasinkvane"
                    target="_blank"
                  >t.me/nikitasinkvane</a>”</span>
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
                  <span className='green'>”<a
                    href="mailto: sinkvadev@gmail.com"
                    target="_blank"
                  >mailto: sinkvadev@gmail.com</a>”</span>
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
              Меня вдохновляет <span>Frontend</span> и сфера <span>WEB-разработки</span>, именно поэтому могу заявить, что горю своим делом. Я быстро учусь и искренне радуюсь возможности обучиться чему-то новому, чтобы оперативно использовать в работе. Можно сказать, что мой девиз: &laquo;<span>Буду пробовать теорию, пока не получится на практике</span>&raquo;.

            </p>

          </div> {/* contact__info */}

        </section > {/* contact__section */}

      </section > {/* contact */}
    </>
  )
}