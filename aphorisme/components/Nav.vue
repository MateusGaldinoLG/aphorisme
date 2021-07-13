<template>
  <nav>
    <NuxtLink to="/" class="header">
      Aphorisme
    </NuxtLink>
    <div class="navSupport">
      <NuxtLink to="/SignUp" class="nav-link">
        Sign-up
      </NuxtLink>
      <NuxtLink to="/Login" class="nav-link">
        Login
      </NuxtLink>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav{
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.nav-link{
    display: inline-block;
    padding: 4px;
    margin: 0 2vw;
    text-decoration: none;
    color: white;
    text-align: center;
    font-size: 1.25rem;
  &:hover{
    color: #c5c2c2;
  }
}
.header{
  display: inline-block;
  padding: 4px;
  margin: 0 2vw;
  text-decoration: none;
  color: white;
  text-align: center;
  font-size: 1.25rem;
  font-size: 3rem;
  margin-right: auto;
}
@media (max-width: 500px){
  nav{
    flex-direction: column;
  }
  .nav-link, .header{
    margin: 0;
    padding: 3px;
    display: block;
  }
}
</style>
