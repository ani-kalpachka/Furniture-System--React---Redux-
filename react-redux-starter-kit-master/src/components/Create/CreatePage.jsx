import React, { Component } from 'react';
import Input from '../common/Input';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createAction } from '../../actions/furnitureActions';

class CreatePage extends Component {
    constructor (props) {
        super(props);

        this.state = {
            make: '',
            model: '',
            year: '',
            description: '',
            price: '',
            image: '',
            material: '',
            submitting: false
        }

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    async onSubmit (event) {
        event.preventDefault();

        this.setState({ submitting: true });

        const furniture = {
            make: this.state.make,
            model: this.state.model,
            year: this.state.year,
            description: this.state.description,
            price: this.state.price,
            image: this.state.image,
            material: this.state.material
        };
        
        await this.props.create(furniture);
        this.setState({ submitting: false });
        this.props.history.push('/profile');
    }

    render() {
        const {make, model, year, description, price, image, material} = this.state;

        return (
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Create New Furniture</h1>
                        <p>Please fill all fields.</p>
                    </div>
                </div>
                <form onSubmit={this.onSubmit}>
                    <div className="row space-top">
                        <div className="col-md-4">
                            <Input onChange={this.onChangeHandler}
                                   name="make"
                                   value={make}
                                   label="Make"
                            />
                            <Input onChange={this.onChangeHandler}
                                   name="model"
                                   value={model}
                                   label="Model"
                            />
                            <Input onChange={this.onChangeHandler}
                                   name="year"
                                   type="number"
                                   value={year}
                                   label="Year"
                            />
                            <Input onChange={this.onChangeHandler}
                                   name="description"
                                   value={description}
                                   label="Description"
                            />
                        </div>
                        <div className="col-md-4">
                            <Input onChange={this.onChangeHandler}
                                   name="price"
                                   type="number"
                                   value={price}
                                   label="Price"
                            />
                            <Input onChange={this.onChangeHandler}
                                   name="image"
                                   value={image}
                                   label="Image"
                            />
                            <Input onChange={this.onChangeHandler}
                                   name="material"
                                   value={material}
                                   label="Material"
                            />
                            <input type="submit" className="btn btn-primary" value="Create" disabled={this.state.submitting} />
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function mapState (state) {
    return ({

    })
}

function mapDispatch (dispatch) {
    return ({
        create: (data) => dispatch(createAction(data))
    });
}

export default connect(mapState, mapDispatch)(withRouter(CreatePage));