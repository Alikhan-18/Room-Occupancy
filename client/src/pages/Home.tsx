import * as React from "react";
import { Header, Image, Button, Segment } from "semantic-ui-react";
import dashboard from "../assets/images/dashboard.png";
import learn from "../assets/images/learn_2.png";
import solution from "../assets/images/solution_overview.png";
import "../App.css";
import { Link } from "react-router-dom";
import { CommonLayout } from "../components/layout/common";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  return (
    <CommonLayout>
      <div className="container">
        <Header as="h1" textAlign="center" color="red">
          <Header.Content>Adaptive Workspace Occupancy</Header.Content>
          <Header.Subheader color="red">
            <i >Adaptive Workspaces for everyone</i>
          </Header.Subheader>
        </Header>
        <Segment basic>
          <Image className="homeImage" centered size="big" src={solution} />
        </Segment>
        <Link to="analytics">
          <Button circular color="red">
            Analyze Insights
          </Button>
        </Link>
      </div>
    </CommonLayout>
  );
}
