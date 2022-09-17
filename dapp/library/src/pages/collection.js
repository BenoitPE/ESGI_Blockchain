import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from '../components/Navbar';
import { Card } from "../components/Card";

const CollectionPage = () => {
    return (
        <main>
            <Navbar />

            <div className="container text-center">
                <div className="row mt-4 mb-4">
                    <div className="col">
                        <h2>My collection</h2>
                    </div>
                </div>

                <div className="row mb-5">
                    <Card title={'NFT 1'} author={'Alfred'} state={'Neuf'} url={"https://wallpaperaccess.com/full/138728.jpg"} />
                    <Card title={'NFT 2'} author={'Alfred'} state={'Neuf'} url={"https://images.toucharger.com/img/graphiques/fonds-d-ecran/amour-amitie/coeur/coeur-full-hd.74678.jpg"} />
                    <Card title={'NFT 3'} author={'Alfred'} state={'Neuf'} url={"https://wallpaper.dog/large/10772206.jpg"} />
                </div>
            </div>
        </main>
    );
};

export default CollectionPage;