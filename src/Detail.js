import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const Detail = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios
            .get('http://localhost:3000/products/' + id)
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);
    return (
        <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
            <div className="card w-40 " style={{ width: '18rem' }}>
                <div className="p-3 bg-secondary card-header">Featured</div>
                <div className="p-3 mb-1">
                    <h2>Tên sản phẩm {data.title}</h2>
                </div>
                <div className="p-3 mb-1">
                    <p>Mô tả: {data.description}</p>
                    <p>Giá: {data.price} vnd/$</p>
                </div>
                <div className="p-3 mb-1">
                    <Link to="/" className="btn btn-primary">
                        Trở lại{' '}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Detail;
