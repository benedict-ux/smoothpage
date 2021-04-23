import React from "react";
import icon1 from "../../images/logo.png";
import icon2 from "../../images/LOGO.jpg";
import {
  Header,
  ServicesIcon,
  ServicesIcons,
  Box1,
  Chevron,
  Circle1,
  Circle2,
  Circle3,
  Circle4,
  Circle5,
  Boxed1,
  Rectangle1,
  Rectangle2,
  Rectangle3,
  Rectangle4,
  Rectangle5,
  Wrapper,
  Box2,
  Headerh2,
  Selector,
  Hr1,
  Hr2,
  Hr3,
  Hr4,
  Hr5,
  Container,
  HeadH1,
  LinkButton1,
  LinkButton2,
  LinkButton3,
} from "./ClassroomElements";

const ClassroomPage = () => {
  // window.open(
  //   "https://morning-ocean-69074.herokuapp.com/69e32c6a-d854-48d8-a7d2-82c6fc422296"
  // );
  return (
    <>
      <Header>
        <ServicesIcon src={icon1} />
        <ServicesIcons src={icon2} />
      </Header>
      <Box1>
        <Chevron className="fa fa-chevron-right" />
        <Circle1 />
        <Circle2 />
        <Circle3 />
        <Circle4 />
        <Circle5 />
      </Box1>
      <Boxed1 />
      <Rectangle1 to="/Open1">
        Data
        Structure&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="fa fa-user-circle-o"></i>
      </Rectangle1>
      <Rectangle2 to="/Open2">
        JAVA
        PROGRAMMING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="fa fa-user-circle-o"></i>
      </Rectangle2>
      <Rectangle3 to="/Open3">
        ENTREPRENEURSHIP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="fa fa-user-circle-o"></i>
      </Rectangle3>
      <Rectangle4 to="/Open4">
        WEB
        PROGRAMMING&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="fa fa-user-circle-o"></i>
      </Rectangle4>
      <Rectangle5 to="/Open5">
        IMMERSION&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <i className="fa fa-user-circle-o"></i>
      </Rectangle5>
      <Wrapper>
        <Box2>
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
        </Box2>
        <Container>
          <HeadH1>Upcoming Class</HeadH1>
          <LinkButton1 to="/Open2">Subject 1 || 0:00</LinkButton1>
          <LinkButton2 to="/Open1">Subject 2 || 0:00</LinkButton2>
          <LinkButton3 to="/Open3">Subject 3 || 0:00</LinkButton3>
        </Container>
      </Wrapper>
    </>
  );
};

export default ClassroomPage;
