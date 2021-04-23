import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
`;

export const ScreenShared = styled.div`
  position: absolute;
  right: 43%;
  background-color: #242423;
  border-radius: 10px;
  width: 550px;
  border: none;
  padding: 150px;
  margin: 150px;
  text-align: center;
  color: #fff;
`;

export const HeadingH1 = styled.h1`
  position: absolute;
  top: 25%;
  left: 65%;
  font-size: 25px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Linking = styled.p`
  position: absolute;
  top: 32%;
  left: 53%;
  color: black;
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const H1 = styled.p`
  position: absolute;
  top: 37%;
  left: 59.8%;
  color: black;
  font-size: 15px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const PhoneNumbers = styled.p`
  position: absolute;
  top: 42%;
  left: 65.4%;
  color: #118ab2;
  font-weight: 500;
  font-size: 18px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const ButtonLink = styled(LinkR)`
  position: absolute;
  top: 48%;
  left: 62.7%;
  background-color: #023e8a;
  color: #fff;
  text-align: center;
  font-size: 15px;
  height: 50px;
  width: 120px;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  padding-top: 15px;
  box-shadow: -1px 1px 14px 4px rgba(0, 0, 0, 0.23);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Dots = styled.i`
  position: absolute;
  top: 63%;
  left: 7%;
  color: #fff;
  font-size: 20px;
`;

export const StandDot = styled.i`
  position: absolute;
  top: 62%;
  left: 44%;
  color: #fff;
  font-size: 20px;
`;

export const PhoneMic = styled.i`
  position: absolute;
  top: 55%;
  left: 19.5%;
  color: #fff;
  font-size: 20px;
  border-radius: 50%;
  background-color: transparent;
  text-align: center;
  width: 62px;
  border: 1px solid #fff;
  padding: 17px;
  margin: 20px;
`;

export const Camera = styled.i`
  position: absolute;
  top: 55%;
  left: 25%;
  color: #fff;
  font-size: 20px;
  border-radius: 50%;
  background-color: transparent;
  text-align: center;
  width: 62px;
  border: 1px solid #fff;
  padding: 17px;
  margin: 20px;
`;

export const ButtonSharing = styled.div`
  position: absolute;
  top: 48%;
  left: 73%;
  background-color: #023e8a;
  color: #fff;
  text-align: center;
  font-size: 15px;
  height: 50px;
  width: 140px;
  border: none;
  border-radius: 50px;
  text-decoration: none;
  padding-top: 15px;
  box-shadow: -1px 1px 14px 4px rgba(0, 0, 0, 0.23);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Options = styled.p`
  position: absolute;
  top: 58%;
  left: 68.5%;
  font-weight: 500;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

export const Join = styled.p`
  position: absolute;
  top: 63%;
  left: 63.5%;
  font-weight: 800;
  font-size: 15px;
  color: #118ab2;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
