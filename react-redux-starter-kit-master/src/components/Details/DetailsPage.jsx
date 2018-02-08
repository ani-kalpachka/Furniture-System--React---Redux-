import React, { Component } from 'react';
import Review from './Review';
import { connect } from 'react-redux';
import { fetchDetailsAction } from '../../actions/furnitureActions';

class DetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }

    componentWillMount() {
        this.props.getData(this.props.match.params.id);
    }

    render() {
        const {make, model, year, image, price, description, material, isToggleOn} = this.props.item;

        return (
            <div className="container">
                <div className="row space-top">
                    <div className="col-md-12">
                        <h1>Furniture Details</h1>
                    </div>
                </div>
                <div className="row space-top">
                    <div className="col-md-4">
                        <div className="card text-white bg-primary">
                            <div className="card-body">
                                <blockquote className="card-blockquote">
                                    <img src={image} alt={image}/>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <p>Make: {make}</p>
                        <p>Model: {model}</p>
                        <p>Year: {year}</p>
                        <p>Description: {description}</p>
                        <p>Price: {price}</p>
                        <p>Material: {material}</p>
                        <button onClick={this.handleClick}>
                            {this.state.isToggleOn ? 'Like' : 'Dislike'}
                        </button>
                    </div>
                </div>
                <div className="row space-top">
                    <div className="col-md-8">
                        <form>
                            <legend>Leave a review</legend>
                            <div className="form-group">
                                <textarea className="form-control"></textarea>
                            </div>
                            <div className="form-group">
                                <label>Rating</label>
                                <div className="btn-group mr-2" role="group" aria-label="First group">
                                    <button type="button" className="btn btn-secondary">1</button>
                                    <button type="button" className="btn btn-secondary">2</button>
                                    <button type="button" className="btn btn-primary">3</button>
                                    <button type="button" className="btn btn-secondary">4</button>
                                    <button type="button" className="btn btn-secondary">5</button>
                                </div>
                                <input type="submit" className="btn btn-primary" value="Submit review" />
                            </div>
                        </form>
                    </div>
                    <div className="col-md-8">
                        <div className="card text-black bg-light">
                            <div className="card-body">
                                <blockquote className="card-blockquote">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                                    <footer>Someone famous in
                                        <cite title="Source Title">Source Title</cite>
                                    </footer>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                    <Review 
                        user="Pesho"
                        rating="4"
                        comment="It works!"
                    />
                     <Review 
                        user="Maria"
                        rating="1"
                        comment="xaxaxa"
                    />
                </div>
            </div>
        );
    }
}

function mapState(state, ownProps) {
    const item = state.furniture.filter(f => f.id == ownProps.match.params.id)[0]

    return {
        item: item || {
            make: 'Loading...',
            model: 'Loading...',
            year: 'Loading...',
            price: 'Loading...',
            image: 'Loading...',
            description: 'Loading...',
            material: 'Loading...'
        },

        reviews: item ? item.reviews : []
    }
}

function mapDispatch(dispatch) {
    return {
        getData: (id) => dispatch(fetchDetailsAction(id))
    };
}

export default connect(mapState, mapDispatch)(DetailsPage);