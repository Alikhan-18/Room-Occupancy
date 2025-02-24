import React from "react";
import { Menu, Segment, Grid, Button } from "semantic-ui-react";
import pwclogo from "../../../assets/images/pwclogo.png";
import { Link } from "react-router-dom";
import "../../../App.css";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { handleSignOut } from "../../../pages/auth/Helpers";

export interface INavbarProps {}

interface NavBarPath {
  url: string;
  name: string;
}

export function Navbar(props: INavbarProps) {
  const { authStatus } = useAuthenticator((context) => [context.authStatus]);

  const navBarPaths: NavBarPath[] = [
    {
      url: "/",
      name: "Home",
    },
    {
      url: "/learn",
      name: "Explore",
    },
    {
      url: "/about",
      name: "About Us",
    },
    {
      url: "/analytics",
      name: "Insights",
    },
  ];

  return (
    <nav className="navbarContainer">
      <Segment basic attached size="mini" fluid="true">
        <Grid>
          <Grid.Column width={6}>
            <img alt="logo" width={"300rem"} src={pwclogo} />
          </Grid.Column>
          <Grid.Column textAlign="center" width={5}>
            <Menu centered="true" basic="true" secondary>
              {navBarPaths.map((navPath) => {
                return (
                  <Link key={navPath.name} to={navPath.url}>
                    <Menu.Item role="menuitem">{navPath.name}</Menu.Item>
                  </Link>
                );
              })}
              {authStatus === "authenticated" && (
                <Link to="/admin_dashboard">
                  <Menu.Item role="menuitem">Admin Console</Menu.Item>
                </Link>
              )}
            </Menu>
          </Grid.Column>
          <Grid.Column textAlign="right" width={5}>
            {authStatus === "authenticated" ? (
              <Button color="red" onClick={handleSignOut}>
                Logout
              </Button>
            ) : (
              <Link to="/login">
                <Button color="red">Login</Button>
              </Link>
            )}
          </Grid.Column>
        </Grid>
      </Segment>
    </nav>
  );
}
