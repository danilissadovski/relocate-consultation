import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./payment.css";

toast.configure();

const Payment = () => {
    const [product] = React.useState({
        name: "Консультация",
        price: 10
    });

    async function handleToken(token, addresses) {
        const response = await axios.post(
            "https://ry7v05l6on.sse.codesandbox.io/checkout",
            { token, product }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            toast("Success! Check email for details", { type: "success" });
        } else {
            toast("Something went wrong", { type: "error" });
        }
    }

    return (
        <div className="container">
            <div className="product">
                <h1>{product.name}</h1>
                <h3>30 минут · ${product.price}</h3>
            </div>
            <StripeCheckout
                stripeKey="pk_test_51I3trCEFZes1ii4A7CUoqqjWw7r3HcH1yCp2K99LsLJo95n1rneDo62DYw0dYpuIACA3VGr8H56BepnxShfolvCP00SwqZZn7t"
                token={handleToken}
                amount={product.price * 100}
                name="Tesla Roadster"
                billingAddress
                shippingAddress
            />
        </div>
    );
}

export default Payment;
