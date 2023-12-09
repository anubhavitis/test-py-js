function hello() {
    let mydiv = document.getElementById('my-div')
    let newdiv = document.createElement('div')
    newdiv.innerHTML = '<p> I am smart. </p>'
    mydiv.appendChild(newdiv)
}

window.onload = function () {
    console.log("hello, world!");
}

document.getElementById('my-button').addEventListener("click", hello);

module.exports = {
    hello,
}