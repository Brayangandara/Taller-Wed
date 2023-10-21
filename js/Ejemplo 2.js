document.addEventListener("DOMContentLoaded", function () {
    function Proyecto() {
        var tabla = document.createElement("tabla");
        var tabla = document.createElement("tabla");

        
        var tituloRow = document.createElement("tr");
        var titulocentral = document.createElement("td");
        titulocentral.colSpan = 4;
        titulocentral.innerHTML = "<strong>15 + Web Design Projects with Source Code..!</strong>";
        var hr = document.createElement("hr");
        
        tituloRow.appendChild(titulocentral);
        tabla.appendChild(tituloRow);
        tabla.appendChild(hr);
        
        
        var proyecto = [
            { name: "Libros", image: "https://i.postimg.cc/0y78qB7T/images.jpg" },
            { name: "Mi blog", image: "https://i.postimg.cc/7hbH8PN9/imagen-1.png" },
            { name: "Tiempo Libre", image: "https://i.postimg.cc/59k95vxR/images-4.jpg" },
            { name: "Facebook", image: "https://i.postimg.cc/TPb1PJBb/descarga-1.jpg" },
            { name: "WordPress", image: "https://i.postimg.cc/5yGxxc7V/imagen-6.png" },
            { name: "Popular Wallpapers", image: "https://i.postimg.cc/c4gxFHC4/images-5.jpg" }
        ];
        
        for (var i = 0; i < proyecto.length; i += 3) {
            var row = document.createElement("tr");
            for (var j = i; j < i + 3 && j < proyecto.length; j++) {
                var cell = document.createElement("td");
                
                var img = document.createElement("img");
                img.src = proyecto[j].image;
                img.alt = proyecto[j].name;
        
                var botoncodigofuente = document.createElement("input");
                botoncodigofuente.type = "button";
                botoncodigofuente.value = "Source Code";
        
                var botondevistaprevia = document.createElement("input");
                botondevistaprevia.type = "button";
                botondevistaprevia.value = "Preview Demo";
        
                cell.appendChild(img);
                cell.appendChild(document.createElement("br"));
                cell.appendChild(document.createTextNode(proyecto[j].name));
                cell.appendChild(botoncodigofuente);
                cell.appendChild(botondevistaprevia);
        
                row.appendChild(cell);
            }
            tabla.appendChild(row);
        }
        
        
        tabla.style.borderCollapse = "separate";
        tabla.style.borderSpacing = "10px";
        
     
        document.body.appendChild(tabla);
        
        document.body.appendChild(tabla);
    }

    Proyecto();
});