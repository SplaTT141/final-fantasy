import { Link } from "react-router";

export function AdminCategoriesTable() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Url</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Movies count</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><Link to="/admin/categories/action">Action</Link></td>
                                    <td>action</td>
                                    <td>Action movies are Link film genre characterized by fast-paced, thrilling, and
                                        intense sequences of physical feats, combat, and excitement</td>
                                    <td>0</td>
                                    <td><span className="badge text-bg-success">Published</span></td>
                                    <td className="d-flex gap-3">
                                        <Link className="btn btn-primary btn-sm" to="/admin/categories/action/edit">Edit</Link>
                                        <button data-url="action" className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}