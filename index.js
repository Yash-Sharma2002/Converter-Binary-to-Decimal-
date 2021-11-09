function bin_to_dec(){
    let num =document.getElementById("inp-1").value
    let wr = document.getElementById("hidden")

    let myFunc = num => Number(num);
    var intArr = Array.from(String(num), myFunc);
    console.log(intArr);
    var g=0
    var s=0
    for (let i = intArr.length-1; i >= 0; i--) {
        let z = Math.pow(2, g)
        
        if (intArr[i]==1)
        {
            s+=z
        }
        g+=1
    }
    console.log(s)
    wr.innerHTML=s
}