# 🚀 Não faça sua viagem sem antes utilizar a plataforma Viagem365

  O Viagem365 é uma plataforma que visa promover viagens sustentáveis e experiências positivas para os usuários, fornecendo acesso a informações sobre destinos turísticos, praias, atrações naturais e atividades recreativas. Os usuários podem explorar e descobrir novos destinos, encontrar dicas de viagem sustentável e compartilhar suas experiências. O seu perfil chamou a atenção dos gestores da plataforma, para criar o MVP (Minimum Viable Product) da aplicação Front-End do software, que deverá ser construída utilizando a biblioteca React.
  
## 🏦 Módulo 1 - Projeto Avaliativo

Este repositório se baseia em um projeto avaliativo do curso FuturoDev o qual faço parte da turma TRIP com entrega no dia 12/08/2024 encerrando o segundo módulo.
Seguindo um roteiro e aplicando as regras de negócio e rotas/telas que devem ser criadas na aplicação com todas as regras de entrega do projeto avaliativo.

**Objetivo: Montagem e execução de uma aplicação Front-End, que deverá ser uma tela de Login/cadastro seguindo uma dashboard com os locais , codificada com uso do Node, Express e PostgreSQL - Software MVP**

A Viagem365 deseja automatizar algumas ações de atendimento, criando um sistema para armazenamento de informações do usuário(s) e seus destino(s) que poderá servir para gerar um aplicativo que demonstra os pontos de interesses dos usuários para coletar dados, gerar marketing pra empresas de turismo, engajamento em rotas desconhecidas e melhorias de conservação da natureza local...

  *Bora usar as boas praticas de desenvolvimento de software!*

  ## 📉 Diagrama telas

<p>
  <img src = "./viagem365/src/assets/Diagrama de telas.png">
</p>

## 🤖 Como rodar o repositório:

Clone o repositório em sua máquina em uma pasta local 

`Git clone https://github.com/pricbnll/viagem365Frontend.git`

Criei uma pasta com Vite ```npm create vite@latest```. Coloquei um nome de pasta (viagem365) que foi criado. Escolhi: React e JavaScript
Após isso transeferi todos os arquivos para a pasta viagem365Frontend e deletei esta que ficoi vazia, assim so tenho uma pasta com tudo - dependência Vite e git.

Agora você, após clonar, rode os seguintes comandos para instalar as dependências que estão nas pastas 'package.json'.
````
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
Instalado Bootstrap com a importação no arquivo main.jsx
```
import 'bootstrap/dist/css/bootstrap.min.css'
```
```
npm install bootstrap@5.3.3
```

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

Criei um arquivo db.json e para rodar:
```
npx json-server db.json
```
✅ Algumas páginas usei validações com YUP

Instalar Yup `npm install @hookform/resolvers yup`
```
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
```


✅ Algumas páginas usei validações com YUP

Instalar Yup `npm install @hookform/resolvers yup`
```
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
```

✅ Algumas páginas usei validações com YUP

Instalar Yup `npm install @hookform/resolvers yup`
```
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
```




## 🌊 GitFlow:

Iniciei na main mesmo e organizei as pastas, deletei arquivos e iniciei limpo.

DEVELOP: 
- Criei documento db.json como cadastros falsos
- criei pastas:
  - components: login, logout e css
  - pages com pastas especificas com .jsx e css: dashboard, Home, Login e register(cadastro)
  - route: como a rotas e seus links



## 📂 PARA ACESSAR A DOCUMENTAÇÃO ACESSE O LINK:

Caso tenha alguma dúvida!!

[React Router Dom](https://reactrouter.com/en/main/start/tutorial)

[React Hook Form](https://react-hook-form.com/get-started)

[json-server](https://www.npmjs.com/package/json-server)

[YUP resolver](https://www.npmjs.com/package/@hookform/resolvers))

[React Leaflet](https://react-leaflet.js.org/)

  
## 🔪 Validações importantes

- O número de CPF e endereço de email sempre deveram ser únicos, não podendo cadastrar mais de uma pessoa a mesma informação.

- 

  
## 🛠️ Construído com

- Trello - todos os passos que fiz para criar, roteiro da aplicação, regras de negócios e validações exigidas
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
- Utilizar a biblioteca Leaflet para criar um mapa e localizar os pontos de interesses.


## 🎁 Expressões de gratidão

* O Floripa Mais Tec é uma iniciativa da Prefeitura de Florianópolis, em parceria com SENAI/SC, SEBRAE e ACATE, que visa democratizar o acesso ao ensino tecnológico para todos, oferecendo cursos de Tecnologia gratuitos!  📢;
* Lab365 e todos os monitores;
* Aos melhores colegas de classe de TRIP e NATURE que alguém poderia ter! 
* Qualquer dúvida ou sugestão de melhorar o código eu aceito - algumas escrevi acima!!!


## 	📹 Video de apresentação do MiniProjeto 1

No video fiz uma apresentação rápida do projeto com alguns demostrações no Postman e um objetivo maior de uma comunicação mais assertiva, sem  um roteiro pre determinado. 

[Video] - ()
