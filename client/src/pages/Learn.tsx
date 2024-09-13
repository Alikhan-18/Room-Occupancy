import * as React from "react";
import { Header, Grid, Image, Divider, Icon } from "semantic-ui-react";
import "../App.css";
import learn from "../assets/images/learn_2.png";
import solution from "../assets/images/solution_overview.png";
import { CommonLayout } from "../components/layout/common";

export interface ILearnProps {}

const YoutubeEmbed = (embedId: any) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

export function Learn(props: ILearnProps) {
  return (
    <CommonLayout>
      <div className="container">
        <Header color="red" as="h1" textAlign="center">
          <Header.Content>Explore </Header.Content>
        </Header>
        <br />
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <b>
                Have you ever struggled to find a quiet study spot or an available table in a busy public space, 
                only to discover that every place is already occupied?
              </b>
              <br />
              In our highly connected world, understanding crowd density before arriving at a location remains a challenge. 
              To address this, we’ve developed an advanced IoT solution featuring an edge device with a camera 
              that transmits images for analysis by our deep learning model. This system stores occupancy data in a database 
              and presents it through a user-friendly React-based web application..
              <br />
              With our solution, users can effortlessly access real-time occupancy stats 
              and view historical trends from the past 3 months. Administrators can also monitor specific sub-areas 
              and evaluate associated costs, enhancing decision-making and improving space management.
              <br />
              <Divider />
              <Image size="big" src={learn} />
            </Grid.Column>
            <Grid.Column textAlign="center">
            <Image size="huge" src={solution} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    </CommonLayout>
  );
}
