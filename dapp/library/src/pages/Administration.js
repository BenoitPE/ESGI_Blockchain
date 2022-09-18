import React from "react";
import { Navbar } from '../components/Navbar';
import { Whitelist } from "../components/Whitelist";
import { WaitingList } from "../components/WaitingList";
import { CreateBookForm } from "../components/CreateBookForm";

const AdministrationPage = () => {

    return (
        <main>
            <Navbar />

            <div className="container text-center">
                <div className="row mt-4 mb-4">
                    <div className="col">
                        <h2>Administration</h2>
                    </div>
                </div>

                <CreateBookForm />

                <WaitingList />

                <Whitelist />
            </div>
        </main>
    );
}

export default AdministrationPage;