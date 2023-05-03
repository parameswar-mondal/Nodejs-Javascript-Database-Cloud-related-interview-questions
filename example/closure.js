function outerMethod() {
    var name = 'Hello World';
    function innerMethod() {
        console.log(name);
    }
    innerMethod();
}
outerMethod();