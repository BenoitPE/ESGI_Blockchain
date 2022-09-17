import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from '../components/Navbar';

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

                <div>
                    <Link to="/Marketplace" >Go to Library</Link>
                </div>
            </div>
        </main>
    );
};

export default CollectionPage;