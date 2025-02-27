// Dark Mode Toggle
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Add dark mode styles
const style = document.createElement('style');
style.innerHTML = `
    .dark-mode {
        background-color: #222;
        color: white;
    }
    .dark-mode nav {
        background-color: #008b8b;
    }
    .dark-mode footer {
        background-color: #008b8b;
    }
    .dark-mode .btn {
        background-color: #008b8b;
    }
`;
document.head.appendChild(style);

// Create toggle button
const button = document.createElement('button');
button.innerText = 'Toggle Dark Mode';
button.classList.add('btn');
button.style.position = 'fixed';
button.style.top = '10px';
button.style.right = '10px';
button.onclick = toggleDarkMode;
document.body.appendChild(button);
