import React, { useDebugValue } from "react";
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/neet/online-coaching-class-11" element={<Class11Program />}/>
            <Route path="/neet/online-coaching-class-12" element={<Class12Program />}/>
            <Route path="/" element={<Landing />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
function Layout() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "green",
      }}
    >
      <Header />
      <div style={{ height: "90vh", backgroundColor: "red" }}>
        <Outlet />
      </div>
    </div>
  );
}
function Header() {
  return (
    <div>
      <Link to="/">Allen home page</Link>
      <Link to="/neet/online-coaching-class-11">Class 11 page</Link>
      <Link to="/neet/online-coaching-class-12">Class 12 page</Link>
    </div>
  );
}
function ErrorPage() {
  return (
    <div>
      <div>Cannot find the address you are looking for</div>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
}
function Class11Program() {
  return <div>class 11 program</div>;
}
function Class12Program() {
  return <div>class 12 program</div>;
}
function Landing() {
  return <div>welcome to the landing page of allen!</div>;
}

export default App;
