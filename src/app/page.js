//components
import Header from '@/components/ui/header/header';
import MainScreen from '@/components/screens/mainScreen/mainScreen';
import ExperienceScreen from '@/components/screens/experience/experienceScreen';
import ContactBlock from '@/components/blocks/contactBlock/contactBlock';
import ConnectBlock from '@/components/blocks/connectBlock/connectBlock';

export default function Home() {
  return (
    <>
      <Header />
      <MainScreen />
      <ExperienceScreen />
      <ContactBlock />
      <ConnectBlock />
    </>
  )
}
