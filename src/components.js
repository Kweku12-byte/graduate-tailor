import React, { useState } from 'react';

// --- SVG Icons (without hardcoded styles) ---
export const MenuIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>);
export const XIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>);
export const ShoppingBagIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>);
export const UserIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>);
export const StarIcon = ({ className }) => (<svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>);
export const TrashIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>);
export const PrintIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm-8-14h14M5 7h14" /></svg>);
export const ArrowRightIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>);


// --- Page & Reusable Components ---

export const Header = ({ setView, cartCount }) => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const navigate = (view) => { setView(view); setMenuOpen(false); }

    return (
        <header className="header">
            <div className="container">
                <div className="header-content">
                    <div className="header-logo" onClick={() => navigate('home')}>
                        <h1>THE GRADUATE TAILOR</h1>
                    </div>
                    <nav className="header-nav-desktop">
                        <a onClick={() => navigate('shop')} className="nav-link">Collection</a>
                        <a onClick={() => navigate('shop')} className="nav-link">Weddings</a>
                        <a onClick={() => navigate('track')} className="nav-link">Track Order</a>
                    </nav>
                    <div className="header-actions">
                        <div className="cart-icon-wrapper" onClick={() => navigate('cart')}>
                            <ShoppingBagIcon />
                            {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
                        </div>
                        <UserIcon className="user-icon" onClick={() => navigate('staffLogin')} />
                        <button className="menu-button" onClick={() => setMenuOpen(!isMenuOpen)}>
                            {isMenuOpen ? <XIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <nav className="mobile-nav">
                    <a onClick={() => navigate('shop')} className="mobile-nav-link">Collection</a>
                    <a onClick={() => navigate('shop')} className="mobile-nav-link">Weddings</a>
                    <a onClick={() => navigate('track')} className="mobile-nav-link">Track Order</a>
                    <a onClick={() => navigate('staffLogin')} className="mobile-nav-link">Staff Portal</a>
                </nav>
            )}
        </header>
    );
};

export const HomePage = ({ products, mockReviews, setView }) => {
    return (
        <div>
            <section className="hero-section">
                <div className="hero-overlay"></div>
                <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=1287&ixlib-rb-4.0.3" alt="Man in a bespoke suit" className="hero-image"/>
                <div className="hero-content">
                    <h1 className="hero-title">Classy, Elegance & Style</h1>
                    <p className="hero-subtitle">Neatly made in Ghana for the modern gentleman. Experience bespoke tailoring at its finest.</p>
                    <button onClick={() => setView('shop')} className="btn btn-primary">Explore Collection</button>
                </div>
            </section>
            <section className="featured-section">
                <div className="container">
                    <h2 className="section-title">Featured Pieces</h2>
                    <div className="featured-grid">
                        {products.slice(0, 3).map(p => <ProductCard key={p.id} product={p} setView={setView} />)}
                    </div>
                </div>
            </section>
             <section className="quote-section">
                <div className="container">
                    <h2 className="quote-text">"We are here to make luxury affordable."</h2>
                    <p className="quote-author">- E. M. Khorci Bespoke</p>
                </div>
            </section>
            <section className="testimonials-section">
                <div className="container">
                    <h2 className="section-title">Client Testimonials</h2>
                    <div className="testimonials-grid">
                        {mockReviews.map(review => (
                            <div key={review.id} className="testimonial-card">
                                <div className="testimonial-rating">
                                    {[...Array(5)].map((_, i) => <StarIcon key={i} className="star-icon" />)}
                                </div>
                                <p className="testimonial-comment">"{review.comment}"</p>
                                <p className="testimonial-name">- {review.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export const ProductCard = ({ product, setView }) => (
    <div className="product-card" onClick={() => setView('shop')}>
        <div className="product-image-wrapper">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
        </div>
        <div className="product-info">
            <h3 className="product-name">{product.name}</h3>
            <p className="product-price">GH₵{product.price.toLocaleString()}</p>
        </div>
    </div>
);

export const ShopPage = ({ products, addToCart }) => {
    return(
        <div className="shop-page container">
             <div className="shop-header">
                <h1 className="shop-title">Our Collection</h1>
                <p className="shop-subtitle">Discover outfits that define elegance and style.</p>
            </div>
            <div className="product-grid">
                {products.map(product => (
                    <div key={product.id} className="shop-product-card">
                        <div className="shop-product-image-wrapper">
                            <img src={product.imageUrl} alt={product.name} className="shop-product-image" />
                        </div>
                        <div className="shop-product-info">
                            <h3 className="shop-product-name">{product.name}</h3>
                            <div className="shop-product-footer">
                                <p className="shop-product-price">GH₵{product.price.toLocaleString()}</p>
                                <button onClick={() => addToCart(product)} className="btn btn-secondary">Add to Bag</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const CartPage = ({ cart, removeFromCart, cartTotal, setView }) => (
    <div className="cart-page-container container">
        <h1 className="page-title">Your Bag</h1>
        {cart.length === 0 ? (
            <div className="empty-cart">
                <p className="empty-cart-text">Your bag is empty.</p>
                <button onClick={() => setView('shop')} className="btn btn-primary">Continue Shopping</button>
            </div>
        ) : (
            <div>
                <div className="cart-items">
                    {cart.map(item => (
                        <div key={item.cartId} className="cart-item">
                            <div className="cart-item-details">
                                <img src={item.imageUrl} alt={item.name} className="cart-item-image" />
                                <div className="cart-item-info">
                                    <h2 className="cart-item-name">{item.name}</h2>
                                    <p className="cart-item-price">GH₵{item.price.toLocaleString()}</p>
                                </div>
                            </div>
                            <button onClick={() => removeFromCart(item.cartId)} className="remove-item-btn"><TrashIcon /></button>
                        </div>
                    ))}
                </div>
                <div className="cart-summary">
                    <h2 className="cart-total">Total: <span className="brand-gold">GH₵{cartTotal.toLocaleString()}</span></h2>
                    <button onClick={() => setView('checkout')} className="btn btn-primary">Book Appointment</button>
                </div>
            </div>
        )}
    </div>
);

export const CheckoutPage = ({ placeOrder }) => {
    const handleSubmit = (e) => { e.preventDefault(); const formData = new FormData(e.target); const customerDetails = { customerName: formData.get('fullName'), phone: formData.get('phone'), address: formData.get('address'), paymentMethod: formData.get('paymentMethod') }; placeOrder(customerDetails); };
    return(
        <div className="checkout-container container">
            <h1 className="page-title">Book Your Appointment</h1>
            <p className="page-subtitle">After booking, we will contact you within 24 hours to schedule measurements and discuss your outfit.</p>
            <form onSubmit={handleSubmit} className="checkout-form">
                <div className="form-group">
                    <label className="form-label">Full Name</label>
                    <input type="text" name="fullName" required className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">Phone Number</label>
                    <input type="tel" name="phone" required className="form-input" />
                </div>
                <div className="form-group">
                    <label className="form-label">Pickup Location / Address</label>
                    <input type="text" name="address" required placeholder="e.g. Haatso Shop or Delivery Address" className="form-input" />
                </div>
                <div className="form-group">
                  <h3 className="form-label">Payment Preference</h3>
                  <div className="radio-group">
                      <input id="pickup" name="paymentMethod" type="radio" value="Pay on Pickup" defaultChecked className="form-radio"/>
                      <label htmlFor="pickup" className="radio-label">Pay on Pickup/Delivery</label>
                  </div>
                  <div className="radio-group">
                      <input id="momo" name="paymentMethod" type="radio" value="Mobile Money" className="form-radio"/>
                      <label htmlFor="momo" className="radio-label">Mobile Money (MoMo)</label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary btn-full">Confirm Booking</button>
            </form>
        </div>
    );
};

export const OrderConfirmationPage = ({ setView }) => (
    <div className="confirmation-container container">
        <h1 className="confirmation-title">Booking Confirmed!</h1>
        <p className="confirmation-text">Thank you for choosing The Graduate Tailor. We have received your request and our team will contact you shortly to schedule your fitting.</p>
        <button onClick={() => setView('home')} className="btn btn-primary">Back to Home</button>
    </div>
);

export const TrackOrderPage = ({ orders }) => {
    const [orderId, setOrderId] = useState('');
    const [foundOrder, setFoundOrder] = useState(null);
    const [error, setError] = useState('');
    const handleSubmit = (e) => { e.preventDefault(); setError(''); setFoundOrder(null); const order = orders.find(o => o.id.toLowerCase() === orderId.toLowerCase()); if(order){ setFoundOrder(order) } else { setError('Order ID not found. Please try again.')} };

    return (
         <div className="track-order-container container">
            <h1 className="page-title">Track Your Order</h1>
            <p className="page-subtitle">Enter your Order ID below to see the current status of your bespoke outfit.</p>
            <form onSubmit={handleSubmit} className="track-order-form">
                 <input type="text" value={orderId} onChange={(e) => setOrderId(e.target.value)} placeholder="Enter Order ID (e.g. TGT-91523)" className="form-input"/>
                 <button type="submit" className="btn btn-primary btn-full">Track</button>
            </form>
            {error && <p className="track-order-error">{error}</p>}
            {foundOrder && (
                <div className="order-status-card">
                    <h2 className="order-status-title">Order Status: #{foundOrder.id}</h2>
                    <p className="order-status-info"><span className="order-status-label">Customer:</span> {foundOrder.customerName}</p>
                    <p className="order-status-info"><span className="order-status-label">Status:</span> <span className="order-status-value">{foundOrder.status}</span></p>
                </div>
            )}
        </div>
    );
};

export const StaffLoginPage = ({ handleLogin }) => (
    <div className="staff-login-container container">
        <h1 className="page-title">Staff Portal</h1>
        <form onSubmit={handleLogin} className="staff-login-form">
            <div className="form-group">
                <label className="form-label">Username</label>
                <input type="text" defaultValue="admin" className="form-input" />
            </div>
            <div className="form-group">
                <label className="form-label">Password</label>
                <input type="password" defaultValue="password123" className="form-input" />
            </div>
            <button type="submit" className="btn btn-primary btn-full">Login</button>
        </form>
    </div>
);

export const StaffDashboardPage = ({ orders, products, updateOrderStatus, addNewProduct, handleLogout }) => {
    const [activeTab, setActiveTab] = useState('orders');

    return (
        <div className="dashboard-container container">
            <div className="dashboard-header">
                <h1 className="page-title">Dashboard</h1>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
            </div>
            <div className="dashboard-tabs">
                <button onClick={() => setActiveTab('orders')} className={`tab-btn ${activeTab === 'orders' ? 'tab-btn-active' : ''}`}>Orders</button>
                <button onClick={() => setActiveTab('products')} className={`tab-btn ${activeTab === 'products' ? 'tab-btn-active' : ''}`}>Portfolio</button>
            </div>
            <div className="tab-content">
              {activeTab === 'orders' ? <OrderManagementView orders={orders} updateOrderStatus={updateOrderStatus} /> : <ProductManagementView products={products} addNewProduct={addNewProduct} />}
            </div>
        </div>
    );
};

export const OrderManagementView = ({ orders, updateOrderStatus }) => (
    <div className="table-container">
        <table className="orders-table">
            <thead>
                <tr className="table-header">
                    <th className="table-header-cell">Order ID</th>
                    <th className="table-header-cell">Customer</th>
                    <th className="table-header-cell">Total</th>
                    <th className="table-header-cell">Status</th>
                    <th className="table-header-cell">Action</th>
                </tr>
            </thead>
            <tbody>
                {orders.map(order => (
                    <tr key={order.id} className="table-row">
                        <td className="table-cell">{order.id}</td>
                        <td className="table-cell">{order.customerName}</td>
                        <td className="table-cell">GH₵{order.total.toLocaleString()}</td>
                        <td className="table-cell"><span className="order-status-badge">{order.status}</span></td>
                        <td className="table-cell">
                            <div className="order-actions">
                                <select onChange={(e) => updateOrderStatus(order.id, e.target.value)} value={order.status} className="status-select">
                                    <option>Measurement Pending</option>
                                    <option>Fitting Scheduled</option>
                                    <option>In Production</option>
                                    <option>Ready for Pickup</option>
                                    <option>Completed</option>
                                </select>
                                <button className="action-btn"><PrintIcon/></button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

export const ProductManagementView = ({ products, addNewProduct }) => {
    const handleSubmit = (e) => { e.preventDefault(); const formData = new FormData(e.target); addNewProduct({ name: formData.get('name'), price: parseFloat(formData.get('price')), category: formData.get('category') }); e.target.reset(); };
    return (
        <div className="product-management-grid">
            <div className="portfolio-section">
                <h2 className="section-title-sm">Current Portfolio</h2>
                <div className="portfolio-grid">
                    {products.map(p => <div key={p.id} className="portfolio-item"><img src={p.imageUrl} alt={p.name} className="portfolio-item-image" /><p className="portfolio-item-name">{p.name}</p></div>)}
                </div>
            </div>
            <div className="add-product-section">
                <h2 className="section-title-sm">Add New Piece</h2>
                <form onSubmit={handleSubmit} className="add-product-form">
                    <div className="form-group">
                        <label className="form-label-sm">Piece Name</label>
                        <input name="name" type="text" required className="form-input" />
                    </div>
                    <div className="form-group">
                        <label className="form-label-sm">Starting Price (GH₵)</label>
                        <input name="price" type="number" required className="form-input" />
                    </div>
                    <div className="form-group">
                        <label className="form-label-sm">Category</label>
                        <select name="category" className="form-select">
                            <option>Kaftans</option>
                            <option>Agbada</option>
                            <option>Suits</option>
                            <option>Senator</option>
                            <option>Weddings</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-primary btn-full">Add to Portfolio</button>
                </form>
            </div>
        </div>
    );
};

export const Footer = ({ setView }) => (
    <footer className="footer">
        <div className="container">
          <div className="footer-grid">
              <div className="footer-column">
                  <h3 className="footer-heading">The Graduate Tailor</h3>
                  <p className="footer-text">Classy, Elegance & Style. Neatly made in Ghana.</p>
              </div>
              <div className="footer-column">
                  <h3 className="footer-heading">Explore</h3>
                  <ul className="footer-links">
                      <li><a className="footer-link" onClick={() => setView('shop')}>Collection</a></li>
                      <li><a className="footer-link" onClick={() => setView('shop')}>Weddings</a></li>
                      <li><a className="footer-link" onClick={() => setView('track')}>Track Order</a></li>
                      <li><a className="footer-link" onClick={() => setView('staffLogin')}>Staff Portal</a></li>
                  </ul>
              </div>
              <div className="footer-column">
                  <h3 className="footer-heading">Visit Us</h3>
                  <ul className="footer-text">
                      <li>Nii Nortey Palm Crescent,</li>
                      <li>Haatso - Accra, Ghana</li>
                      <li>Mon - Sat: 9AM - 8PM</li>
                  </ul>
              </div>
              <div className="footer-column">
                  <h3 className="footer-heading">Contact</h3>
                  <ul className="footer-text">
                      <li>emkhorci@gmail.com</li>
                      <li>WhatsApp: 0558255221</li>
                  </ul>
              </div>
          </div>
        </div>
        <div className="footer-bottom">
            <p className="footer-copyright">&copy; {new Date().getFullYear()} The Graduate Tailor. All Rights Reserved. Demo by Our Agency.</p>
        </div>
    </footer>
);
