import Listas from './components/Listas'
import Card from './components/Card'
import cards from './data/cardData'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <Listas />
      <div className="container py-4">
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {cards.map((card) => (
            <div className="col" key={card.id}>
              <Card photo={card.photo} name={card.name} rol={card.rol} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
