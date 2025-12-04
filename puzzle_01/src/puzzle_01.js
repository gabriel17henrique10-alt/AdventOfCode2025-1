const { log } = require("console");
const fs = require("fs");//carrega o módulo nativo File System 
fs.readFile("puzzle_01//src//text.txt", "utf8", (err, data) => {  //lê o arquivo
    if (err) {//verifica se houve erro na leitura
    console.error("Erro ao ler o arquivo:", err);//trata erros de leitura do arquivo
    return;
  }
    const lines = data.split("\n");//divide o conteúdo do arquivo em linhas
    let position = 50;//posição inicial
    let count = 0;//contagenm de vezes que voltou à posição 0
    let steps = 0;//número de passos a mover
    let beforeposition = 0;
    for (let line of lines) {//pega cada linha do arquivo
        steps = parseInt(line.slice(1));//extrai o número de passos da linha
        if (line[0]=="L"){  //verifica se é para mover à esquerda
            position -= steps;//anda para a esquerda
            if(position < 0 && steps < 100){
                count +=1;
            }
            while (position < 0){//verifica se passou da posição 0
                position = 100 + position;//retorna a posição correta               
            }
            if(steps >100){
                count += parseInt(steps/100);
            }
        } else if (line[0]=="R"){//verifica se é para mover à direita
            position += steps;//anda para a direita
            if(position > 99 && steps < 100){
                count +=1;
            }
            while (position > 99){//verifica se passou da posição 99
                position = position - 100;//retorna a posição correta                
            }
            if(steps >100){
                count += parseInt(steps/100);
            }
        }
        if (position == 0){//verifica se voltou à posição 0
            count += 1;//incrementa a contagem
            console.log("+1");
        }
        log("Posição atual:", position);//imprime a posição atual
    }
    console.log("Password (Número de vezes que voltou à posição 0):", count);//imprime o resultado
    return;
});
    
         
