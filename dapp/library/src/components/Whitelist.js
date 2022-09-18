export function Whitelist() {
    return (
        <>
            <div className="row mt-4 mb-4">
                <div className="col">
                    <h4>Whitelist</h4>
                </div>
            </div>

            <div className="row">
                <div className="col-12">
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th className="col-9">Address</th>
                                <th className="col-3">Remove from whitelist</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0x662149265Eb0B5df7b9a54d957734cd5fE2a78e0</td>
                                <td>
                                    <button className="btn btn-danger">Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}