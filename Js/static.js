function myFunction() {
    var body = document.body;
    var instagramIcon = document.getElementById("instagram-icon");
    var tiktokIcon = document.getElementById("tiktok-icon");
    var discordIcon = document.getElementById("discord-icon");

    var htmlIcon = document.getElementById("html-icon");
    var cssIcon = document.getElementById("css-icon");
    var jsIcon = document.getElementById("js-icon");
    var wordpressIcon = document.getElementById("wordpress-icon");
    var sqlIcon = document.getElementById("sql-icon");
    var figmaIcon = document.getElementById("figma-icon");
    var xdIcon = document.getElementById("xd-icon");
    var photoshopIcon = document.getElementById("photoshop-icon");
    var vscIcon = document.getElementById("vsc-icon");
    var visualstudioIcon = document.getElementById("visualstudio-icon");

    if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");

        instagramIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/Icons/instagram-noir.png?raw=true";
        tiktokIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/Icons/tiktok-noir.png?raw=true";
        discordIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/Icons/discord-noir.png?raw=true";

        htmlIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/html.png?raw=true";
        cssIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/css.png?raw=true";
        jsIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/js.png?raw=true";
        wordpressIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/wordpress.png?raw=true";
        sqlIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/sql.png?raw=true";
        figmaIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/figma.png?raw=true";
        xdIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/xd.png?raw=true";
        photoshopIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/photoshop.png?raw=true";
        vscIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/vsc.png?raw=true";
        visualstudioIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/visual-studio.png?raw=true";
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");

        instagramIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/Icons/instagram.png?raw=true";
        tiktokIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/Icons/tiktok.png?raw=true";
        discordIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/Icons/discord.png?raw=true";

        htmlIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/html-blanc.png?raw=true";
        cssIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/css-blanc.png?raw=true";
        jsIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/js-blanc.png?raw=true";
        wordpressIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/wordpress-blanc.png?raw=true";
        sqlIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/sql-blanc.png?raw=true";
        figmaIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/figma-blanc.png?raw=true";
        xdIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/xd-blanc.png?raw=true";
        photoshopIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/photoshop-blanc.png?raw=true";
        vscIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/vsc-blanc.png?raw=true";
        visualstudioIcon.src = "https://github.com/Morgane2312/Portfolio/blob/master/Assets/competences/visual-studio-blanc.png?raw=true";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    var body = document.body;
    var switchButton = document.getElementById('btn-dark-mode');
    
    switchButton.checked = body.classList.contains('dark-mode');

    switchButton.addEventListener('change', function() {
        myFunction();
    });
});
