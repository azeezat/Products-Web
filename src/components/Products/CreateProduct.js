import React, { Component } from 'react';
import { requestsService } from '../../services/requests.service';
import { SUCCESS_RESPONSE } from '../../constants/constants';
import { GET_ALL_PRODUCTS } from '../../constants/apis';
import './CreateProduct.css'

class CreateProduct extends Component {

    state = {
        products: []
    }
    componentDidMount() {
        this.fetchAllProducts()
    }

    fetchAllProducts = () => {
        return requestsService.makeGetRequest(GET_ALL_PRODUCTS)
            .then(res => {
                if (res.status === SUCCESS_RESPONSE) {
                    this.setState({ products: res.response.data })
                }
            })
            .catch(error => {
            });
    }

    CreateProduct = (e) => {
        e.preventDefault()
        const { name, description, price, image, category, colour } = this.state
        const payload = {
            name,
            description,
            price,
            image,
            category,
            colour
        }

        return requestsService.makePostRequest(GET_ALL_PRODUCTS, payload)
            .then(res => {
                if (res.status === SUCCESS_RESPONSE) {
                    this.setState({ products: res.response.data })
                }
            })
            .catch(error => {
            });
    }

    render() {
        return (
            <div>
                <div class="container">

                </div>

                <div class="form">
                    <h2>Create A new Product</h2>
                    <form onSubmit={this.CreateProduct}>
                        <div class="form-inner">
                            <input type="text" placeholder="Name" name="name" />
                            <input type="text" placeholder="Description" name="description" />
                            <input type="number" placeholder="Price" name="price" />
                            <input type="text" placeholder="Fullname" name="image" />
                            <input type="text" placeholder="Category" name="category" />
                            <input type="text" placeholder="Colour" name="colour" />
                        </div>
                        <input type="submit" class="btn" />
                    </form>
                </div>
            </div>
        );
    }
}

export default CreateProduct;