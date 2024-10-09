import styled from 'styled-components';
import carImage from './assets/car.jpg';


export const HomeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #000;
  color: #fff;
`;

export const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 4rem 2rem; 
  position: relative;

  background-image: url(${carImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 73vh;
  min-height: 300px;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(135, 206, 235, 0.6);
    backdrop-filter: blur(1px);
    z-index: -1;
  }
`;

export const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
`;

export const CTAButton = styled.button`
  background-color: #0066cc;
  color: #fff;
  border: none;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  margin-top: 62px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0052a3;
  }
`;

export const AppLinksContainer = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
`;

export const AppLinkImage = styled.img`
  width: 140px;
  height: 42px;
  cursor: pointer;
  object-fit: contain;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const SupportedVehiclesSection = styled.section`
  background-color: #252525; 
  padding: 4rem 2rem;
`;

export const VehiclesTitle = styled.h2`
  color: #fff; 
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2rem;
`;

export const VehiclesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); 
  gap: 1.5rem; 
  justify-items: center;
  justify-content: center; 

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr); 
    gap: 1rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr); 
    gap: 0.75rem;
  }
`;

export const VehicleImage = styled.img`
  background-color: #373737;
  padding: 6px;
  border-radius: 8px;
  width: 150px;
  height: 150px;
  object-fit: contain; 

  @media (max-width: 768px) {
    width: 100px;
    height: 100px; 
  }

  @media (max-width: 480px) {
    width: 80px;
    height: 80px; 
  }
`;

export const VehicleName = styled.p`
  color: #fff; /* Text color */
  text-align: center;
`;

export const HowItWorksSection = styled.section`
  background-color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

export const HowItWorksTitle = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 2rem;
`;

export const StepsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

export const Step = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const StepNumber = styled.div`
  width: 40px;
  height: 40px;
  background-color: #0066cc;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

export const StepDescription = styled.p`
  font-size: 1rem;
  color: #333;
`;

export const StepArrow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const DotsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
`;

export const Dot = styled.div`
  width: 10px;
  height: 10px;
  background-color: ${(props) => (props.isActive ? '#0066cc' : '#ccc')}; // Active and inactive colors
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;


export const EngineFaultsSection = styled.section`
  background-color: #252525;
  padding: 4rem 2rem;
  color: black;
  background-color: white;
  position: relative;
`;

export const EngineFaultsContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    max-width: 50%;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }

  ${CTAButton} {
    margin-right: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;

    > div {
      max-width: 100%;
      margin-bottom: 2rem;
    }
  }
`;

export const EngineFaultsImage = styled.img`
  max-width: 45%;
  height: auto;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
export const OBDelevenSection = styled.section`
  background-color: white;
  padding: 4rem 2rem;
  color: black;
`;

export const OBDelevenContent = styled.div`
  display: flex;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const OBDelevenImage = styled.img`
  width: 40%;
  margin-right: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-right: 0;
    margin-bottom: 2rem;
  }
`;

export const LearnMoreLink = styled.a`
  color: #0066cc;
  text-decoration: none;
  font-weight: bold;
  display: inline-block;
  margin-top: 1rem;
`;


export const CommunitySection = styled.section`
  background-color: #0066cc;
  color: white;
  padding: 4rem 2rem;
`;

export const CommunityContent = styled.div`
  text-align: center;
  max-width: 600px;
  margin: 0 auto;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

export const SocialIcon = styled.a`
  margin: 0 0.5rem;
  
  img {
    width: 30px;
    height: 30px;
  }
`;
