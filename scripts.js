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
                // Animate skill bars if skills section
                if(sectionId === 'skills') {
                    document.querySelectorAll('.skill-item').forEach(item => {
                        const bar = item.querySelector('.skill-bar');
                        const percent = item.getAttribute('data-skill');
                        bar.style.width = percent + '%';
                    });
                } else {
                    document.querySelectorAll('.skill-bar').forEach(bar => {
                        bar.style.width = '0';
                    });
                }
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
            const originalFooterText = "© 2025 Abhishekagouda Patil. All rights reserved.";
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
  document.addEventListener("DOMContentLoaded", function () {
    // CMD-style progress loader logic
    const barElem = document.getElementById('cmdProgressBar');
    const barLength = 20;
    let progress = 0;
    const duration = 2000; // 2 seconds
    const interval = 20;
    const start = Date.now();

    function setCmdProgress(percent) {
      const filled = Math.round((percent / 100) * barLength);
      const empty = barLength - filled;
      const bar = '[' + '='.repeat(filled > 0 ? filled - 1 : 0) + (filled > 0 ? '>' : '') + ' '.repeat(empty) + ']';
      barElem.textContent = `${bar} ${Math.round(percent)}%`;
    }

    setCmdProgress(0);
    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - start;
      progress = Math.min((elapsed / duration) * 100, 100);
      setCmdProgress(progress);
      if (progress >= 100) {
        clearInterval(progressTimer);
      }
    }, interval);

    window.addEventListener("load", function () {
      setTimeout(() => {
        const preloader = document.getElementById("preloader");
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";
        setTimeout(() => {
          preloader.remove();
        }, 500); // time for fade-out
      }, 2000); // stays for 2 seconds
    });
  });

    // Certificate Modal Popup Logic (updated for buttons)
    const certModal = document.getElementById('certificateModal');
    const certImg = document.getElementById('certificateImg');
    const closeModal = document.getElementById('closeModal');
    document.querySelectorAll('.view-cert-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const li = this.closest('li');
        const imgSrc = li.getAttribute('data-cert');
        if (imgSrc) {
          certImg.src = imgSrc;
          certModal.classList.add('active');
        }
      });
    });
    document.querySelectorAll('.cred-btn').forEach(btn => {
      btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const li = this.closest('li');
        const link = li.getAttribute('data-link');
        if (link) {
          window.open(link, '_blank');
        }
      });
    });
    closeModal.addEventListener('click', function() {
      certModal.classList.remove('active');
      certImg.src = '';
    });
    certModal.addEventListener('click', function(e) {
      if (e.target === certModal) {
        certModal.classList.remove('active');
        certImg.src = '';
      }
    });

    // Scroll to Top Button Logic
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 200) {
        scrollTopBtn.style.display = 'flex';
      } else {
        scrollTopBtn.style.display = 'none';
      }
    });
    scrollTopBtn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
