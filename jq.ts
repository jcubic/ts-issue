/// <reference path="./jq.d.ts" />

import "jquery";


$('body').terminal(function(command, term) {
  command.toUpperCase();
  term.foo(command.substring(0, 4)).foo();
});
