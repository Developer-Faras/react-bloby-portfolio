import Image1 from './../../assets/price-1.svg';
import Image2 from './../../assets/price-2.svg';
import Image3 from './../../assets/price-3.svg';

const PricingData = [
    {
        id: 1,
        image: Image1,
        name: "Basic",
        description: "A Simple option but powerful to manage your business",
        supports: ["Email support"],
        priceCurency: "$",
        priceTime: "Month",
        price: "10",
        best: false
    },
    {
        id: 2,
        image: Image2,
        name: "Premium",
        description: "Unlimited product including app integration and more features",
        supports: ["Mon-Fri support"],
        priceCurency: "$",
        priceTime: "Month",
        price: "20",
        best: true
    },
    {
        id: 3,
        image: Image3,
        name: "Ultimate",
        description: "A wise option for large companies and individuals",
        supports: ["24/7 Support"],
        priceCurency: "$",
        priceTime: "Month",
        price: "50",
        best: false
    },
];

export default PricingData;