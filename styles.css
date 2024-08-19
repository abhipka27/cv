        document.addEventListener('DOMContentLoaded', function() {
            const navOptions = document.querySelectorAll('.nav-option');
            const sections = document.querySelectorAll('.section');

            function showSection(sectionId) {
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                document.getElementById(sectionId).classList.add('active');
                navOptions.forEach(option => {
                    option.classList.remove('active');
                    if (option.getAttribute('data-section') === sectionId) {
                        option.classList.add('active');
                    }
                });
            }

            navOptions.forEach(option => {
                option.addEventListener('click', function() {
                    const sectionId = this.getAttribute('data-section');
                    showSection(sectionId);
                });
            });

            // Show about section by default
            showSection('about');

            // Programming effect
            const codeBg = document.getElementById('codeBg');
            const codeSnippets = [
                'function helloWorld() {',
                '    console.log("Hello, World!");',
                '}',
                'const arr = [1, 2, 3, 4, 5];',
                'arr.map(x => x * 2);',
                'class Person {',
                '    constructor(name) {',
                '        this.name = name;',
                '    }',
                '}',
                'import React from "react";',
                'const App = () => {',
                '    return <div>Hello React</div>;',
                '};'
            ];

            function createCodeLine() {
                const line = document.createElement('div');
                line.className = 'code-line';
                line.style.left = Math.random() * window.innerWidth + 'px';
                line.style.top = Math.random() * window.innerHeight + 'px';
                line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
                codeBg.appendChild(line);

                setTimeout(() => {
                    line.remove();
                }, 1000);
            }

            setInterval(createCodeLine, 100);
        });

        document.addEventListener("DOMContentLoaded", function() {
            const originalFooterText = "© 2024 Abhishekagouda Patil. All rights reserved.";
            const redirectUrl = "https://abhika27.blogspot.com/";

            const footerElement = document.querySelector("footer p");

            if (footerElement && footerElement.innerText !== originalFooterText) {
                window.location.href = redirectUrl;
            }

            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    if (mutation.type === 'characterData' || mutation.type === 'childList') {
                        if (footerElement.innerText !== originalFooterText) {
                            window.location.href = redirectUrl;
                        }
                    }
                });
            });

            observer.observe(footerElement, { childList: true, subtree: true, characterData: true });
        });
