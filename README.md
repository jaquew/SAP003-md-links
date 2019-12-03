# SAP003-md-links

## Índice

* [1. Introdução](#1-introdução)
* [2. Instalação](#2-instalação)
* [3. Utilização](#3-utilização)
* [4. Sobre o Projeto](#4-sobre-o-projeto)

***

## 1. Introdução

Esse projeto é uma ferramenta que utiliza `Node.js` para ler e analisar arquivos no formato `Markdown`, com a finalidade de verificar os arquivos que contenham links e mostrar algumas estatísticas.


## 2. Instalação


```
$ npm install -g jaquew/SAP003-md-links
```

## 3. Utilização

### Argumento

* path: Rota absoluta ou relativa ao arquivo. Se a rota passada é relativa, deve resolver como sendo relativa ao diretório onde foi chamada - current working directory

### Valor de retorno

* href: URL encontrada.
* text: Texto dentro do markdown.


Javascript Api
```node
> const mdlinks = require('mdlinks');
> mdlinks('path/mdfile.md')
  .then((link) => {
  console.log(`${link.texto}: ${link.href}`)
})
  //returns 'title: link'
> 
```

Command Line Interface 
```shell 

$ mdlinks path/mdfile.md
  //returns 'title: link'
​
```

### 3.1 Opção de Validação do Link

Adiciona um argumento "option" à função mdlinks
 * `option`: Um objeto com a seguinte propriedade:
    * `validate`: Um booleano que determina se deseja validar os links encontrados.


Javascript Api
```node
> const mdlinks = require('mdlinks')
> mdlinks('path/mdfile.md', {validate: true})
  .then((link) => {
  console.log(`${link.texto}: ${link.href}, ${link.status}`)
})
  //returns 'title: link, status'
> 
```

Command Line Interface 
```shell
$ mdlinks path/mdfile.md --validate
  //returns 'title: link, status'
​
```

## 4. Sobre o Projeto

Projeto apresentado ao Bootcamp da Laboratória Brasil
