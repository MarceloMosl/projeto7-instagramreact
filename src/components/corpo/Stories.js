export default function Stories() {
  const storiesContent = [
    { userName: "9gag", userImg: "assets/img/9gag.svg" }, 
    { userName: "meowed", userImg: "assets/img/meowed.svg" },
    { userName: "barked", userImg: "assets/img/barked.svg" },
    { userName: "nathanwpylestrangeplanet", userImg: "assets/img/nathanwpylestrangeplanet.svg" },
    { userName: "wawawicomics", userImg: "assets/img/wawawicomics.svg" },
    { userName: "respondeai", userImg: "assets/img/respondeai.svg" },
    { userName: "filomoderna", userImg: "assets/img/filomoderna.svg" },
    { userName: "memeriagourmet", userImg: "assets/img/memeriagourmet.svg" }
  ];

  return (
    <div class="stories">
      {storiesContent.map((s) => <Story userName= {s.userName} userImg= {s.userImg} />)}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.userImg} />
      </div>
      <div class="usuario">{props.userName}</div>
    </div>
  );
}
