import Contador from './components/Contador';
import ContadorMejorado from './components/ContadorMejorado';
import CrudApi from './components/CrudApi/CrudApi';
import ShoppingCart from './components/ShoppingCart';

function App() {
	return (
		<>
			<ShoppingCart tittle={'Carrito de compras'} />
			<br />
			<CrudApi />
		</>
	);
}

export default App;
