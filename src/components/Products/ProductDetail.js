import React, { useState, useEffect } from 'react';
import App from '../../App';
import {
	Row,
	Col,
	Image,
	ListGroup,
	Card,
	Button,
	Container,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getProductDetail } from '../../api/productapi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { addToWishlist } from '../../api/productapi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let userdata = '';
let toggle = '';
const ProductDetail = ({ match }) => {
	console.log('match', match);

	const [product, setProduct] = useState([]);

	const getDetail = () => {
		getProductDetail(match.params.id)
			.then((data) => {
				console.log('data', data);
				setProduct(data);
			})
			.catch((err) => console.log('err', err));
	};

	const performAddToWishlist = () => {
		console.log('boo');
		addToWishlist(userdata.user.id, match.params.id).then((data) => {
			if (data.error) {
				alert('error : ', data.error);
			} else {
				toast.success(`CheckOut Wishlist Products`, {
					position: 'top-center',
				});
				console.log('wishData', data);

				toggle = data.list.products.filter(
					(item) => item.id == match.params.id
				);
				console.log('toggle', toggle.length);
			}
		});
		// .then(()=>{
		//     getWishProducts(userdata)
		//     .then(data=>{
		//         console.log("data",data);
		//       })
		// })
	};

	useEffect(() => {
		userdata = JSON.parse(localStorage.getItem('jwt'));
		getDetail();
		console.log('userD', userdata);
	}, [match]);
	return (
		<App>
			<Container sm className="text-start">
				<Link
					className="btn m-3  "
					to="/shop"
					style={{ backgroundColor: '#7971ea', color: 'white' }}
				>
					<h3 className="my-auto ">
						{' '}
						<FontAwesomeIcon
							icon={faArrowLeft}
							style={{ outline: 'none' }}
						/>{' '}
					</h3>
				</Link>
				<Row>
					<Col sm={6} className="p-4">
						<Image
							src={product.image}
							alt={product.name}
							className="pb-5"
							fluid
							style={{}}
						/>
					</Col>
					<Col sm={6} className="text-start">
						<ListGroup variant="flush" className="m-5">
							<ListGroup.Item>
								<h3 className="">
									{product.name}

									<span
										className=" float-end  m-2"
										title="Add to Wishlist"
										onClick={() => performAddToWishlist()}
									>
										{toggle.length === 0 ? (
											<FontAwesomeIcon
												icon={faHeart}
												style={{ outline: 'none' }}
												style={{ color: 'gray' }}
											/>
										) : (
											<FontAwesomeIcon
												icon={faHeart}
												style={{ outline: 'none' }}
												style={{ color: '#7971ea' }}
											/>
										)}
									</span>
								</h3>
							</ListGroup.Item>
							{/* <ListGroup.Item>
                            <Rating value={product.rating} text={`${product.numReviews} reviews`} />
                        </ListGroup.Item> */}
							<ListGroup.Item className="my-4">
								Description: Rs.{product.description}
							</ListGroup.Item>
							<ListGroup.Item
								style={{ color: '#7971ea', fontSize: '1.3rem' }}
							>
								Price: Rs.{product.price}
							</ListGroup.Item>
						</ListGroup>
					</Col>
					{/* <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Price:
                                </Col>
                                    <Col>
                                        <strong>{product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>
                                        Status:
                                </Col>
                                    <Col>
                                        <strong>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Button className="btn-block" type='button' disabled={product.countInStock === 0}>ADD TO CART</Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col> */}
				</Row>
			</Container>
			<ToastContainer />
		</App>
	);
};
export default ProductDetail;
