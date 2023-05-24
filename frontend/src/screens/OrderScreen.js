import React, { useReducer, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';

function reducer(state, action) {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true, error: '' };
        case 'FETCH_SUCCESS':
            return { ...state, loading: false, order: action.payload, error: '' };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        
            default:
                return state;
    }
}

export default function OrderScreen() {
    const { state } = useContext(Store);
    const { userInfo } = state;
    
    const params = useParams();
    const { id: orderId } = params;
    const navigate = useNavigate();

    const [{ loading, error, order }, dispatch] useReducer(reducer, { 
        loadind: true,
        order: {},
        error: '',
    });

    useEffect(()=> {
        const fetchOrder = async () => {
            try {
                dispatch({ type: 'FETCH_REQUEST' });
                const { data } = await axios.get(`/api/orders/${orderId}`, {
                    headers: { authorization: `Bearer ${userInfo.token}` },
                });
                dispatch({ type: 'FETCH_SUCCESS', payload: data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: getError(err) });
            }
        }
        if(!userInfo) {
            return navigate('/login');
        }
        if (
            !order._id ||
            (order._id && order._id !== orderId)
        ) {
            fetchOrder();
        }
    }, [order, userInfo, orderId, navigate])
  return (
    loading? 
    ( <LoadingBox></LoadingBox>)
    : 
    error ? (
        <MessageBox variant="danger">{error}</MessageBox>
    ) 
    :
    <div>
        <Helmet><title>Order {orderId}</title></Helmet>
        <h1 className="my-3">Order {orderId}</h1>
        <Row>
            <Col md={8}>
                <Card className="mb-3">
                    <Card.Body>
                        <Card.Title>Shipping</Card.Title>
                        <Card.Text>
                            <strong>Name:</strong> {order.shippigAddress.fullName} <br />
                            <strong>Address:</strong> {order.shippigAddress.address},
                            {order.shippigAddress.city}, {order.shippigAddress.postalCode},
                            {order.shippigAddress.country}
                        </Card.Text>
                        {order.isDelivered ? (
                            <MessageBox variant="success">
                                Delivered at {order.deliveredAt}
                            </MessageBox>
                        ) : (
                            <MessageBox variant="danger">Not Delivered</MessageBox>
                        )
                        }
                    </Card.Body>

                </Card>
            </Col>
        </Row>
    </div>
  )
}
