import { Foo } from "package2/dist";

function getX(): Foo {
  throw new Error()
}

const x: Foo = getX()

switch(x) {
  // no autocompletes on x.
}
