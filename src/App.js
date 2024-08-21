import CreateCustomer from './features/customers/CreateCustomer';
import Customer from './features/customers/Customer';
import AccountOperations from './features/account/AccountOperations';
import BalanceDisplay from './features/account/BalanceDisplay';
import { useSelector } from 'react-redux';

function App() {
  const fullNames = useSelector((store) => store.customer.fullNames);
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      {!fullNames ? (
        <CreateCustomer />
      ) : (
        <>
          {' '}
          <Customer />
          <AccountOperations />
          <BalanceDisplay />
        </>
      )}
    </div>
  );
}

export default App;
