var hooker = require('hooker');
console.log('loading ze a11y clicker');

var originalIt = it;
it = function(text, fn) {
    console.log('TEXT:', text);
    originalIt.apply(this, text, fn);
}

//hooker.hook(it, function(a){
    //console.log(a);
//});
