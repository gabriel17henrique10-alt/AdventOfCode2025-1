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
    for (let line of lines) {//pega cada linha do arquivo
        steps = parseInt(line.slice(1));//extrai o número de passos da linha
        if (line[0]=="L"){  //verifica se é para mover à esquerda
            position -= steps;//anda para a esquerda
            while (position < 0){//verifica se passou da posição 0
                position = 100 + position;//retorna a posição correta
            }
        } else if (line[0]=="R"){//verifica se é para mover à direita
            position += steps;//anda para a direita
            while (position > 99){//verifica se passou da posição 99
                position = position - 100;//retorna a posição correta
        }
        }
        if (position == 0){//verifica se voltou à posição 0
            count += 1;//incrementa a contagem
        }
    } 
    console.log("Password (Número de vezes que voltou à posição 0):", count);//imprime o resultado
    return;
});
    
         
