<template>
  <div>
    <header>
      <nav class="cabecalho">
        <router-link to="/"><img :src="logo" :alt="alt" /></router-link>
        <div class="cabecalho__pesquisar">
          <input
            type="search"
            placeholder="Pesquisar"
            id="pesquisar"
            class="pesquisar__input"
          />
          <button class="pesquisar__botao">
            <img :src="searchIcon" alt="" />
          </button>
        </div>
        <div class="cabecalho__icones">
          <router-link to="/AddVideo" class="cabecalho__videos">
            <img :src="addIcon" alt="" class="cabecalho__videos" />
          </router-link>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  name: "Navegacao",
  props: ["logo", "alt", "addIcon", "searchIcon"],
};
</script>

<style scoped>
.cabecalho {
  background-color: white;
  position: fixed;
  top: 0;
  height: 80px;
  width: 100%;
  padding: 0 25px;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  background-repeat: no-repeat;
  padding: 15px 65px;
  cursor: pointer;
}

.cabecalho__videos {
  height: 20px;
  padding: 25px;
}

/* ESTILOS DA SEÇÃO VÍDEOS */

.videos__container {
  color: black;
}

.mensagem {
  display: grid;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.mensagem__imagem {
  width: 30%;
}

.mensagem__titulo {
  color: var(--azul-medio);
  font-weight: bold;
  font-size: 21px;
}

.pesquisar__input {
  width: 260px;
  height: 32px;
  border: 1px solid rgb(211, 211, 211);
  font-size: 16px;
  padding: 3px 8px;
  border: 1px solid rgb(211, 211, 211);
  color: var(--azul-escuro);
}

.pesquisar__botao img {
  border: 1px solid rgb(211, 211, 211);
  background-color: #f9f9f9;
  border-left: none;
  padding: 6px;
  cursor: pointer;
}

.cabecalho__pesquisar {
  display: flex;
  justify-content: center;
}

@media (min-width: 834px) {
  body {
    height: 100vh;
  }
}
</style>
