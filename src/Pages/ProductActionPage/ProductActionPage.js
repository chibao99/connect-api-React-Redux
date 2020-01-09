import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddProductRequest, actEditProductRequest, actUpdateProductRequest } from '../../Actions';
class ProductActionPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            txtTenSanPham: '',
            txtGiaSanPham: '',
            txtTrangThai: ''
        }
    }

    componentDidMount() {
        var { match } = this.props;
        if (match) {
            var id = match.params.id;
            this.props.onEditProduct(id);
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps && nextProps.itemEdit) {
            var { itemEdit } = nextProps;
            this.setState({
                id: itemEdit.id,
                txtTenSanPham: itemEdit.name,
                txtGiaSanPham: itemEdit.price,
                txtTrangThai: itemEdit.status
            });
        }
    }
    getValueProduct = (e) => {
        var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        var name = e.target.name;
        this.setState({
            [name]: value
        });
    }
    onSave = (e) => {
        e.preventDefault();
        var { history } = this.props;
        var product = {
            id: this.state.id,
            name: this.state.txtTenSanPham,
            price: this.state.txtGiaSanPham,
            status: this.state.txtTrangThai
        }
        if (this.state.id) {
            this.props.onUpdateProduct(product)
        } else {
            this.props.onAddProduct(product);
        }
        history.goBack()
    }

    render() {
        return (
            <div className="col-6">
                <form onSubmit={this.onSave}>
                    <div className="form-group">
                        <label>Tên Sản Phẩm: </label>
                        <input onChange={this.getValueProduct} value={this.state.txtTenSanPham} type="text" className="form-control" name="txtTenSanPham" />
                    </div>

                    <div className="form-group">
                        <label>Giá Sản Phẩm: </label>
                        <input onChange={this.getValueProduct} value={this.state.txtGiaSanPham} type="number" className="form-control" name="txtGiaSanPham" />
                    </div>

                    <div className="btn-group">
                        <div className="form-group">
                            <label>Trạng Thái: </label>
                        </div>
                        <div className="form-check ml-3">
                            <label className="form-check-label">
                                <input name="txtTrangThai" onChange={this.getValueProduct}
                                    value={this.state.txtTrangThai} type="checkbox" className="form-check-input"

                                />
                                Còn Hàng
                      </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Lưu Lại</button>
                </form>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        itemEdit: state.itemEdit
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddProduct: (product) => {
            dispatch(actAddProductRequest(product))
        },
        onEditProduct: (id) => {
            dispatch(actEditProductRequest(id))
        },
        onUpdateProduct: (product) => {
            dispatch(actUpdateProductRequest(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductActionPage);