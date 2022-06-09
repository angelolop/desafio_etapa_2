const btn = document.querySelector("#botao");

btn.addEventListener("click", function (e) {

    e.preventDefault();

    const name = document.querySelector("#name")

    const value = name.value

    document.write(value)
})


function startTimer(duration, display) {

    var timer = duration, minutes, seconds;

    setInterval(function () {

        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        } else if (timer == 0) {
            block();
            alert("Tempo esgotado");
        }

    }, 1000);

}

window.onload = function () {

    var duration = 60 * 60;
    var display = document.querySelector("#timer");

    startTimer(duration, display);
}

function block() {
    document.querySelector("select").disabled = true;
    document.querySelector("input").disabled = true;
    document.getElementById("autor").disabled = true;
    document.getElementById("issn").disabled = true;
    document.getElementById("ano").disabled = true;
    document.getElementById("editora").disabled = true;
    document.getElementById("edicao").disabled = true;
}
