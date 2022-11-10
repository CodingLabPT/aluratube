import config from "../config.json";
import React from "react";

import { CSSReset } from "../src/components/CSSReset";
import { StyledHeader } from "../src/components/Header";

import Menu from "../src/components/Menu";
import Banner from "../src/components/Banner";
import TimeLine from "../src/components/Timeline";

function HomePage() {

    const [valorDoFiltro, setValorDoFiltro] = React.useState("Angular");

    return (
        <>
            <CSSReset />
            <div>
                <Menu valorDoFiltro={valorDoFiltro} setValorDoFiltro={setValorDoFiltro}></Menu>
                <Banner banner={config.Banner}></Banner>
                <Header></Header>
                <TimeLine searchValue={valorDoFiltro} playlists={config.playlists}>
                </TimeLine>
            </div>
        </>
    );
}
  
  export default HomePage

  function Header() {
    return (
        <StyledHeader>
            {/*<img src="#" alt="banner"></img>*/}
            <section className="user-info">
                <img src={`https://github.com/${config.github}.png`} alt="foto-perfil"></img>
                <div>
                    <h2>
                        {config.name}
                    </h2>
                    <p>
                        {config.job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
  }