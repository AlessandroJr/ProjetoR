let Anima = {

    ArraySVG: [{
        nome: 'triangulo',
        posX: -6,
        posY: 6,
        rotDeg: 0,
        svg: `<svg class="cobrinha" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="197" height="198" viewBox="0 0 197 198">
            <defs>
            <clipPath id="clip-triangulo">
                <rect width="197" height="198"/>
            </clipPath>
            </defs>
            <g id="triangulo" clip-path="url(#clip-triangulo)">
            <g id="Grupo_349" data-name="Grupo 349" transform="translate(-6497.854 -3092)">
                <path id="Caminho_2568" data-name="Caminho 2568" d="M89.2.063l88.457,185.314L.131,185.67Z" transform="translate(6754.765 3227.196) rotate(135)" fill="#2a2929"/>
                <g id="Grupo_348" data-name="Grupo 348" transform="translate(6500.765 3092)">
                <path id="Caminho_2569" data-name="Caminho 2569" d="M89.2.063l88.457,185.314L.131,185.67Z" transform="translate(257 131.196) rotate(135)" fill="#1dc18a"/>
                <path id="Polígono_9_-_Contorno" data-name="Polígono 9 - Contorno" d="M89.2,2.36,1.707,184.676l174.378-.288L89.2,2.36m0-2.3,88.457,185.314L.131,185.67Z" transform="translate(257 131.196) rotate(135)" fill="#2a2929"/>
                </g>
            </g>
            </g>
        </svg>
        `}, {
            nome: 'piramide',
            posX: -10,
            posY: 70,
            rotDeg: 0,
            svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="237.57" height="260.2" viewBox="0 0 237.57 260.2">
        <defs>
          <clipPath id="clip-piramide">
            <rect width="237.57" height="260.2"/>
          </clipPath>
        </defs>
        <g id="piramide" clip-path="url(#clip-piramide)">
          <g id="Grupo_341" data-name="Grupo 341" transform="translate(1.806 2.41)">
            <path id="Caminho_2562" data-name="Caminho 2562" d="M4055.928-3901.975l116.978-189.158,116.979,189.158Z" transform="translate(-4055.928 4091.133)" fill="#f03e91"/>
            <path id="Caminho_2562_-_Contorno" data-name="Caminho 2562 - Contorno" d="M4291.691-3900.975h-237.57l.947-1.531,117.837-190.51.837,1.353Zm-234-2h230.435L4172.905-4089.25Z" transform="translate(-4055.928 4091.133)" fill="#2a2929"/>
            <path id="Caminho_2563" data-name="Caminho 2563" d="M4111.841-4091.133l-55.913,189.359h174.7Z" transform="translate(-3995.67 4092.133)" fill="#cc8fff"/>
            <path id="Caminho_2563_-_Contorno" data-name="Caminho 2563 - Contorno" d="M4113.492-4092.836l1.3,1.839,117.639,190.223H4054.59Zm115.326,190.062-115.326-185.311-56.226,185.311Z" transform="translate(-3996.67 4091.133)" fill="#2a2929"/>
            <circle id="Elipse_20" data-name="Elipse 20" cx="59.211" cy="59.211" r="59.211" transform="translate(90.12 138.368)" fill="#f03e91"/>
            <path id="Elipse_20_-_Contorno" data-name="Elipse 20 - Contorno" d="M59.211-1A59.934,59.934,0,0,1,92.876,9.284a60.384,60.384,0,0,1,21.814,26.49,60.133,60.133,0,0,1-5.552,57.1,60.384,60.384,0,0,1-26.49,21.814,60.133,60.133,0,0,1-57.1-5.552A60.384,60.384,0,0,1,3.732,82.648a60.133,60.133,0,0,1,5.552-57.1A60.384,60.384,0,0,1,35.774,3.732,59.835,59.835,0,0,1,59.211-1Zm0,118.422A58.211,58.211,0,1,0,1,59.211,58.277,58.277,0,0,0,59.211,117.422Z" transform="translate(90.12 138.368)" fill="#2a2929"/>
          </g>
        </g>
      </svg>
      `
    }],

    renderSVG: function (svg, posX, posY, angle) {
        let local = document.getElementById('backdoor');

        let html = `
            <div style="
                position: absolute;
                top: ${posY}vh;
                left: ${posX}vw;
                transform: rotate(${angle}deg)
            ">${svg}</div>
        `;
        
        local.innerHTML += html;

        return;
    },

    inicia: function (){
        for (let index = 0; index < Anima.ArraySVG.length; index++) {
            const element = Anima.ArraySVG[index];

            Anima.renderSVG(element.svg, element.posX, element.posY, element.rotDeg);
        }
    }
};
