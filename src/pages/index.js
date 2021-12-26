import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateProject from "../components/CreateProject";
import Layout from "../layout/Layout";
import Auth from "./Auth";
import Home from "./home/Home";
import { injectStyle } from "react-toastify/dist/inject-style";


const index = () => {
    if (typeof window !== "undefined") {
      injectStyle();
    }

  return (
    <>
      <Route path={["/", "/create"]}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={CreateProject} />
            <Route exact path="/edit/:id" component={CreateProject} />
            <Route exact path="/auth" component={Auth} />
          </Switch>
        </Layout>
      </Route>
    </>
  );
};

export default index;
