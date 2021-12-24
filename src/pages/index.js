import React from "react";
import { Route, Switch } from "react-router-dom";
import CreateProject from "../components/CreateProject";
import Layout from "../layout/Layout";
import Home from "./home/Home";

const index = () => {
  return (
    <>
      <Route path={["/", "/create"]}>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/create" component={CreateProject} />
          </Switch>
        </Layout>
      </Route>
    </>
  );
};

export default index;
