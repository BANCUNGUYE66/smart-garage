import React, { useState } from 'react';
import {
  HomeContainer,
  HeroSection,
  HeroTitle,
  HeroSubtitle,
  CTAButton,
  AppLinksContainer,
  AppLinkImage,
  SupportedVehiclesSection,
  VehiclesTitle,
  VehiclesGrid,
  VehicleImage,
  VehicleName,
  HowItWorksSection,
  HowItWorksTitle,
  StepsContainer,
  Step,
  StepNumber,
  StepDescription,
  DotsContainer,
  Dot,
  EngineFaultsSection,
  EngineFaultsContent,
  OBDelevenSection,
  OBDelevenContent,
  OBDelevenImage,
  LearnMoreLink,
  CommunitySection,
  CommunityContent,
  SocialIcons,
  SocialIcon,
  EngineFaultsImage,
} from './Home.styles';

import appStoreIcon from './assets/app-store-badge.png';
import googlePlayIcon from './assets/google-play-badge.png';
import carBrand1 from './assets/bmw.svg';
import carBrand2 from './assets/honda.svg';
import carBrand3 from './assets/hyundai.svg';
import carBrand4 from './assets/jeep.svg';
import carBrand5 from './assets/kia.svg';
import carBrand6 from './assets/lexus.svg';
import carBrand7 from './assets/mercedes-benz.svg';
import carBrand8 from './assets/nissan.svg';
import carBrand9 from './assets/tesla.svg';
import carBrand10 from './assets/toyota.svg';
import carBrand11 from './assets/volkswagen.svg';
import carBrand12 from './assets/all-cars.svg';
import obdelevenDevice from './assets/obdeleven-device.png';
import engineFaultsImage from './assets/Functions.webp';

const steps = [
    {
      number: '1',
      description: 'Plug the device into your car\'s OBD2 port',
    },
    {
      number: '2',
      description: 'Pair with your Smart Car mobile app',
    },
    {
      number: '3',
      description: 'Enjoy a better driving experience',
    },
  ];
  
  const Home = () => {
    const [currentStep, setCurrentStep] = useState(0);
  
    const handleDotClick = (index) => {
      setCurrentStep(index);
    };
  
    return (
      <HomeContainer>
        <HeroSection>
          <HeroTitle>PROFESSIONAL CAR DIAGNOSTIC TOOL IN YOUR POCKET</HeroTitle>
          <HeroSubtitle>Scan your car via Wi-Fi, find nearby garages, and predict maintenance needs using AI</HeroSubtitle>
  
          <AppLinksContainer>
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <AppLinkImage src={appStoreIcon} alt="Download on the App Store" />
            </a>
            <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
              <AppLinkImage src={googlePlayIcon} alt="Get it on Google Play" />
            </a>
          </AppLinksContainer>
  
          <CTAButton>Visit shop</CTAButton>
        </HeroSection>

      <SupportedVehiclesSection>
        <VehiclesTitle>SUPPORTED VEHICLES</VehiclesTitle>
        <VehiclesGrid>
          <div>
            <VehicleImage src={carBrand1} alt="BMW" />
            <VehicleName>BMW</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand2} alt="Honda" />
            <VehicleName>Honda</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand3} alt="Hyundai" />
            <VehicleName>Hyundai</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand4} alt="Jeep" />
            <VehicleName>Jeep</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand5} alt="Kia" />
            <VehicleName>Kia</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand6} alt="Lexus" />
            <VehicleName>Lexus</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand7} alt="Mercedes-Benz" />
            <VehicleName>Mercedes-Benz</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand8} alt="Nissan" />
            <VehicleName>Nissan</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand9} alt="Tesla" />
            <VehicleName>Tesla</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand10} alt="Toyota" />
            <VehicleName>Toyota</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand11} alt="Volkswagen" />
            <VehicleName>Volkswagen</VehicleName>
          </div>
          <div>
            <VehicleImage src={carBrand12} alt="All Cars" />
            <VehicleName>All Brands</VehicleName>
          </div>
        </VehiclesGrid>
      </SupportedVehiclesSection>



      <OBDelevenSection>
        <OBDelevenContent>
          <OBDelevenImage src={obdelevenDevice} alt="OBDeleven NextGen Device" />
          <div>
            <h2>OBDeleven NextGen</h2>
            <p>OBDeleven NextGen is a pocket-sized Bluetooth device that offers in-depth diagnostics and extensive car customization options. Together with a mobile application, you can quickly scan your vehicle for faults, enable or disable comfort features, monitor live data, and program your car's systems with just a single tap on your smartphone.</p>
            <LearnMoreLink href="#">Learn more →</LearnMoreLink>
          </div>
        </OBDelevenContent>
      </OBDelevenSection>


      <EngineFaultsSection>
        <EngineFaultsContent>
          <div>
            <h2>DIAGNOSE EVERY ENGINE'S FAULTS</h2>
            <p>Now it's easier than ever to diagnose engine-related problems for every car with a single tap on your smartphone.</p>
            <CTAButton>More information</CTAButton>
            <CTAButton>Watch video</CTAButton>
          </div>
          <EngineFaultsImage src={engineFaultsImage} alt="Engine Faults Diagnostic" />
        </EngineFaultsContent>
      </EngineFaultsSection>


      <HowItWorksSection>
        <HowItWorksTitle>HOW DOES IT WORK?</HowItWorksTitle>
        <StepsContainer>
          {steps.map((step, index) => (
            currentStep === index && (
              <Step key={index}>
                <StepNumber>{step.number}</StepNumber>
                <StepDescription>{step.description}</StepDescription>
              </Step>
            )
          ))}
        </StepsContainer>

        <DotsContainer>
          {steps.map((_, index) => (
            <Dot key={index} onClick={() => handleDotClick(index)} isActive={index === currentStep} />
          ))}
        </DotsContainer>
      </HowItWorksSection>


      <CommunitySection>
        <CommunityContent>
          <h2>JOIN OUR COMMUNITY</h2>
          <p>Connect with other OBDeleven users – car enthusiasts and professionals. Receive the latest news, share knowledge and feedback, discuss issues, and get advice and assistance.</p>
          <CTAButton>Visit Forum</CTAButton>
        </CommunityContent>
        <SocialIcons>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://obdeleven.com/sylius_media/a6/17/7f3c6e32c958a6102143ab3bf103.svg" alt="Facebook" />
          </SocialIcon>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://obdeleven.com/sylius_media/00/b4/57bdd4ef87e5324082df6d61ff47.svg" alt="Instagram" />
          </SocialIcon>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://obdeleven.com/sylius_media/58/aa/623c264983b0b1bdba4cf0245b0a.svg" alt="TikTok" />
          </SocialIcon>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://obdeleven.com/sylius_media/50/61/8b9291a3f3f89d0827005d67fd22.svg" alt="YouTube" />
          </SocialIcon>
          <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
            <img src="https://obdeleven.com/sylius_media/8c/e1/d69807f192c2fb39bd8c53d157d4.svg" alt="Twitter" />
          </SocialIcon>
        </SocialIcons>
      </CommunitySection>

    </HomeContainer>
  );
};

export default Home;