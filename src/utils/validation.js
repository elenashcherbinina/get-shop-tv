const API_KEY = process.env.REACT_APP_API_KEY;
const API = `http://apilayer.net/api/validate?access_key=${API_KEY}`;

const validate = (number) => {
  return fetch(`${API}&number=7${number}`)
    .then((res) => res.json())
    .then((data) => data);
};

export default validate;
