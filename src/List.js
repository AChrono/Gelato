import React, { Component } from 'react';

class List extends Component{
    render(){
        return (
            <li>
                <a href="">
                    <img className="product-image" src={this.props.item.image} alt={this.props.item.name} />
                    <div className="product-name">
                        {this.props.item.name}
                    </div>
                </a>
            </li>
        );
    }
}

export default List;
