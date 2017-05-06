const configureYamlifyObject = require('./index');

const yamlifyObject = configureYamlifyObject({
  indent: '   ',
});

const object = {
  array: [
    1,
    'two',
    {
      prop1: 'value',
      prop2: null,
    },
  ]
};

console.log(yamlifyObject(object));
