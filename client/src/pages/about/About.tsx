import * as React from "react";
import { Header } from "semantic-ui-react";
import "../../App.css";
import { Cards } from "../../components/common/cards";
import { teamInformation } from "./TeamInformation";
import { CommonLayout } from "../../components/layout/common";

interface IAboutProps {}

export function About(props: IAboutProps) {
  return (
    <CommonLayout>
      <div className="container">
        <Header color="red" as="h1" textAlign="center">
          <Header.Content>Our Team</Header.Content>
          <Header.Subheader color="red">
            Our team comprises of two engineers
          </Header.Subheader>
        </Header>
        <div className="flexContainer">
          {teamInformation.map((member) => {
            return (
              <div className="flexItem" key={member.name}>
                <Cards
                  imageURL={member.image}
                  header={member.name}
                  subheader={member.title}
                  description={member.description}
                  subDescription={null}
                  icon="linkedin"
                  url=""
                />
              </div>
            );
          })}
        </div>
      </div>
    </CommonLayout>
  );
}
