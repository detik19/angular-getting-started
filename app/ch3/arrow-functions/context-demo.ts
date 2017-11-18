function myComponent() {
    this.age=42;
    setTimeout(()=> {
        this.age+=1;
        console.log(this.age);
    },100);
}

// tslint:disable-next-line:no-unused-expression
new myComponent();