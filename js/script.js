document.addEventListener("DOMContentLoaded", function () {

    document.addEventListener("DOMContentLoaded", function () {
        window.mostrarSurpresa = function (botao) {
            botao.classList.add("explode");
            setTimeout(() => {
                window.location.href = "/aniverRaquel/html/surpresa.html";
            }, 800);
        };

        // Corações (deixe igual)
        setInterval(() => {
            const heart = document.createElement("div");
            heart.innerText = "❤️"; heart.classList.add("hearts");
            heart.style.left = Math.random() * 100 + "vw";
            heart.style.fontSize = (Math.random() * 20 + 15) + "px";
            document.body.appendChild(heart);
            setTimeout(() => heart.remove(), 5000);
        }, 400);
    });


    // PLAYER DE MÚSICA
    const audio = document.getElementById("audio");
    const playBtn = document.getElementById("playBtn");
    const progress = document.getElementById("progress");
    const volume = document.getElementById("volume");
    const currentTimeEl = document.getElementById("currentTime");

    if (!audio) return;

    let tocando = false;

    function formatTime(time) {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }

    // PLAY / PAUSE
    if (playBtn) {
        playBtn.addEventListener("click", () => {

            if (!tocando) {
                audio.play().catch(() => { });
                playBtn.textContent = "⏸";
                tocando = true;
            } else {
                audio.pause();
                playBtn.textContent = "▶";
                tocando = false;
            }

        });
    }

    // PROGRESSO DA MÚSICA
    if (progress && currentTimeEl) {

        audio.addEventListener("timeupdate", () => {

            if (audio.duration) {
                progress.value = (audio.currentTime / audio.duration) * 100;
            }

            currentTimeEl.textContent = formatTime(audio.currentTime);

        });

        progress.addEventListener("input", () => {
            if (audio.duration) {
                audio.currentTime = (progress.value / 100) * audio.duration;
            }
        });
    }

    // VOLUME
    if (volume) {

        volume.addEventListener("input", () => {
            audio.volume = volume.value / 100;
        });

        audio.volume = volume.value / 100;
    }

});




