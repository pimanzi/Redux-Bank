import { useSelector } from 'react-redux';

function Customer() {
  const customer = useSelector((store) => store.customer.fullNames);
  return <h2>👋 Welcome, {customer || 'Client'}</h2>;
}

export default Customer;
