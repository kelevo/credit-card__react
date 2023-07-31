import { Tarjeta } from "../components";
import "./MainContainer.css";

export const MainContainer = () => {

  return (
    <section>
      <video src="../../../public/videos/background.mov" autoPlay={ true } muted={ true } loop={ true } />
      <div className="contenedor-tarjeta">
        <Tarjeta />
      </div>
    </section>
  )
}
