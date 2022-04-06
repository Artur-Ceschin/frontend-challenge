import { Card } from "./styles"

export function InfoCard() {
  return (
    <Card>
      <h2>LUKE SKYWALKER</h2>
      <div className="info">
        <p className="title">NASCIMENTO</p>
        <div>
          <p>DATA: 18BBY</p>
          <p>PLANETA: TATOOINE</p>
        </div>
      </div>
      <div className="info">
        <p className="title">DESCRICAO FISICA</p>
        <div>
          <p>ESPECIE: HUMANA</p>
          <p>PLANETA: 1.72METROS</p>
        </div>
      </div>
      <div className="info">
        <p className="title">VEICULOS USADOS</p>
        <div>
          <p>SNOWSPEEDER</p>
          <p>IMPERIAL SPEEDER BIKE</p>
        </div>
      </div>

      <button>VER DETALHES</button>
    </Card>
  )
}
