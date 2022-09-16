import React from "react";
import { Link } from "react-router-dom";

const CollectionPage = () => {
    return (
        <main>
            <div className="container text-center">
                <div className="row mt-4">
                    <div className="col">
                        <h2>My collection</h2>
                    </div>
                </div>
            </div>
            <div>
                <Link to="/library" >Go to Library</Link>
            </div>
        </main>
    );
};

export default CollectionPage;