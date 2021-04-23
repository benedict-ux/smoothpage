import React from "react";
import Icon1 from "../../images/nazsel.jpg";
import Icon2 from "../../images/Kim.jpg";
import Icon3 from "../../images/pocky.jpg";
import Icon4 from "../../images/bench.jpg";
import Icon5 from "../../images/richie.jpg";
import Icon6 from "../../images/carlo.jpg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesH2,
  ServicesIcon,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="developers">
      <ServicesH1>Our Developers</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Nazsel Asuncion</ServicesH2>
          <ServicesP>
            We are here to guide you to know more about our site.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Kim seon-ho (CTO)</ServicesH2>
          <ServicesP>
            We are here to guide you to know more about our site.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Antonette Pacocha</ServicesH2>
          <ServicesP>
            We are here to guide you to know more about our site.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon4} />
          <ServicesH2>Benedict Carungcong</ServicesH2>
          <ServicesP>
            We are here to guide you to know more about our site.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon5} />
          <ServicesH2>Richie Lim</ServicesH2>
          <ServicesP>
            We are here to guide you to know more about our site.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon6} />
          <ServicesH2>Carlo Zarate</ServicesH2>
          <ServicesP>
            We are here to guide you to know more about our site.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
