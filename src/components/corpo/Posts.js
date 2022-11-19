import React from "react";
let paraDeLike;
export default function Posts() {
  const renderPost = [
    {
      imgUser: "assets/img/barked.svg",
      user: "barked",
      postContent: "assets/img/gato-telefone.svg",
      userLikeImg: "assets/img/respondeai.svg",
      userLike: "respondeai",
    },
    {
      imgUser: "assets/img/adorable_animals.svg",
      user: "adorable_animals",
      postContent: "assets/img/dog.svg",
      userLikeImg: "assets/img/barked.svg",
      userLike: "barked",
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
          userLike={i.userLike}
        />
      ))}
    </div>
  );
}

function Post(props) {
  const [icone, setIcone] = React.useState("bookmark-outline");
  const [like, setLike] = React.useState("");
  const [iconeLike, setIconeLike] = React.useState("heart-outline");
  const [numberLikes, setNumberLikes] = React.useState(Math.random() * 10000);
  function savePost() {
    if (icone == "bookmark") {
      setIcone("bookmark-outline");
    } else if (icone === "bookmark-outline") {
      setIcone("bookmark");
    }
  }
  function likePost() {
    if (like == "") {
      setLike("red");
      setIconeLike("heart");
      setNumberLikes(numberLikes + 1);
    } else {
      setLike("");
      setIconeLike("heart-outline");
      setNumberLikes(numberLikes - 1);
      paraDeLike = undefined
    }
  }
    function gostei() {
    if(like == ""){
      likePost()
    }else{
      return
    }
    
  }
  return (
    <div data-test="post" class="post">
      <div class="topo">
        <div class="usuario">
          <img src={props.imgUser} />
          {props.user}
        </div>
        <div class="acoes">
          <ion-icon name="ellipsis-horizontal"></ion-icon>
        </div>
      </div>

      <div onDoubleClick={gostei} class="conteudo">
        <img src={props.postContent} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <ion-icon
              data-test="like-post"
              onClick={likePost}
              class={like}
              name={iconeLike}
            ></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
          <div>
            <ion-icon
              ata-test="save-post"
              onClick={savePost}
              name={icone}
            ></ion-icon>
          </div>
        </div>

        <div class="curtidas">
          <img src={props.userLikeImg} />
          <div class="texto">
            Curtido por <strong>{props.userLike}</strong> e{" "}
            <strong data-test="likes-number">
              outras {numberLikes.toFixed(0)} pessoas
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
