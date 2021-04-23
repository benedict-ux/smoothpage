import React from "react";
import icon1 from "../../images/logo.png";
import {
  Header,
  ServicesIcon,
  Row,
  Img,
  HeadingP,
  ButtonLink1,
  ButtonLink2,
  ButtonLink3,
  ButtonLink4,
  ButtonLink5,
  BtnWrap,
  BtnLinks1,
  BtnLinks2,
  BtnLinks3,
  BtnLinks4,
  Wrapper,
  Box1,
  Headerh2,
  Selector,
  Hr1,
  Hr2,
  Hr3,
  Hr4,
  Hr5,
  ContainerBox,
  Ribbon1,
  Ribbon2,
  Ribbon3,
  Ribbon4,
  Ribbon5,
} from "./HomeElements";

const HomePage = () => {
  return (
    <>
      <Header>
        <ServicesIcon src={icon1} />
      </Header>
      <Row>
        <Img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553__340.png"></Img>
        <HeadingP>Your Schedules</HeadingP>
        <ButtonLink1 to="/">Subject 00:00 - 00:00</ButtonLink1>
        <ButtonLink2 to="#">Subject 00:00 - 00:00</ButtonLink2>
        <ButtonLink3 to="#">Subject 00:00 - 00:00</ButtonLink3>
        <ButtonLink4 to="#">Subject 00:00 - 00:00</ButtonLink4>
        <ButtonLink5 to="#">Subject 00:00 - 00:00</ButtonLink5>
      </Row>
      <BtnWrap />
      <BtnLinks1 to="/Classroom">Classroom</BtnLinks1>
      <BtnLinks2 to="/Schedule">Schedule</BtnLinks2>
      <BtnLinks3 to="/Student">Students</BtnLinks3>
      <BtnLinks4 to="/Attendance">Attendance</BtnLinks4>
      <Wrapper>
        <Box1>
          <Headerh2>Classworks</Headerh2>
          <Selector>
            <select name="slt-1" id="slt-1">
              <option>All Classes</option>
              <option value="1">JAVAPRO</option>
              <option value="2">OBOPRO</option>
              <option value="3">DATASTRUC</option>
              <option value="4">ENTREP</option>
              <option value="5">IMMERSION</option>
              <option value="6">FILIPLA</option>
              <option value="7">PE 4</option>
              <option value="8">WEBPROG</option>
              <option value="9">MEDINFO</option>
            </select>
          </Selector>
          <Hr1 />
          <Hr2 />
          <Hr3 />
          <Hr4 />
          <Hr5 />
        </Box1>
        <ContainerBox>
          <Ribbon1 />
          <Ribbon2 />
          <Ribbon3 />
          <Ribbon4 />
          <Ribbon5 />
        </ContainerBox>
      </Wrapper>
    </>
  );
};

export default HomePage;
