function receivesAFunction(callback){
    return callback();
}

function returnsANamedFunction(){
    const named = function(){};
    return named;
}

function returnsAnAnonymousFunction(){
    return function(){};
}