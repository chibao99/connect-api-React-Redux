import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class ProductItem extends Component {
    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'warning' : 'primary';
        return (
            <tr>
                <th scope="row">{index + 1}</th>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}$</td>
                <td>
                    <span className={`badge badge-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link to={`/product/${product.id}/edit`} className="btn btn-primary mr-2">Sửa</Link>
                    <button onClick={() => { this.onRemove(product.id) }} type="button" className="btn btn-danger ml-2">Xóa</button>
                </td>
            </tr>
        );
    }
    onRemove = (id) => {
        if (confirm('Bạn chắc chắn muốn xóa không ?')) { //eslint-disable-line
            this.props.onRemove(id);
        }
    }
}

export default ProductItem;