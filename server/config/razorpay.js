const Razorpay = require("razorpay");

const razorpayConfig = {
    key_id: process.env.RAZORPAY_KEY,
    key_secret: process.env.RAZORPAY_SECRET,
};

if (!razorpayConfig.key_id) {
    throw new Error('`RAZORPAY_KEY` is mandatory');
}

if (!razorpayConfig.key_secret) {
    throw new Error('`RAZORPAY_SECRET` is mandatory');
}

exports.instance = new Razorpay(razorpayConfig);
