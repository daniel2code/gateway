import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  FormContainer,
  FormWrapper,
  SliderContainer,
} from "./styles";
import {
  Form,
  InputBox,
  Input,
  Label,
  Select,
  CheckBox,
} from "../../customAssets/components/formFields/formStyles";
import { Button } from "../../customAssets/components/button/buttonStyles";
import Slider from "../../customAssets/layout/slider/index";

import card from "../../assets/surface.svg";
import bank from "../../assets/bank.svg";
import atm from "../../assets/atm.svg";

const Index = () => {
  const [counter, setCounter] = useState(2);
  console.log(counter);
  useEffect(() => {
    setTimeout(() => {
      if (counter > 1) {
        setCounter(0);
      } else {
        setCounter((props) => props + 1);
      }
    }, 7000);
  }, [counter]);

  return (
    <Container>
      <FormContainer>
        <FormWrapper>
          <h4>Create an account</h4>
          <p>Create an account to continue</p>

          <Form width="100%" mt="20px">
            <InputBox width="80%">
              <Label>Email</Label>
              <Input
                bc="#F8F8F8"
                border="1px solid #BCBCBC"
                height="40px"
                width="100%"
                mt="7px"
              />
            </InputBox>

            <InputBox width="80%" mt="20px">
              <Label>Password</Label>
              <Input
                bc="#F8F8F8"
                border="1px solid #BCBCBC"
                height="40px"
                width="100%"
                mt="7px"
              />
            </InputBox>

            <InputBox width="80%" mt="20px">
              <Label>Confirm password</Label>
              <Input
                bc="#F8F8F8"
                border="1px solid #BCBCBC"
                height="40px"
                width="100%"
                mt="7px"
              />
            </InputBox>

            <InputBox width="80%" mt="20px">
              <Label>Select currency</Label>
              <Select
                bc="#F8F8F8"
                border="1px solid #BCBCBC"
                height="45px"
                width="100%"
                mt="7px"
              ></Select>
            </InputBox>

            <CheckBox width="80%" mt="25px">
              <Input type="checkbox" />
              <p>I accept these terms and conditions</p>
            </CheckBox>

            <Button
              mt="25px"
              width="80%"
              height="40px"
              border="none"
              bc="#2994FF"
            >
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/dashboard"
              >
                Get Started
              </Link>
            </Button>
          </Form>
        </FormWrapper>
      </FormContainer>
      <SliderContainer>
        {counter === 0 && (
          <Slider
            image={card}
            title="Pay with card"
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo"
          />
        )}

        {counter === 1 && (
          <Slider
            image={bank}
            title="Grow your funds"
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo"
          />
        )}

        {counter === 2 && (
          <Slider
            image={atm}
            title="Pay anywhere, anytime"
            text="Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo"
          />
        )}
      </SliderContainer>
    </Container>
  );
};

export default Index;
