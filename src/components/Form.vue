<template>
  <div class="container">
    <form @submit="enviarVideo($event)" class="container__formulario">
      <h2 class="formulario__titulo">Envie um vídeo!</h2>

      <div class="formulario__campo">
        <label class="campo__etiqueta" for="url">Link embed</label>
        <input
          name="url"
          class="campo__escrita"
          required
          placeholder="Por exemplo: https://www.youtube.com/embed/FAY1K2aUg5g"
          id="url"
        />
      </div>

      <div class="formulario__campo">
        <label class="campo__etiqueta" for="titulo">Titulo do vídeo</label>
        <input
          name="titulo"
          class="campo__escrita"
          required
          placeholder="Neste campo, dê o nome do vídeo"
          id="titulo"
        />
      </div>

      <div class="formulario__campo">
        <label class="campo__etiqueta" for="imagem">Imagem de perfil</label>
        <input
          name="imagem"
          class="campo__escrita"
          required
          placeholder="Insira a url da imagem"
          id="imagem"
        />
      </div>

      <input class="formulario__botao" type="submit" />
    </form>
  </div>
</template>

<script>
import { db } from "../db/firebaseInit.js";
import { collection, addDoc } from "firebase/firestore";

export default {
  name: "Form",

  methods: {
    async enviarVideo(e) {
      e.preventDefault();
      const titulo = document.querySelector("#titulo").value;

      const colRef = collection(db, "aluratube-42");
      // data to send
      const dataObj = {
        id: 1,
        titulo: titulo,
      };

      // create document and return reference to it
      const docRef = await addDoc(colRef, dataObj);

      // access auto-generated ID with '.id'
      console.log("Document was created with ID:", docRef.id);
    },
  },
};
</script>

<style scoped>
.container {
  display: grid;
  background-color: #e5f1ff;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.container__formulario {
  margin: 3em 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: initial;
}

.formulario__campo {
  margin: 1em;
  font-size: 1.6em;
}

.formulario__titulo {
  color: var(--azul-medio);
  font-weight: bold;
  font-size: 21px;
}

.campo__escrita {
  width: 50vw;
  border-radius: 24px;
  display: block;
  color: black;
  padding: 1em;
}

.campo__etiqueta {
  line-height: 1.5;
  padding: 0 0 0.1em 1em;
  font-weight: 700;
  color: var(--azul-medio);
}

.formulario__botao {
  padding: 1em 3em;
  margin: 2em 0;
  border-radius: 24px;
  background-color: #154580;
}
</style>
