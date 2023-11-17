function Card({ children, title }) {
  return (
    <div className="card">
      <div className="card-content">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
}

export default function Gallery() {
  return (
    <Card title="Photo">
      <div className="card">
        <div className="card-content">
          <img
            className="avatar"
            src="https://i.imgur.com/OKS67lhm.jpg"
            alt="Aklilu Lemma"
            width={70}
            height={70}
          />
        </div>
      </div>

      <div className="card">
        <div className="card-content">
          <h1>About</h1>
          <p>
            Aklilu Lemma was a distinguished Ethiopian scientist who discovered
            a natural treatment to schistosomiasis.
          </p>
        </div>
      </div>
    </Card>
  );
}
