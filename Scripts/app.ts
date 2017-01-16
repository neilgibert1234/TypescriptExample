function sayHelloWorld() {
    const name = (document.getElementById("myName") as HTMLInputElement).value;
    return `Hello from ${name}!`;
}