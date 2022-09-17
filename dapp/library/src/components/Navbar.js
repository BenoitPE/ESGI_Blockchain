import { Web3Button } from './Web3Button';

export function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container text-center">
                <a class="navbar-brand" href="/">Blockchain Library 📚</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <a class="nav-item nav-link" href="/Marketplace">Marketplace</a>
                        <a class="nav-item nav-link" href="/Collection">Collection</a>
                        <a class="nav-item nav-link" href="/Administration">Administration</a>
                    </div>
                </div>
                <span class="navbar-text">
                    <Web3Button />
                </span>
            </div>
        </nav>
    )
}