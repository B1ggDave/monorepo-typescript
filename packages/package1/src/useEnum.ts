import { Foo } from "package2";

function getX(): Foo {
  throw new Error()
}

const x: Foo = getX()

switch(x) {
  
}
