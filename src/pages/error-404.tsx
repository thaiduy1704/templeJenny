import React from "react";
import Layout from "../layouts";
import ErrorContainer from "../containers/error-404";
import Content from "../layouts/content";

const ErrorNotFound: React.FC = () => {
  return (
    <Layout>
      <Content fullHeight align="center">
        <ErrorContainer />
      </Content>
    </Layout>
  );
};

export default ErrorNotFound;
