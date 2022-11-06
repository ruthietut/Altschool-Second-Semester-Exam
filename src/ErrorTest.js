import GoogleLogin from "react-google-login";
import { Helmet } from "react-helmet-async";
function ErrorTest() {
  return (
    <>
      <Helmet>
        <title>ErrorTest</title>
        <meta name="description" content="test our error boundary" />
        <link rel="canonical" href="/ErrorTest" />
      </Helmet>
      <h1>Test Error</h1>
      <GoogleLogin />
    </>
  );
}

export default ErrorTest;
