import React from "react";
import {
  ScreenShared,
  HeadingH1,
  Container,
  Linking,
  H1,
  PhoneNumbers,
  ButtonLink,
  Dots,
  PhoneMic,
  Camera,
  StandDot,
  ButtonSharing,
  Options,
  Join,
} from "../Opening/OpeningElements";
const Open3 = () => {
  // window.open(
  //   "https://morning-ocean-69074.herokuapp.com/69e32c6a-d854-48d8-a7d2-82c6fc422296"
  // );
  return (
    <>
      <Container>
        <HeadingH1>Meeting's ready</HeadingH1>
        <ScreenShared>Camera is starting</ScreenShared>
        <Dots>
          <i className="fas fa-ellipsis-h"></i>
        </Dots>
        <StandDot>
          <i class="fas fa-ellipsis-v"></i>
        </StandDot>
        <PhoneMic>
          <i className="fas fa-microphone"></i>
        </PhoneMic>
        <Camera>
          <i className="fa fa-video"></i>
        </Camera>
        <Linking>
          https://morning-ocean-69074.herokuapp.com/99e77192-8bbe-40e0-aca7-4b7d72390036
        </Linking>
        <H1>Dial-in: (PH) +63 912-555-1152 PIN: 802 285 002#</H1>
        <PhoneNumbers>More phone numbers</PhoneNumbers>
        <ButtonLink to="/Paged2">Join now</ButtonLink>
        <ButtonSharing>
          <i className="fa fa-caret-square-o-up" />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Present
        </ButtonSharing>
        <Options>Other options</Options>
        <Join>
          <i class="fa fa-volume-control-phone" /> Join and use a phone for
          audio
        </Join>
      </Container>
    </>
  );
};

export default Open3;
