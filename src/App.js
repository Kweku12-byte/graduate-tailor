import React, { useState } from 'react';
import './App.css';
import {
    Header,
    HomePage,
    ShopPage,
    CartPage,
    CheckoutPage,
    OrderConfirmationPage,
    TrackOrderPage,
    StaffLoginPage,
    StaffDashboardPage,
    Footer
} from './components.js';

// --- Mock Data ---
const initialProducts = [
  { id: 1, name: 'Emerald Green Kaftan', price: 850, category: 'Kaftans', imageUrl: 'https://otunbastore.com/cdn/shop/products/il_fullxfull.5264936700_nkkd.jpg?v=1703831613' },
  { id: 2, name: 'Royal Purple Agbada', price: 1200, category: 'Agbada', imageUrl: 'https://wp-media-dejiandkola.s3.eu-west-2.amazonaws.com/2023/06/354001124_220333694157189_1629255217244171994_n.jpg' },
  { id: 3, name: 'Classic Cream Suit', price: 1500, category: 'Suits', imageUrl: 'https://images.asos-media.com/products/abercrombie-fitch-classic-linen-suit-trouser-co-ord-in-cream/208370206-1-beige?$n_640w$&wid=513&fit=constrain' },
  { id: 4, name: 'Azure Blue Senator Wear', price: 900, category: 'Senator', imageUrl: 'https://wp-media-dejiandkola.s3.eu-west-2.amazonaws.com/2022/02/273024327_728715568023079_3292022670153790204_n.jpg' },
  { id: 5, name: 'Burgundy Brocade Tunic', price: 780, category: 'Kaftans', imageUrl: 'https://www.cdnensemble.xyz/pub/media/catalog/product/cache/391a5e1abf666a8c41861a6cd6227bf9/1/3/13624km23-2.jpg' },
  { id: 6, name: 'White Wedding Suit', price: 1800, category: 'Weddings', imageUrl: 'https://www.friartux.com/on/demandware.static/-/Sites-FriarTux-Library/default/dwf35e52fa/images/blog/blog2303/white-tuscan-shoot-couple1.jpg' },
];

const mockReviews = [
  { id: 1, name: 'Kofi Mensah', rating: 5, comment: 'The Graduate Tailor is the epitome of class. My wedding suit was everything I dreamed of and more. Pure perfection!' },
  { id: 2, name: 'David Adjei', rating: 5, comment: 'I always get my kaftans here. The fabric quality and the finishing are second to none in Accra. 48-hour turnaround is also a lifesaver.' },
  { id: 3, name: 'Nii Armah', rating: 5, comment: 'From the consultation to the final fitting, the experience was seamless. True bespoke service that makes you feel valued.' },
];

const initialOrders = [
    { id: 'TGT-91523', customerName: 'Samuel Ofori', phone: '0244123456', address: '123 Spintex Rd, Accra', paymentMethod: 'Mobile Money', items: [{...initialProducts[1], quantity: 1}], total: 1200, status: 'Fitting Scheduled', date: new Date().toISOString() },
    { id: 'TGT-91524', customerName: 'Emmanuel Annan', phone: '0555987654', address: 'Pickup at Haatso', paymentMethod: 'Pay on Pickup', items: [{...initialProducts[0], quantity: 2}], total: 1700, status: 'Ready for Pickup', date: new Date().toISOString() },
];

// --- Main App Component ---
export default function App() {
  const [view, setView] = useState('home');
  const [cart, setCart] = useState([]);
  const [isStaffLoggedIn, setIsStaffLoggedIn] = useState(false);
  const [products, setProducts] = useState(initialProducts);
  const [orders, setOrders] = useState(initialOrders);

  const changeView = (newView) => { window.scrollTo(0, 0); setView(newView); };
  const addToCart = (product) => { setCart(prev => [...prev, { ...product, cartId: Date.now() }]); };
  const removeFromCart = (cartId) => { setCart(prev => prev.filter(item => item.cartId !== cartId)); };
  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  const placeOrder = (customerDetails) => {
      const newOrderId = `TGT-${Math.floor(Math.random() * 90000) + 10000}`;
      const newOrder = {id: newOrderId, ...customerDetails, items: cart, total: cartTotal, status: 'Measurement Pending', date: new Date().toISOString()};
      setOrders(prev => [newOrder, ...prev]);
      setCart([]);
      changeView('orderConfirmation');
  };

  const handleLogin = (e) => { e.preventDefault(); setIsStaffLoggedIn(true); changeView('staffDashboard'); };
  const handleLogout = () => { setIsStaffLoggedIn(false); changeView('home'); };
  const addNewProduct = (product) => { setProducts(prev => [{...product, id: Date.now(), imageUrl: `https://placehold.co/800x1000/333333/FFFFFF?text=${product.name.replace(' ','+')}`}, ...prev]); };
  const updateOrderStatus = (orderId, newStatus) => { setOrders(prev => prev.map(o => o.id === orderId ? {...o, status: newStatus} : o)); };

  const renderView = () => {
    switch (view) {
      case 'shop': return <ShopPage products={products} addToCart={addToCart} />;
      case 'cart': return <CartPage cart={cart} removeFromCart={removeFromCart} cartTotal={cartTotal} setView={changeView} />;
      case 'checkout': return <CheckoutPage placeOrder={placeOrder} />;
      case 'orderConfirmation': return <OrderConfirmationPage setView={changeView} />;
      case 'track': return <TrackOrderPage orders={orders} />;
      case 'staffLogin': return <StaffLoginPage handleLogin={handleLogin} />;
      case 'staffDashboard': return isStaffLoggedIn ? <StaffDashboardPage orders={orders} products={products} updateOrderStatus={updateOrderStatus} addNewProduct={addNewProduct} handleLogout={handleLogout} /> : <StaffLoginPage handleLogin={handleLogin} />;
      default: return <HomePage products={products} mockReviews={mockReviews} setView={changeView} />;
    }
  };

  return (
    <div>
        <Header setView={changeView} cartCount={cart.length} />
        <main>{renderView()}</main>
        <Footer setView={changeView} />
    </div>
  );
}
