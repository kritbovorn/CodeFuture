let lotto_number = prompt("กรอกตัวเลขที่ต้องการ")
document.getElementById("selected").innerHTML = lotto_number

document.getElementById("result").innerHTML = Math.floor(Math.random() * 100)