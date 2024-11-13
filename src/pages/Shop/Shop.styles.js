import styled from 'styled-components';

export const ShopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: #333;
`;

export const ContactSection = styled.section`
  background-color: #f0f0f0;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  margin-bottom: 30px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  h2 {
    margin-bottom: 15px;
    font-size: 1.5em;
    color: #222;
  }
`;

export const ContactInfo = styled.div`
  font-size: 1em;
  line-height: 1.6;

  p {
    margin: 5px 0;
  }
`;

export const DeviceSection = styled.section`
  background-color: #ffffff;
  padding: 20px;
  width: 100%;
  max-width: 800px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 15px;
    font-size: 1.5em;
    color: #222;
  }
`;

export const DeviceInfo = styled.div`
  font-size: 1em;
  line-height: 1.6;

  h3 {
    font-size: 1.3em;
    color: #007bff;
    margin-bottom: 10px;
  }

  img {
    max-width: 200px;
    margin-top: 20px;
  }

  p {
    margin: 5px 0;
  }

  strong {
    font-weight: bold;
    color: #333;
  }
`;