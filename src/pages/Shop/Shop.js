import React from 'react';
import { ShopContainer, ContactSection, DeviceSection, DeviceInfo, ContactInfo } from './Shop.styles';
import cartImage from '../Home/assets/cart.png';

const Shop = () => {
  return (
    <ShopContainer>
      <ContactSection>
        <h2>Contact Us</h2>
        <ContactInfo>
          <p>Email: support@smartgarage.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Smart Garage Avenue, Tech City</p>
        </ContactInfo>
      </ContactSection>

      <DeviceSection>
        <h2>Available Device</h2>
        <DeviceInfo>
          <h3>Smart Garage Diagnostic Tool</h3>
          <img src={cartImage} alt="NextGen OBDeleven device" />
          <p>Our diagnostic tool allows you to quickly identify engine faults in real time. Compact, user-friendly, and equipped with cutting-edge AI.</p>
          <p><strong>Price:</strong> $299</p>
        </DeviceInfo>
      </DeviceSection>
    </ShopContainer>
  );
};

export default Shop;