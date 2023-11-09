function Card({ movie }) {
  const { Poster, Title, Type, Year } = movie;
  return (
    <div className="row" style={{ height: "100%" }}>
      <div className="col s12 m12" style={{ height: "100%" }}>
        <div
          className="card"
          style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div className="card-image waves-effect waves-block waves-light">
            {Poster === "N/A" ? (
              <img
                className="activator"
                src={`http://via.placeholder.com/280x350?text=${Title}`}
                style={{
                  minHeight: "450px",
                  height: "100%",
                  display: "block",
                }}
              />
            ) : (
              <img
                src={Poster}
                style={{
                  minHeight: "450px",
                  height: "100%",
                  display: "block",
                }}
              />
            )}
          </div>

          <div>
            <span
              className="card-title activator grey-text text-darken-4"
              style={{ fontWeight: "500" }}
            >
              {Title}
            </span>
            <div
              className="card-content"
              style={{
                padding: "15px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                <i className="small material-icons" style={{ color: "grey" }}>
                  palette
                </i>
                {Type}
              </p>

              <p>{Year}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card };
