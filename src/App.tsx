import { useState } from "react"
import { useAuth } from "./context/AuthContext"
import Header from "./components/Header"
import ProductCard from "./components/ProductCard"
import Counter from "./components/Counter"
import AddNames from "./components/AddNames"
import Form from "./components/MultiState"
import Card from "./components/Card"
import CounterButton from "./components/CounterButton"
import UseEff from "./components/UseEffect"



type Product = {
  id: number
  name: string,
  price: number
}


function App() {
  const products: Product[] = [{ id: 1, name: "Nike Air max", price: 120 }, {id: 2 ,name: "Macbook Air", price: 99}, {id: 3 ,name: "Iphone", price: 799} ]
  const [isLoggedIn , setIsLoggedIn] = useState(false)
  const [count , setCount] = useState(0)
  const {user , login , logout} = useAuth()


  function increase() {
    setCount((prev) => prev + 1)
  }

    return (
        <div>
          <Header />
         
            {
              products.map((prod) => (
                <ProductCard id={prod.id} key={prod.name} name={prod.name} price={prod.price} />
              ))
            }
            <Counter />
            <AddNames />
            {isLoggedIn && (
              <div>
                <h1>Welcome Roger</h1>
                <button onClick={() => setIsLoggedIn(false)}>Logout</button>
              </div>
            )}
            {!isLoggedIn && (
              <div>
                <h1>Please login</h1>
                <button onClick={() => setIsLoggedIn(true)}>Login</button>
              </div>
            )
            }
            <Form />
            <Card>
                <h1>Hello </h1>
                <p>This is inside the card.</p>
                <p>Current Count {count}</p>
            </Card>
            <CounterButton onIncrease={increase} />
            <UseEff  />
        </div>
    )
}

export default App