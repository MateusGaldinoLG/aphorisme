# TODO

[x] Modificar tabela users para receber senha, pronome  
[x] Criar o controller (de inicio name = username)  

Aphorism frontend  
[x] Criar POST no WriteAphorism  
[x] Criar GET no UserAphorisms  
[x] Criar PUT no Botão de Like no Aphorism  
[x] Criar DELETE no delete do Dropdown  

[x] Desenvolver condicional do delete para usuário logado e usuário no Local  
[x] Desenvolver condicional do write para usuário logado e somente no perfil  

Backend:  
[x] Desenvolver POST de autores novos  
[x] Desenvolver POST de aforismos com nome de autor  
[x] Desenvolver GET de autores já cadastrados  
[x] Desenvolver GET de todos os aforismos de um determinado autor  
[x] Desenvolver GET de detalhes do autor  
[x] Desenvolver GET de todos os autores e usuários com determinado nome para o SearchBar do frontend /details/:name  
28/07/2021:  
[x] Desenvolver GET de detalhes de aforismo individual por id /aphorism/:id  
[x] Desenvolver PUT de informações de autores /author
[x] Desenvolver DELETE de autores /authors/:id  

[] Criar schema de pedido de adição de autores, com middleware de moderator e rotas específicas  

[x] Criar schema de seguidores para a rede social e rotas específicas  
    [] GET -> /followers/number  
    [] GET -> /followers/details  
    [] POST (seguir) -> /users/:user/follow  
    [] DELETE (deixar de seguir) -> /users/:user/unfollow  

(opcional)  
[#?] Criar schema de likes para verificar likes e rotas específicas  

--------------

Frontend:  
[] Criar index de página de autor  
[x] Criar detalhe de especificar autor no WriteAphorism  
[x] Criar pesquisa de autor/usuário no componente de Nav  
[] Criar página dinâmica de aforismo  
[] Pensar no armazenamento em Vuex dos aforismos do usuário logado  
[x] Mudar cor de fundo do site para um cinza mais escuro e cor de texto de Home para Branco  
[x] Criar sistema de reset de senha ao errar o login  
[] Desenvolver sistema de _aphorism depois de criar a rota de GET no backend  
