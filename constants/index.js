let API_URL = "https://kukupay-api-rz5n2.ondigitalocean.app";
const DEV_URL = "https://kukupay-api-rz5n2.ondigitalocean.app";
const PROD_URL = "https://kukupay-api-rz5n2.ondigitalocean.app";
API_URL = process.env.NODE_ENV ? PROD_URL : DEV_URL;

export default API_URL;
