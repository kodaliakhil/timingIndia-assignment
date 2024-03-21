import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './Header.css'
const Header = () => {
  return (
    <Navbar
      expand="lg"
      className="w-100 d-flex justify-content-between"
      style={{ backgroundColor: "rgb(24, 26, 27)", height: 100 }}
    >
      <Navbar.Brand href="/">
        <img
          height={36}
          alt="IFinish."
          src="https://www.ifinish.in/images/logo.png"
          style={{
            boxSizing: "border-box",
            border: "0px",
            verticalAlign: "middle",
            borderRadius: "8px",
            padding: "0px 6px",
            display: "block",
            borderColor: "rgb(119, 110, 98)",
            backgroundColor: "rgb(24, 26, 27)",
            color: "rgb(232, 230, 227)",
            cursor: "pointer",
            fontSize: "18px",
            font: "18px / 20px Montserrat, sans-serif",
          }}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav>
        {/* <Nav.Link href="#home"> */}
        <div
          className="col-md-6 col-sm-12 col-xs-12"
          style={{
            boxSizing: "border-box",
            position: "relative",
            minHeight: "1px",
            cssFloat: "left",

            padding: "0px",
            paddingRight: "0px",
            paddingLeft: "0px",
            borderColor: "rgb(119, 110, 98)",
            backgroundColor: "rgb(24, 26, 27)",
            color: "rgb(232, 230, 227)",
          }}
        >
          <div
            className="pull-right"
            style={{
              boxSizing: "border-box",
              borderColor: "rgb(119, 110, 98)",
              backgroundColor: "rgb(24, 26, 27)",
              color: "rgb(232, 230, 227)",
              cssFloat: "right",
            }}
          >
            <span
              className="userprofile"
              style={{
                boxSizing: "border-box",
                userSelect: "none",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 600,
                padding: "6px 1px",
                display: "table-cell",
                borderColor: "rgb(119, 110, 98)",
                backgroundColor: "rgb(24, 26, 27)",
                color: "rgb(232, 230, 227)",
              }}
            >
              <a
                href="https://www.ifinish.in/login"
                style={{
                  boxSizing: "border-box",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "6px 1px",
                  display: "table-cell",
                  borderColor: "rgb(119, 110, 98)",
                  backgroundColor: "rgb(24, 26, 27)",
                  color: "rgb(232, 230, 227)",
                }}
              >
                LOGIN
              </a>
            </span>
            <span
              style={{
                boxSizing: "border-box",
                userSelect: "none",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 600,
                padding: "6px 1px",
                display: "table-cell",
                borderColor: "rgb(119, 110, 98)",
                backgroundColor: "rgb(24, 26, 27)",
                color: "rgb(232, 230, 227)",
              }}
            >
              /
            </span>
            <span
              className="userprofile"
              style={{
                boxSizing: "border-box",
                userSelect: "none",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 600,
                padding: "6px 1px",
                display: "table-cell",
                borderColor: "rgb(119, 110, 98)",
                backgroundColor: "rgb(24, 26, 27)",
                color: "rgb(232, 230, 227)",
              }}
            >
              <a
                href="https://www.ifinish.in/signup"
                style={{
                  boxSizing: "border-box",
                  textDecoration: "none",
                  fontSize: "15px",
                  fontWeight: 600,
                  padding: "6px 1px",
                  display: "table-cell",
                  borderColor: "rgb(119, 110, 98)",
                  backgroundColor: "rgb(24, 26, 27)",
                  color: "rgb(232, 230, 227)",
                }}
              >
                SIGN UP
              </a>
            </span>
          </div>
        </div>
        {/* </Nav.Link> */}
      </Nav>
    </Navbar>
  );
};

export default Header;
