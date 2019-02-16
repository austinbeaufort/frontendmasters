// SCOPE AND CLOSURES

// FUNCTION SCOPING

// COMPILING FUNCTION SCOPE

let foo = 'bar';

function bar() {
    let foo = 'baz';
}

function baz(foo) {
    foo = 'bam';
    bam = 'yay'; // NOT A FORMAL DECLARATION OF 'BAM'
}


