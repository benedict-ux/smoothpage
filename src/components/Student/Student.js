import React from "react";
import icon1 from "../../images/logo.png";
import icon2 from "../../images/LOGO.jpg";
import {
  Header,
  ServicesIcon,
  ServicesIcons,
  Box1,
  Chevron,
  TextNumber,
  Number1,
  Number2,
  Number3,
  Number4,
  Number5,
  Number6,
  Number7,
  StudentName,
  Student1,
  Student2,
  Student3,
  Student4,
  Student5,
  Student6,
  Student7,
  StudentCodes,
  Code1,
  Code2,
  Code3,
  Code4,
  Code5,
  Code6,
  Code7,
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
} from "./StudentElements";

const StudentPage = () => {
  return (
    <>
      <Header>
        <ServicesIcon src={icon1} />
        <ServicesIcons src={icon2} />
      </Header>
      <Box1>
        <Chevron className="fa fa-chevron-right" />
      </Box1>
      <TextNumber>NO</TextNumber>
      <Number1>1</Number1>
      <Number2>2</Number2>
      <Number3>3</Number3>
      <Number4>4</Number4>
      <Number5>5</Number5>
      <Number6>6</Number6>
      <Number7>7</Number7>
      <StudentName>Students Name</StudentName>
      <Student1>Student1</Student1>
      <Student2>Student2</Student2>
      <Student3>Student3</Student3>
      <Student4>Student4</Student4>
      <Student5>Student5</Student5>
      <Student6>Student5</Student6>
      <Student7>Student7</Student7>
      <StudentCodes>Students Code</StudentCodes>
      <Code1>sdfsd543684sf</Code1>
      <Code2>sdfsd543684sf</Code2>
      <Code3>Sdfs64sdsdfsd</Code3>
      <Code4>Sdfs64sdsdfsd</Code4>
      <Code5>Sdfs64sdsdfsd</Code5>
      <Code6>dsfsdf653465c</Code6>
      <Code7>dfgdgb65436sd</Code7>
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

export default StudentPage;
