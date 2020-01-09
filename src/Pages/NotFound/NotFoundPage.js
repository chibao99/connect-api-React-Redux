import React, { Component } from 'react';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="container">
                <div className="alert alert-warning" role="alert">
                    <strong>404 - Không Tìm Thấy Trang</strong>
                </div>
            </div>
        );
    }
}

export default NotFoundPage;