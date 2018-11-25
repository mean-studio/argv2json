#argv2json
## This packagage lets you easily to get ClI arguments passed to your node js process
## To initiate package 
argv2json = require('argv2json');
arg = new argv2json();
let myArgs= arg.parse()

##Package automatically will convert coma seperated argument values to array,
##if you want to prevent it you should use it as followed:
let myArgs= arg.parse(false)

##This package is experiemental and comes as it is without any warranty.