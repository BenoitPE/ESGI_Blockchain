import '../App.css';
import { Card } from '../components/Card';
import { CreateBookForm } from '../components/CreateBookForm';
import { Web3Button } from '../components/Web3Button';
import { Navbar } from '../components/Navbar';
import { useState } from 'react';
import React from "react";
import { Link } from "react-router-dom";

const MarketplacePage = () => {
    const [hideAlert, setHideAlert] = useState(true);
    const [alertText, setAlertText] = useState("Nothing previously written");

    return (
        <main>
            <Navbar />

            <div className="container text-center">
                <div className="row mt-4 mb-4">
                    <div className="col">
                        <h2>Marketplace</h2>
                    </div>
                </div>

                <div className="row">
                    <div className="col-10 offset-1 mt-2" hidden={hideAlert}>
                        <div className="alert alert-info" role="alert">
                            {alertText}
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <Card title={'NFT 1'} author={'Alfred'} state={'Neuf'} purchasable="true" url={"https://wallpaperaccess.com/full/138728.jpg"} />
                    <Card title={'NFT 2'} author={'Alfred'} state={'Neuf'} purchasable="true" url={"https://images.toucharger.com/img/graphiques/fonds-d-ecran/amour-amitie/coeur/coeur-full-hd.74678.jpg"} />
                    <Card title={'NFT 3'} author={'Alfred'} state={'Neuf'} purchasable="true" url={"https://wallpaper.dog/large/10772206.jpg"} />
                    <Card title={'NFT 4'} author={'Alfred'} state={'Neuf'} purchasable="true" url={"https://www.pixelstalk.net/wp-content/uploads/2016/07/1080p-Full-HD-Images.jpg"} />
                    <Card title={'NFT 5'} author={'Alfred'} state={'Neuf'} purchasable="true" url={"https://wallpaperaccess.com/full/138730.jpg"} />
                </div>

            </div>
        </main>
    );
}

export default MarketplacePage;
