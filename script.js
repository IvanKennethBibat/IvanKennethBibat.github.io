function showMessage() {
    document.body.innerHTML = '<h1>:) I love you.</h1>';
}
function moveButton() {
    let button = document.getElementById("no");
    let x = Math.random() * (window.innerWidth - 100);
    let y = Math.random() * (window.innerHeight - 100);

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    const messages = ["Nuh uh", "Think again pls", "Wrong", "Click yes smh", "skibidi plz...", "No"]

    button.innerText = messages[Math.floor(Math.random() * messages.length)];
}