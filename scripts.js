     document.addEventListener('DOMContentLoaded', function() {
            // Theme toggle functionality with smooth transitions
            const themeToggle = document.getElementById('themeToggle');
            const htmlElement = document.documentElement;
            
            // Check for saved theme preference or default to dark
            const currentTheme = localStorage.getItem('theme') || 'dark';
            htmlElement.setAttribute('data-theme', currentTheme);
            
            themeToggle.addEventListener('click', function() {
                const currentTheme = htmlElement.getAttribute('data-theme');
                const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
                
                // Add smooth transition class to body
                document.body.style.transition = 'background-color 0.5s ease';
                
                htmlElement.setAttribute('data-theme', newTheme);
                localStorage.setItem('theme', newTheme);
                
                // Rotate animation for toggle button
                this.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
                this.style.transform = 'rotate(360deg)';
                
                setTimeout(() => {
                    this.style.transform = 'rotate(0deg)';
                }, 500);
                
                // Remove transition after complete
                setTimeout(() => {
                    document.body.style.transition = '';
                }, 500);
            });

            const navOptions = document.querySelectorAll('.nav-option');
            const sections = document.querySelectorAll('.section');

            let initialLoad = true;

            function showSection(sectionId) {
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                const targetSection = document.getElementById(sectionId);
                targetSection.classList.add('active');
                navOptions.forEach(option => {
                    option.classList.remove('active');
                    option.setAttribute('aria-expanded', 'false');
                    if (option.getAttribute('data-section') === sectionId) {
                        option.classList.add('active');
                        option.setAttribute('aria-expanded', 'true');
                    }
                });
                targetSection.focus({ preventScroll: true });
                initialLoad = false;
                // Animate skill bars if skills section
                if(sectionId === 'skills' || sectionId === 'languages') {
                    setTimeout(() => {
                        document.querySelectorAll('#' + sectionId + ' .skill-item').forEach(item => {
                            const bar = item.querySelector('.skill-bar');
                            const percent = item.getAttribute('data-skill');
                            bar.style.width = percent + '%';
                        });
                    }, 100);
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
                    
                    // Add ripple effect
                    const ripple = document.createElement('span');
                    ripple.style.position = 'absolute';
                    ripple.style.borderRadius = '50%';
                    ripple.style.background = 'rgba(255, 255, 255, 0.6)';
                    ripple.style.width = ripple.style.height = '100px';
                    ripple.style.left = ripple.style.top = '50%';
                    ripple.style.transform = 'translate(-50%, -50%) scale(0)';
                    ripple.style.animation = 'ripple 0.6s ease-out';
                    ripple.style.pointerEvents = 'none';
                    
                    this.appendChild(ripple);
                    setTimeout(() => ripple.remove(), 600);
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

        document.addEventListener("DOMContentLoaded", function () {
            // Animated progress preloader
            const preloader = document.getElementById("preloader");
            const progressBar = document.getElementById("progressBar");
            const progressPercent = document.getElementById("progressPercent");
            let progress = 0;
            
            const progressInterval = setInterval(() => {
                progress += Math.random() * 15;
                if (progress > 100) progress = 100;
                
                if (progressBar && progressPercent) {
                    progressBar.style.width = progress + "%";
                    progressPercent.textContent = Math.floor(progress);
                }
                
                if (progress >= 100) {
                    clearInterval(progressInterval);
                    setTimeout(() => {
                        if (preloader) {
                            preloader.style.opacity = "0";
                            setTimeout(() => {
                                preloader.style.display = "none";
                            }, 500);
                        }
                    }, 500);
                }
            }, 150);
            
            // Hide preloader after window loads (fallback)
            window.addEventListener("load", function () {
                setTimeout(() => {
                    clearInterval(progressInterval);
                    if (preloader && preloader.style.opacity !== "0") {
                        if (progressBar) progressBar.style.width = "100%";
                        if (progressPercent) progressPercent.textContent = "100";
                        
                        setTimeout(() => {
                            preloader.style.opacity = "0";
                            setTimeout(() => {
                                preloader.style.display = "none";
                            }, 500);
                        }, 300);
                    }
                }, 500);
            });
        });

        // View Credential Button Logic
        document.addEventListener('DOMContentLoaded', function() {
            document.querySelectorAll('.view-credential-btn').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    const li = this.closest('li');
                    const link = li.getAttribute('data-link');
                    if (link && link !== '#') {
                        window.open(link, '_blank');
                    } else {
                        // Show a message if no link is available
                        alert('Credential link not available at the moment.');
                    }
                });
            });
        });

        // Scroll to Top Button Logic
        document.addEventListener('DOMContentLoaded', function() {
            const scrollTopBtn = document.getElementById('scrollTopBtn');
            
            if (scrollTopBtn) {
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
            }
        });