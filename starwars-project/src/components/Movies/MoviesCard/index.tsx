import { Card } from "./styles"

export function MoviesCard() {
  return (
    <Card>
      <h2>A GUERRA DOS CLONES</h2>
      <p>Episódio Ⅲ</p>
      <div className="info">
        <p className="title">INFORMAÇÕES</p>
        <div>
          <p>LANÇADO EM: 16/05/2002</p>
          <p>DIRIGIDO POR: GEORGE LUCAS</p>
        </div>
      </div>

      <button>VER DETALHES</button>
    </Card>
  )
}
