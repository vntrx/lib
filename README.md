# Library of components


## Criar um novo component

Para criar um novo component basta executar o script: `yarn gen:component` e será criado um diretório para o component dentro de `/components/`, contendo dois arquivos:

- Component.tsx
- Component.stories.tsx

## Como testar um component

Observe que o projeto é um monorepo e além do projeto do pacote de componentes, existe também um projeto NextJs para que você possa testar os components recém criados sem maiores problemas.

Para isso, basta ir até o diretório do pacote:

```sh 
$ cd packages/shared/ui
```

E realizar o build do projeto:

```sh
$ yarn build
```

Ao voltar para o diretório root do projeto e executar `yarn dev`, será levantado um servidor de dev para a aplicação NextJs e um component importado a partir da lib é apresentado: