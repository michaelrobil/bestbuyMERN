
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="navbar-brand">
                    BestBuy
                </h1>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/" className="nav-link">
                                Search Item
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/cart" className="nav-link">
                                Cart
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
