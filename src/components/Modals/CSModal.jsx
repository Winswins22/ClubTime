import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';

import {
  Background,
  ModalWrapper,
  ModalContent,
  CloseModalButton,
  TopImage,
  ModalDescription,
  JoinButton,
  EventsCard,
  EventsHeader,
  EventPic,
  EventName,
  EventTime,
  EventsCardContainer
} from './Modals.elements'
import CSpicture from '../../images/CSpicture.jpg'


export const CSModal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              <TopImage src={CSpicture}></TopImage>
              <ModalContent>
                <h1>Computer Science Club</h1>
                <JoinButton>Join Now!</JoinButton>

                <ModalDescription>The Computer Science Club consists of a group of dedicated individuals who are passionate about computer science. Our executive team has extensive and diverse knowledge about computer science related material. We offer a unique opportunity for members to enrich their knowledge of computer science by exploring a variety of topics, from basic programming skills to more advanced subjects such as algorithms and web development. We also dedicate a good portion of our time to helping members prepare for the Canadian Computing Competition by going over tips, past contests and algorithms required to do well on the contest.</ModalDescription>

                <EventsHeader>Events</EventsHeader>
                <EventsCardContainer>
                  <EventsCard>
                    <EventPic></EventPic>
                    <EventName>CCC Prep</EventName>
                    <EventTime>Tuesday, March 7 2021 @ 2PM</EventTime>
                  </EventsCard>
                  <EventsCard>
                    <EventPic></EventPic>
                    <EventName>Intro to Github</EventName>
                    <EventTime>Friday, October 30 2021 @ 3PM</EventTime>
                  </EventsCard>
                  <EventsCard>
                    <EventPic></EventPic>
                    <EventName>Applying to CS Uni</EventName>
                    <EventTime>Sunday, July 16 2021 @ 4PM</EventTime>
                  </EventsCard>
                </EventsCardContainer>

              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
    </>
  );
};

export default CSModal