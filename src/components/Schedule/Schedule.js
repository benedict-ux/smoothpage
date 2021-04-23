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
  Boxed2,
  Boxed3,
  Boxed4,
  Boxed5,
  BoxingDay1,
  BoxingDay2,
  BoxingDay3,
  BoxingDay4,
  BoxingDay5,
  BoxingDay6,
  Day1,
  Day2,
  Day3,
  Day4,
  Day5,
  Day6,
  Day7,
  Day8,
  Day9,
  Day10,
  Day11,
  Day12,
  Day13,
  Day14,
  Day15,
  Day16,
  Day17,
  Day18,
  Day19,
  Day20,
  Day21,
  Day22,
  Day23,
  Day24,
  Day25,
  Day26,
  Day27,
  Day28,
  Day29,
  Day30,
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
} from "./ScheduleElements";

const SchedulePage = () => {
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
      <Boxed1>Sub</Boxed1>
      <Boxed2>Sub</Boxed2>
      <Boxed3>Sub</Boxed3>
      <Boxed4>Sub</Boxed4>
      <Boxed5>Sub</Boxed5>
      <BoxingDay1>Monday</BoxingDay1>
      <BoxingDay2>Tuesday</BoxingDay2>
      <BoxingDay3>Wednesday</BoxingDay3>
      <BoxingDay4>Thursday</BoxingDay4>
      <BoxingDay5>Friday</BoxingDay5>
      <BoxingDay6>Saturday</BoxingDay6>
      <Day1>T Am/Pm</Day1>
      <Day2>T Am/Pm</Day2>
      <Day3>T Am/Pm</Day3>
      <Day4>T Am/Pm</Day4>
      <Day5>T Am/Pm</Day5>
      <Day6>T Am/Pm</Day6>
      <Day7>T Am/Pm</Day7>
      <Day8>T Am/Pm</Day8>
      <Day9>T Am/Pm</Day9>
      <Day10>T Am/Pm</Day10>
      <Day11>T Am/Pm</Day11>
      <Day12>T Am/Pm</Day12>
      <Day13>T Am/Pm</Day13>
      <Day14>T Am/Pm</Day14>
      <Day15>T Am/Pm</Day15>
      <Day16>T Am/Pm</Day16>
      <Day17>T Am/Pm</Day17>
      <Day18>T Am/Pm</Day18>
      <Day19>T Am/Pm</Day19>
      <Day20>T Am/Pm</Day20>
      <Day21>T Am/Pm</Day21>
      <Day22>T Am/Pm</Day22>
      <Day23>T Am/Pm</Day23>
      <Day24>T Am/Pm</Day24>
      <Day25>T Am/Pm</Day25>
      <Day26>T Am/Pm</Day26>
      <Day27>T Am/Pm</Day27>
      <Day28>T Am/Pm</Day28>
      <Day29>T Am/Pm</Day29>
      <Day30>T Am/Pm</Day30>
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

export default SchedulePage;
