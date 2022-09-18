import { Web3Button } from './Web3Button';

export function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container text-center">
                <a className="navbar-brand" href="/">Blockchain Library 📚</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-item nav-link" href="/Marketplace">Marketplace</a>
                        <a className="nav-item nav-link" href="/Collection">Collection</a>
                        <a className="nav-item nav-link" href="/Administration">Administration</a>
                    </div>
                </div>
                <span className="navbar-text">
                    <Web3Button />
                </span>
            </div>
        </nav>
    )
}