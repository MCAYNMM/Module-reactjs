import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    const [data, setData] = useState([]);
    const [reload, setReload] = useState([1, 2, 3]);
    const navigate = useNavigate();

    const handleDelete = (id) => {
        const confirm = window.confirm('Bạn chắc chắn muốn xóa sản phẩm này');
        if (confirm) {
            axios
                .delete(`http://localhost:3000/products/` + id)
                .then((res) => {
                    window.location.reload(true);
                })
                .catch((err) => console.log(err));
        }
    };
    useEffect(() => {
        axios
            .get('http://localhost:3000/products')
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="d-flex flex-column justify-content-center align-items-center bg-light vh-100">
            <h1>List of user</h1>
            <div className="w-75 rounded bg-white border shadow p-4">
                <div className="d-flex justify-content-start">
                    <Link to="/create" className="btn btn-success">
                        Thêm mới
                    </Link>
                </div>
                <table className="table">
                    <thead>
                        <tr className="bg-secondary">
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>
                                    <Link
                                        style={{ textDecoration: 'none' }}
                                        className="text-primary"
                                        to={`/detail/${item.id}`}
                                    >
                                        {item.title}
                                    </Link>
                                </td>
                                <td>{item.description}</td>
                                <td>{item.price}</td>
                                <td>
                                    <Link to={`/update/${item.id}`} className="mx-2 btn btn-primary">
                                        Edit
                                    </Link>
                                    <button onClick={(e) => handleDelete(item.id)} className="btn btn-danger">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
