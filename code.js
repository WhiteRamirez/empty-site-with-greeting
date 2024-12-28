a = prompt("Привет, как твоё имя?")
function mfc2(a) {
    if (a.trim().length === 0 || a === null) {
        return "Имя не введено"
    }
  let words=a.split(" ")
  for (let i=0; i <words.length; ++i) {
    words[i]=words[i].charAt(0).toUpperCase()
    +words[i].slice(1).toLowerCase();
    }
    return words.join(" ")
}
//Обработка регистра переменной a
if (a !== null && a.trim().length > 0) {
    document.write(`<div class="namee">Здравствуйте, ` + mfc2(a) + `</div>`) } else {
        document.write(`<div class="namee">Имя не введено</div>`)
    }

