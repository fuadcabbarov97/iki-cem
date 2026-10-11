
// iki cem taskı

let arr = [2, 3, 4, 5] 
let target = +prompt("ededi daxil edin")
let cem = 0
let i
let tapildi = false
for (let i = 0; i < arr.length; i++) {

    let a

    for (let a = i + 1; a < arr.length; a++) {
        cem = arr[i] + arr[a]
        if (cem == target) {
            tapildi = true
            console.log("Indexlər:", i, a);
            console.log("Ədədlər:", arr[i], arr[a]);
        }
    }

} if (tapildi == false) {
    tapildi = false
    console.log("alınmadı!")

}











