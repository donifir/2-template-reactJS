import React from "react";

export default function FooterComponent() {
  return (
      <div className="wrapper">
        <footer className="main-footer">
          <strong>
            Copyright &copy; 2014-2021{" "}
            <a href="https://adminlte.io">AdminLTE.io</a>.
          </strong>
          All rights reserved.
          <div className="float-right d-none d-sm-inline-block">
            <b>Version</b> 3.1.0
          </div>
        </footer>
      </div>
  );
}
