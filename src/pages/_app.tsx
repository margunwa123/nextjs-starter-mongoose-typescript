import "bootstrap/dist/css/bootstrap.min.css";

// The layout component
// this is executed on server and on the client
function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
