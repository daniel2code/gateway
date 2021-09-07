import React from "react";

import {
  Container,
  DashboardBox,
  SideBarBox,
  BodyBox,
  MainContent,
  TopBarBox,
} from "./layoutStyles";

import TopBar from "./topbar/index";
import SideBar from "./sidebar/index";

const Index = ({ children }) => {
  return (
    <Container>
      <DashboardBox>
        <SideBarBox>
          <SideBar />
        </SideBarBox>

        <BodyBox>
          <TopBarBox>
            <TopBar />
          </TopBarBox>

          <MainContent>{children}</MainContent>
        </BodyBox>
      </DashboardBox>
    </Container>
  );
};

export default Index;