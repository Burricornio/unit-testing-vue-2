# unit-testing-vue-2

## ¿Qué testear?
```
https://www.adictosaltrabajo.com/2018/10/25/testing-en-componentes-de-vue-js/

Definir inputs/outputs

Lifecycle hooks: comprobar que una función es llamada cuando el componente se monta, se destruye…

Métodos: comprobar que el retorno es el esperado o que se ha cambiado el estado correctamente.

Watchers: cuando se modifica un prop o método, asegurar que el watcher es invocado.

Propiedades computadas: comprobar que el retorno es el esperado.
```

## Mount / shallowmount
```
Mount nos montará el componente y todos los componentes hijos mientras que shallowMount solo montará el componente en cuestión.

Por lo general es recomendable usar shallowMount antes que mount porque mantiene los tests aislados y unitarios y se tarda menos en ejecutar el test.

Usa mount cuando quieras probar la integración entre distintos componentes.
```


## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
