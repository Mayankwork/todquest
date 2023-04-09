
import "bootstrap/dist/css/bootstrap.min.css";
import InsideCard from "./InsideCard";

function Container() {
  return (
    <div
      className="rounded shadow-lg"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        margin: "10vh calc(50% - 40%)",
        width: "80%",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(100deg, rgba(102,150,149) 50%, rgba(255,186,51) 50.25%)",
            zIndex: 1,
          }}
        />
        <div>
          <div className="row p-4" style={{ width: "100%" }}>
            <div
              className="col-xs-0 col-sm-4 col-md-6 col-lg-6 "
              style={{ height: "100%" }}
            ></div>
            <div
              className="col-xs-12 col-sm-8 col-md-6  col-lg-6 "
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "end",
                height: "50vh",
                zIndex: 2,
              }}
            >
              <InsideCard />
            </div>
            <div
              className="col-xs-0 col-sm-4 col-md-6 col-lg-6 my-2"
              style={{ height: "100%" }}
            ></div>

            <div
              className=" col-xs-12 col-sm-8 col-md-6  col-lg-6"
              style={{
                display: "flex",
                zIndex: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ color: "white", fontWeight: "400" }}>
                Don't have an account yet ?
              </div>
            </div>
            <div
              className="col-xs-0 col-sm-4 col-md-6 col-lg-6 "
              style={{ height: "100%" }}
            ></div>

            <div
              className=" col-xs-12 col-sm-8 col-md-6  col-lg-6"
              style={{
                display: "flex",
                zIndex: 2,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ color: "rgb(26,83,92)" }}>Create Account</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Container;
