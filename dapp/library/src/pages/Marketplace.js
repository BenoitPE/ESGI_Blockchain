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
                    <Card title={'test 1'} author={'Alfred'} state={'Neuf'} url={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} purchasable="true" />
                    <Card title={'test 2'} author={'Alfred'} state={'Neuf'} url={"https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive-960x540.jpg"} purchasable="true" />
                    <Card title={'test 3'} author={'Alfred'} state={'Neuf'} url={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} purchasable="true" />
                    <Card title={'test 4'} author={'Alfred'} state={'Neuf'} url={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} purchasable="true" />
                    <Card title={'test 5'} author={'Alfred'} state={'Neuf'} url={"https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"} purchasable="true" />
                </div>

            </div>
        </main>
    );
}

export default MarketplacePage;
