import React from "react";
import "boxicons"

import { SideBarBox, MenuBox, MenuOne, Menu } from "./sidebarStyles";

const menuData = [
  {
    name: "Dashboard",
    icon: <box-icon color="#000000" size="20px" type="solid" name="home"></box-icon>,
    link: ""
  },
  {
    name: "My Cards",
    icon: <box-icon color="#000000" size="20px" name="credit-card"></box-icon>,
    link: ""
  },
  ,
];

const Index = () => {
  return (
    <>
      <SideBarBox>
        <MenuBox>
          {menuData.map((item) => {
            return (
              <MenuOne>
                <Menu key={Math.random()}>
                  <div>{item.icon}</div>

                  <p>{item.name}</p>
                </Menu>
              </MenuOne>
            );
          })}
        </MenuBox>
      </SideBarBox>
    </>
  );
};

export default Index;
