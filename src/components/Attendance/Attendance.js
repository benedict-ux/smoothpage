import React from "react";
import icon1 from "../../images/logo.png";
import icon2 from "../../images/LOGO.jpg";
import {
  Header,
  ServicesIcon,
  ServicesIcons,
  Box1,
  Chevron,
  Boxed1,
  Boxed2,
  Boxed3,
  Boxed4,
  Boxed5,
  Boxed6,
  Boxed7,
  Boxed8,
  StudentPerson,
  Student1,
  Student2,
  Student3,
  Student4,
  Student5,
  Student6,
  Student7,
  Time1,
  Time2,
  Time3,
  Time4,
  Time5,
  Time6,
  Time7,
  Time8,
  LongRectangle1,
  LongRectangle2,
  LongRectangle3,
  LongRectangle4,
  LongRectangle5,
  LongRectangle6,
  LongRectangle7,
  LongRectangle8,
  LongRectangle9,
  LongRectangle14,
  LongRectangle15,
  LongRectangle16,
  LongRectangle17,
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
} from "./AttendanceElements";

const AttendancePage = () => {
  return (
    <>
      <Header>
        <ServicesIcon src={icon1} />
        <ServicesIcons src={icon2} />
      </Header>
      <Box1>
        <Chevron className="fa fa-chevron-right" />
      </Box1>
      <Boxed1 />
      <Boxed2>1</Boxed2>
      <Boxed3>2</Boxed3>
      <Boxed4>3</Boxed4>
      <Boxed5>4</Boxed5>
      <Boxed6>5</Boxed6>
      <Boxed7>6</Boxed7>
      <Boxed8>7</Boxed8>
      <StudentPerson>Students Name</StudentPerson>
      <Student1>Person</Student1>
      <Student2>Person</Student2>
      <Student3>Person</Student3>
      <Student4>Person</Student4>
      <Student5>Person</Student5>
      <Student6>Person</Student6>
      <Student7>Person</Student7>
      <Time1>00:00</Time1>
      <Time2>00:00</Time2>
      <Time3>00:00</Time3>
      <Time4>00:00</Time4>
      <Time5>00:00</Time5>
      <Time6>00:00</Time6>
      <Time7>00:00</Time7>
      <Time8>00:00</Time8>
      <LongRectangle1 />
      <LongRectangle2 />
      <LongRectangle3 />
      <LongRectangle4 />
      <LongRectangle5 />
      <LongRectangle6 />
      <LongRectangle7 />
      <LongRectangle8>No response</LongRectangle8>
      <LongRectangle9>No response</LongRectangle9>
      <LongRectangle14>No response</LongRectangle14>
      <LongRectangle15 />
      <LongRectangle16 />
      <LongRectangle17 />
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
        </Container>
      </Wrapper>
    </>
  );
};

export default AttendancePage;
