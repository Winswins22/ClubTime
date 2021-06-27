import React, {useState} from 'react'

import {
  Background,
  HeaderSection,
  HeaderText,
  HeaderSubText,
  SectionHeader,
  RightArrow,
  LeftArrow,
  Carousel,
  Card,
  CardPicture,
  ClubNameContainer,
  ClubName,
  ClubLogoBkg,
  ClubLogo,
  CarouselContainer,
  Date,
} from './ExploreSection.elements'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai' // For the left and right arrows on the carousel
import BCSCLogo from '../../images/BCSCLogo.png'
import MathLogo from '../../images/mathClubLogo.png'
import mathPicture from '../../images/mathPicture.jpeg'
import CSPicture from '../../images/CSpicture.jpg'
import gameNight from '../../images/gameNight.png'
import CCCLogo from '../../images/cccLogo.png'

import CSModal from '../Modals/CSModal.jsx'


import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

// Custom arrows for the carousel
const NextArrow = ({onClick}) => {
  return (
    <RightArrow onClick={onClick}>
      <AiFillCaretRight size={100} />
    </RightArrow>
  )
}

const PrevArrow = ({onClick}) => {
  return (
    <LeftArrow onClick={onClick}>
      <AiFillCaretLeft size={100} />
    </LeftArrow>
  )
}

const ExploreSection = () => {
  const [showCSModal, setShowCSModal] = useState(false);
  const [showMathModal, setShowMathModal] = useState(false);
  const [showGameNightModal, setShowGameNightModal] = useState(false);
  const [showCCCModal, setShowCCCModal] = useState(false);

  const openCSModal = () => {
    setShowCSModal(prev => !prev);
    console.log(showCSModal);
  };

  const openMathModal = () => {
    setShowMathModal(prev => !prev);
  };

  const openGameNightModal = () => {
    setShowGameNightModal(prev => !prev);
  };

  const openCCCModal = () => {
    setShowCCCModal(prev => !prev);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Background>
      <CSModal showModal={showCSModal} setShowModal={setShowCSModal}/>

      <HeaderSection>
        <HeaderText>Explore</HeaderText>
        <HeaderSubText>Find upcoming events and new clubs to join!</HeaderSubText>
      </HeaderSection>
      


      <SectionHeader>Clubs</SectionHeader>
      <CarouselContainer>
        <Carousel {...settings}>
          <Card onClick={openCSModal}> {/* Content for the front of the card */}
            <ClubLogoBkg>
              <ClubLogo src={BCSCLogo} alt=""></ClubLogo>
            </ClubLogoBkg>
            <CardPicture src={CSPicture} alt=""></CardPicture>
            <ClubNameContainer>
              <ClubName>Computer Science Club</ClubName>
            </ClubNameContainer>
          </Card>

          <Card onClick={openMathModal}> {/* Content for the front of the card */}
            <ClubLogoBkg>
              <ClubLogo src={MathLogo} alt=""></ClubLogo>
            </ClubLogoBkg>
            <CardPicture src={mathPicture} alt=""></CardPicture>
            <ClubNameContainer>
              <ClubName>Math Club</ClubName>
            </ClubNameContainer>
          </Card>

        </Carousel>
      </CarouselContainer>
      <SectionHeader>Events</SectionHeader>
      <CarouselContainer>
        <Carousel {...settings}>
          <Card onClick={openGameNightModal}> {/* Content for the front of the card */}
            <CardPicture src={gameNight} alt=""></CardPicture>
            <ClubNameContainer>
              <ClubName>Game Night</ClubName>
              <Date>Thursday, July 1, 2021<br></br>4PM</Date>
            </ClubNameContainer>
          </Card>

          <Card onClick={setShowCCCModal}> {/* Content for the front of the card */}
            <CardPicture src={CCCLogo} alt=""></CardPicture>
            <ClubNameContainer>
              <ClubName>CCC</ClubName>
              <Date>Friday, October 14, 2021<br></br>7PM</Date>
            </ClubNameContainer>
          </Card>

        </Carousel>
      </CarouselContainer>
    </Background>

  )
}

export default ExploreSection