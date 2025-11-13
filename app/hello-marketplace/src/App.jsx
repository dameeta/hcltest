
import './App.css'

function App() {
 const products = [
    { id: 1, name: "Laptop", price: "$1200" },
    { id: 2, name: "Smartphone", price: "$800" },
    { id: 3, name: "Headphones", price: "$150" }
  ];

  return (
    
       <div className="App">
      <h1> Hello Marketplace</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - {p.price}
          </li>
        ))}
      </ul>
    </div>

  )
}

export default App
