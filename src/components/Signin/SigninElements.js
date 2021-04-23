import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #e63946;
`;
export const FormWrap = styled.div`
  height: 82%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    height: 80%;
  }
`;
export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 45px;
  text-decoration: none;
  color: #000000;
  font-weight: bold;
  font-size: 32px;
  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;
export const FormContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const Form = styled.form`
  background-color: #7aaaf2;
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 80px 32px;
  border-radius: 4px;
  box-shadow: 12px 9px 9px -6px rgba(0, 0, 0, 0.68);

  @media screen and (max-width: 480px) {
    padding: 32px 32px;
  }
`;
export const FormH1 = styled.h1`
  margin-bottom: 25px;
  margin-top: 35px;
  color: #000000;
  font-size: 25px;
  font-weight: 400;
  text-align: center;
`;
export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 18px;
  color: #000000;
`;
export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border-radius: 4px;
`;
export const FormButton = styled.button`
  background: #000;
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #000;
  font-size: 14px;
`;
export const TextLinkSignUp = styled(Link)`
  position: absolute;
  top: 78%;
  left: 43.8%;
  font-family: "Times New Roman", Times, serif;
  background-color: #52b788;
  border: 1px solid gray;
  border-radius: 10px;
  color: black;
  padding: 15px 25px;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  padding-left: 20px;
  cursor: pointer;
`;

export const IconServices = styled.img`
  position: absolute;
  top: 55px;
  left: 47.4%;
  background-repeat: no-repeat;
  width: 80.5px;
  height: 80px;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 5px;
  border: 1px solid gray;
`;
