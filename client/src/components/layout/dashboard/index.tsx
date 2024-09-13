import React from "react";
import "./Dashboard.css";
import { Grid } from "semantic-ui-react";
import { AnalyticsSidebar } from "../../analytic/AnalyticsSidebar";
import { CommonLayout } from "../common/index";

type Props = {
  children: React.ReactNode;
};

export const DashboardLayout = ({ children }: Props) => {
  return (
    <CommonLayout>
      <Grid className="dashboardContainer">
        <Grid.Column className="sidebarContainer" width={2}>
          <AnalyticsSidebar />
        </Grid.Column>
        <Grid.Column width={14}>{children}</Grid.Column>
      </Grid>
    </CommonLayout>
  );
};
