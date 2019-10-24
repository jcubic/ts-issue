
type TypeOrArray<T> = Array<T> | T;


declare namespace JQueryTerminal {
    type echoValue = string;
    type interpterFunction = (this: JQueryTerminal, command: string, term: JQueryTerminal) => any;
    type terminalObjectFunction = (...args: (string | number | RegExp)[]) => (void | PromiseLike<echoValue>);
    type ObjectInterpreter = {
        [key: string]: ObjectInterpreter | terminalObjectFunction;
    }
    type Interpterer = string | interpterFunction | ObjectInterpreter;
}

interface JQueryTerminal<TElement = HTMLElement> extends JQuery<TElement> {
    foo(command?: string): JQueryTerminal;
}

interface JQuery<TElement = HTMLElement> {
    terminal(interpreter?: TypeOrArray<JQueryTerminal.Interpterer>): JQueryTerminal;
}


