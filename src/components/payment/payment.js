import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('sk_test_51I3trCEFZes1ii4A49i41Z3WUkO6ayiJ8P0G4h1OD4yBtJhbMDtcWdlR3pGoDoqKULy1QLOpPbwKXV09M3a3sQ5200p1cNGcaF');

const Payment = () => {
    const handleClick = async (event) => {
        const stripe = await stripePromise;
        const response = await fetch('/create-checkout-session', { method: 'POST' });

        const session = await response.json();

        const result = await stripe.redirectToCheckout({
            sessionId: session.id,
        });

        if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message
        }
    };

    return (
        <button role="link" onClick={handleClick}>
            Checkout
        </button>
    );
}

export default Payment;
