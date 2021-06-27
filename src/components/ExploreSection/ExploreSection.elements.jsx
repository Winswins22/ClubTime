import styled from 'styled-components';
import Slider from 'react-slick';

export const Background = styled.div`
  background-color: grey;
  width: 110%;
  margin-left: -10px;
  height: 1400px;
`

export const HeaderSection = styled.div`
  background-color: #ff9900ff;
  color: #000;
  height: 220px;
  margin-top: 80px;
  width: 110%;
  margin-left: -10px;
  padding: 50px 50px 50px 300px;
`
export const HeaderText = styled.h1`
  color: #000;
  font-size: 50px;
`

export const HeaderSubText = styled.h2`
  color: #000;
`

export const SectionHeader = styled.h1`
  margin-left: 285px;
  color: #000;
  font-size: 35px;
`

export const RightArrow = styled.div`
  color: #ff9900ff;
  position: absolute;
  cursor: pointer;
  right: 300px;
  top: 200px;
`

export const LeftArrow = styled.div`
  color: #ff9900ff;
  position: absolute;
  cursor: pointer;
  left: 300px;
  top: 200px;
`

export const Carousel = styled(Slider)`
  > .slick-dots li button {
    &:before {
      border-radius: 100%;
      color: ${({theme}) => theme.textColor};
    }
  }
  > .slick-dots li.slick-active button {
    &:before {
      border-radius: 100%;
      color: ${({theme}) => theme.textColor};
    }
  }
`;

export const Card = styled.div`
  text-align: center;
  margin-left: 560px;

  &:hover {
    cursor: pointer;
  }
`

export const CardPicture = styled.img`
  height: 400px;
  width: 700px;
  margin: 0;
`

export const ClubNameContainer = styled.div`
  width: 700px;
  height: 100px;
  background-color: #ff9900ff;
  margin-top: -4px;
  display: flex;
`

export const ClubName = styled.h1`
  text-align: left;
  padding: 10px 0 0 20px;
  overflow: hidden;
  white-space: nowrap;
  width: 400px;
`

export const ClubLogoBkg = styled.div`
  width: 200px;
  height: 200px;
  background-color: #ff9900ff;
  border-radius: 50%;
  position: absolute;
  margin: 150px 0 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ClubLogo = styled.img`
  height: 120px;
`

export const CarouselContainer = styled.div`
  padding: 0 30px 0 30px;
  width: 1800px;
  margin-left: 30px;
`

export const Date = styled.h1`
  font-size: 20px;
  text-align: right;
  margin: 25px 0 0 50px;
`
