import '@/static/styles/reset.scss'
import '@/static/styles/normalize.scss'
import '@/static/styles/fonts.scss'
import '@/static/styles/mixins.scss'
import '@/static/styles/GUI.scss'
import '@/static/styles/variables.scss'

export const metadata = {
  title: 'Никита Sinkvane - Frontend разработчик',
  description: 'Никита Топчеев Портфолио Frontend developer Разработчик',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>
        <div className="wrapper">
          {children}
        </div>
      </body>
    </html>
  )
}
