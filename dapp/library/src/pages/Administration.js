import React from "react";
import { Navbar } from '../components/Navbar';
import { Whitelist } from "../components/Whitelist";
import { WaitingList } from "../components/WaitingList";
import { CreateBookForm } from "../components/CreateBookForm";

const AdministrationPage = () => {

    let addresses = ["0xe48190DC4855E51799C219d7D5E7EFD92d0693A5", "0x662149265Eb0B5df7b9a54d957734cd5fE2a78e0"];

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

                <WaitingList addresses={addresses} />

                <Whitelist />
            </div>
        </main>
    );
}

export default AdministrationPage;