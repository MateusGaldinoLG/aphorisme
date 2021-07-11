# Aphorisme

Projeto full stack para criação de aforismo em uma comunidade. É como uma rede social de aforismos, no estilo do goodreads só que com a possibilidade de criação de seus próprios aforismos.

## Backend

O backend será criado em typescript, com TypeORM e Express/Nest (Qual dos dois?).  
Ele terá as tabelas:

* User
* Aforismo (cada aforismo tem um User, cada User tem vários aforismos/ cada aforismo tem um autor, podendo ser de um banco de dados de autores ou o próprio user)
* IsFollower (um user pode ser seguidor de vários outros users)
* Autores

## Frontend/client

O frontend será criado em nuxtjs com typescript

Duvidas:

* Irá precisar de websocket?

Detalhes:

* Conexão com Axiosjs
* Testagem com Jest
* Flux library para guardar JWT
