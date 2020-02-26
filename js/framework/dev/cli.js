
var schemaGeneration = require('./sample/schemaGeneration');

let functions = Object.assign({
}, schemaGeneration);
function getArgs () {
    const args = {};
    process.argv
        .slice(2, process.argv.length)
        .forEach( arg => {
        // long arg
        
        if (arg.slice(0,2) === '--') {
            const longArg = arg.split('=');
            const longArgFlag = longArg[0].slice(2,longArg[0].length);
            const longArgValue = longArg.length > 1 ? longArg[1] : true;
            args[longArgFlag] = longArgValue;
            
        }
        // flags
        else if (arg[0] === '-') {
            const flags = arg.slice(1,arg.length).split('');
            flags.forEach(flag => {
            args[flag] = true;
            });
            
        }else if(arg.split('=').length>0){
            args[arg.split('=')[0]]=arg.substring(arg.split('=')[0].length+1);
            
        }else{
            args[arg]=true;
        }
    });
    return args;
}

async function executeCommand(){
    let parameters =getArgs ();
    let ResolvedFunct = null;
    Object.keys(parameters).forEach(function(key) {
        var funct = parameters[key];
        let objMap = {};
        Object.keys(functions).forEach(e=>{
            objMap[e.toLocaleLowerCase()]=e;
        });
        let functName = objMap[key.toLocaleLowerCase()];
        let functName2 = objMap[funct.toLocaleLowerCase()];
        
        if (typeof functions[functName] === "function") 
        {  
            ResolvedFunct=functions[functName];
            return;
        }else if(typeof functions[functName2] === "function"){
            ResolvedFunct=functions[functName2];
            return
        }
      });
      if(ResolvedFunct){
        let possiblePromise = await ResolvedFunct(parameters);
        console.log(possiblePromise);
        process.exit(0);
      }else{
        console.log("No proper command function");
        process.exit(1);
      }
}

executeCommand();