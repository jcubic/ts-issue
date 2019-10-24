// type interpterFunction = (this: JQueryFoo, command: string, term: JQueryFoo) => any;


interface Foo {
  init(fn?: FooFunction): void;
}

type FooFunction = (this: Foo, command: string, foo: Foo) => (void | Promise<string> | string);


declare var Foo: Foo;
export = Foo;
export as namespace Foo;
