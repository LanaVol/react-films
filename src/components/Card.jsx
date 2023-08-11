function Card({ movie }) {
  const { Poster, Title, Type, Year } = movie;
  return (
    <div className="row">
      <div className="col s12 m12">
        <div className="card">
          <div className="card-image">
            <img src={Poster} />
            <span className="card-title">{Title}</span>
          </div>
          <div
            className="card-content"
            style={{
              padding: "15px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p>{Type}</p>
            <p>{Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Card };
