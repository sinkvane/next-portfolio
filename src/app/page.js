//components
import Header from '@/components/ui/header/header';
import MainScreen from '@/components/screens/mainScreen/mainScreen';
import ContactScreen from '@/components/screens/contactScreen/contactScreen';
import Experience from '@/components/screens/experience/experience';

export default function Home() {
  return (
    <>
      <Header />
      <MainScreen />
      <Experience />
      <ContactScreen />
    </>
  )
}
