import React from 'react'

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
      <HeaderSection>
        <HeaderText>Explore</HeaderText>
        <HeaderSubText>Find upcoming events and new clubs to join!</HeaderSubText>
      </HeaderSection>
      
      <SectionHeader>Clubs</SectionHeader>
      <CarouselContainer>
        <Carousel {...settings}>
          <Card> {/* Content for the front of the card */}
            <ClubLogoBkg>
              <ClubLogo src={BCSCLogo} alt=""></ClubLogo>
            </ClubLogoBkg>
            <CardPicture src={CSPicture} alt=""></CardPicture>
            <ClubNameContainer>
              <ClubName>Computer Science Club</ClubName>
            </ClubNameContainer>
          </Card>

          <Card> {/* Content for the front of the card */}
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
          <Card> {/* Content for the front of the card */}
            <CardPicture src={gameNight} alt=""></CardPicture>
            <ClubNameContainer>
              <ClubName>Game Night</ClubName>
              <Date>Thursday, July 1, 2021<br></br>4PM</Date>
            </ClubNameContainer>
          </Card>

          <Card> {/* Content for the front of the card */}

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