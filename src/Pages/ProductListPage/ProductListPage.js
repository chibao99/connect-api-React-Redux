import React, { Component } from 'react';
import ProductList from '../../Components/ProductList/ProductList';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { actFetchProductsRequest, actDeleteProductRequest } from './../../Actions/index';

class ProductListPage extends Component {

    componentDidMount() {
        this.props.fetchAllProducts();
    }

    onRemove = (id) => {
        this.props.deleteProduct(id);
    }

    findIndex = (products, id) => {
        var result = -1;
        products.forEach((product, index) => {
            if (product.id === id) {
                result = index;
            }
        });
        return result;
    }

    render() {
        var { products } = this.props;
        return (
            <div className="col-12">
                <Link to="/product-add" className="btn btn-primary mt-3">Thêm Sản Phẩm</Link>
                <ProductList >
                    {this.showProducts(products)}
                </ProductList>
            </div>
        );
    }
    showProducts = (products) => {
        var result = null;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return (
                    <ProductItem
                        key={index}
                        product={product}
                        index={index}
                        onRemove={this.onRemove}
                    />
                )
            })
        }
        return result;
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchAllProducts: () => {
            dispatch(actFetchProductsRequest());
        },
        deleteProduct: (id) => {
            dispatch(actDeleteProductRequest(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);