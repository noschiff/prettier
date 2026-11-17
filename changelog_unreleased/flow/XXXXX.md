#### Support definite assignment assertions in Flow (#XXXXX by @noschiff)

The `flow` parser can now format definite assignment assertions (`!`) on `let` and `var` declarations and on class fields, which `flow-parser` 0.340.0 added. Previously, Prettier threw an error on them.

<!-- prettier-ignore -->
```flow
// Input
let count  !:number;
class Box { value !: number; #secret!:string }

// Prettier stable
SyntaxError: Unexpected token `!`, expected the token `;` (1:12)

// Prettier main
let count!: number;
class Box {
  value!: number;
  #secret!: string;
}
```
