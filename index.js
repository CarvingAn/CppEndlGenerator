function autoResize(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
}

function generate() {
    const input = document.getElementById("input");
    const code = document.getElementById("code");
    code.value = input.value.split("\n").map(line => `std::cout << "${line}" << std::endl;`).join("\n");
    autoResize(input);
    autoResize(code);
}