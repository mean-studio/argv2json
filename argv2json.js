module.exports = class argv2json {
  parse(parseArrays=true) {
    let args = {};
    args.runtime = process.argv[0];
    args.initiator = process.argv[1];
    let argv = process.argv.splice(2);
    argv.forEach(element => {
      let currentElement = element.split('=');
      if (currentElement[1]) {
          if(parseArrays){
            args[currentElement[0]]=currentElement[1].split(',')
          }else{

              args[currentElement[0]] = currentElement[1];
          }
      } else {
        args[currentElement[0]] = true;
      }
    });
    return args;
  }
};
