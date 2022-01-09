import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import CreateProject from "../components/CreateProject";
import Layout from "../layout/Layout";
import Auth from "./Auth";
import Home from "./home/Home";
import { injectStyle } from "react-toastify/dist/inject-style";
import LoginLayout from "../layout/LoginLayout";
import LandingPage from "./landingpage/Index";
import Login from "./login/Login";
import Signup from "./signup/Signup";

const index = () => {
  if (typeof window !== "undefined") {
    injectStyle();
  }

  return (
    <>
      {/* <Route path={["/", "/create"]}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={CreateProject} />
            <Route exact path="/edit/:id" component={CreateProject} />
            <Route exact path="/auth" component={Auth} />
            <Redirect to="/" />
          </Switch>
        </Layout>
      </Route> */}

      <Route path={["/"]}>
        <LoginLayout>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Redirect to="/" />
          </Switch>
        </LoginLayout>
      </Route>
    </>
  );
};

export default index;
