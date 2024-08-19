## Aqui colocarei algumas explicações dos códigos, anotações e ideias

Deletei tags, imports, variáveis criadas pelo Vite que não utilizará. Geralmente o tema colocara estas com uma cor opaca.

Acrescente uma "infinidade" de funcionalidades necessárias - hooks ```import { useEffect, useState } from 'react'``` etc.

register.jsx   .12
    console.log(watch()) //para ver se esta sendo digitado nos input


https://github.com/douglas-cavalcante/aula_react



FEATURE/TEST

- testar cadastro de um novo usuário (email e senha que não estiver logado deve aparecer alert e redirecionar para RegisterUser - page)
  - Na page de cadastro , ao cadastrar novo usuário o CEP deve buscar o endereço, cidade e estado e autopreencher. Se clicar no botão cadastrar deve retornar na page Home para autenticar o Login - sendo que estes novos dados serão armazenados na db.json
- testar cadastro de um novo usuário autenticado (email e senha ja no db.json e que redirecionará para Dashboard)
  - na dashboard verificar se esta contando total de destino no Card, se aparece os destinos, nome do viajante, mapa com seus destinos com pin

