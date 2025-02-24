import React from "react";
import { Header } from "semantic-ui-react";
import "../../App.css";
import { CommonLayout } from "../../components/layout/common";

import { Amplify } from "aws-amplify";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
/*import awsExports from "../../aws-exports";*/
import { AdminDashboard } from "../admin/adminDashboard";
import components from "../../components/auth/components";

/*Amplify.configure(awsExports);*/

export function Login() {
  const { route } = useAuthenticator((context) => [context.route]);

  if (route === "authenticated") return <AdminDashboard />;

  return (
    <CommonLayout>
      <div className="container">
        <Header color="red" as="h1" textAlign="center">
          <Header.Content>Welcome</Header.Content>
          <Header.Subheader color="red">Login with Username</Header.Subheader>
        </Header>
        <Authenticator hideSignUp={true} components={components} />
      </div>
    </CommonLayout>
  );
}
