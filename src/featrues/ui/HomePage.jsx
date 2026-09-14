import React from 'react'
import Header from './Components/header/Header'
import Banner from './Components/bannerMain/Banner'
import OurClients from './Components/ourClients/OurClients'
import {aboutUsSections} from '../data/aboutUsSections'
import AboutUsFirstSection from './Components/AboutUsFirstSection/AboutUsFirstSection'
import HelpingLocal from './Components/HelpingLocal/HelpingLocal'
const HomePage = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <OurClients/>
    <AboutUsFirstSection
    title={aboutUsSections.section1.title}
    description={aboutUsSections.section1.description}
    image={aboutUsSections.section1.image}
    btnText={aboutUsSections.section1.btnText}
    />
    <HelpingLocal/>
    <AboutUsFirstSection
    title={aboutUsSections.section2.title}
    description={aboutUsSections.section2.description}
    image={aboutUsSections.section2.image}
    btnText={aboutUsSections.section2.btnText}
    />
    <AboutUsFirstSection
    title={aboutUsSections.section3.title}
    description={aboutUsSections.section3.description}
    image={aboutUsSections.section3.image}
    name={aboutUsSections.section3.name}
    descriptionName={aboutUsSections.section3.descriptionName}
    />
    </>
  )
}

export default HomePage