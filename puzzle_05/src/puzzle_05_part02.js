const kitchendatabase = require("./input.js");

let idsranges = ((kitchendatabase.substring(0,kitchendatabase.indexOf('\n\n'))).split('\n'))
let ids = new Array(idsranges.length)
for (let i = 0; i<idsranges.length; i++){
    idsranges[i] = idsranges[i].split('-')
    ids[i] = idsranges[i].map(Number)
    }

ids.sort((a,b) => b[1]-a[1])



console.log("The total number of fresh ids id:", totalnumberoffreshid(ids))


function totalnumberoffreshid(ids){
    let newidsranges
    let totalcount = 0
    newidsranges =createnewidsranges(ids)
    for (let i = 0; i<newidsranges.length; i++){
        totalcount+= (newidsranges[i][1]-newidsranges[i][0]) + 1
    }
    return totalcount
}

function createnewidsranges(ids){
    let newidsranges = new Array(0)
    let position = 0
    for (i = 0; i < ids.length; i++){
        if(ids[i][1]<0){
            continue
        }
        let highest = ids[i][1]
        let smallest = ids[i][0]
        newidsranges.push([smallest,highest])
        ids[i] = [-1,-1]
        for (j=0; j<ids.length; j++){
            if(ids[j][1]<0){
                continue
            }else if (smallest>=ids[j][0]&&highest<=ids[j][1]){
                highest = ids[j][1]
                smallest = ids[j][0]
                ids[j] = [-1,-1]
            }else if (smallest<=ids[j][0]&&highest>=ids[j][1]){
                ids[j] = [-1,-1]
            }else if(highest>=ids[j][0]&&highest<=ids[j][1]){
                highest = ids[j][1]
                ids[j] = [-1,-1]
            }else if(smallest>=ids[j][0]&&smallest<=ids[j][1]){
                smallest = ids[j][0]
                ids[j] = [-1,-1]
            }
        }
        newidsranges[position][0]=smallest
        newidsranges[position][1]=highest
        position++
    }
    
    return newidsranges
}
