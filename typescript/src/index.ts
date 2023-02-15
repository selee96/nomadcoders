/* 
// type SuperPrint = <T>(a: T[]) => T
// const superPrint: SuperPrint = (a) => a[0]

function superPrint<V>(a: V[]) {
    return a[0]
}

const a = superPrint([1, 2, 3, 4])
const b = superPrint([true, false, true])
const c = superPrint(["a", "b", "c"])
const d = superPrint([1, 2, true, false, "hello"])
*/

type Player<E> = {
    name:string
    extraInfo:E
}
type seleeExtra = {
    favFood:string
}
type seleePlayer = Player<seleeExtra>

const selee:seleePlayer = {
    name: "selee",
    extraInfo: {
        favFood:"seafood"
    }
}

const hg:Player<null> = {
    name: "Hyungeun",
    extraInfo: null
}

type A = Array<number>
let a:A = [1, 2, 3, 4]

function printAllNumbers(arr:Array<number>) {
    
}