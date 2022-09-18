import React, { useState } from 'react';

export function WaitingList(props) {
    const { addresses } = props;
    const rows = useState([]);

    for (let i = 0; i < addresses.length; i++) {
        rows.push(<tr><td>{addresses[i]}</td><td><button className="btn btn-primary">Accept</button></td></tr>);
    }

    return (
        <>
            <div className="row mt-4 mb-4">
                <div className="col">
                    <h4>Waiting list</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="col-9">Address</th>
                                <th className="col-3">Add in whitelist</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}