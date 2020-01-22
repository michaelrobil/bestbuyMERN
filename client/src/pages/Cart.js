import React, { useEffect, useState } from 'react';
import API from "../utils/API";
import Container from "../components/Container";
import TableHead from '../components/TableHead'
import Th from '../components/Th';
import Image from '../components/Image';
import Button from '../components/Button';

export default function Cart() {
    const [inCart, setInCart] = useState('');

    const totalStyle = {
        fontSize:"40px",
        textAlign : "right" 
    };

    useEffect(() => {
        loadProducts();
    }, [])

    function loadProducts() {
        API.getProducts()
            .then(res =>
                setInCart(res.data)
            )
            .catch(err => console.log(err));
    };

    function deleteProduct(id) {
        console.log(id)
        API.deleteProduct(id)
            .then(res => loadProducts())
            .catch(err => console.log(err));
    }

    let showTable = true
    if (!inCart) {
        showTable = false
    }

    function accumulateTotal(cart) {
        const total = cart.reduce((p, c) => (parseFloat(p) + parseFloat(c.price)), 0);
        return formatCurrency(total);
    }

    function formatCurrency(number) {
        return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number);
    }

    return (
        <Container>
            {showTable && (
                <table className="table table-dark table-bordered">
                    <TableHead />
                    <tbody>
                        {inCart.map(function (o) {
                            return <tr key={`'${o._id}'`}>
                                <Th key={`'${o._id + 1}'`}>{o.name}</Th>
                                <Th key={`'${o._id + 2}'`}>{o.price}</Th>
                                <Th key={`'${o._id + 3}'`}><Image src={o.image} alt={o.name} /></Th>
                                <Th>
                                    <Button key={`'${o._id + 4}'`} onClick={() => deleteProduct(o._id)} type="submit" >Delete</Button>
                                </Th>
                            </tr>
                        })
                        }
                        <tr key={"1"} style={totalStyle}><td>{accumulateTotal(inCart)}</td></tr>
                    </tbody>
                </table>
            )}
        </Container>
    );
}


