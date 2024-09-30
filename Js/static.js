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

        instagramIcon.src = "Assets/Icons/instagram-noir.png";
        tiktokIcon.src = "Assets/Icons/tiktok-noir.png";
        discordIcon.src = "Assets/Icons/discord-noir.png";

        htmlIcon.src = "assets/competences/html.png";
        cssIcon.src = "assets/competences/css.png";
        jsIcon.src = "assets/competences/js.png";
        wordpressIcon.src = "assets/competences/wordpress.png";
        sqlIcon.src = "assets/competences/sql.png";
        figmaIcon.src = "assets/competences/figma.png";
        xdIcon.src = "assets/competences/xd.png";
        photoshopIcon.src = "assets/competences/photoshop.png";
        vscIcon.src = "assets/competences/vsc.png";
        visualstudioIcon.src = "assets/competences/visual-studio.png";
    } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");

        instagramIcon.src = "Assets/Icons/instagram.png";
        tiktokIcon.src = "Assets/Icons/tiktok.png";
        discordIcon.src = "Assets/Icons/discord.png";

        htmlIcon.src = "assets/competences/html-blanc.png";
        cssIcon.src = "assets/competences/css-blanc.png";
        jsIcon.src = "assets/competences/js-blanc.png";
        wordpressIcon.src = "assets/competences/wordpress-blanc.png";
        sqlIcon.src = "assets/competences/sql-blanc.png";
        figmaIcon.src = "assets/competences/figma-blanc.png";
        xdIcon.src = "assets/competences/xd-blanc.png";
        photoshopIcon.src = "assets/competences/photoshop-blanc.png";
        vscIcon.src = "assets/competences/vsc-blanc.png";
        visualstudioIcon.src = "assets/competences/visual-studio-blanc.png";
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
