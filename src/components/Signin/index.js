import React from "react";
import icon from "../../images/logo.png";
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormInput,
  FormH1,
  FormLabel,
  FormButton,
  Text,
  TextLinkSignUp,
  IconServices,
} from "./SigninElements";

const SignIn = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">
            <i class="fa fa-chevron-circle-left" aria-hidden="true"></i>
          </Icon>
          <FormContent>
            <Form action="./../Elements/home.js">
              <IconServices src={icon} />
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput htmlFor="email" required />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput htmlFor="password" type="password" required />
              <FormButton type="submit">Continue</FormButton>
              <Text>Forgot password?</Text>
              <TextLinkSignUp to="/Signup">Create New Account</TextLinkSignUp>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
