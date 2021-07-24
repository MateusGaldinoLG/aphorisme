<template>
  <main>
    <h2>Aphorisme</h2>
    <div class="main">
      <div class="main__body">
        <div class="main-body">
          <h3 class="main__body-brand">
            See and write <span>aphorisms</span> from all over the world
          </h3>
          <p>Aphorisme is a social network created to connect you to a world of text and phrases</p>
          <p>It is based on aphorisms, short lengthed texts that deliver meaningful thoughts and opinions on the world</p>
          <p>From Heraclitus to Nietzsche, come read, write and quote the aphorisms from a multitute of different sources</p>
        </div>
        <div class="login">
          <h3>Create an account now and discover a world</h3>
          <p>Create an account now for free and join the aphorisme community or login with your created account to start creating now</p>
          <div class="buttons">
            <button>
              <NuxtLink to="/SignUp" class="nav-link">
                Sign-up
              </NuxtLink>
            </button>
            <button>
              <NuxtLink to="/Login" class="nav-link">
                Login
              </NuxtLink>
            </button>
          </div>
        </div>
      </div>
      <img src="~/assets/img/SocratesImage.jpg" alt="socrates image thinking">
    </div>
  </main>
</template>

<style lang="scss" scoped>
main{
  color: white;
}
h2{
  margin: 0.75rem 0;
  text-align: center;
}

h3{
  margin: 0.5rem 0;
  font-size: 1.5rem;
}

.main__body-brand{
  font-size: 2.5rem;
}

.main__body{
  width: 75%;
}

p{
  padding: 0.15rem;
}

span{
  color: $dark-purple-500;
}

.buttons{
  margin: 0.25rem 1.25rem ;
}

button{
  background-color: lightblue;
  padding: 0.25rem;
  margin: 0 0.25rem;
  border-radius: 0.25rem;
  width: 125px;
}

.buttons{
  .nav-link{
      text-decoration: none;
      color: black;
  }
}

.main{
  display: flex;
  margin: 0.75rem;
  padding: 0.5rem;
}
</style>
