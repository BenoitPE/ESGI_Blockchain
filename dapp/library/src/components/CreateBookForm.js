import { useState } from 'react';
import { mintToken } from '../Web3Client';

export function CreateBookForm() {
    const [bookName, setBookName] = useState("");
    const [bookAuthor, setBookAuthor] = useState("");
    const [bookState, setBookState] = useState("0");
    const [bookDescription, setBookDescription] = useState("");
    const [bookTokenUri, setBookTokenUri] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        mintToken(bookName, bookAuthor, bookState, bookDescription, bookTokenUri).then(tx => {
            console.log(tx.transactionHash);
            setBookName("");
            setBookAuthor("");
            setBookState("0");
            setBookDescription("");
            setBookTokenUri("");
        }).catch(err => {
            console.log(err);
        });

    }

    return (
        <div className="card mt-5 mb-5 ">
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <h4 className="mb-3">Add a new book</h4>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Nom du livre" value={bookName} onChange={(e) => setBookName(e.target.value)} required />
                        <input type="text" className="form-control" placeholder="Auteur du livre" value={bookAuthor} onChange={(e) => setBookAuthor(e.target.value)} required />
                        <select className="form-control" value={bookState} onChange={(e) => setBookState(e.target.value)} required>
                            <option value="0">NEW</option>
                            <option value="1">VERYGOOD</option>
                            <option value="2">GOOD</option>
                            <option value="3">DAMAGED</option>
                        </select>
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Description du livre" value={bookDescription} onChange={(e) => setBookDescription(e.target.value)} required />
                    </div>

                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Token URI du livre" value={bookTokenUri} onChange={(e) => setBookTokenUri(e.target.value)} required />
                    </div>

                    <button className='btn btn-primary' type="submit">Envoyer</button>
                </form>
            </div>
        </div>
    )
}