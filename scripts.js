body, h1, h2, h3, h4, h5, h6 {
            font-family: "Source Code Pro", monospace;
            margin: 0;
            padding: 0;
            color: #f0f0f0;
        }
        body {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            background-color: #1e1e1e;
            overflow-x: hidden;
        }
        .container {
            flex: 1;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            position: relative;
            z-index: 1;
        }
        .profile-header {
            background-color: #282a36;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            display: flex;
            align-items: center;
            transition: transform 0.3s ease;
        }
        .profile-header:hover {
            transform: translateY(-5px);
        }
        .profile-img {
            width: 168px;
            height: 168px;
            border-radius: 50%;
            object-fit: cover;
            border: 4px solid #bd93f9;
            margin-right: 20px;
            transition: transform 0.3s ease;
        }
        .profile-img:hover {
            transform: scale(1.05);
        }
        .profile-info {
            flex-grow: 1;
        }
        .nav-options {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            gap: 15px;
            margin-bottom: 20px;
        }
        .nav-option {
            background-color: #44475a;
            color: #f8f8f2;
            border: none;
            padding: 12px 24px;
            cursor: pointer;
            border-radius: 25px;
            font-size: 1em;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .nav-option:hover, .nav-option.active {
            background-color: #bd93f9;
            transform: translateY(-3px);
            box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        }
        .section {
            background-color: #282a36;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 20px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            display: none;
            animation: fadeIn 0.5s ease-out;
            transition: transform 0.3s ease;
        }
        .section:hover {
            transform: translateY(-5px);
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .section.active {
            display: block;
        }
        .section h2 {
            color: #ff79c6;
            margin-bottom: 20px;
            border-bottom: 1px solid #44475a;
            padding-bottom: 10px;
        }
        .skills-list {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .skill-item {
            background-color: #44475a;
            color: #50fa7b;
            padding: 10px 20px;
            border-radius: 20px;
            font-size: 0.9em;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .skill-item i {
            width: 20px;
            text-align: center;
        }
        .skill-item:hover {
            background-color: #6272a4;
            color: #f8f8f2;
            transform: translateX(10px);
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .project {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #44475a;
            transition: transform 0.3s ease;
        }
        .project:hover {
            transform: translateX(10px);
        }
        .project:last-child {
            border-bottom: none;
        }
        .project h3 {
            color: #8be9fd;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .project h3 i {
            font-size: 1.2em;
            color: #50fa7b;
        }
        .certification-list {
            list-style-type: none;
            padding: 0;
        }
        .certification-list li {
            margin-bottom: 15px;
            transition: transform 0.3s ease;
            display: flex;
            align-items: center;
        }
        .certification-list li:hover {
            transform: translateX(10px);
        }
        .certification-list li::before {
            content: "\f0a3";
            font-family: "Font Awesome 5 Free";
            font-weight: 900;
            color: #50fa7b;
            font-size: 1.2em;
            margin-right: 10px;
        }
        .certification-list a, a {
            color: #8be9fd;
            text-decoration: none;
            transition: color 0.3s ease;
        }
        .certification-list a:hover, a:hover {
            color: #ff79c6;
            text-decoration: underline;
        }
        .code-bg {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: 0;
            background-color: #1e1e1e;
            opacity: 0.2;
        }
        .code-line {
            position: absolute;
            font-family: 'Source Code Pro', monospace;
            font-size: 14px;
            color: #50fa7b;
            white-space: nowrap;
        }
        .education-item {
            display: flex;
            align-items: flex-start;
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #44475a;
            transition: transform 0.3s ease;
        }
        .education-item:last-child {
            border-bottom: none;
        }
        .education-item:hover {
            transform: translateX(10px);
        }
        .education-item i {
            font-size: 2em;
            color: #50fa7b;
            margin-right: 20px;
            min-width: 40px;
            text-align: center;
        }
        .education-content {
            flex-grow: 1;
        }
        .education-content h3 {
            color: #8be9fd;
            margin-bottom: 5px;
        }
        .education-content p {
            margin: 0;
            color: #f8f8f2;
        }
        footer {
            background-color: #282a36;
            color: #f8f8f2;
            text-align: center;
            padding: 20px;
            width: 100%;
            z-index: 10;
        }
        @media (max-width: 768px) {
            .profile-header {
                flex-direction: column;
                text-align: center;
            }
            .profile-img {
                margin-right: 0;
                margin-bottom: 20px;
            }
        }
        .glitch {
            position: relative;
            color: #f0f0f0;
            font-size: 1em;
            letter-spacing: 0.1em;
        }
        .glitch::before,
        .glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        .glitch::before {
            left: 2px;
            text-shadow: -2px 0 #ff00c1;
            clip: rect(24px, 550px, 90px, 0);
            animation: glitch-anim-1 2s infinite linear alternate-reverse;
        }
        .glitch::after {
            left: -2px;
            text-shadow: -2px 0 #00fff9;
            clip: rect(85px, 550px, 140px, 0);
            animation: glitch-anim-2 2s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim-1 {
            0% { clip: rect(141px, 9999px, 74px, 0); }
            20% { clip: rect(49px, 9999px, 99px, 0); }
            40% { clip: rect(46px, 9999px, 78px, 0); }
            60% { clip: rect(134px, 9999px, 98px, 0); }
            80% { clip: rect(4px, 9999px, 121px, 0); }
            100% { clip: rect(40px, 9999px, 18px, 0); }
        }
        @keyframes glitch-anim-2 {
            0% { clip: rect(55px, 9999px, 29px, 0); }
            20% { clip: rect(130px, 9999px, 144px, 0); }
            40% { clip: rect(100px, 9999px, 23px, 0); }
            60% { clip: rect(30px, 9999px, 62px, 0); }
            80% { clip: rect(87px, 9999px, 94px, 0); }
            100% { clip: rect(143px, 9999px, 148px, 0); }
        }
