export default function Posts() {
  const renderPost = [
    {
      imgUser: "assets/img/barked.svg",
      user: "barked",
      postContent: "assets/img/gato-telefone.svg",
      userLikeImg: "assets/img/respondeai.svg",
      userLike: "respondeai",
      other: "outras 100,405 pessoas",
    },
    {
      imgUser: "assets/img/adorable_animals.svg",
      user: "adorable_animals",
      postContent: "assets/img/dog.svg",
      userLikeImg: "assets/img/barked.svg",
      userLike: "barked",
      other: "outras 90,405 pessoas",
    },
  ];

  return (
    <div class="posts">
      {renderPost.map((i) => (
        <Post
          imgUser={i.imgUser}
          user={i.user}
          postContent={i.postContent}
          userLikeImg={i.userLikeImg}
          userLike =  {i.userLike}
          other={i.other}
        />
      ))}
    </div>
  );
}
function Post(props) {
  return (
    <div class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imgUser} />
          {props.user}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div class="conteudo">
        <img src={props.postContent} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon name="heart-outline"></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon name="bookmark-outline"></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.userLikeImg} />
          <div class="texto">
            Curtido por <strong>{props.userLike}</strong> e {" "}
            <strong>{props.other}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}
