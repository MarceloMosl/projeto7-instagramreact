import React from "react";
export default function Sidebar() {
  const sugestoesSide = [
    {
      userImgSide: "assets/img/bad.vibes.memes.svg",
      userNameSide: "bad.vibes.memes",
      userStatus: "Segue você",
    },
    {
      userImgSide: "assets/img/razoesparaacreditar.svg",
      userNameSide: "razoesparaacreditar",
      userStatus: "Novo no instagram",
    },
    {
      userImgSide: "assets/img/chibirdart.svg",
      userNameSide: "chibirdart",
      userStatus: "Segue você",
    },
    {
      userImgSide: "assets/img/adorable_animals.svg",
      userNameSide: "adorable_animals",
      userStatus: "Segue você",
    },
    {
      userImgSide: "assets/img/smallcutecats.svg",
      userNameSide: "smallcutecats",
      userStatus: "Segue você",
    },
  ];
  const [newImg, setNewImg] = React.useState("assets/img/catanacomics.svg");
  const [nickName, setNickName] = React.useState("cantana");
  function changeUser() {
    setNickName(prompt("Qual seu nome?"));
  }
  function changeImg() {
    setNewImg(prompt("insira o link da sua foto de perfil abaixo:"));
  }
  function Usuario(props) {
    return (
      <div class="usuario">
        <img onClick={changeImg} src={props.img} />
        <div class="texto">
          <strong>catanacomics</strong>
          <span>
            {props.nickName}
            <ion-icon onClick={changeUser} name="pencil"></ion-icon>
          </span>
        </div>
      </div>
    );
  }

  return (
    <div class="sidebar">
      <Usuario img={newImg} nickName={nickName} />

      <div class="sugestoes">
        <div class="titulo">
          Sugestões para você
          <div>Ver tudo</div>
        </div>

        {sugestoesSide.map((s) => (
          <Sugestao
            userImgSide={s.userImgSide}
            userNameSide={s.userNameSide}
            userStatus={s.userStatus}
          />
        ))}
      </div>

      <div class="links">
        Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
        Localizações • Contas mais relevantes • Hashtags • Idioma
      </div>

      <div class="copyright">© 2022 INSTAGRAM DO FACEBOOK</div>
    </div>
  );
}
function Sugestao(props) {
  return (
    <div class="sugestao">
      <div class="usuario">
        <img src={props.userImgSide} />
        <div class="texto">
          <div class="nome">{props.userNameSide}</div>
          <div class="razao">{props.userStatus}</div>
        </div>
      </div>

      <div class="seguir">Seguir</div>
    </div>
  );
}
