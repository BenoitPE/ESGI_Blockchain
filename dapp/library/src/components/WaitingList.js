export function WaitingList() {
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
                            <tr>
                                <td>0xe48190DC4855E51799C219d7D5E7EFD92d0693A5</td>
                                <td>
                                    <button className="btn btn-primary">Accept</button>
                                </td>
                            </tr>
                            <tr>
                                <td>0x662149265Eb0B5df7b9a54d957734cd5fE2a78e0</td>
                                <td>
                                    <button className="btn btn-primary">Accept</button>
                                </td>
                            </tr>
                            <tr>
                                <td>0x63BdB8E8D539E72A8Dd887F9E4F6D653c14f40cc</td>
                                <td>
                                    <button className="btn btn-primary">Accept</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}