# 🚀 Não faça sua viagem sem antes utilizar a plataforma Viagem365

  O Viagem365 é uma plataforma que visa promover viagens sustentáveis e experiências positivas para os usuários, fornecendo acesso a informações sobre destinos turísticos, praias, atrações naturais e atividades recreativas. Os usuários podem explorar e descobrir novos destinos, encontrar dicas de viagem sustentável e compartilhar suas experiências. O seu perfil chamou a atenção dos gestores da plataforma, para criar o MVP (Minimum Viable Product) da aplicação Front-End do software, que deverá ser construída utilizando a biblioteca React.
  
## 🏦 Módulo 1 - Projeto Avaliativo

Este repositório se baseia em um projeto avaliativo do curso FuturoDev o qual faço parte da turma TRIP com entrega no dia 12/08/2024 encerrando o segundo módulo.
Seguindo um roteiro e aplicando as regras de negócio e rotas/telas que devem ser criadas na aplicação com todas as regras de entrega do projeto avaliativo.

**Objetivo: Montagem e execução de uma aplicação Front-End, que deverá ser uma tela de Login/cadastro seguindo uma dashboard com os locais , codificada com uso do Node, Express e PostgreSQL - Software MVP**

A Viagem365 deseja automatizar algumas ações de atendimento, criando um sistema para armazenamento de informações do usuário(s) e seus destino(s) que poderá servir para gerar um aplicativo que demonstra os pontos de interesses dos usuários para coletar dados, gerar marketing pra empresas de turismo, engajamento em rotas desconhecidas e melhorias de conservação da natureza local...

  *Bora usar as boas praticas de desenvolvimento de software!*

  ## 📉 Diagrama telas

  <img src = "./src/assets/Diagrama de telas.png" />

## 🤖 Como rodar o repositório:

Primeiros passos:

    1. `git clone https://github.com/pricbnll/viagem365Frontend.git`
    2. `cd viagem365Frontend`
    3. `npm install`
    4. `npm run dev`
    5. `npm run server`


Mais detalhado:

Clone o repositório em sua máquina em uma pasta local 

`Git clone https://github.com/pricbnll/viagem365Frontend.git`

Criei uma pasta com Vite ```npm create vite@latest```. Coloquei um nome de pasta (viagem365) que foi criado. Escolhi: React e JavaScript
Após isso transferi todos os arquivos para a pasta viagem365Frontend e deletei esta que ficou vazia, assim so tenho uma pasta com tudo - dependência Vite e git.

Agora você, após clonar, rode os seguintes comandos para instalar as dependências que estão nas pastas 'package.json'.

cd viagem365
npm install
npm run
````
PS. Tive que instalar algumas bibliotecas recomentadas 
````
npm install lru-cache@latest
npm install @eslint/config-array@latest
npm install rimraf@latest
npm install glob@latest
npm install @eslint/object-schema@latest
````

Assim aparecerá a url que renderizará seu projeto no browser:

```
react-trip@0.0.0 dev vite

Re-optimizing dependencies because vite config has changed

VITE v5.3.2 ready in 168 ms
➜ Local: http://localhost:5173/ -----> este é a url para acessar o projeto na rede.
➜ Network: use --host 
to expose ➜ press h + enter to show help
```

Rodar json server:
```
npx json-server db.json
```
```
Endpoints:
http://localhost:3000/users 
http://localhost:3000/localidade 
```

                      
##  ✅  Dependências instaladas: 

Instalado React Bootstrap 
`````
npm install react-bootstrap bootstrap
``````

Instalei Reach Router Dom
```
npm install react-router-dom
```

Instalei Reach Hook Form
```
npm install react-hook-form
```

Instalei Json Server para popular
```
npm i json-server --save-dev
```

Algumas páginas usei validações com YUP

Instalar Yup `npm install @hookform/resolvers yup`
```
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
```

Instalei a biblioteca 'prop-types' para incluir validações
````
npm install prop-types
````
Adicionei `import PropTypes from 'prop-types';`

Instalei AXIOS
```
npm install axios
```
Adicionei `import axios from 'axios'`

Instalei React Leaflet
```
npm install react react-dom leaflet
npm install react-leaflet
```
Adicionei `import { MapContainer, TileLayer } from 'react-leaflet'`


## 🌊 GitFlow:

Iniciei na main mesmo e organizei as pastas, deletei arquivos e iniciei limpo.

DEVELOP: 
- criei pastas:
  - context: para autenticação do  usuário conforme pasta db.json
  - pages com pastas especificas com .jsx e css: dashboard, Home, Login e register(cadastro)
  - route: como a rotas e seus links
 
*feature/home - fiz a tela inicial com todos os elementos: imagem e formulário de login  + botão de cadastrar

*feature/login - separei a home em duas rotas: Home e Login. Na pagina de Login,coloquei a regra de negócio dentro

*feature/registerUser - Criei uma pagina de cadastro "/cadastro" que direciona o cliente se não possui email e senha autenticado será mostrado uma pagina para se cadastrar com Nome,Sexo,CPF,Data de Nascimento,E-mail,Senha,Endereço (usar ViaCEP) - opcional...

*feature/json-server - criei a pasta ds.json e  uma lista com no mínimo 5 usuários, usei o [4Devs](https://www.4devs.com.br/gerador_de_pessoas) - Ferramentas Online Grátis para gerar os usuários.

*feature/auth-context - Feito um contexto de autenticação para somente quem estiver com email e senha no database (db'json) poderá acessa a dashboard com suas rotas. Usei LocaStorage e fetch para as rotas de verificação

*feature/ApiCep - Criei uma pasta component com o documento ApiCep.jsx para preenchimento automático quando digito o CEP

*feature/sidebar - Criei uma pasta component com o documento Sidebar.jsx com links para Home, dúvidas e sobre o projeto. Tem um botão de sair que fará o logOut.

*feature/dashboard - criei uma tabela com os locais cadastrados do usuário logado. Na tabela, adicionei um botão para excluir o local, passando o ID do local para a URL. Na página de dashboard, adicionei um link para a página de atualização de local, passando o ID do local na URL. Fiz o card com total de destinos - component>LocalCard. Tem o nome do viajante e um botão para cadastrar mais aventuras.

*feature/RegisterUser-postJson - Nao cadastrar cpf existente duas vezes e cadastrar user novo no db.json

*feature/Map -  utilizando React Leaflet para colocar um pin nos destinos cadastrados do usuário logado. 

*feature/RegisterLocalidade - Criei uma página para cadastrar um novo destino do usuário logado. Utilizei o mesmo formulário do RegisterUser. No campo CEP utilizei a API do ViaCEP para preencher automaticamente os campos de endereço. Ao cadastrar, o novo destino é adicionado à tabela na dashboard, com validações e estilizações
No Dashboard, adicionei um link para a página de atualização de destino passando o ID da localidade na URL. Na página de atualização já carreguei os dados da localidade ao montar o componente, usando o ID da URL.

*feature/updateLocalidade - Criei uma página para atualizar um destino do usuário logado. Utilizei o mesmo formulário do RegisterUser. No campo CEP utilizei a API do ViaCEP para preencher automaticamente os campos de latitude e longitude. O destino é atualizado na tabela na dashboard.

*feature/questions - Criei uma página para responder perguntas sobre o projeto. 

*feature/about - Criei uma página para falar sobre o projeto.



## 📂 PARA ACESSAR A DOCUMENTAÇÃO ACESSE O LINK:

Caso tenha alguma dúvida!!

[React Router Dom](https://reactrouter.com/en/main/start/tutorial)

[React Hook Form](https://react-hook-form.com/get-started)

[json-server](https://www.npmjs.com/package/json-server)

[YUP resolver](https://www.npmjs.com/package/@hookform/resolvers))

[React Leaflet](https://react-leaflet.js.org/)

  
## 🔪 Validações importantes

- O número de CPF e endereço de email sempre deveram ser únicos, não podendo cadastrar mais de uma pessoa a mesma informação.

- Senha tem que ter no mínimo 6 letras, campos obrigatórios no formulário.

- Somente o usuário pode deletar e atualizar seus destinos, não podendo deletar destinos de outros usuários.

- No cadastro de localidades e atualização quando colocar o CEP preencherá automaticamente a cidade e estado, separado por virgula no campo do input de Localidade.

- Na pagina dashboard quando a tela fica maior que 961x779px some as funcionalidades de click do  link editar e botão deletar e para ajustar coloquei width=100vw fixo para nao ter este problema mas quero saber como arrumar

  
## 🛠️ Construído com

- Trello - todos os passos que fiz para criar, roteiro da aplicação, regras de negócios e validações exigidas

    <img src="./src/assets/Trello.png" />

- VsCode - para formar o código em Node.js
- GitHub - utilizando o GitFlow, criado a main, develop e algumas branches para desenvolver cada passo exigido (rotas, Hooks do React, API externa para obter coordenadas geográficas a partir do CEP informado...)
- Vite
- React
- Json-server - para simular uma API fake com cadastro de usuários
- YUP - para validações

  

## 🧑🏻‍🏫 Professor para auxilio

**Nicholas Macedo** - [GitHub](https://github.com/nicholasmacedoo)
**Douglas Cavalcante** - [GitHub]([https://github.com/nicholasmacedoo](https://github.com/douglas-cavalcante))


## 👀 Melhorias

- Implementar responsividade para adaptação em telas grandes (como monitores) e telas pequenas (como smartphones e tablets).
- Na tela de cadastro, ao colocar o CEP cuidar para não colocar traço pois não funcionará. 
- Fazer um pagina para atualizar dados do usuário
- Fazer um Modal estilizado para perguntar se quer realmente deletar o destino
- Estudar mais CSS kkk

## 🎁 Expressões de gratidão

* O Floripa Mais Tec é uma iniciativa da Prefeitura de Florianópolis, em parceria com SENAI/SC, SEBRAE e ACATE, que visa democratizar o acesso ao ensino tecnológico para todos, oferecendo cursos de Tecnologia gratuitos!  📢;
* Lab365 e todos os monitores;
* Aos melhores colegas de classe de TRIP e NATURE que alguém poderia ter! Este módulo foi mais na raça com ajuda do ChatGPT
* Qualquer dúvida ou sugestão de melhorar o código eu aceito - algumas escrevi acima!!!


## 	📹 Video de apresentação do MiniProjeto 1

No video fiz uma apresentação rápida do projeto com alguns demostrações no Postman e um objetivo maior de uma comunicação mais assertiva, sem  um roteiro pre determinado. 

[Video] - ()
