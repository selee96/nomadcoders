type Player = {
    readonly name:string,
    age?:number
}

const playerMaker = (name:string) : Player => ({name})

const selee = playerMaker("selee")
selee.age = 12;
selee.name = "sieun"

const hg : Player = {
    name: "Hyungeun",
    age: 32
}