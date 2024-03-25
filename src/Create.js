import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Create = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        title: '',
        description: '',
        pirice: '',
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .post('http://localhost:3000/products', values)
            .then((res) => {
                console.log(res);
                navigate('/');
            })
            .catch((err) => console.log(err));
    };

    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="w-50 border bg-white shadow  pb-5 rounded">
                <p className="border-bottom p-3 pb-3 bg-secondary">Thêm sản phẩm</p>
                <form onSubmit={handleSubmit}>
                    <div className="p-2 mb-2">
                        <label className="p-2" htmlFor="name">
                            Tên sản phẩm
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Nhập tên sản phẩm"
                            onChange={(e) => setValues({ ...values, title: e.target.value })}
                        />
                    </div>
                    <div className="p-2 mb-2">
                        <label className="p-2" htmlFor="price">
                            Giá
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="price"
                            placeholder="Nhập Giá"
                            onChange={(e) => setValues({ ...values, price: e.target.value })}
                        />
                    </div>
                    <div className="p-2 mb-2">
                        <label className="p-2" htmlFor="description">
                            Mô Tả
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            placeholder="Nhập Mô Tả"
                            onChange={(e) => setValues({ ...values, description: e.target.value })}
                        />
                    </div>
                    <button className="mx-2 btn btn-success">Thêm</button>
                    <Link to="/" className="btn btn-primary mx-3">
                        Trở lại
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default Create;
