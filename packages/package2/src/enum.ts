export enum Foo {
  A,
  B,
  C
}

function getX(): Foo {
  throw new Error()
}

const x: Foo = getX()

switch(x) {
  // here there ARE autocompletes on X
}
