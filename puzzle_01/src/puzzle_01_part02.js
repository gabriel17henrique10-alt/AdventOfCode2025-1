const { log } = require("console");
const fs = require("fs");//carrega o módulo nativo File System 
fs.readFile("puzzle_01//src//input.txt", "utf8", (err, data) => {  //lê o arquivo
    if (err) {//verifica se houve erro na leitura
    console.error("Erro ao ler o arquivo:", err);//trata erros de leitura do arquivo
    return;
  }
    const lines = data.split("\n");//divide o conteúdo do arquivo em linhas
    let position = 50;//posição inicial
    let count = 0;//contagenm de vezes que voltou à posição 0
    let steps = 0;//número de passos a mover
    let newposition = 0
    for (let line of lines) {//pega cada linha do arquivo
        steps = parseInt(line.slice(1));//extrai o número de passos da linha
        if (line[0]=="L"){  //verifica se é para mover à esquerda
            newposition = position - steps;//anda para a esquerda
            while (newposition < 0){//verifica se passou da posição 0
                newposition = 100 + newposition//retorna a posição correta 
                count++   
                console.log("+1")
            }
            if(newposition === 0 && position === 0){
            count++
            console.log("+1")
            }
            position = newposition
        } else if (line[0]=="R"){
            newposition = position + steps//verifica se é para mover à direita;//anda para a direita
            while (newposition > 99){//verifica se passou da posição 99
                newposition = newposition - 100;//retorna a posição correta
                count += 1
                if(steps>=100){
                console.log("+1")
                }
            }
                if(newposition === 0){
                count -=1
                console.log("-1")
            }
            if(position === 0 && newposition != 0){
                count +=1
                console.log("+1")
            }
            position = newposition
        }
        console.log("Posição atual:", position, line);//imprime a posição atual
    }
    console.log("Password (Número de vezes que voltou à posição 0):", count);//imprime o resultado
    return;
});
    
         
// Posição atual: 46 L69
// +1
// Posição atual: 0 R54
// +1
// Posição atual: 8 L92