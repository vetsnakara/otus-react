# react-js-tutorial

## Lesson 1:
 > Basic configuration for the project on the master branch
* Babel
* Webpack
* Typescript
* Eslint
* Jest
* Precommit hooks / husky

## Lesson 2:
 > CLI calculator
 * Typescript
 * Jest

### Features
1. Binary operations: 
    * addition `+`
    * subtraction `-`
    * multiplication `*`
    * division `/`
    * power `^`
1. Unary operations
    * unary plus `+`
    * unary minus `-`
    * square: `**`
    * factorial `!`
1. Operations precedence
    1. unary plus/minus `+1`, `-2`
    1. other unary operations `!`, `**`
    1. power `^`
    1. multipliaction/division `*`, `/` 
    1. binary plus/minus `+`, `-` 

### Restrictions
  * binary operators shoud be separated by blanks with its operands
    * valid `1 + 1`,  `2 ^ 2`, `3 * 4 + 5`
    * not valid `1+1`,  `2^ 2`, `3*4 + 5`
  * unary operator should be inseparable with its operand
    * valid `+1`, `-2`, `3!`, `4**  `
    * invalid `3 !`, `4 **`
  * parentheses are not supported

### Setup and run
```console
npm i
npm run calc
```

### Usage example
```console
> 1
Result: 1
> 1 + 2
Result: 3
> 1 + 2 * 3 - 2
Result: 5
> 2** + 4
Result: 8
> 3 ^ 3 - 2 * 8 - 5
Result: 6
> 3! + 4!
Result: 30
> -2 - 2 ^ 2 ^ 2 - 4! - 4** * 3 / 2 + 2** - 2 ^ 
3 ^ 2
Result: -126
```

## Lesson 3:
> Basic react configuration

* @babel/preset-react
* Storybook
* Jest config

## Lesson 4:
> React and JSX

* React elements
* JSX
* Component docs

## Lesson 5:
* JSX + CSS
* Project architecture
