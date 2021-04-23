import React from "react";
import icon from "../../images/logo.png";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormInput,
  FormH2,
  FormH3,
  FormLabel,
  FormButton,
  Text,
  IconServices,
} from "./SignUpElements";

const SignupPage = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/Signin">
            <i class="fa fa-chevron-circle-right" aria-hidden="true"></i>
          </Icon>
          <FormContent>
            <Form action="/signin">
              <IconServices src={icon} />
              <FormH2>Sign Up</FormH2>
              <FormH3>It’s quick and easy.</FormH3>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput htmlFor="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput htmlFor="password" type="password" required />
              <FormLabel htmlFor="for">Confirm Password</FormLabel>
              <FormInput htmlFor="password" type="password" required />
              <Text>
                By clicking Sign Up, you agree to our Terms, Data Policy and
                Cookies Policy. You may receive SMS Notifications from us and
                can opt out any time.
              </Text>
              <FormButton type="submit">Continue</FormButton>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignupPage;
