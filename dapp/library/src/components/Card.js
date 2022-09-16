export function Card(props) {
    const { title, author, description, state, url } = props;
    return (
        <div className="col-3">
            <div className="card mb-3">
                <img className="card-img-top img-fluid" src={url} alt="Card image cap" />
                <div className="card-body">
                    <h6 className="card-text">{title}</h6>
                    <p className="card-text">de {author}</p>
                    <button className="btn btn-primary">Acheter</button>
                </div>
            </div>
        </div>
    );
}