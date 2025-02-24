import * as React from "react";
import { Button, Icon, List, SemanticICONS } from "semantic-ui-react";
import { Link } from "react-router-dom";
import { useAuthenticator } from "@aws-amplify/ui-react";

import "../../pages/analytics/Analytics.css";

export interface IAnalyticsSidebarProps {}

interface IAnalyticsItems {
  category: analyticType;
  name: string;
  icon: SemanticICONS;
  link: string;
}

export enum analyticType {
  analytics = "analytics",
  locations = "location",
}

// add values for side bar here
const analyticsItems: IAnalyticsItems[] = [
  {
    category: analyticType.analytics,
    name: "Occupancy",
    icon: "info circle",
    link: "/analytics",
  },
  {
    category: analyticType.analytics,
    name: "Trends",
    icon: "chart area",
    link: "/trends",
  },
];

export function AnalyticsSidebar(props: IAnalyticsSidebarProps) {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);
  return (
    <List>
      {authStatus === "authenticated" && (
        <Link to="/admin_dashboard">
          <Button color="red" fluid icon labelPosition="left">
            <Icon name="dashboard" />
            Dashboard
          </Button>
        </Link>
      )}
      <br />
      <List.Item>
        <List.Header>INSIGHTS</List.Header>
        <List.Content>
          <List>
            {analyticsItems
              .filter((item) => item.category === analyticType.analytics)
              .map((value, key) => {
                return (
                  <Link to={value.link}>
                    <List.Item key={key}>
                      <List.Icon color="red" name={value.icon} />
                      <List.Content as="a">{value.name}</List.Content>
                    </List.Item>
                  </Link>
                );
              })}
          </List>
        </List.Content>
      </List.Item>
      {/* <List.Item>
        <List.Header>LOCATIONS</List.Header>
        <List.Content>
          <List>
            {analyticsItems
              .filter((item) => item.category === analyticType.locations)
              .map((value, key) => {
                return (
                  <Link to={value.link}>
                    <List.Item key={key}>
                      <List.Icon color="red" name={value.icon} />
                      <List.Content as="a">{value.name}</List.Content>
                    </List.Item>
                  </Link>
                );
              })}
          </List>
        </List.Content>
      </List.Item> */}
    </List>
  );
}
