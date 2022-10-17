let Anima = {

    configs: {
        // produção
        api: 'https://desafio.useall.com.br/api/v1/',
        front: 'https://desafio.useall.com.br'
        
    },

    sound: {
        btnS: new Audio('./assets/audio/btn-simples.wav'),
        btnG: new Audio('./assets/audio/btn-g.wav'),
        open: '',
        errado: new Audio('./assets/audio/errado.wav'),
        certo: new Audio('./assets/audio/certo.wav'),
        perguntas: '',
        resultado: ''
    },

    carreira: '',

    cores: [{
        header: '#fac710',
        exp: '#D90F0F'
    }, {
        header: '#D90F0F',
        exp: '#fac710'
    }, {
        header: '#652CB3',
        exp: '#16D1A7'
    }, {
        header: '#16D1A7',
        exp: '#652CB3'
    }],

    coresPgts: [],

    maiorTipo: '',
    maiorValor: '',

    player: {
        nome: '',
        perguntaAtual: 0,
        otherResults: [],
        pgts: [],
        respondidas: [],
        acertos: 0,
        pontos: {
            Rock: 0,
            Lofi: 0,
            Sertanejo: 0,
            Eletronica: 0,
            Pop: 0,
            Funk: 0,
            Pagode: 0,
            Rap: 0
        }
    },

    onClickAction: function (sceneid, oquesalvar) {
        let nextframe = Anima.frames.find(e => e.sceneid === sceneid);

        Anima.sound.open.volume = 0.6;
        Anima.sound.btnG.play();

        if (nextframe.nextFrame) {
            nextframe.nextFrame();
        }

        switch (oquesalvar) {
            case 'playernome':
                Anima.player.nome = document.getElementById('player-nome').value
                break;

            default:
                break;
        }
    },

    onClickCarreira: function (carreira) {
        Anima.carreira = carreira;

        Anima.sound.btnS.play();

        this.loadingPerguntas();

        Anima.sound.open.volume = 0.4;

        setTimeout(() => {
            Anima.sound.open.volume = 0.2;
            setTimeout(() => {
                Anima.sound.open.volume = 0;
                Anima.sound.open.pause();
            }, 1000);
        }, 1000);

        return;
    },

    carreiraDesign: function () {
        this.loadingPerguntas();
    },

    loadingPerguntas: function () {
        let html = `
        <div class="frase-efeito agorashow">
            <div class="txt3">
                Agora, hora <br>
                do show!
            </div>
        </div>`;

        let curvas = `<div id="curva-verde"><svg class="floatingDefault" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 347 142" style="enable-background:new 0 0 347 142;" xml:space="preserve">
         <style type="text/css">
             .st0{clip-path:url(#SVGID_00000181781177258171903250000010890193186801933449_);fill:#269385;}
         </style>
         <g>
             <defs>
                 <rect id="SVGID_1_" width="347" height="142"/>
             </defs>
             <clipPath id="SVGID_00000026849244763890238530000003769901207436846752_">
                 <use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
             </clipPath>
             <path style="clip-path:url(#SVGID_00000026849244763890238530000003769901207436846752_);fill:#269385;" d="M346.8,19.1
                 c-1.7,4.9-4.5,9.3-9.5,8.1c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9c-0.8-0.2-1.6-0.3-2.3-0.4h-4.8
                 c-11.4,1.7-16.8,15.2-19.3,25.9c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
                 C239,16.5,232,33.2,228.9,45.9c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
                 c-16.3-3.9-23.3,12.8-26.4,25.5c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
                 c-16.3-3.9-23.3,12.8-26.4,25.5h0c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
                 C58.8,69,51.8,85.7,48.8,98.4c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
                 c-6.5-1.6-11.5,0.1-15.3,3.5v28.4c0.3-1.2,0.7-2.4,0.9-3.5l0,0c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4
                 c3.4,6.5,6.7,11,14,12.8c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
                 c16.2,3.9,23.4-12.9,26.4-25.5l0,0c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
                 c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
                 c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
                 c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
                 c4.8,1.2,8.8,0.5,12.1-1.3V19.1z"/>
         </g>
         </svg>
            
  
              </div>

              <div id="curva-vermelha"><svg class="floatingDefault" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 347 142" style="enable-background:new 0 0 347 142;" xml:space="preserve">
         <style type="text/css">
             .st2230{fill:#D90F0F;}
         </style>
         <path class="st2230" d="M333.3,23.6L333.3,23.6c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12-9
             c-16.3-3.9-23.3,12.8-26.4,25.5c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
             c-16.3-3.9-23.3,12.8-26.4,25.5c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
             c-16.3-3.9-23.3,12.8-26.4,25.5c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
             C103.1,64.1,96.1,80.8,93,93.5l0,0c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
             C43.1,81.6,36.1,98.3,33,111c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.5-4.3-6.6-7.5-11.4-8.8v14.4
             c2,2.6,3.4,6.6,4.6,9c3.4,6.5,6.7,11,14,12.8c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4
             c3.4,6.5,6.7,11,14,12.8C94.8,125.8,102,109,105,96.4l0,0c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4
             c3.4,6.5,6.7,11,14,12.8c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
             c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
             c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
             c16.2,3.9,23.4-12.9,26.4-25.5h0c0.5-1.7,1-4.2,1.8-6.7V0h-0.5C339.2,4.6,335.3,15,333.3,23.6z"/>
         </svg>
         
  
              </div>
        `;

        $('#planeta-loading').css('transform', 'rotate(0deg) translate(0px, 0px)');
        $('#btns-carreiras').css('transform', 'translate(-200vh, 0px)');
        $('.seguircarreira').css('transform', 'translate(-200vh, 0px)');


        $('.content').append(html);
        $('.backdoor').append(curvas);

        $('#curva-vermelha').css('margin-top', '200vh');
        $('.agorashow').css('margin-top', '20vh');

        setTimeout(() => {

            $('#curva-verde').css('margin-top', '12vh');
            $('#curva-vermelha').css('margin-top', '20vh');

            Anima.sound.perguntas.volume = 0.8;
            Anima.sound.perguntas.loop = true;

            setTimeout(() => {
                $('#planeta-loading').css('transform', 'rotate(360deg) translate(0px, 0px)');

                setTimeout(() => {
                    $('#planeta-loading').css('transform', 'translate(150vw, 0px)');

                    setTimeout(() => {
                        $('.agorashow').css('margin-left', '0');
                        Anima.sound.perguntas.play();

                        setTimeout(() => {

                            $('#curva-verde').css('margin-top', '-150vh');
                            $('#curva-vermelha').css('margin-top', '300vh');
                            $('.agorashow').css('margin-left', '200vw');

                            setTimeout(() => {
                                $('.content').html('');

                                $('body').css('background-color', '#FFF6D6');

                                Anima.abrirPerguntas();
                            }, 2000);

                        }, 2500);

                    }, 500);

                }, 1000);

            }, 1000);

        }, 1000);
    },

    abrirPerguntas: function () {
        if (Anima.player.perguntaAtual == 11) {
            Anima.preparaResultado();
            return;
        }

        
        $('.content').css('transition', 'all 1s ease');

        let cores = Anima.cores[Math.floor(Math.random() * 4)];;

        while (Anima.cor == cores) {
            cores = Anima.cores[Math.floor(Math.random() * 4)];
        }

        Anima.cor = cores;
        Anima.sound.perguntas.volume = 0.6;

        let header = `
            <div class="header-pergunta" style="background-color:${cores.header}">
                <svg class="logo-topo" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 1211.4 374.8" style="enable-background:new 0 0 1211.4 374.8;" xml:space="preserve">
                <style type="text/css">
                    .white{fill:#FFFFFF;}
                </style>
                <g>
                    <path class="white" d="M781.8,133.2c-1.4,0-2.5,0-3.9,0c-46.2,1.8-67.5,40.1-67.5,74.9c0,42.3,24.5,69.2,67.5,72.1
                        c2.5,0,5.3,0.4,7.8,0.4c19.2,0,36.2-3.2,51.8-9.9l-7.5-28.8c-11.7,3.9-23.1,6-38,6c-5,0-9.6-0.7-14.2-1.8
                        c-13.8-3.2-24.5-11.4-25.6-25.6h25.6h65.3c0.4-3.2,1.4-9.6,1.4-17C844.7,168.4,827.3,133.2,781.8,133.2z M777.9,190.7H752
                        c1.1-11.4,8.5-27.7,25.9-28.4c0.7,0,1.1,0,1.4,0c19.9,0,24.5,18.1,24.5,28.4H777.9z"/>
                    <path class="white" d="M540,212.4c0,20.2-6.4,32.3-21.7,32.7c-14.9-0.4-21.3-12.4-21.3-32.7v-76h-44v82.7c0,81.7,130.7,81.7,130.7,0
                        v-82.7H540V212.4z"/>
                    <path class="white" d="M657.9,163.7c11.7,0,24.5,4.6,30.9,7.8l13.8-28.4c-8.9-4.3-28.4-9.9-46.2-9.9c-35.2,0.7-57.5,19.9-57.5,46.5
                        c-0.4,16.3,11,32.7,40.5,42.3c16,5.3,20.2,8.9,20.2,16.3c0,7.1-5.3,11.4-18.5,11.4s-30.2-5.3-38-10.3l-13.8,29.5
                        c11.4,7.5,33.4,11.7,51.8,11.7c40.1,0,60.7-19.2,60.7-45.8c-0.4-20.2-11.4-34.1-38-43.3c-17.4-6-22.7-9.2-22.7-16.3
                        C641.2,168.4,647.3,163.7,657.9,163.7z"/>
                    <path class="white" d="M977.5,194.3c0-33.4-14.9-61.1-61.8-61.1c-0.4,0-0.7,0-1.1,0c-25.2,0.4-45.1,6.7-57.5,13.8l11.7,27
                        c9.2-5.7,24.5-10.3,39.1-10.3c2.5,0,4.6,0,6.7,0.4c15.6,1.8,18.8,11,18.8,17.8v1.8c-6.4,0-12.8,0.4-18.8,0.7
                        c-39.1,4.3-63.9,21.3-63.9,52.9c0,22.7,17,43.3,45.8,43.3c6.4,0,12.4-0.7,18.1-2.5c8.9-2.8,16.3-7.8,22-14.9h1.1l2.5,14.2h39.4
                        c-1.8-7.8-2.1-20.6-2.1-34.1V194.3z M934.9,226.2c0,2.5-0.4,5-0.7,7.5c-2.5,7.8-10.3,14.6-19.5,16c-1.1,0-2.1,0-3.2,0
                        c-9.9,0-17.4-5.3-17.4-16.7c0-11.4,8.2-17.4,20.6-20.2c6-1.4,12.8-1.8,20.2-1.8V226.2z"/>
                    <path class="white" d="M1038.6,220.2c0-72.4,0-20.2,0-83.8h-43c0,46.2,0,28.1,0,90.5c0,19.9,4.3,33.4,12.1,41.5
                        c7.5,7.5,19.2,12.1,33.4,12.1c12.1,0,27-2.1,32.7-4.3l-5.7-32.7C1048.5,247.9,1038.6,242.9,1038.6,220.2z"/>
                    <path class="white" d="M1124.1,220.2c0-72.4,0-20.2,0-83.8h-43c0,46.2,0,28.1,0,90.5c0,19.9,3.9,33.4,12.1,41.5
                        c7.1,7.5,18.8,12.1,33,12.1c12.1,0,27.3-2.1,32.7-4.3l-5.7-32.7C1133.7,247.9,1124.1,242.9,1124.1,220.2z"/>
                    <path class="white" d="M140.2,111.9c27.3,0,49.4-22.4,49.4-49.7s-22-49.7-49.4-49.7c-27.7,0-49.7,22.4-49.7,49.7
                        S112.5,111.9,140.2,111.9z"/>
                    <path class="white" d="M229.7,222.7c-21.3,0-45.5-41.2-61.1-57.9c-17-17.8-39.4-27.7-64.3-27.7c-78.1,0-91.6,83.1-91.6,143.8h57.2
                        c0.7-26.3-3.6-85.9,35.5-85.9c19.5,0,36.6,29.1,48.3,43c22.4,25.6,42.3,42.6,77.1,42.6c77.4,0,91.6-83.4,91.6-143.8h-57.2
                        C264.5,163.4,267.7,222.7,229.7,222.7z"/>
                    <path class="white" d="M1191.2,143.9c-4.3-4.6-10.3-7.5-17.4-7.5c-6.7,0-12.8,2.8-17.4,7.5c-4.3,4.3-7.1,10.3-7.1,17.4
                        c0,6.7,2.8,12.8,7.1,17.4c4.6,4.3,10.7,7.1,17.4,7.1c7.1,0,13.1-2.8,17.4-7.1c4.6-4.6,7.5-10.7,7.5-17.4
                        C1198.7,154.2,1195.9,148.1,1191.2,143.9z M1188.4,175.5c-3.9,3.6-8.9,5.7-14.6,5.7c-5.3,0-10.3-2.1-14.2-5.7
                        c-3.6-3.9-5.7-8.9-5.7-14.2c0-5.7,2.1-10.7,5.7-14.6c3.9-3.6,8.9-5.7,14.2-5.7c5.7,0,10.7,2.1,14.6,5.7c3.6,3.9,5.7,8.9,5.7,14.6
                        C1194.1,166.6,1192,171.6,1188.4,175.5z"/>
                    <path class="white" d="M1181.7,164.1c-0.7-0.7-1.8-1.4-2.8-2.1c2.1-0.4,3.9-1.1,5.3-2.5c1.1-1.4,1.4-2.8,1.4-5c0-1.4-0.4-2.8-1.1-4.3
                        c-0.7-1.1-1.8-1.8-2.8-2.5c-1.4-0.4-3.6-0.7-6.4-0.7h-0.4h-10.7v26.3h5.3v-11h1.1c1.1,0,2.1,0.4,2.5,0.4c0.7,0.4,1.4,0.7,1.8,1.1
                        c0.4,0.7,1.4,2.1,2.8,3.9l3.9,5.7h6l-3.2-5C1183.4,166.2,1182.4,164.8,1181.7,164.1z M1174.9,158.4c-0.4,0-1.1,0-1.4,0h-3.9v-6.7
                        h3.9c0.7,0,1.1,0,1.4,0c1.4,0,2.1,0,2.5,0c1.1,0.4,1.8,0.7,2.1,1.1c0.4,0.7,0.7,1.4,0.7,2.1c0,0.7,0,1.4-0.4,2.1
                        c-0.4,0.4-1.1,0.7-1.8,1.1C1177.8,158.1,1176.7,158.4,1174.9,158.4z"/>
                </g>
                </svg>

                <div id="qstid">
                    <div id="numero-qst">
                        ${Anima.player.perguntaAtual + 1}
                    </div>
                    <svg id="exp-svg" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 67.6 67.7" style="enable-background:new 0 0 67.6 67.7;" xml:space="preserve">
                    <g id="Polígono_13">
                        <path fill="${cores.exp}" d="M41.5,63l-7.2-11l-0.4-0.6L33.4,52l-7.2,11l-0.9-13.3l0-0.8l-0.7,0.3l-11.7,5.9l5.7-11.9l0.3-0.7l-0.7-0.1
                            l-13-0.9l10.8-7.4l0.6-0.4l-0.6-0.4L5.3,26l13-0.9l0.7-0.1l-0.3-0.7l-5.7-11.9l11.7,5.9l0.7,0.3l0-0.8l0.9-13.3l7.2,11l0.4,0.6
                            l0.4-0.6l7.2-11l0.9,13.3l0,0.8l0.7-0.3l11.7-5.9L49,24.4l-0.3,0.7l0.7,0.1l13,0.9l-10.8,7.4l-0.6,0.4l0.6,0.4l10.8,7.4l-13,0.9
                            l-0.7,0.1l0.3,0.7l5.7,11.9L43,49.3L42.4,49l0,0.8L41.5,63z"/>
                        <path class="exp-border" d="M41.1,6.2l-7.2,11.1L26.6,6.2l-0.9,13.3L14,13.6l5.7,12l-13,0.9l10.8,7.4L6.8,41.3l13,0.9l-5.7,12l11.7-5.9
                            l0.9,13.3l7.2-11.1l7.2,11.1l0.9-13.3l11.7,5.9l-5.7-12l13-0.9l-10.8-7.4l10.8-7.4l-13-0.9l5.7-12l-11.7,5.9L41.1,6.2 M41.9,3.1
                            l1,14.8l13-6.5l-6.4,13.3l14.4,1l-12,8.2l12,8.2l-14.4,1l6.4,13.3l-13-6.5l-1,14.8l-8-12.3l-8,12.3l-1-14.8l-13,6.5L18.2,43
                            l-14.4-1l12-8.2l-12-8.2l14.4-1l-6.4-13.3l13,6.5l1-14.8l8,12.3L41.9,3.1z"/>
                    </g>
                    </svg>
                </div>
            </div>
        `;

        $('#header').html(header);
        $('.header-pergunta').css('margin-top', '-200px');

        setTimeout(() => {
            $('.header-pergunta').css('margin-top', '0');
            $('body').css('overflow-y', 'scroll');
            $('.content').css('overflow-x', 'hidden');
            $('.content').css('display', 'block');
            $('.content').css('height', 'auto');
            $('.content').css('padding-bottom', '50px');
            $('.content').css('top', '0vh');

            // $('.content').css('opacity','0');

            if (Anima.player.perguntaAtual == 0) {
                Anima.prepararPerguntasCarreira(this.carreira, function () {
                    Anima.renderPergunta(0, cores);
                });
            } else {
                Anima.renderPergunta(0, cores);
            }

            scrollToTop();
        }, 1000);

        // Anima.gerarCoresTemaPgts();
    },

    gerarCoresTemaPgts: function () {
        for (let index = 0; index < array.length; index++) {
            const element = array[index];

        }
        this.coresPgts = {
            header: Math.floor(Math.random() * 3),
            exp: 1
        }
    },

    fecharPerguntas: function () {
        $('.header-pergunta').css('margin-top', '-200px');
        $('.content').css('top', '300vh');
        $('body').css('overflow-y', 'hidden');

        setTimeout(() => {
            Anima.abrirPerguntas();
        }, 250);
    },

    prepararPerguntasCarreira: function (carreira, _cb) {
        let pgtSlctd = [];

        let pgtsCarreira = Anima.perguntas.find(element => element.grupo == carreira);

        let pgtsGeral = Anima.perguntas.find(element => element.grupo == 'gerais');

        let pgtsComp = Anima.perguntas.find(element => element.grupo == 'comportamento');

        let pgtsPerfil = Anima.perguntas.find(element => element.grupo == 'perfil');

        const maxNumbers = pgtsCarreira.pgts.length;
        let list = [];
        let randomNumber;
        let tmp;

        // CARREIRA -----------------------------------------------------------------------------------------------------------------------------------

        for (let i = 0; i < maxNumbers; i++) {
            list[i] = i + 1;
        }

        for (let i = list.length; i;) {
            randomNumber = Math.random() * i-- | 0;
            tmp = list[randomNumber];
            // troca o número aleatório pelo atual
            list[randomNumber] = list[i];
            // troca o atual pelo aleatório
            list[i] = tmp;
        }

        for (let index = 0; index < 3; index++) {
            pgtSlctd.push(pgtsCarreira.pgts[list[index] - 1]);

        }

        list = [];

        // GERAL -------------------------------------------------------------------------------------------------------------------------------------

        for (let i = 0; i < pgtsGeral.pgts.length; i++) {
            list[i] = i + 1;
        }

        for (let i = list.length; i;) {
            randomNumber = Math.random() * i-- | 0;
            tmp = list[randomNumber];
            // troca o número aleatório pelo atual
            list[randomNumber] = list[i];
            // troca o atual pelo aleatório
            list[i] = tmp;
        }

        for (let index = 0; index < 1; index++) {
            pgtSlctd.push(pgtsGeral.pgts[list[index] - 1]);
        }

        list = [];

        // PERFIL -------------------------------------------------------------------------------------------------------------------------------------

        for (let i = 0; i < pgtsPerfil.pgts.length; i++) {
            list[i] = i + 1;
        }

        for (let i = list.length; i;) {
            randomNumber = Math.random() * i-- | 0;
            tmp = list[randomNumber];
            // troca o número aleatório pelo atual
            list[randomNumber] = list[i];
            // troca o atual pelo aleatório
            list[i] = tmp;
        }

        for (let index = 0; index < 3; index++) {
            pgtSlctd.push(pgtsPerfil.pgts[list[index] - 1]);
        }

        list = [];

        // COMPORTAMENTAL -------------------------------------------------------------------------------------------------------------------------------------

        for (let i = 0; i < 4; i++) {
            list[i] = i + 1;
        }

        for (let i = list.length; i;) {
            randomNumber = Math.random() * i-- | 0;
            tmp = list[randomNumber];
            // troca o número aleatório pelo atual
            list[randomNumber] = list[i];
            // troca o atual pelo aleatório
            list[i] = tmp;
        }

        for (let index = 0; index < 4; index++) {
            pgtSlctd.push(pgtsComp.pgts[list[index] - 1]);
        }

        Anima.player.pgts = pgtSlctd;

        return _cb();
    },

    renderPergunta: function (i, cores) {
        let html = '';
        let pergunta = Anima.player.pgts[Anima.player.perguntaAtual];

        html = `
        <div class="janelinha janelinha-pgt">
        <div class="janelinha-header">
            <div id="progress">desafio_useall_${(Anima.player.perguntaAtual + 1) + '/' + Anima.player.pgts.length}</div>
            <div style="position: relative;">
                <span style="position: absolute;top: -6px; left: -68px;" class="material-symbols-outlined">
                    remove
                </span>
                <span style="position: absolute;top: -6px; left: -43px;" class="material-symbols-outlined">
                    check_box_outline_blank
                </span>
                <span style="position: absolute;top: -6px; left: -17px;" class="material-symbols-outlined">
                    close
                </span>
            </div>
        </div>

        <div id="pergunta">
            ...



        </div>
</div>
    <div id="respostas">
    </div>
        `;

        $('.content').html(html);

        setTimeout(() => {
            $('#pergunta').html(pergunta.pergunta);

            let respostas = '';

            for (let index = 0; index < pergunta.respostas.length; index++) {
                const element = pergunta.respostas[index] || 0;

                let idresp = '#resposta-' + (index + 1);

                let letraQst = '';

                switch (index) {
                    case 0:
                        letraQst = 'A'
                        break;

                    case 1:
                        letraQst = 'B'
                        break;

                    case 2:
                        letraQst = 'C'
                        break;

                    case 3:
                        letraQst = 'D'
                        break;

                    default:
                        letraQst = '§'
                        break;
                }

                respostas += `
                <div class="resposta" onclick="Anima.onClickResposta('${element.respostacerta ? 'certo' : 'errado'}', '${pergunta.carreira == Anima.carreira ? '' : 'offponto'}', ${index})">
                    <div class="left">
                        <div class="grafic">
                            
                            <svg id="exp-svg" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                                viewBox="0 0 67.6 67.7" style="enable-background:new 0 0 67.6 67.7;" xml:space="preserve">
                            <g id="Polígono_13">
                                <path fill="${cores.exp}" d="M41.5,63l-7.2-11l-0.4-0.6L33.4,52l-7.2,11l-0.9-13.3l0-0.8l-0.7,0.3l-11.7,5.9l5.7-11.9l0.3-0.7l-0.7-0.1
                                    l-13-0.9l10.8-7.4l0.6-0.4l-0.6-0.4L5.3,26l13-0.9l0.7-0.1l-0.3-0.7l-5.7-11.9l11.7,5.9l0.7,0.3l0-0.8l0.9-13.3l7.2,11l0.4,0.6
                                    l0.4-0.6l7.2-11l0.9,13.3l0,0.8l0.7-0.3l11.7-5.9L49,24.4l-0.3,0.7l0.7,0.1l13,0.9l-10.8,7.4l-0.6,0.4l0.6,0.4l10.8,7.4l-13,0.9
                                    l-0.7,0.1l0.3,0.7l5.7,11.9L43,49.3L42.4,49l0,0.8L41.5,63z"/>
                                <path class="exp-border" d="M41.1,6.2l-7.2,11.1L26.6,6.2l-0.9,13.3L14,13.6l5.7,12l-13,0.9l10.8,7.4L6.8,41.3l13,0.9l-5.7,12l11.7-5.9
                                    l0.9,13.3l7.2-11.1l7.2,11.1l0.9-13.3l11.7,5.9l-5.7-12l13-0.9l-10.8-7.4l10.8-7.4l-13-0.9l5.7-12l-11.7,5.9L41.1,6.2 M41.9,3.1
                                    l1,14.8l13-6.5l-6.4,13.3l14.4,1l-12,8.2l12,8.2l-14.4,1l6.4,13.3l-13-6.5l-1,14.8l-8-12.3l-8,12.3l-1-14.8l-13,6.5L18.2,43
                                    l-14.4-1l12-8.2l-12-8.2l14.4-1l-6.4-13.3l13,6.5l1-14.8l8,12.3L41.9,3.1z"/>
                            </g>
                            </svg>

                            <div class="letra-opt">
                                ${letraQst}
                            </div>

                        </div>
                    </div>

                    <div id="resposta-${idresp}" class="desc-resposta">
                        ${element.desc}
                    </div>
                </div>
                `;
            }

            $('#respostas').html(respostas);
        }, 250);
    },

    currentFrame: {},

    frames: [{
        sceneid: 5,
        backdoor: {
            html: `<div id="triangulo"><svg class="floatingDefault" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" width="197" height="198" viewBox="0 0 197 198">
                      <defs>
                          <clipPath id="clip-triangulo">
                              <rect width="197" height="198"></rect>
                          </clipPath>
                      </defs>
                      <g clip-path="url(#clip-triangulo)">
                          <g id="Grupo_349" data-name="Grupo 349" transform="translate(-6497.854 -3092)">
                              <path id="Caminho_2568" data-name="Caminho 2568" d="M89.2.063l88.457,185.314L.131,185.67Z"
                                  transform="translate(6754.765 3227.196) rotate(135)" fill="#2a2929"></path>
                              <g id="Grupo_348" data-name="Grupo 348" transform="translate(6500.765 3092)">
                                  <path id="Caminho_2569" data-name="Caminho 2569"
                                      d="M89.2.063l88.457,185.314L.131,185.67Z"
                                      transform="translate(257 131.196) rotate(135)" fill="#1dc18a"></path>
                                  <path id="Polígono_9_-_Contorno" data-name="Polígono 9 - Contorno"
                                      d="M89.2,2.36,1.707,184.676l174.378-.288L89.2,2.36m0-2.3,88.457,185.314L.131,185.67Z"
                                      transform="translate(257 131.196) rotate(135)" fill="#2a2929"></path>
                              </g>
                          </g>
                      </g>
                  </svg>
              </div>
  
              <div id="piramide"><svg class="floatingDelayed" xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink" width="190" height="260.2" viewBox="0 0 237.57 260.2">
                      <defs>
                          <clipPath id="clip-piramide">
                              <rect width="237.57" height="260.2"></rect>
                          </clipPath>
                      </defs>
                      <g id="piramide" clip-path="url(#clip-piramide)">
                          <g id="Grupo_341" data-name="Grupo 341" transform="translate(1.806 2.41)">
                              <path id="Caminho_2562" data-name="Caminho 2562"
                                  d="M4055.928-3901.975l116.978-189.158,116.979,189.158Z"
                                  transform="translate(-4055.928 4091.133)" fill="#f03e91"></path>
                              <path id="Caminho_2562_-_Contorno" data-name="Caminho 2562 - Contorno"
                                  d="M4291.691-3900.975h-237.57l.947-1.531,117.837-190.51.837,1.353Zm-234-2h230.435L4172.905-4089.25Z"
                                  transform="translate(-4055.928 4091.133)" fill="#2a2929"></path>
                              <path id="Caminho_2563" data-name="Caminho 2563"
                                  d="M4111.841-4091.133l-55.913,189.359h174.7Z" transform="translate(-3995.67 4092.133)"
                                  fill="#cc8fff"></path>
                              <path id="Caminho_2563_-_Contorno" data-name="Caminho 2563 - Contorno"
                                  d="M4113.492-4092.836l1.3,1.839,117.639,190.223H4054.59Zm115.326,190.062-115.326-185.311-56.226,185.311Z"
                                  transform="translate(-3996.67 4091.133)" fill="#2a2929"></path>
                              <circle id="Elipse_20" data-name="Elipse 20" cx="59.211" cy="59.211" r="59.211"
                                  transform="translate(90.12 138.368)" fill="#f03e91"></circle>
                              <path id="Elipse_20_-_Contorno" data-name="Elipse 20 - Contorno"
                                  d="M59.211-1A59.934,59.934,0,0,1,92.876,9.284a60.384,60.384,0,0,1,21.814,26.49,60.133,60.133,0,0,1-5.552,57.1,60.384,60.384,0,0,1-26.49,21.814,60.133,60.133,0,0,1-57.1-5.552A60.384,60.384,0,0,1,3.732,82.648a60.133,60.133,0,0,1,5.552-57.1A60.384,60.384,0,0,1,35.774,3.732,59.835,59.835,0,0,1,59.211-1Zm0,118.422A58.211,58.211,0,1,0,1,59.211,58.277,58.277,0,0,0,59.211,117.422Z"
                                  transform="translate(90.12 138.368)" fill="#2a2929"></path>
                          </g>
                      </g>
                  </svg>
              </div>
  
              <div id="planeta">
                      <svg class="floatingDefault" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" width="128" height="73" xmlns:xlink="http://www.w3.org/1999/xlink"
	 viewBox="0 0 128 73" style="enable-background:new 0 0 128 73;" xml:space="preserve">
<style type="text/css">
	.st41232{fill:#FF4081;}
	.st1223{fill:#2A2929;}
	.st2222{fill:#FFEA00;}
</style>
<ellipse id="Elipse_17" transform="matrix(0.3998 -0.9166 0.9166 0.3998 4.9484 80.5509)" class="st41232" cx="64" cy="36.5" rx="35.5" ry="35.3"/>
<path id="Elipse_17_-_Contorno" class="st1223" d="M78.6,3c8.8,3.8,15.8,11.1,19.2,20.1c7.3,18.8-1.9,39.9-20.6,47.3
	c-18.7,7.3-39.7-1.9-47-20.6c-3.5-9-3.3-19,0.6-27.8C36.5,8.6,49.8-0.1,64.5,0C69.3,0.1,74.1,1.1,78.6,3z M50.2,68.1
	C67.6,75.8,88,68,95.7,50.6S95.6,12.8,78.1,5S40.3,5.2,32.6,22.6c0,0.1-0.1,0.1-0.1,0.2C24.9,40.2,32.8,60.5,50.2,68.1z"/>
<path id="Caminho_2561" class="st2222" d="M99.5,38.4L99.5,38.4c-0.2,2.5-0.6,5.1-1.3,7.5l0,0c8.5,5.2,13.4,9.5,12.5,11.6
	c-1.7,3.9-24.1-2.1-50-13.5S15.1,20.4,16.8,16.5c0.9-2,7.2-1.4,16.6,1.2l0.3,0.1c1.3-2.2,2.9-4.2,4.7-6.1l0,0
	C21.1,7,8.3,6.5,6.2,11.3C3,18.7,26.2,36,58.1,49.9s60.4,19.2,63.6,11.7C123.8,56.9,114.8,47.9,99.5,38.4z"/>
<path id="Caminho_2561_-_Contorno" class="st1223" d="M99.9,37.5c0,0,0.1,0,0.1,0.1c7.7,4.8,13.9,9.5,17.8,13.6c4.4,4.5,6,8.2,4.8,11
	c-2.3,5.2-13.3,4.3-22.2,2.7c-12.1-2.2-27.3-7.2-42.8-13.9S28.3,36.3,18.4,29C11.2,23.6,3.1,16.1,5.3,10.9c1.2-2.8,5-4.1,11.3-4
	c5.7,0.1,13.3,1.5,22.1,3.9c0.1,0,0.2,0.1,0.2,0.1l0,0c0.5,0.3,0.6,0.9,0.3,1.4c0,0.1-0.1,0.1-0.1,0.2c-1.7,1.8-3.3,3.8-4.6,5.9
	c-0.3,0.4-0.8,0.6-1.2,0.4l-0.3-0.1c-3.7-1.1-7.5-1.9-11.3-2.3c-3.7-0.3-4.1,0.5-4.1,0.5c0,0-0.3,0.8,2.3,3.2
	c2.8,2.4,5.8,4.6,8.9,6.5C39.3,32.8,50,38.4,61.1,43.1c11,4.9,22.4,9.1,34,12.4c3.5,1,7.2,1.7,10.9,2.1c3.5,0.3,3.9-0.5,3.9-0.5
	c0,0,0.3-0.9-2.5-3.4c-3-2.6-6.2-4.9-9.6-6.9c-0.4-0.2-0.6-0.7-0.4-1.1c0.7-2.4,1.1-4.8,1.2-7.3c0-0.5,0.4-0.9,0.9-0.9l0,0
	C99.6,37.4,99.7,37.4,99.9,37.5z M58.5,49c15.4,6.7,30.4,11.6,42.3,13.8c4.6,1,9.3,1.4,14,1.1c2.3-0.2,5.2-0.8,6-2.7
	c0.8-1.9-0.7-5-4.4-8.8c-4.9-4.7-10.3-8.9-16.1-12.4c-0.2,1.8-0.5,3.6-1,5.3c3.3,2,6.4,4.2,9.3,6.7c1,0.8,1.8,1.8,2.5,2.9
	c0.6,0.8,0.8,1.9,0.4,2.8c-0.5,0.9-1.3,1.5-2.3,1.6c-1.2,0.2-2.4,0.3-3.6,0.1c-3.8-0.4-7.6-1.1-11.2-2.2
	C82.9,54,71.4,49.9,60.3,44.9c-11.2-4.8-22-10.3-32.5-16.6c-3.3-2-6.4-4.2-9.2-6.7c-0.9-0.8-1.7-1.7-2.3-2.7
	c-0.6-0.8-0.7-1.8-0.4-2.7c0.5-0.9,1.3-1.5,2.3-1.6c1.2-0.2,2.5-0.2,3.7-0.1c3.8,0.4,7.6,1.2,11.4,2.3c1-1.5,2.1-3,3.3-4.3
	c-6.5-1.9-13.2-3-20-3.4C11.3,8.8,8,9.8,7.2,11.7c-0.8,1.8,0.7,4.4,2.1,6.2c3,3.6,6.5,6.8,10.3,9.5C29.3,34.6,43.2,42.3,58.5,49
	L58.5,49z"/>
</svg>

              </div>
  
              <div id="estrela-m"><svg class="floatingDefault" id="Grupo_359" data-name="Grupo 359"
                      xmlns="http://www.w3.org/2000/svg" width="52.931" height="54.055" viewBox="0 0 52.931 54.055">
                      <path id="Polígono_18" data-name="Polígono 18"
                          d="M25.593,0l5.119,21.612,20.474,5.4-20.474,5.4L25.593,54.03,20.474,32.418,0,27.015l20.474-5.4Z"
                          transform="translate(0 0.025)" fill="#2a2929"></path>
                      <path id="Polígono_17" data-name="Polígono 17"
                          d="M25.593,0l5.119,21.328,20.474,5.332L30.712,31.991,25.593,53.319,20.474,31.991,0,26.659l20.474-5.332Z"
                          transform="translate(1.422 0.025)" fill="#d90f0f"></path>
                      <path id="Polígono_17_-_Contorno" data-name="Polígono 17 - Contorno"
                          d="M25.9,2.453,21.2,21.814,2.29,26.685,21.2,31.556l4.7,19.361,4.7-19.361L49.5,26.685,30.594,21.814,25.9,2.453M25.9,0l5.179,21.348,20.717,5.337L31.076,32.022,25.9,53.369,20.717,32.022,0,26.685l20.717-5.337Z"
                          transform="translate(1.138 0)" fill="#2a2929"></path>
                  </svg> </div>
  
    
    <div id="curva-verde"><svg class="floatingDefault" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 347 142" style="enable-background:new 0 0 347 142;" xml:space="preserve">
         <style type="text/css">
             .st0{clip-path:url(#SVGID_00000181781177258171903250000010890193186801933449_);fill:#269385;}
         </style>
         <g>
             <defs>
                 <rect id="SVGID_1_" width="347" height="142"/>
             </defs>
             <clipPath id="SVGID_00000026849244763890238530000003769901207436846752_">
                 <use xlink:href="#SVGID_1_"  style="overflow:visible;"/>
             </clipPath>
             <path style="clip-path:url(#SVGID_00000026849244763890238530000003769901207436846752_);fill:#269385;" d="M346.8,19.1
                 c-1.7,4.9-4.5,9.3-9.5,8.1c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9c-0.8-0.2-1.6-0.3-2.3-0.4h-4.8
                 c-11.4,1.7-16.8,15.2-19.3,25.9c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
                 C239,16.5,232,33.2,228.9,45.9c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
                 c-16.3-3.9-23.3,12.8-26.4,25.5c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
                 c-16.3-3.9-23.3,12.8-26.4,25.5h0c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
                 C58.8,69,51.8,85.7,48.8,98.4c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
                 c-6.5-1.6-11.5,0.1-15.3,3.5v28.4c0.3-1.2,0.7-2.4,0.9-3.5l0,0c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4
                 c3.4,6.5,6.7,11,14,12.8c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
                 c16.2,3.9,23.4-12.9,26.4-25.5l0,0c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
                 c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
                 c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
                 c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
                 c4.8,1.2,8.8,0.5,12.1-1.3V19.1z"/>
         </g>
         </svg>
            
  
              </div>
  
              <div id="curva-rosa">
                    <svg class="floatingDelayed" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 347 142" style="enable-background:new 0 0 347 142;" xml:space="preserve">
        <style type="text/css">
            .st0{fill:#C2596A;}
        </style>
        <path class="st0" d="M347,12.5c-0.6-1.2-1.1-2.3-1.6-3.2c-2.6-4.5-7-7.8-12.1-9c-0.4-0.1-0.8-0.2-1.2-0.2h-6.8
            c-10.7,2.3-15.9,15.3-18.4,25.7l0,0c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.6-7-7.8-12.1-9
            C257,13.8,250,30.5,246.9,43.2c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
            c-16.3-3.9-23.3,12.8-26.4,25.5c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
            c-16.3-3.9-23.3,12.8-26.4,25.5c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
            c-16.3-3.9-23.3,12.8-26.4,25.5h0c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
            c-16.3-3.9-23.3,12.8-26.4,25.5C5.6,117.2,4,125.3,0,128.3v13.4c10.9-2.1,16.2-15.3,18.7-25.7c1.5-5.5,3.6-18.2,11.7-16.2
            c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8c16.2,3.9,23.4-12.9,26.4-25.5h0c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4
            c3.4,6.5,6.7,11,14,12.8c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
            c16.2,3.9,23.4-12.8,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
            c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
            c16.2,3.9,23.4-12.9,26.4-25.5h0c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c2.4,4.5,4.7,8.1,8.4,10.5V12.5z"/>
        </svg>
              </div>
  
              <div id="curva-vermelha"><svg class="floatingDefault" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
              viewBox="0 0 347 142" style="enable-background:new 0 0 347 142;" xml:space="preserve">
         <style type="text/css">
             .st2230{fill:#D90F0F;}
         </style>
         <path class="st2230" d="M333.3,23.6L333.3,23.6c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12-9
             c-16.3-3.9-23.3,12.8-26.4,25.5c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
             c-16.3-3.9-23.3,12.8-26.4,25.5c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
             c-16.3-3.9-23.3,12.8-26.4,25.5c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
             C103.1,64.1,96.1,80.8,93,93.5l0,0c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.6-4.5-7-7.8-12.1-9
             C43.1,81.6,36.1,98.3,33,111c-1.5,5.5-3.8,18.1-11.7,16.2c-4.5-1.1-7.4-10.9-9.9-15.2c-2.5-4.3-6.6-7.5-11.4-8.8v14.4
             c2,2.6,3.4,6.6,4.6,9c3.4,6.5,6.7,11,14,12.8c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4
             c3.4,6.5,6.7,11,14,12.8C94.8,125.8,102,109,105,96.4l0,0c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4
             c3.4,6.5,6.7,11,14,12.8c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
             c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
             c16.2,3.9,23.4-12.9,26.4-25.5c1.5-5.5,3.6-18.2,11.7-16.2c4.1,1,6.2,7.9,7.9,11.4c3.4,6.5,6.7,11,14,12.8
             c16.2,3.9,23.4-12.9,26.4-25.5h0c0.5-1.7,1-4.2,1.8-6.7V0h-0.5C339.2,4.6,335.3,15,333.3,23.6z"/>
         </svg>
         
  
              </div>
    
  
              <div id="olho-aberto"><svg class="floatingDefault" xmlns="http://www.w3.org/2000/svg" width="102.282" height="81.815"
                      viewBox="0 0 102.282 81.815">
                      <g id="Grupo_356" data-name="Grupo 356"
                          transform="matrix(0.914, -0.407, 0.407, 0.914, -6439.121, -6718.656)">
                          <ellipse id="Elipse_18" data-name="Elipse 18" cx="44.955" cy="24.763" rx="44.955" ry="24.763"
                              transform="translate(3134.831 8790.233)" fill="#fff"></ellipse>
                          <path id="Elipse_18_-_Contorno" data-name="Elipse 18 - Contorno"
                              d="M44.955,1.524A75.728,75.728,0,0,0,27.8,3.43,54.418,54.418,0,0,0,13.9,8.588a29.024,29.024,0,0,0-9.161,7.465,14.194,14.194,0,0,0-3.218,8.711,14.194,14.194,0,0,0,3.218,8.711A29.024,29.024,0,0,0,13.9,40.939,54.418,54.418,0,0,0,27.8,46.1,75.728,75.728,0,0,0,44.955,48,75.728,75.728,0,0,0,62.108,46.1a54.418,54.418,0,0,0,13.9-5.158,29.024,29.024,0,0,0,9.161-7.465,14.194,14.194,0,0,0,3.218-8.711,14.194,14.194,0,0,0-3.218-8.711,29.024,29.024,0,0,0-9.161-7.465,54.418,54.418,0,0,0-13.9-5.158A75.728,75.728,0,0,0,44.955,1.524m0-1.524C69.784,0,89.911,11.087,89.911,24.763S69.784,49.527,44.955,49.527,0,38.44,0,24.763,20.127,0,44.955,0Z"
                              transform="translate(3134.831 8790.233)" fill="#2a2929"></path>
                          <ellipse id="Elipse_19" data-name="Elipse 19" cx="18.211" cy="17.991" rx="18.211" ry="17.991"
                              transform="translate(3161.576 8797.005)" fill="#2a2929"></ellipse>
                      </g>
                  </svg>
              </div>
          </div>
      </div>`
        },
        overlay: {
            html: `<div id="estrela-p">
              <svg class="floatingDefault" id="Grupo_360" data-name="Grupo 360" xmlns="http://www.w3.org/2000/svg" width="32.948" height="31.475" viewBox="0 0 32.948 31.475">
              <path id="Polígono_18" data-name="Polígono 18" d="M15.518,0l3.1,12.265,12.414,3.066L18.622,18.4l-3.1,12.265L12.414,18.4,0,15.331l12.414-3.066Z" transform="translate(0 0.813)" fill="#2a2929"/>
              <path id="Polígono_17" data-name="Polígono 17" d="M15.518,0l3.1,12.083L31.036,15.1,18.622,18.124l-3.1,12.083-3.1-12.083L0,15.1l12.414-3.021Z" transform="translate(1.705 0.016)" fill="#d90f0f"/>
              <path id="Polígono_17_-_Contorno" data-name="Polígono 17 - Contorno" d="M15.712,1.39l-2.85,10.97L1.389,15.12l11.473,2.76,2.85,10.97,2.85-10.97,11.473-2.76L18.562,12.36,15.712,1.39m0-1.39,3.142,12.1,12.57,3.024-12.57,3.024-3.142,12.1-3.142-12.1L0,15.12,12.57,12.1Z" transform="translate(1.524 0)" fill="#2a2929"/>
            </svg>  
          </div>
          <div id="estrela-g">
              <svg class="floatingDelayed" id="Grupo_358" data-name="Grupo 358" xmlns="http://www.w3.org/2000/svg" width="131.589" height="136.65" viewBox="0 0 131.589 136.65">
                  <path id="Polígono_18" data-name="Polígono 18" d="M64.573,0,77.487,54.209l51.658,13.552L77.487,81.314,64.573,135.523,51.658,81.314,0,67.762,51.658,54.209Z" transform="translate(0 1.127)" fill="#2a2929"/>
                  <g id="Grupo_350" data-name="Grupo 350" transform="translate(2.169 0)">
                  <path id="Polígono_17" data-name="Polígono 17" d="M64.573,0,77.487,53.89l51.658,13.473L77.487,80.836l-12.915,53.89L51.658,80.836,0,67.363,51.658,53.89Z" transform="translate(0.223 0.329)" fill="#d90f0f"/>
                  <path id="Polígono_17_-_Contorno" data-name="Polígono 17 - Contorno" d="M64.71,6.213,52.972,55.262,5.722,67.6l47.25,12.34L64.71,128.991,76.447,79.942,123.7,67.6l-47.25-12.34L64.71,6.213M64.71,0,77.652,54.082,129.42,67.6,77.652,81.122,64.71,135.2,51.768,81.122,0,67.6l51.768-13.52Z" transform="translate(0 0)" fill="#2a2929"/>
                  </g>
              </svg>
          </div>`
        },
        onThisFrame: function () {
            let frame = this;

            $('#triangulo').css('top', '-400px');
            $('#triangulo').css('left', '-400px');

            $('#piramide').css('bottom', '-500px');
            $('#piramide').css('left', '-500px');

            $('#planeta').css('top', '-400px');
            $('#planeta').css('right', '-400px');

            $('#olho-aberto').css('bottom', '-400px');
            $('#olho-aberto').css('right', '-400px');

            $('#estrela-g').css('bottom', '22vh');
            $('#estrela-g').css('right', '-400px');

            $('#estrela-m').css('bottom', '19vh');
            $('#estrela-m').css('right', '-400px');

            $('#estrela-p').css('bottom', '34vh');
            $('#estrela-p').css('right', '-400px');

            $('#curva-verde').css('margin-top', '-80%');
            $('#curva-rosa').css('margin-top', '-80%');
            $('#curva-vermelha').css('margin-top', '-80%');

            $('#janelinha').css('transform', 'scale(0.001)');

            setTimeout(() => {

                $('#janelinha').css('transform', 'scale(1)');

                $('#triangulo').css('top', '40px');
                $('#triangulo').css('left', '-50px');

                $('#piramide').css('bottom', '-40px');
                $('#piramide').css('left', '-20px');

                $('#planeta').css('top', '150px');
                $('#planeta').css('right', '6vw');

                $('#olho-aberto').css('bottom', '40px');
                $('#olho-aberto').css('right', '20px');

                $('#estrela-g').css('bottom', '22vh');
                $('#estrela-g').css('right', '10vw');

                $('#estrela-m').css('bottom', '19vh');
                $('#estrela-m').css('right', '33vw');

                $('#estrela-p').css('bottom', '34vh');
                $('#estrela-p').css('right', '35vw');

                $('#curva-verde').css('margin-top', '-15vh');
                $('#curva-rosa').css('margin-top', '-15vh');
                $('#curva-vermelha').css('margin-top', '-15vh');


                setTimeout(() => {

                    $('#ola').append('Olá!');
                    $('#janelinha.janelinha').css('height', '182px');
                    $('#ola').css('opacity', '1');
                    $('svg#explosao').css('opacity', '1');

                    setTimeout(() => {
                        frame.nextFrame(frame);
                    }, 4000);

                }, 500);

            }, 500);
        },
        nextFrame: function (frame) {
            let i = frame.sceneid + 1;

            let nextframe = Anima.frames.find(e => e.sceneid === i);

            if (nextframe.onThisFrame) {
                nextframe.onThisFrame();
            }
        }
    }, {
        sceneid: 6,

        onThisFrame: function () {
            let frame = this;

            $('#triangulo').css('top', '-400px');
            $('#triangulo').css('left', '-400px');

            $('#piramide').css('bottom', '-500px');
            $('#piramide').css('left', '-500px');

            $('#planeta').css('top', '-400px');
            $('#planeta').css('right', '-400px');

            $('#olho-aberto').css('bottom', '-400px');
            $('#olho-aberto').css('right', '-400px');

            $('#estrela-g').css('bottom', '22vh');
            $('#estrela-g').css('right', '-400px');

            $('#estrela-m').css('bottom', '19vh');
            $('#estrela-m').css('right', '-400px');

            $('#estrela-p').css('bottom', '34vh');
            $('#estrela-p').css('right', '-400px');

            $('#curva-verde').css('margin-top', '-80%');
            $('#curva-rosa').css('margin-top', '-80%');
            $('#curva-vermelha').css('margin-top', '-80%');

            // $('#janelinha').css('transform', 'scale(0.001)');

            $('#janelinha.janelinha').css('height', '25px');
            $('#ola').css('opacity', '0');
            $('svg#explosao').css('opacity', '0');


            setTimeout(() => {

                $('#janelinha.janelinha').css('top', '8vh');
                $('#janelinha.janelinha').css('width', '310px');


                setTimeout(() => {

                    let html = `<div class="txt1">Acorda<svg width="50" height="50" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 40.6 40.6" style="enable-background:new 0 0 40.6 40.6;" xml:space="preserve">
               <style type="text/css">
                   .st22211{fill:#16D1A7;}
                   .st15577{fill:#2A2929;}
               </style>
               <path id="Caminho_2564" class="st22211" d="M33.6,25.1V6.4c0-1-0.8-1.7-1.7-1.7c-0.1,0-0.2,0-0.3,0L16.2,8.2c-0.8,0.2-1.3,0.9-1.3,1.7
                   V24c-3-1.4-6.5-0.1-7.9,2.8s-0.1,6.5,2.8,7.9s6.5,0.1,7.9-2.8c0.4-0.8,0.6-1.6,0.6-2.5c0-0.3,0-0.6,0-0.9V11.2l11.9-2.6v12.1
                   c-3-1.4-6.5-0.1-7.9,2.8s-0.1,6.5,2.8,7.9s6.5,0.1,7.9-2.8c0.4-0.8,0.6-1.6,0.6-2.5C33.6,25.7,33.6,25.4,33.6,25.1L33.6,25.1z"/>
               <path id="Caminho_2564_-_Contorno" class="st15577" d="M12.4,35.8c-2.2,0-4.3-1.1-5.4-3c-1.9-3-1-7,2-8.9c1.6-1,3.6-1.3,5.5-0.7V9.8
                   c0-1,0.7-1.9,1.7-2.2l15.3-3.4C32.6,4,33.8,4.8,34.1,6c0,0.1,0,0.3,0,0.4v18.7c0,0.3,0,0.6,0,0.9c0,3.5-2.9,6.4-6.4,6.4l0,0
                   c-3.6,0-6.4-2.9-6.4-6.5c0-3.6,2.9-6.4,6.5-6.4c0.7,0,1.3,0.1,2,0.3V9.2l-10.9,2.4v16.9c0,0.3,0,0.6,0,0.9
                   C18.8,33,15.9,35.8,12.4,35.8L12.4,35.8z M12.4,24c-3,0-5.4,2.4-5.4,5.4s2.4,5.4,5.4,5.4c3,0,5.4-2.4,5.4-5.4v0c0-0.3,0-0.6,0-0.8
                   V10.8l12.9-2.9v13.5L30,21.1c-2.2-1-4.8-0.5-6.4,1.3c-1.6,1.8-1.8,4.5-0.5,6.5c1,1.6,2.7,2.5,4.6,2.5l0,0c3,0,5.4-2.4,5.4-5.4v0
                   c0-0.3,0-0.5,0-0.8V6.4c0-0.4-0.2-0.7-0.5-0.9l0,0c-0.3-0.2-0.7-0.3-1-0.2L16.4,8.7c-0.6,0.1-0.9,0.6-0.9,1.2v15l-0.7-0.3
                   C14,24.1,13.2,24,12.4,24L12.4,24z"/>
               </svg>
               </div><div class="txt2">Pedrinho</div>
               <div id="txt-intro">
                    <strong>
                        Todo mundo gosta de ouvir música, né? E que tal fazer isso enquanto trabalha?
                    </strong>
                    <br>
                    <span>
                        A nossa equipe montou um pequeno desafio para te conhecer melhor e saber em quais pontos você mais manja, quando o assunto é a área que você quer atuar. E de quebra, montamos uma playlist que tem tudo para combinar com o seu ritmo de trabalho.
                    </span>
                    <br>
                    <strong>
                        Eai, bora?
                    </strong>
                </div>

                <div id="bora" onclick="Anima.onClickAction(${frame.sceneid})" class="btn btn-cian ">
                                    Bora 
                                    <span style="margin-top:5px" class="material-symbols-outlined">
                                        arrow_forward
                                    </span>
                                </div>
                    `;

                    $('#janelinha.janelinha').css('height', '25px');
                    $('#ola').css('margin-top', '23px');
                    $('#ola').html(html);
                    $('#ola').css('overflow-y', 'scroll');
                    setTimeout(() => {

                        $('#janelinha.janelinha').css('height', '422px');
                        $('#ola').css('opacity', '1');

                        setTimeout(() => {
                            let janela = document.getElementById('janelinha');
                            let distancia;

                            if (janela) {
                                distancia = janela.getBoundingClientRect().y + janela.getBoundingClientRect().height + document.getElementById('header').getBoundingClientRect().height + 65;
                            }


                            distancia = distancia.toString() + 'px';

                            let btn = `
                                
                            `;

                            $('.content').append(btn);
                            // $('.btn-bottom').css('top', distancia);
                            $('.overlay').css('width', '1px');
                            $('#overlay').css('width', '1px');
                            $('.overlay').css('height', '1px');
                            $('#overlay').css('height', '1px');

                            $('#janelinha').css('transition', 'all 1s ease');
                            $('#janelinha').css('margin-left', '0vw');

                        }, 200);

                    }, 200);

                }, 500);

            }, 500);


        },
        nextFrame: function () {
            let i = this.sceneid + 1;

            let nextframe = Anima.frames.find(e => e.sceneid === i);

            if (nextframe && nextframe.onThisFrame) {
                nextframe.onThisFrame();
            }
        }
    }, {
        sceneid: 7,
        onThisFrame: function () {
            let frame = this;

            let estrelaLoading = `<svg id="estrela-loading" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 98.8 98.8" style="enable-background:new 0 0 98.8 98.8;" xml:space="preserve">
                <style type="text/css">
                    .blackaa{fill:#D90F0F;}
                    .redaa{fill:#000000;}
                </style>
                <g>
                    <g transform="matrix(1, 0, 0, 1, 0, 0)">
                        <g id="Polígono_7-3" transform="translate(2)">
                            <path class="blackaa" d="M47.4,90.1l-7.6-31.9l-0.1-0.6L39,57.4l-30.7-8l30.7-8l0.6-0.2l0.1-0.6l7.6-31.9L55,40.6l0.1,0.6l0.6,0.2
                                l30.7,8l-30.7,8l-0.6,0.2L55,58.2L47.4,90.1z"/>
                            <path d="M47.4,13l-6.9,29l-28.2,7.4l28.2,7.4l6.9,29l6.9-29l28.2-7.4L54.3,42L47.4,13 M47.4,4.4l8.6,36l34.4,9l-34.4,9l-8.6,36
                                l-8.6-36l-34.4-9l34.4-9L47.4,4.4z"/>
                        </g>
                    </g>
                    <g id="Polígono_7-4" transform="translate(2)">
                        <path class="blackaa" d="M47.4,90.1l-7.6-31.9l-0.1-0.6L39,57.4l-30.7-8l30.7-8l0.6-0.2l0.1-0.6l7.6-31.9L55,40.6l0.1,0.6l0.6,0.2
                            l30.7,8l-30.7,8l-0.6,0.2L55,58.2L47.4,90.1z"/>
                        <path class="blackaa" d="M47.4,13l-6.9,29l-28.2,7.4l28.2,7.4l6.9,29l6.9-29l28.2-7.4L54.3,42L47.4,13 M47.4,4.4l8.6,36l34.4,9
                            l-34.4,9l-8.6,36l-8.6-36l-34.4-9l34.4-9L47.4,4.4z"/>
                    </g>
                    <g transform="matrix(1, 0, 0, 1, 0, 0)">
                        <g id="Polígono_7-5" transform="translate(2)">
                            <path class="blackaa" d="M47.4,90.1l-7.6-31.9l-0.1-0.6L39,57.4l-30.7-8l30.7-8l0.6-0.2l0.1-0.6l7.6-31.9L55,40.6l0.1,0.6l0.6,0.2
                                l30.7,8l-30.7,8l-0.6,0.2L55,58.2L47.4,90.1z"/>
                            <path class="redaa" d="M47.4,13l-6.9,29l-28.2,7.4l28.2,7.4l6.9,29l6.9-29l28.2-7.4L54.3,42L47.4,13 M47.4,4.4l8.6,36l34.4,9
                                l-34.4,9l-8.6,36l-8.6-36l-34.4-9l34.4-9L47.4,4.4z"/>
                        </g>
                    </g>
                </g>
                </svg>`;


            $('#janelinha').css('margin-left', '-200vw');
            $('.btn-bottom').css('top', '150vh');

            $('.content').append(estrelaLoading);

            setTimeout(() => {
                $('#estrela-loading').css('opacity', '1');

                setTimeout(() => {

                    $('#estrela-loading').addClass('spinningDefault');

                    setTimeout(() => {

                        $('.backdoor').html('');
                        $('.overlay').html('');

                        // $('#estrela-loading').removeClass('spinningDefault');
                        $('#estrela-loading').css('opacity', '0');
                        setTimeout(() => {
                            frame.nextFrame();
                        }, 1000);

                    }, 1500);

                }, 500);

            }, 1000);
        },
        nextFrame: function () {
            let i = this.sceneid + 1;

            let nextframe = Anima.frames.find(e => e.sceneid === i);

            if (nextframe && nextframe.onThisFrame) {
                nextframe.onThisFrame();
            }
        }
    }, {
        sceneid: 8,
        onThisFrame: function () {
            let frame = this;

            $('#estrela-loading').css('opacity', '0');

            let html = `
                <div class="frase-efeito antesdetudo">
                    <div class="txt3">Antes de tudo<svg id="estrela-inline" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 98.8 98.8" style="enable-background:new 0 0 98.8 98.8;" xml:space="preserve">
            <style type="text/css">
                .blackaa{fill:#D90F0F;}
                .redaa{fill:#000000;}
            </style>
            <g>
                <g transform="matrix(1, 0, 0, 1, 0, 0)">
                    <g id="Polígono_7-3" transform="translate(2)">
                        <path class="blackaa" d="M47.4,90.1l-7.6-31.9l-0.1-0.6L39,57.4l-30.7-8l30.7-8l0.6-0.2l0.1-0.6l7.6-31.9L55,40.6l0.1,0.6l0.6,0.2
                            l30.7,8l-30.7,8l-0.6,0.2L55,58.2L47.4,90.1z"/>
                        <path d="M47.4,13l-6.9,29l-28.2,7.4l28.2,7.4l6.9,29l6.9-29l28.2-7.4L54.3,42L47.4,13 M47.4,4.4l8.6,36l34.4,9l-34.4,9l-8.6,36
                            l-8.6-36l-34.4-9l34.4-9L47.4,4.4z"/>
                    </g>
                </g>
                <g id="Polígono_7-4" transform="translate(2)">
                    <path class="blackaa" d="M47.4,90.1l-7.6-31.9l-0.1-0.6L39,57.4l-30.7-8l30.7-8l0.6-0.2l0.1-0.6l7.6-31.9L55,40.6l0.1,0.6l0.6,0.2
                        l30.7,8l-30.7,8l-0.6,0.2L55,58.2L47.4,90.1z"/>
                    <path class="blackaa" d="M47.4,13l-6.9,29l-28.2,7.4l28.2,7.4l6.9,29l6.9-29l28.2-7.4L54.3,42L47.4,13 M47.4,4.4l8.6,36l34.4,9
                        l-34.4,9l-8.6,36l-8.6-36l-34.4-9l34.4-9L47.4,4.4z"/>
                </g>
                <g transform="matrix(1, 0, 0, 1, 0, 0)">
                    <g id="Polígono_7-5" transform="translate(2)">
                        <path class="blackaa" d="M47.4,90.1l-7.6-31.9l-0.1-0.6L39,57.4l-30.7-8l30.7-8l0.6-0.2l0.1-0.6l7.6-31.9L55,40.6l0.1,0.6l0.6,0.2
                            l30.7,8l-30.7,8l-0.6,0.2L55,58.2L47.4,90.1z"/>
                        <path class="redaa" d="M47.4,13l-6.9,29l-28.2,7.4l28.2,7.4l6.9,29l6.9-29l28.2-7.4L54.3,42L47.4,13 M47.4,4.4l8.6,36l34.4,9
                            l-34.4,9l-8.6,36l-8.6-36l-34.4-9l34.4-9L47.4,4.4z"/>
                    </g>
                </g>
            </g>
            </svg></div>
                    <div class="txt4">Como podemos te chamar?</div>
                </div>
                <svg id="curva-verde-curta" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 412.7 85.5" style="enable-background:new 0 0 412.7 85.5;" xml:space="preserve">
                    <style type="text/css">
                        .verdelongo{fill:#269385;}
                    </style>
                    <path class="verdelongo" d="M412.7,46.7c-3,4-6.7,7.1-11,4.7c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                        l0,0c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                        c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                        c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                        c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2l0,0
                        c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                        c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12C7.8,21.1,3.7,20.7,0,21.5v13c1.9-1,3.9-1.2,6.2,0
                        c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2c2.9-4.8,8.4-16.5,15.8-12.3
                        c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2l0,0c2.9-4.8,8.4-16.5,15.8-12.3
                        c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2c2.9-4.8,8.4-16.5,15.8-12.3
                        c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2c2.9-4.8,8.4-16.5,15.8-12.3
                        c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2c2.9-4.8,8.4-16.5,15.8-12.3
                        c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2l0,0c2.9-4.8,8.4-16.5,15.8-12.3
                        c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c6.2,3.5,11.9,2.9,16.9,0.2V46.7z"/>
                </svg>
            `;
            let formNome = `
                <div id="inserir-nome">
                <div class="wrap-input100 validate-input">
                
                <input id="player-nome" class="input100" type="text" name="name" placeholder="{seu_nome_aqui}">
                <span class="focus-input100"></span>
                </div>
                <div onclick="Anima.onClickAction(${frame.sceneid}, 'playernome')" class="material-symbols-outlined clickable arrow-input">
                    arrow_forward
                </div>
                <div>
                `;




            // setTimeout(() => {
            $('.content').html(html);

            setTimeout(() => {

                $('.antesdetudo').css('margin-left', '0');
                $('#curva-verde-curta').css('top', '34vh');
                $('.content').append(formNome);

                setTimeout(() => {
                    $('#inserir-nome').css('top', '63vh');
                }, 200);

            }, 500);
        },
        nextFrame: function () {
            let i = this.sceneid + 1;

            let nextframe = Anima.frames.find(e => e.sceneid === i);

            if (nextframe.onThisFrame) {
                nextframe.onThisFrame();
            }
        },
    }, {
        sceneid: 9,
        onThisFrame: function () {
            let frame = this;

            let html = `
                <div id="olho-easter">
                    <svg id="oe-aberto" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="118" height="65" viewBox="0 0 118 65">
                            <g id="olho" clip-path="url(#clip-olho)">
                            <g id="Grupo_340" data-name="Grupo 340" transform="translate(-3134.831 -8790.233)">
                                <ellipse id="Elipse_18" data-name="Elipse 18" cx="59" cy="32.5" rx="59" ry="32.5" transform="translate(3134.831 8790.233)" fill="#fff"/>
                                <path id="Elipse_18_-_Contorno" data-name="Elipse 18 - Contorno" d="M59,2A99.386,99.386,0,0,0,36.488,4.5a71.418,71.418,0,0,0-18.243,6.769,38.091,38.091,0,0,0-12.023,9.8A18.628,18.628,0,0,0,2,32.5,18.628,18.628,0,0,0,6.223,43.932a38.091,38.091,0,0,0,12.023,9.8A71.418,71.418,0,0,0,36.488,60.5,99.386,99.386,0,0,0,59,63a99.386,99.386,0,0,0,22.512-2.5,71.418,71.418,0,0,0,18.243-6.769,38.091,38.091,0,0,0,12.023-9.8A18.628,18.628,0,0,0,116,32.5a18.628,18.628,0,0,0-4.223-11.432,38.091,38.091,0,0,0-12.023-9.8A71.418,71.418,0,0,0,81.512,4.5,99.386,99.386,0,0,0,59,2m0-2c32.585,0,59,14.551,59,32.5S91.585,65,59,65,0,50.449,0,32.5,26.415,0,59,0Z" transform="translate(3134.831 8790.233)" fill="#2a2929"/>
                                <ellipse id="Elipse_19" data-name="Elipse 19" cx="23.9" cy="23.612" rx="23.9" ry="23.612" transform="translate(3169.931 8799.121)" fill="#2a2929"/>
                            </g>
                            </g>
                    </svg>

                    <svg id="oe-fechado" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                            viewBox="0 0 120.2 65" style="enable-background:new 0 0 120.2 65;" xml:space="preserve">
                        <style type="text/css">
                            .st0{fill:#272527;}
                        </style>
                        <path id="Caminho_2568" class="st0" d="M57.8,64c-8.4,0-16.8-1.1-24.9-3.4C13.8,55,2.4,43.1,0,26.1l2.1-0.3
                            c5.6,38.9,58.3,36,58.8,35.9c0.2,0,0.5,0,0.7,0c45.1,0,56.5-35.8,56.6-36.1l2,0.7c-2.5,7.1-6.6,13.6-11.8,19
                            c-8,8.5-22.6,18.6-46.7,18.6c-0.2,0-0.5,0-0.7,0C60.9,63.9,59.8,64,57.8,64z"/>
                    </svg>
                </div>
                `;

            $('.antesdetudo').css('top', '-150vh');
            $('#curva-verde-curta').css('top', '-150vh');
            $('#inserir-nome').css('top', '-150vh');

            // $('.overlay').css('width', '100%');
            // $('.overlay').css('height', '100%');

            setTimeout(() => {
                $('.content').html(html);

                setTimeout(() => {

                    $('#olho-easter').css('opacity', '1');

                    $('#oe-aberto').css('display', 'block');
                    $('#oe-fechado').css('display', 'none');

                    setTimeout(() => {
                        $('#oe-aberto').css('display', 'none');
                        $('#oe-fechado').css('display', 'block');

                        setTimeout(() => {
                            $('#oe-aberto').css('display', 'block');
                            $('#oe-fechado').css('display', 'none');

                            setTimeout(() => {
                                $('#oe-aberto').css('display', 'none');
                                $('#oe-fechado').css('display', 'block');

                                setTimeout(() => {
                                    $('#oe-aberto').css('display', 'block');
                                    $('#oe-fechado').css('display', 'none');

                                    frame.nextFrame();

                                }, 200);

                            }, 1000);

                        }, 200);

                    }, 1500);

                }, 1000);

            }, 700);



        },
        nextFrame: function () {
            let i = this.sceneid + 1;

            let nextframe = Anima.frames.find(e => e.sceneid === i);

            if (nextframe.onThisFrame) {
                nextframe.onThisFrame();
            }
        }
    }, {
        sceneid: 10,
        onThisFrame: function () {
            let frame = this;

            let html = `
                <div class="frase-efeito perfeitonome">
                    <div class="txt3">
                        Perfeito
                        <br>
                        ${Anima.player.nome}!
                    </div>
                </div>

                <svg id="curva-vermelho-curta" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 412.7 85.5" style="enable-background:new 0 0 412.7 85.5;" xml:space="preserve">
                    <style type="text/css">
                        .vermelhongo{fill:#D90F0F;}
                    </style>
                    <path class="vermelhongo" d="M412.7,46.7c-3,4-6.7,7.1-11,4.7c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                        l0,0c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                        c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                        c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                        c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2l0,0
                        c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                        c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12C7.8,21.1,3.7,20.7,0,21.5v13c1.9-1,3.9-1.2,6.2,0
                        c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2c2.9-4.8,8.4-16.5,15.8-12.3
                        c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2l0,0c2.9-4.8,8.4-16.5,15.8-12.3
                        c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2c2.9-4.8,8.4-16.5,15.8-12.3
                        c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2c2.9-4.8,8.4-16.5,15.8-12.3
                        c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2c2.9-4.8,8.4-16.5,15.8-12.3
                        c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2l0,0c2.9-4.8,8.4-16.5,15.8-12.3
                        c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c6.2,3.5,11.9,2.9,16.9,0.2V46.7z"/>
                </svg>
            `;

            setTimeout(() => {

                $('.content').append(html);


                setTimeout(() => {
                    $('#olho-easter').css('transform', 'rotate(-36deg) translate(130px, 16px)');
                    $('#curva-vermelho-curta').css('top', '40vh');
                    $('.perfeitonome').css('margin-left', '0');

                    setTimeout(() => {

                        $('#olho-easter').css('transform', 'rotate(-36deg) translate(-167vw, -211vh)');
                        $('#curva-vermelho-curta').css('top', '150vh');
                        $('.perfeitonome').css('margin-left', '-300vw');

                        setTimeout(() => {
                            frame.nextFrame();
                        }, 1500);

                    }, 4000);

                }, 1000);

            }, 300);
        },
        nextFrame: function () {
            let i = this.sceneid + 1;

            let nextframe = Anima.frames.find(e => e.sceneid === i);

            if (nextframe.onThisFrame) {
                nextframe.onThisFrame();
            }
        }
    }, {
        sceneid: 11,
        onThisFrame: function () {
            let frame = this;

            let html = `
            <div class="frase-efeito seguircarreira">
                    <div class="txt4">
                        E em qual área você quer seguir carreira?
                    </div>
                    <div class="listraazul">

                    </div>
                    <div id="btns-carreiras">
                        <button onclick="Anima.onClickCarreira('design')" class="btn-carreira btn-cian">
                            UI/UX Design
                        </button>
                        <button onclick="Anima.onClickCarreira('adm')" class="btn-carreira btn-purple">
                            Administração
                        </button>
                        <button onclick="Anima.onClickCarreira('gerais')" class="btn-carreira btn-red">
                            Outros
                        </button>
                        <button onclick="Anima.onClickCarreira('desenvolvimento')" class="btn-carreira btn-cian">
                            BackEnd
                        </button>
                        <button onclick="Anima.onClickCarreira('infra')" class="btn-carreira btn-cian">
                            Infra
                        </button>
                        <button onclick="Anima.onClickCarreira('tester')" class="btn-carreira btn-purple">
                            QA - Tester
                        </button>
                        <button onclick="Anima.onClickCarreira('mkt')" class="btn-carreira btn-red">
                            Marketing
                        </button>
                        <button onclick="Anima.onClickCarreira('desenvolvimento')" class="btn-carreira btn-red">
                            Analista de negócios
                        </button>
                        <button onclick="Anima.onClickCarreira('desenvolvimento')" class="btn-carreira btn-purple">
                            FrontEnd
                        </button>
                    </div>
                </div>
            <svg id="planeta-loading" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" width="128" height="73" xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 128 73" style="enable-background:new 0 0 128 73;" xml:space="preserve">
            <style type="text/css">
                .st41232{fill:#FF4081;}
                .st1223{fill:#2A2929;}
                .st2222{fill:#FFEA00;}
            </style>
            <ellipse id="Elipse_17" transform="matrix(0.3998 -0.9166 0.9166 0.3998 4.9484 80.5509)" class="st41232" cx="64" cy="36.5" rx="35.5" ry="35.3"/>
            <path id="Elipse_17_-_Contorno" class="st1223" d="M78.6,3c8.8,3.8,15.8,11.1,19.2,20.1c7.3,18.8-1.9,39.9-20.6,47.3
                c-18.7,7.3-39.7-1.9-47-20.6c-3.5-9-3.3-19,0.6-27.8C36.5,8.6,49.8-0.1,64.5,0C69.3,0.1,74.1,1.1,78.6,3z M50.2,68.1
                C67.6,75.8,88,68,95.7,50.6S95.6,12.8,78.1,5S40.3,5.2,32.6,22.6c0,0.1-0.1,0.1-0.1,0.2C24.9,40.2,32.8,60.5,50.2,68.1z"/>
            <path id="Caminho_2561" class="st2222" d="M99.5,38.4L99.5,38.4c-0.2,2.5-0.6,5.1-1.3,7.5l0,0c8.5,5.2,13.4,9.5,12.5,11.6
                c-1.7,3.9-24.1-2.1-50-13.5S15.1,20.4,16.8,16.5c0.9-2,7.2-1.4,16.6,1.2l0.3,0.1c1.3-2.2,2.9-4.2,4.7-6.1l0,0
                C21.1,7,8.3,6.5,6.2,11.3C3,18.7,26.2,36,58.1,49.9s60.4,19.2,63.6,11.7C123.8,56.9,114.8,47.9,99.5,38.4z"/>
            <path id="Caminho_2561_-_Contorno" class="st1223" d="M99.9,37.5c0,0,0.1,0,0.1,0.1c7.7,4.8,13.9,9.5,17.8,13.6c4.4,4.5,6,8.2,4.8,11
                c-2.3,5.2-13.3,4.3-22.2,2.7c-12.1-2.2-27.3-7.2-42.8-13.9S28.3,36.3,18.4,29C11.2,23.6,3.1,16.1,5.3,10.9c1.2-2.8,5-4.1,11.3-4
                c5.7,0.1,13.3,1.5,22.1,3.9c0.1,0,0.2,0.1,0.2,0.1l0,0c0.5,0.3,0.6,0.9,0.3,1.4c0,0.1-0.1,0.1-0.1,0.2c-1.7,1.8-3.3,3.8-4.6,5.9
                c-0.3,0.4-0.8,0.6-1.2,0.4l-0.3-0.1c-3.7-1.1-7.5-1.9-11.3-2.3c-3.7-0.3-4.1,0.5-4.1,0.5c0,0-0.3,0.8,2.3,3.2
                c2.8,2.4,5.8,4.6,8.9,6.5C39.3,32.8,50,38.4,61.1,43.1c11,4.9,22.4,9.1,34,12.4c3.5,1,7.2,1.7,10.9,2.1c3.5,0.3,3.9-0.5,3.9-0.5
                c0,0,0.3-0.9-2.5-3.4c-3-2.6-6.2-4.9-9.6-6.9c-0.4-0.2-0.6-0.7-0.4-1.1c0.7-2.4,1.1-4.8,1.2-7.3c0-0.5,0.4-0.9,0.9-0.9l0,0
                C99.6,37.4,99.7,37.4,99.9,37.5z M58.5,49c15.4,6.7,30.4,11.6,42.3,13.8c4.6,1,9.3,1.4,14,1.1c2.3-0.2,5.2-0.8,6-2.7
                c0.8-1.9-0.7-5-4.4-8.8c-4.9-4.7-10.3-8.9-16.1-12.4c-0.2,1.8-0.5,3.6-1,5.3c3.3,2,6.4,4.2,9.3,6.7c1,0.8,1.8,1.8,2.5,2.9
                c0.6,0.8,0.8,1.9,0.4,2.8c-0.5,0.9-1.3,1.5-2.3,1.6c-1.2,0.2-2.4,0.3-3.6,0.1c-3.8-0.4-7.6-1.1-11.2-2.2
                C82.9,54,71.4,49.9,60.3,44.9c-11.2-4.8-22-10.3-32.5-16.6c-3.3-2-6.4-4.2-9.2-6.7c-0.9-0.8-1.7-1.7-2.3-2.7
                c-0.6-0.8-0.7-1.8-0.4-2.7c0.5-0.9,1.3-1.5,2.3-1.6c1.2-0.2,2.5-0.2,3.7-0.1c3.8,0.4,7.6,1.2,11.4,2.3c1-1.5,2.1-3,3.3-4.3
                c-6.5-1.9-13.2-3-20-3.4C11.3,8.8,8,9.8,7.2,11.7c-0.8,1.8,0.7,4.4,2.1,6.2c3,3.6,6.5,6.8,10.3,9.5C29.3,34.6,43.2,42.3,58.5,49
                L58.5,49z"/>
            </svg>
            `;

            $('.content').html(html);

            setTimeout(() => {
                $('#planeta-loading').css('opacity', '1');

                setTimeout(() => {
                    $('#planeta-loading').addClass('spinningDefault');

                    setTimeout(() => {
                        $('#planeta-loading').css('transform', 'rotate(0deg) translate(130px, -80px)');

                        // $('.seguircarreira').css('margin-left', '-250vw');
                        $('.seguircarreira').css('margin-left', '0vw');
                    }, 1550);

                }, 500);

            }, 200);

        }
    }],

    preload: function () {
        this.carregarAudio();
        let loading = `
        <div class="waiting">
            <span class="toque" style="font-size:16px">
                carregando...
            </span>
        </div>`;

        $('body').append(loading);
        
        this.loadApp();
    },

    backLoad: function () {
        this.loadApp();
    },

    loadApp: function () {
        if (!Anima.sound.perguntas 
            || !Anima.sound.resultado 
            || !Anima.sound.open) {
            
          setTimeout(() => {
            Anima.backLoad();
          }, 1000);
        } else {
            this.waiting();
        }
      
    },

    carregarAudio:function () {
        var request = new XMLHttpRequest();
        request.open("GET", "./assets/audio/perguntas.mp3", true);
        request.responseType = "blob";    
        request.onload = function() {
            if (this.status == 200) {
                Anima.sound.perguntas = new Audio(URL.createObjectURL(this.response));
            }
            Anima.carregarAudioDois();
        }
        request.send();
    },

    carregarAudioDois: function () {
        var requestdois = new XMLHttpRequest();
        requestdois.open("GET", "./assets/audio/resultado.wav", true);
        requestdois.responseType = "blob";    
        requestdois.onload = function() {
            if (this.status == 200) {
                Anima.sound.resultado = new Audio(URL.createObjectURL(this.response));
            }
            Anima.carregarAudioTres();
        }
        requestdois.send();
    },

    carregarAudioTres: function () {
        var requesttres = new XMLHttpRequest();
        requesttres.open("GET", "./assets/audio/open.mp3", true);
        requesttres.responseType = "blob";    
        requesttres.onload = function() {
            if (this.status == 200) {
                Anima.sound.open = new Audio(URL.createObjectURL(this.response));
            }
        }
        requesttres.send();
    },
    

    waiting: function() {
        

        setTimeout(() => {
            let html = `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="112" height="108" viewBox="0 0 112 108">
            <g id="headphone" clip-path="url(#clip-headphone)">
              
              <g id="Grupo_367" data-name="Grupo 367" transform="translate(-131 -279)">
                <g id="Grupo_366" data-name="Grupo 366" transform="translate(-949.124 -3562)">
                  <path id="Caminho_2570" data-name="Caminho 2570" d="M175.461,144.719c.022-8.044.088-16.088-.009-24.132-.162-13.555-5.645-24.541-16.16-33.029-.787-.636-2.091-1.009-2.287-1.882-.191-.858.506-1.918.816-2.887.588-1.843.1-2.828-1.73-3.439-2.173-.726-4.365-1.392-6.52-2.168-6.588-2.375-24.383-2.944-31.313-2.694a2.5,2.5,0,0,0-.28.027.247.247,0,0,1-.075,0,1.863,1.863,0,0,0-.276-.02c-3.387-.033-12.573-.077-15.953.31-5.95.679-11.468,2.911-17.1,4.73a2.1,2.1,0,0,0-1.41,2.795c.241.877.533,1.744.857,2.593a1.006,1.006,0,0,1-.447,1.407c-11.639,8.455-17.7,19.883-17.891,34.32-.105,7.787-.026,15.576-.009,23.362a9.945,9.945,0,0,1-.471,3.437,12.151,12.151,0,0,0-.629,4.095c0,3.767-.024,7.532,0,11.3A15.415,15.415,0,0,0,75.494,177.39c2.714.825,5.483.611,8.245.627a1.161,1.161,0,0,1,1.23.732,6.352,6.352,0,0,0,5.886,3.664c1.458.031,2.916.024,4.374,0a6.513,6.513,0,0,0,6.511-6.467q.049-18.755,0-37.513a6.5,6.5,0,0,0-6.395-6.465c-1.567-.035-3.135-.04-4.7,0-2.006.051-3.948.741-4.845,2.487-1,1.944-2.4,2.021-4.13,1.9a9.767,9.767,0,0,0-1.964.013c-.818.108-.934-.222-.93-.957.033-4.935.02-9.871.015-14.806a28.09,28.09,0,0,1,.9-7.156,28.381,28.381,0,0,1,8.627-14.164.292.292,0,0,1,.419.031c1.029,1.235,1.648,1.367,3.242.849,1.243-.4,2.49-.8,3.729-1.227,3.961-1.363,7.921-2.595,12.207-2.549,8.565.1,17.133.033,25.7.024a24.233,24.233,0,0,1,4.352.356c3.773.688,7.3,2.188,10.94,3.334,1.843.58,2.35.515,3.523-.8a.293.293,0,0,1,.415-.02,27.721,27.721,0,0,1,9.31,18.432c.513,6.014.1,12.057.206,18.087.009.537-.23.57-.656.563-1.456-.024-2.916-.042-4.374,0a1.053,1.053,0,0,1-1.14-.7,6.377,6.377,0,0,0-5.976-3.7q-2.131-.03-4.264,0a6.524,6.524,0,0,0-6.557,6.533q-.036,18.7,0,37.4a6.525,6.525,0,0,0,6.465,6.516c1.383.026,2.769.007,4.154,0a6.422,6.422,0,0,0,6.226-3.82.918.918,0,0,1,1-.576c1.386.024,2.771.02,4.157.007a15.343,15.343,0,0,0,14.77-11.881c.076-.326.009-.736.308-.992a.279.279,0,0,0,.094-.213v-15.39a.3.3,0,0,0-.012-.084A16.827,16.827,0,0,1,175.461,144.719ZM88.632,157.19q0-9.045,0-18.087c0-2.014.752-2.753,2.784-2.758,1.166,0,2.333-.011,3.5,0a2.209,2.209,0,0,1,2.46,2.421q.016,18.416,0,36.829a2.208,2.208,0,0,1-2.453,2.428q-1.914.023-3.826,0a2.224,2.224,0,0,1-2.46-2.531Q88.624,166.341,88.632,157.19Zm-9.072-16.444c1.274-.033,2.552.035,3.826-.029.726-.037.892.194.888.9-.031,5.19-.018,10.377-.018,15.567s-.011,10.377.015,15.567c0,.69-.136.948-.879.908-2.1-.119-4.214.165-6.3-.4a10.912,10.912,0,0,1-8.129-10.313c-.057-3.835-.064-7.675,0-11.51A10.932,10.932,0,0,1,79.561,140.745Zm6.993-45.691A32.488,32.488,0,0,0,76.515,109a32.889,32.889,0,0,0-2.1,11.782c0,5.227-.011,10.454.013,15.681a1.117,1.117,0,0,1-.829,1.273,12.763,12.763,0,0,0-3.1,1.84.291.291,0,0,1-.465-.233v-.608c0-6.322-.14-12.651.037-18.969.338-12.2,5.626-21.867,15.293-29.412a.293.293,0,0,1,.457.143c.388,1.212.711,2.317,1.128,3.383C87.188,94.474,86.953,94.731,86.554,95.054Zm66.407-11.4q-1.894,5.591-3.692,11.211c-.2.62-.471.589-.938.429-1.169-.4-2.352-.761-3.512-1.187a35.006,35.006,0,0,0-12.63-2.1c-8.2.086-16.405.031-24.607.022a32.339,32.339,0,0,0-4.79.354c-3.4.508-6.575,1.827-9.828,2.861-.59.189-.916.253-1.16-.523-1.155-3.686-2.383-7.347-3.611-11.006-.173-.519-.147-.767.447-.926.98-.259,1.94-.609,2.9-.948a47.565,47.565,0,0,1,12.733-2.87c2.477-.163,10.751-.048,13.228-.11a2.771,2.771,0,0,0,.386-.038.259.259,0,0,1,.091,0,2.566,2.566,0,0,0,.305.035,15.473,15.473,0,0,0,1.749.007c7.458-.433,25.488,1.344,32.4,3.9C152.911,82.94,153.17,83.035,152.961,83.653Zm-.465,91.936a2.2,2.2,0,0,1-2.444,2.436q-1.914.023-3.826,0a2.225,2.225,0,0,1-2.469-2.522q-.013-9.15,0-18.3,0-9.044,0-18.087c0-2.014.756-2.76,2.778-2.766,1.164,0,2.33-.011,3.5,0a2.214,2.214,0,0,1,2.469,2.412Q152.51,157.172,152.5,175.589Zm2.059-80.558a.884.884,0,0,1-.364-1.183c.432-1.08.748-2.208,1.116-3.314v0a.289.289,0,0,1,.443-.128,37.383,37.383,0,0,1,15.347,30.49c-.013,6.091,0,12.18,0,18.445a.291.291,0,0,1-.463.236,14.08,14.08,0,0,0-3.428-1.991c-.579-.218-.485-.631-.485-1.049,0-5.042-.013-10.087,0-15.129A32.732,32.732,0,0,0,154.555,95.03ZM172.17,162.87a10.932,10.932,0,0,1-10.749,10.764c-1.2.024-2.407-.044-3.606.026-.761.044-.962-.167-.958-.946.039-5.19.02-10.379.02-15.567,0-5.152.015-10.3-.015-15.457-.007-.73.116-1.016.923-.976,2.352.117,4.724-.2,7.026.627a10.931,10.931,0,0,1,7.36,10.129C172.225,155.27,172.232,159.072,172.17,162.87Z" transform="translate(1015.56 3766.567)" fill="#2a2929"/>
                  <path id="Caminho_2571" data-name="Caminho 2571" d="M105.984,150.654a32.955,32.955,0,0,0-12.223,25.828c0,5.247-.011,10.495.013,15.742a1.121,1.121,0,0,1-.834,1.278,14.452,14.452,0,0,0-3.585,2.2v-1.2c0-6.347-.141-12.7.038-19.042.344-12.386,5.786-22.17,15.731-29.782.45,1.375.8,2.609,1.265,3.795C106.622,150.071,106.386,150.329,105.984,150.654Z" transform="translate(996.282 3711.048)" fill="#1dc18a"/>
                  <path id="Caminho_2572" data-name="Caminho 2572" d="M236.46,99.15q-1.885,5.613-3.673,11.254c-.2.623-.469.592-.934.43-1.163-.406-2.341-.764-3.494-1.192a34.551,34.551,0,0,0-12.566-2.11c-8.16.086-16.322.031-24.483.022a31.9,31.9,0,0,0-4.766.355c-3.388.51-6.542,1.834-9.779,2.872-.587.19-.912.254-1.154-.525-1.15-3.7-2.371-7.375-3.593-11.049-.172-.521-.146-.77.445-.929.975-.26,1.93-.611,2.884-.951a46.97,46.97,0,0,1,12.669-2.881c2.465-.163,10.7-.049,13.162-.11a2.7,2.7,0,0,0,.43-.046,2.513,2.513,0,0,0,.349.044,15.263,15.263,0,0,0,1.741.007c7.421-.435,25.36,1.349,32.241,3.918C236.409,98.434,236.667,98.529,236.46,99.15Z" transform="translate(931.899 3751.106)" fill="#1dc18a"/>
                  <path id="Caminho_2573" data-name="Caminho 2573" d="M490.062,196.078a15.5,15.5,0,0,0-3.918-2.349c-.583-.219-.488-.634-.488-1.053,0-5.062-.013-10.126,0-15.188a32.819,32.819,0,0,0-12.252-26.477c-.413-.344-.594-.616-.366-1.188.435-1.084.753-2.216,1.124-3.327a2.325,2.325,0,0,1,.177-.327,37.5,37.5,0,0,1,15.724,30.8C490.051,183.279,490.062,189.581,490.062,196.078Z" transform="translate(696.556 3710.666)" fill="#1dc18a"/>
                  <path id="Caminho_2574" data-name="Caminho 2574" d="M500.969,398.078a10.991,10.991,0,0,1-10.824,10.806c-1.21.024-2.424-.044-3.631.026-.766.044-.969-.168-.965-.949.04-5.21.02-10.42.02-15.627,0-5.172.015-10.345-.015-15.517-.007-.733.117-1.02.929-.98,2.369.117,4.757-.2,7.075.629a10.976,10.976,0,0,1,7.411,10.168C501.025,390.449,501.031,394.266,500.969,398.078Z" transform="translate(686.73 3531.283)" fill="#652cb3"/>
                  <path id="Caminho_2575" data-name="Caminho 2575" d="M434.58,395.358a2.216,2.216,0,0,1-2.461,2.446q-1.927.023-3.852,0a2.237,2.237,0,0,1-2.486-2.532q-.013-9.186,0-18.376,0-9.08,0-18.157c0-2.022.762-2.77,2.8-2.777,1.172,0,2.347-.011,3.521,0a2.226,2.226,0,0,1,2.486,2.422Q434.593,376.87,434.58,395.358Z" transform="translate(733.491 3546.771)" fill="#b145bf"/>
                  <path id="Caminho_2576" data-name="Caminho 2576" d="M99.892,408c0,.693-.137.951-.885.912-2.115-.119-4.243.166-6.342-.4a10.961,10.961,0,0,1-8.186-10.353c-.057-3.85-.064-7.7,0-11.554a10.991,10.991,0,0,1,10.669-10.731c1.283-.033,2.57.035,3.852-.029.731-.038.9.194.894.9-.031,5.21-.018,10.417-.018,15.627S99.866,402.794,99.892,408Z" transform="translate(1000.076 3531.276)" fill="#652cb3"/>
                  <path id="Caminho_2577" data-name="Caminho 2577" d="M183.15,395.367a2.22,2.22,0,0,1-2.47,2.437q-1.927.023-3.852,0a2.236,2.236,0,0,1-2.477-2.541q-.013-9.189,0-18.376,0-9.08,0-18.157c0-2.022.757-2.764,2.8-2.768,1.174,0,2.349-.011,3.521,0a2.221,2.221,0,0,1,2.477,2.431Q183.166,376.882,183.15,395.367Z" transform="translate(929.832 3546.771)" fill="#b145bf"/>
                </g>
              </g>
            </g>
          </svg>
          <br>
          Para uma melhor experiência, <br>recomendamos o uso de fone de <br> ouvidos :D
                    <div onclick="Anima.iniciar()" class="toque">Toque para <br>iniciar</div>
              
            `;

            $('.waiting').html(html);
        }, 1000);
    },

    iniciar: function () {
        let frame = this.frames[0];

        Anima.sound.btnG.play();
        $('.waiting').css('opacity', '0');

        setTimeout(() => {
            Anima.sound.open.play();
            Anima.sound.open.loop = true;
    
            Anima.currentFrame = this.frames[0];
            Anima.player.perguntaAtual = 0;
    
            this.renderBackdoor(frame);
            this.renderOverlay(frame);
    
            $('.waiting').remove();
    
            Anima.onWindowResize();
    
            Anima.currentFrame.onThisFrame();
        }, 1500);
    },

    renderBackdoor: function (frame) {
        $('#backdoor').html(frame.backdoor.html);
    },

    renderOverlay: function (frame) {
        $('#overlay').html(frame.overlay.html);
    },

    svgs: [
        'olho-aberto',
        'piramide',
        'triangulo',
        'estrela-m',
        'estrela-p',
        'estrela-g',
        'planeta'
    ],

    onWindowResize: function () {
        for (let index = 0; index < Anima.svgs.length; index++) {
            const desenho = Anima.svgs[index];

            $('#' + desenho).css('transform', `scale(${((100 * ((window.innerWidth + window.innerHeight) / 2)) / 374) * 0.007})`);
        }
    },

    onClickResposta: function (sn, op, kl) {
        if (sn == 'certo') {
            Anima.player.acertos++;

            Anima.sound.certo.play();
        } else if (sn = 'errado') {
            Anima.sound.errado.play();
        } else {
            Anima.sound.certo.play();
        }

        Anima.sound.btnS.play();


        // debugger
        // if (op == 'offponto') {
        if (Anima.player.pgts[Anima.player.perguntaAtual].area == 'Comportamento') {

            const aux = Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].pontos.map(element => {
                if (element.pontos > Anima.maiorValor) {
                    Anima.maiorValor = element.pontos;
                    Anima.maiorTipo = element.tipo
                }
            });


            Anima.player.pontos = {
                Rock: (Anima.player.pontos.Rock || 0) + (Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].pontos.find(element => element.tipo == "Rock").pontos || 0),
                Lofi: (Anima.player.pontos.Lofi || 0) + (Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].pontos.find(element => element.tipo == "Lofi").pontos || 0),
                Sertanejo: (Anima.player.pontos.Sertanejo || 0) + (Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].pontos.find(element => element.tipo == "Sertanejo").pontos || 0),
                Eletronica: (Anima.player.pontos.Eletronica || 0) + (Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].pontos.find(element => element.tipo == "Eletronica").pontos || 0),
                Pop: (Anima.player.pontos.Pop || 0) + (Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].pontos.find(element => element.tipo == "Pop").pontos || 0),
                Funk: (Anima.player.pontos.Funk || 0) + (Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].pontos.find(element => element.tipo == "Funk").pontos || 0),
                Pagode: (Anima.player.pontos.Pagode || 0) + (Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].pontos.find(element => element.tipo == "Pagode").pontos || 0),
                Rap: (Anima.player.pontos.Rap || 0) + (Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].pontos.find(element => element.tipo == "Rap").pontos || 0),
            }

            if(Anima.player.pontos.Rock > Anima.player.pontos.Lofi) {
                Anima.maiorValor = Anima.player.pontos.Rock;
                Anima.maiorTipo = 'Rock';
            } else {
                Anima.maiorValor = Anima.player.pontos.Lofi;
                Anima.maiorTipo = 'Lofi';
            }

            if (Anima.maiorValor < Anima.player.pontos.Sertanejo) {
                Anima.maiorValor = Anima.player.pontos.Sertanejo;
                Anima.maiorTipo = 'Sertanejo';
            }

            if (Anima.maiorValor < Anima.player.pontos.Eletronica) {
                Anima.maiorValor = Anima.player.pontos.Eletronica;
                Anima.maiorTipo = 'Eletronica';
            }

            if (Anima.maiorValor < Anima.player.pontos.Pop) {
                Anima.maiorValor = Anima.player.pontos.Pop;
                Anima.maiorTipo = 'Pop';
            }

            if (Anima.maiorValor < Anima.player.pontos.Funk) {
                Anima.maiorValor = Anima.player.pontos.Funk;
                Anima.maiorTipo = 'Funk';
            }

            if (Anima.maiorValor < Anima.player.pontos.Pagode) {
                Anima.maiorValor = Anima.player.pontos.Pagode;
                Anima.maiorTipo = 'Pagode';
            }

            if (Anima.maiorValor < Anima.player.pontos.Rap) {
                Anima.maiorValor = Anima.player.pontos.Rap;
                Anima.maiorTipo = 'Rap';
            }

            console.log('Maior pontos: '+Anima.maiorTipo+' com '+ Anima.maiorValor + 'pontos');

            // Anima.player.pontos = {
            //     Rock: (Anima.player.pontos.Rock || 0) + Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].pontos.Rock,
            //     Lofi: (Anima.player.pontos.Lofi || 0) + Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].pontos.Lofi,
            //     Sertanejo: (Anima.player.pontos.Sertanejo || 0) + Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].pontos.Sertanejo,
            //     Eletronica: (Anima.player.pontos.Eletronica || 0) + Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].pontos.Eletronica,
            //     Pop: (Anima.player.pontos.Pop || 0) + Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].pontos.Pop,
            //     Funk: (Anima.player.pontos.Funk || 0) + Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].pontos.Funk,
            //     Pagode: (Anima.player.pontos.Pagode || 0) + Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].pontos.Pagode,
            //     Rap: (Anima.player.pontos.Rap || 0) + Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].pontos.Rap
            // }

            console.log(Anima.player.pontos);
        } else if (Anima.player.pgts[Anima.player.perguntaAtual].area == 'Perfil') {
            console.log(Anima.player.pgts[Anima.player.perguntaAtual].respostas[kl].tipo);
            Anima.player.otherResults.push(sn);
        } else {
            console.log(sn);
            Anima.player.otherResults.push(sn);
        }

        // } else {
        // }

        Anima.player.respondidas.push(Anima.player.pgts[Anima.player.perguntaAtual]);

        Anima.player.perguntaAtual++;

        Anima.fecharPerguntas();
    },

    perguntas: [
        {
            grupo: "design",
            pgts: [
                {
                    area: "Design",
                    pergunta: "Qual a importância de um Design System para um produto?",
                    respostas: [
                        {
                            desc: "Nenhuma, só vai me gerar mais trabalho",
                            respostacerta: 0
                        },
                        {
                            desc: "Para formatar visualmente todas as partes de um produto",
                            respostacerta: 0
                        },
                        {
                            desc: "Para que todas as partes de um mesmo produto sigam as mesmas regras visuais e de comportamento",
                            respostacerta: 1
                        },
                        {
                            desc: "Para ficar bonito no meu portfólio.",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Design",
                    pergunta: "Como se chama o nome da metodologia que aplica as seguintes etapas: descobrir, definir, desenvolver e entregar?",
                    respostas: [
                        {
                            desc: "Design Thinking",
                            respostacerta: 0
                        },
                        {
                            desc: "Diamante Duplo",
                            respostacerta: 1
                        },
                        {
                            desc: "Munari",
                            respostacerta: 0
                        },
                        {
                            desc: "Lobach",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Design",
                    pergunta: "Qual a unidade de medida mais usada para a prototipação de telas?",
                    respostas: [
                        {
                            desc: "DPI",
                            respostacerta: 0
                        },
                        {
                            desc: "Polegadas",
                            respostacerta: 0
                        },
                        {
                            desc: "Pés",
                            respostacerta: 0
                        },
                        {
                            desc: "Pixels",
                            respostacerta: 1
                        }
                    ]
                },
                {
                    area: "Design",
                    pergunta: "Como se chama a forma de pensamento voltada a resolução de problemas de maneira inteligente?",
                    respostas: [
                        {
                            desc: "Design Council",
                            respostacerta: 0
                        },
                        {
                            desc: "Pensamento Crítico",
                            respostacerta: 0
                        },
                        {
                            desc: "Design Thinking",
                            respostacerta: 1
                        },
                        {
                            desc: "Teoria do arroz verde",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Design",
                    pergunta: "Qual o padrão de cores utilizado para materiais feitos para telas?",
                    respostas: [
                        {
                            desc: "Fogra39",
                            respostacerta: 0
                        },
                        {
                            desc: "CMYK",
                            respostacerta: 0
                        },
                        {
                            desc: "RGB",
                            respostacerta: 1
                        },
                        {
                            desc: "WebCoated",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Design",
                    pergunta: "Que nome se dá ao processo de validação de protótipos com o usuário?",
                    respostas: [
                        {
                            desc: "Teste de Usabilidade",
                            respostacerta: 1
                        },
                        {
                            desc: "Versão Beta",
                            respostacerta: 0
                        },
                        {
                            desc: "Teste A/B",
                            respostacerta: 0
                        },
                        {
                            desc: "Aprovação de protótipo",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Design",
                    pergunta: "UX/UI Designers precisam saber programar?",
                    respostas: [
                        {
                            desc: "Sim",
                            respostacerta: 0
                        },
                        {
                            desc: "Não",
                            respostacerta: 1
                        }
                    ]
                },
                {
                    area: "Design",
                    pergunta: "Qual o nome dado ao profissional de faz UX, UI e Front-End?",
                    respostas: [
                        {
                            desc: "Designer Unicórnio",
                            respostacerta: 1
                        },
                        {
                            desc: "Severino",
                            respostacerta: 0
                        },
                        {
                            desc: "Designer Pleno",
                            respostacerta: 0
                        },
                        {
                            desc: "Designer Fullstack",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Design",
                    pergunta: "O que faz um UX/UI Designer?",
                    respostas: [
                        {
                            desc: "Telas bonitas",
                            respostacerta: 0
                        },
                        {
                            desc: "Projetos de interface e experiência do usuário",
                            respostacerta: 1
                        },
                        {
                            desc: "Criação de publicidades para redes sociais",
                            respostacerta: 0
                        },
                        {
                            desc: "Atendimento ao cliente",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Design",
                    pergunta: "São trabalhos de um UX/UI Designer todos, EXCETO: ",
                    respostas: [
                        {
                            desc: "Projetos de planta baixa",
                            respostacerta: 1
                        },
                        {
                            desc: "Arquitetura da informação",
                            respostacerta: 0
                        },
                        {
                            desc: "Gamificação",
                            respostacerta: 0
                        },
                        {
                            desc: "Design de interface",
                            respostacerta: 0
                        }
                    ]
                }
            ]
        }, {
            grupo: "desenvolvimento",
            pgts: [
                {
                    area: "Desenvolvimento",
                    pergunta: " No Brasil, a tecnologia de computação em nuvem é muito recente, mas está se tornando madura muito rapidamente. Empresas de médio, pequeno e grande porte estão adotando a tecnologia gradativamente. O serviço começou a ser oferecido comercialmente em:",
                    respostas: [
                        {
                            desc: "2007",
                            respostacerta: 0
                        },
                        {
                            desc: "2008",
                            respostacerta: 1
                        },
                        {
                            desc: "2010",
                            respostacerta: 0
                        },
                        {
                            desc: "2011",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Desenvolvimento",
                    pergunta: "A linguagem de programação JavaScript(JS) é uma linguagem de frontend mas que também pode ser utilizada para backend.",
                    respostas: [
                        {
                            desc: "Errado",
                            respostacerta: 0
                        },
                        {
                            desc: "Certo",
                            respostacerta: 1
                        }
                    ]
                },
                {
                    area: "Desenvolvimento",
                    pergunta: "O ciclo de vida do software é a estrutura que contém processos, atividades e tarefas envolvidas no desenvolvimento, operação e manutenção de um produto de software. Assinale a alternativa que identifica corretamente o modelo mais antigo de ciclo de vida de software",
                    respostas: [
                        {
                            desc: "Aspiral",
                            respostacerta: 0
                        },
                        {
                            desc: "Incremental",
                            respostacerta: 0
                        },
                        {
                            desc: "Prototipagem",
                            respostacerta: 0
                        },
                        {
                            desc: "Cascata",
                            respostacerta: 1
                        }
                    ]
                },
                {
                    area: "Desenvolvimento",
                    pergunta: "Existem diversos modelos de desenvolvimento de software na literatura. Sabendo disso é correto afirmar que o modelo que se baseia na ideia de desenvolver uma versão inicial do produto, apresentá-la para os comentários dos clientes e continuar o desenvolvimento, por meio da criação de diversas versões, até que um produto final adequado seja alcançado, é o:",
                    respostas: [
                        {
                            desc: "modelo orientado a objetos.",
                            respostacerta: 0
                        },
                        {
                            desc: "modelo orientado ao reúso.",
                            respostacerta: 0
                        },
                        {
                            desc: "modelo incremental.",
                            respostacerta: 1
                        },
                        {
                            desc: "modelo cascata.",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Desenvolvimento",
                    pergunta: "No contexto das metodologias ágeis, o conceito de refatoração compreende:",
                    respostas: [
                        {
                            desc: "a renomeação de atributos e métodos para implementar melhorias no software.",
                            respostacerta: 1
                        },
                        {
                            desc: "a decomposição de histórias de usuário em uma série de tarefas de desenvolvimento.",
                            respostacerta: 0
                        },
                        {
                            desc: "a substituição do resultado de uma sprint inteira para atender a requisitos diferentes dos originais.",
                            respostacerta: 0
                        },
                        {
                            desc: "a junção de alterações de código às funcionalidades do software já entregue.",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Desenvolvimento",
                    pergunta: "Assinale a opção que apresenta a função JDBC ResultSet que executa a instrução SQL fornecida, que retorna um único objeto ResultSet:",
                    respostas: [
                        {
                            desc: "executeBatch()n",
                            respostacerta: 0
                        },
                        {
                            desc: "executeQuery()",
                            respostacerta: 1
                        },
                        {
                            desc: "executeUpdate()",
                            respostacerta: 0
                        },
                        {
                            desc: "executeUpdate()",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Desenvolvimento",
                    pergunta: "Na navegação em uma aplicação web, os links acessíveis fazem parte da abordagem de:",
                    respostas: [
                        {
                            desc: "Coluna de navegação vertical.",
                            respostacerta: 0
                        },
                        {
                            desc: "Link de navegação individual.",
                            respostacerta: 1
                        },
                        {
                            desc: "Barra de navegação horizontal.",
                            respostacerta: 0
                        },
                        {
                            desc: "Guias e mapas de sítios.",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Desenvolvimento",
                    pergunta: "Os microsserviços criam vários serviços, cada qual executando em seu próprio processo, mas que não podem ser implantados de forma independente.:",
                    respostas: [
                        {
                            desc: "Certo",
                            respostacerta: 0
                        },
                        {
                            desc: "Errado",
                            respostacerta: 1
                        }
                    ]
                },
                {
                    area: "Desenvolvimento",
                    pergunta: "Os comandos SQL possuem duas grandes categorias que são DML e DDL. Relacione essas categorias da coluna da esquerda com os seus respectivos comandos da coluna da direita:",
                    respostas: [
                        {
                            desc: "DDL - DROP, ALTER e DML - SELECT, UPDATE",
                            respostacerta: 1
                        },
                        {
                            desc: "DDL - SELECT, ALTER e DML - SELECT, UPDATE ",
                            respostacerta: 0
                        },
                        {
                            desc: "DDL - DROP, ALTER e DML - ALTER, SELECT, UPDATE",
                            respostacerta: 0
                        },
                        {
                            desc: "DDL - SELECT, UPDATE e DML - DROP, ALTER ",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Desenvolvimento",
                    pergunta: "Em um banco de dados relacional, todos os usuários devem possuir uma mesma visão (view) do banco de dados, o que é necessário para garantir a consistência dos dados:",
                    respostas: [
                        {
                            desc: "Certo",
                            respostacerta: 0
                        },
                        {
                            desc: "Errado",
                            respostacerta: 1
                        }
                    ]
                },
                {
                    area: "Desenvolvimento",
                    pergunta: "Para recuperar linhas de um banco de dados SQL Server 2005, pode-se utilizar o comando SQL:",
                    respostas: [
                        {
                            desc: "INSERT",
                            respostacerta: 0
                        },
                        {
                            desc: "READ",
                            respostacerta: 0
                        },
                        {
                            desc: "CONSULT",
                            respostacerta: 0
                        },
                        {
                            desc: "SELECT",
                            respostacerta: 1
                        }
                    ]
                },
                {
                    area: "Desenvolvimento",
                    pergunta: "O utilitário Explain Plan:",
                    respostas: [
                        {
                            desc: "É criado pegando-se uma string de qualquer comprimento e codificando-a em uma impressão digital de 128 bits",
                            respostacerta: 0
                        },
                        {
                            desc: "Serve para criar uma expressão da álgebra relacional criando os índices necessários para executar uma consulta.",
                            respostacerta: 0
                        },
                        {
                            desc: "Relata a maneira como uma consulta usa os índices do banco de dados.",
                            respostacerta: 1
                        },
                        {
                            desc: "Deve executar o SQL para determinar o tamanho do resultado.",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Desenvolvimento",
                    pergunta: "Assinale a alternativa correspondente ao processo de desenvolvimento de software, cujos valores centrais são comunicação, simplicidade, feedback, coragem e respeito:",
                    respostas: [
                        {
                            desc: "Scrum",
                            respostacerta: 1
                        },
                        {
                            desc: "TDD",
                            respostacerta: 0
                        },
                        {
                            desc: "Modelo Interativo",
                            respostacerta: 0
                        },
                        {
                            desc: "XP",
                            respostacerta: 0
                        }
                    ]
                }
            ],
        }, {
            grupo: "tester",
            pgts: [
                {
                    area: "Qualidade de Software (Tester)",
                    pergunta: "No caso do teste de um software de um sistema computacional, é importante a realização do chamado teste de recuperação, que consiste especificamente em:",
                    respostas: [
                        {
                            desc: "Entregar o software ao cliente final que vai observar e criticar seu funcionamento.",
                            respostacerta: 0
                        },
                        {
                            desc: "Simular uma invasão indevida ao software e verificar se os mecanismos de proteção atuam eficientemente.",
                            respostacerta: 0
                        },
                        {
                            desc: "Testar o software por um longo período de tempo, observando suas saídas.",
                            respostacerta: 0
                        },
                        {
                            desc: "Forçar o software a falhar e verificar se a sua recuperação ocorre adequadamente.",
                            respostacerta: 1
                        }
                    ]
                },
                {
                    area: "Qualidade de Software (Tester)",
                    pergunta: "A qualidade de um software se faz tão importante que existem quinze atributos de qualidade que devem ser considerados. Sabendo disso, assinale a alternativa que apresenta cinco desses atributos:",
                    respostas: [
                        {
                            desc: "Facilidade, Continuidade, Estabilidade, Modularidade e Severidade.",
                            respostacerta: 0
                        },
                        {
                            desc: "Compreensibilidade, Adaptabilidade, Resiliência, Modularidade e Capacidade de aprendizado.",
                            respostacerta: 1
                        },
                        {
                            desc: "Reusabilidade, Competitividade, Testabilidade, Confidencialidade e Praticidade.",
                            respostacerta: 0
                        },
                        {
                            desc: "Complexidade, Não repúdio, Integridade, Segurança e Portabilidade.",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Qualidade de Software (Tester)",
                    pergunta: "O gerenciamento tradicional da qualidade de software baseia-se na suposição de que a qualidade do software está diretamente relacionada à qualidade do processo de desenvolvimento desse software:",
                    respostas: [
                        {
                            desc: "Certo.",
                            respostacerta: 1
                        },
                        {
                            desc: "Errado",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Qualidade de Software (Tester)",
                    pergunta: "No processo de desenvolvimento para dispositivos móveis, os testes de configuração incluem a verificação dos tempos de resposta e dos métodos de recuperação do aplicativo quando o hardware falha ou se comporta mal.",
                    respostas: [
                        {
                            desc: "Certo",
                            respostacerta: 0
                        },
                        {
                            desc: "Errado",
                            respostacerta: 1
                        }
                    ]
                },
                {
                    area: "Qualidade de Software (Tester)",
                    pergunta: "Assinale a alternativa correspondente ao processo de desenvolvimento de software, cujos valores centrais são comunicação, simplicidade, feedback, coragem e respeito:",
                    respostas: [
                        {
                            desc: "Scrum",
                            respostacerta: 1
                        },
                        {
                            desc: "TDD",
                            respostacerta: 0
                        },
                        {
                            desc: "Modelo Interativo",
                            respostacerta: 0
                        },
                        {
                            desc: "XP",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Qualidade de Software (Tester)",
                    pergunta: "Num Help Desk, é o grupo que resolve o problema por meio do uso de ferramentas complementares, tais como, base de conhecimento e software de controle remoto, visando ao encerramento do problema sem a necessidade de escalonar o assunto para outro nível. Trata-se do grupo de:",
                    respostas: [
                        {
                            desc: "Segundo nível solucionador.",
                            respostacerta: 0
                        },
                        {
                            desc: "Primeiro nível direcionador.",
                            respostacerta: 0
                        },
                        {
                            desc: "Segundo nível especializado.",
                            respostacerta: 0
                        },
                        {
                            desc: "Primeiro nível solucionador.",
                            respostacerta: 1
                        }
                    ]
                },
                {
                    area: "Qualidade de Software (Tester)",
                    pergunta: "Uma estrutura de atendimento, em primeiro nível, às solicitações dos usuários, deve estar equipada e composta de:",
                    respostas: [
                        {
                            desc: "tendentes não técnicos preparados para registrar os chamados e solucionar remotamente os problemas básicos.",
                            respostacerta: 1
                        },
                        {
                            desc: "Atendentes especialistas preparados para solucionar os problemas em laboratório.",
                            respostacerta: 0
                        },
                        {
                            desc: "Atendentes técnicos preparados para solucionar os problemas em campo (remota ou presencialmente).",
                            respostacerta: 0
                        },
                        {
                            desc: "Profissionais responsáveis pela gestão, monitoração e elaboração de estatísticas sobre os chamados.",
                            respostacerta: 0
                        }
                    ]
                }
            ]
        }, {
            grupo: "suporte",
            pgts: [
                {
                    area: "Suporte Técnico",
                    pergunta: "Sobre Help Desk assinale a INCORRETA:",
                    respostas: [
                        {
                            desc: "O Help Desk é um termo em inglês que significa literalmente \"balcão de ajuda\" e que se refere a um serviço de atendimento aos clientes que procuram por soluções, esclarecimentos sobre dúvidas e outras solicitações para problemas técnicos relacionados a telefonia, informática, tecnologia da informação ou, ainda, pré e pós-vendas.",
                            respostacerta: 0
                        },
                        {
                            desc: "O Help Desk é realizado de modo síncrono e exclusivamente por meio de comunicação online.",
                            respostacerta: 1
                        },
                        {
                            desc: "A melhoria constante dos processos do serviço de Help Desk é importante e necessária para a qualidade do atendimento prestado ao usuário/cliente.",
                            respostacerta: 0
                        },
                        {
                            desc: "O serviço de Help Desk centraliza o recebimento das solicitações dos clientes, o que facilita as respostas e resolução dos problemas.",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Suporte Técnico",
                    pergunta: "O serviço de apoio a usuários para suporte e resolução de problemas técnicos em informática, telefonia e tecnologias de informação é comumente denominado help desk. Com relação a help desk, assinale a opção correta:",
                    respostas: [
                        {
                            desc: "Em uma estrutura de help desk, os problemas são resolvidos sempre no primeiro nível de atendimento.",
                            respostacerta: 0
                        },
                        {
                            desc: "Um dos objetivos do help desk é fornecer um ponto único de contato aos usuários de tecnologia da informação.",
                            respostacerta: 1
                        },
                        {
                            desc: "Um help desk trabalha sem o conceito de SLA (service level agreement), porque as métricas para help desk são padronizadas internacionalmente.",
                            respostacerta: 0
                        },
                        {
                            desc: "A evolução natural do help desk se denomina web desk.",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Suporte Técnico",
                    pergunta: "Um dos principais objetivos de uma solução para gerenciamento de Help Desk é:",
                    respostas: [
                        {
                            desc: "Criar um histórico de todas as auditorias realizadas.",
                            respostacerta: 0
                        },
                        {
                            desc: "Controlar todas as solicitações pendentes dos usuários.",
                            respostacerta: 1
                        },
                        {
                            desc: "Registrar todas as estações de trabalho não conectadas à rede.",
                            respostacerta: 0
                        },
                        {
                            desc: "Detectar as alterações de hardware realizadas nas estações da rede.",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Suporte Técnico",
                    pergunta: "Num Help Desk, é o grupo que resolve o problema por meio do uso de ferramentas complementares, tais como, base de conhecimento e software de controle remoto, visando ao encerramento do problema sem a necessidade de escalonar o assunto para outro nível. Trata-se do grupo de:",
                    respostas: [
                        {
                            desc: "Segundo nível solucionador",
                            respostacerta: 0
                        },
                        {
                            desc: "Primeiro nível direcionador.",
                            respostacerta: 0
                        },
                        {
                            desc: "Segundo nível especializado.",
                            respostacerta: 0
                        },
                        {
                            desc: "Primeiro nível solucionador.",
                            respostacerta: 1
                        }
                    ]
                }
            ]
        }, {
            grupo: "mkt",
            pgts: [
                {
                    area: "Marketing",
                    pergunta: "Assinale a opção correspondente a ordem correta do funil de marketing:",
                    respostas: [
                        {
                            desc: "Lead > Visitante > Tráfego > Oportunidade > Cliente",
                            respostacerta: 0
                        },
                        {
                            desc: "Tráfego > Visitante > Lead > Oportunidade > Cliente",
                            respostacerta: 1
                        },
                        {
                            desc: "Cliente > Visitante > Lead > Tráfego > Oportunidade",
                            respostacerta: 0
                        },
                        {
                            desc: "Tráfego > Visitante > Oportunidade > Lead > Cliente",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Marketing",
                    pergunta: "No inbound marketing, é comum segmentarmos o conteúdo de acordo com a etapa da jornada do cliente em que cada lead se encontra. Nesse sentido, a utilização de cases de sucesso e materiais apresentando os benefícios do produto ou serviço é utilizado comumente na etapa:",
                    respostas: [
                        {
                            desc: "Topo de funil",
                            respostacerta: 0
                        },
                        {
                            desc: "Meio de funil",
                            respostacerta: 0
                        },
                        {
                            desc: "Fundo de funil",
                            respostacerta: 1
                        }
                    ]
                },
                {
                    area: "Marketing",
                    pergunta: "A técnica de escrita muito utilizada no marketing e conhecida por direcionar o leitor de forma persuasiva a realizar uma ação específica, é conhecida como:",
                    respostas: [
                        {
                            desc: "Copywriting",
                            respostacerta: 1
                        },
                        {
                            desc: "Outbound Marketing",
                            respostacerta: 0
                        },
                        {
                            desc: "Briefing",
                            respostacerta: 0
                        },
                        {
                            desc: "Conversão",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Marketing",
                    pergunta: "Em um mercado altamente competitivo, é fundamental se posicionar com os vários tipos de marketing. Analise as definições e qual conceito consiste em campanhas não convencionais que tem foco na criatividade e buscam criar uma experiência inesquecível para o consumidor os conceitos deste que correspondem a cada um deles.",
                    respostas: [
                        {
                            desc: "Marketing de Guerrilha",
                            respostacerta: 1
                        },
                        {
                            desc: "Outbound Marketing",
                            respostacerta: 0
                        },
                        {
                            desc: "Endomarketing",
                            respostacerta: 0
                        },
                        {
                            desc: "Marketing de Relacionamento",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Marketing",
                    pergunta: "Quais das alternativas não se encaixam na definição, características ou exemplos de Personas:",
                    respostas: [
                        {
                            desc: "É a personificação do público ao qual a empresa se direciona.",
                            respostacerta: 1
                        },
                        {
                            desc: "Tem como foco características abrangentes, tais como gênero, idade e região.",
                            respostacerta: 0
                        },
                        {
                            desc: "Auxiliam as empresas a ter uma visão mais clara e objetiva de seus usuários.",
                            respostacerta: 0
                        },
                        {
                            desc: "Podem ser criadas de forma intuitiva, a partir da percepção que as empresas têm de seus clientes.",
                            respostacerta: 1
                        }
                    ]
                }
            ]
        }, {
            grupo: "adm",
            pgts: [
                {
                    area: "Administrativo",
                    pergunta: "Para fins de aplicação da LGPD, dado pessoal é o que permite identificar ou tornar identificável, de forma inequívoca, um indivíduo.",
                    respostas: [
                        {
                            desc: "Certo",
                            respostacerta: 1
                        },
                        {
                            desc: "Errado",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Administrativo",
                    pergunta: "De acordo com a Lei Geral de Proteção de Dados Pessoais, assinale a opção que indica quem deve comunicar à autoridade nacional a ocorrência de incidente de segurança relacionado a dados pessoais que possa acarretar risco ou dano relevante: ",
                    respostas: [
                        {
                            desc: "Titular",
                            respostacerta: 0
                        },
                        {
                            desc: "Segurança de TI",
                            respostacerta: 0
                        },
                        {
                            desc: "Operador",
                            respostacerta: 0
                        },
                        {
                            desc: "Controlador",
                            respostacerta: 1
                        }
                    ]
                },
                {
                    area: "Administrativo",
                    pergunta: "O método de desenvolvimento de pessoas que, para ser levado a efeito, movimenta as pessoas em várias posições na organização, no esforço de expandir suas habilidades, conhecimentos e capacidades, é conhecido como:",
                    respostas: [
                        {
                            desc: "Rotação de cargos",
                            respostacerta: 1
                        },
                        {
                            desc: "Apredizagem prática",
                            respostacerta: 0
                        },
                        {
                            desc: "Exercícios de simulação",
                            respostacerta: 0
                        },
                        {
                            desc: "Atribuições de comissões",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Administrativo",
                    pergunta: "A informação a respeito do que o ocupante do cargo faz e dos conhecimentos, habilidades e capacidades de que necessita para desempenhar o cargo adequadamente, relaciona-se com a definição de:",
                    respostas: [
                        {
                            desc: "Análise de cargos",
                            respostacerta: 1
                        },
                        {
                            desc: "Desenho de cargos",
                            respostacerta: 0
                        },
                        {
                            desc: "Descrição de cargos",
                            respostacerta: 0
                        },
                        {
                            desc: "Ampliação de cargos",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Administrativo",
                    pergunta: "A avaliação do desempenho é um processo dinâmico que envolve o avaliado e seu gerente e representa uma técnica de direção imprescindível nas atividades de administração das organizações. O desempenho do funcionário é medido pelo grau de alcance dos requisitos de seu trabalho, porém, deve proporcionar benefícios para a organização e para as pessoas, atendendo a diversas linhas básicas, dentre as quais a de:",
                    respostas: [
                        {
                            desc: "Ser aceita por ambas as partes: avaliador e avaliado",
                            respostacerta: 1
                        },
                        {
                            desc: "Abarcar somente o desempenho dentro do cargo ocupado",
                            respostacerta: 0
                        },
                        {
                            desc: "Enfatizar a impressão a respeito dos hábitos pessoais observados no trabalho",
                            respostacerta: 0
                        },
                        {
                            desc: "Ser utilizada para punir o mau desempenho e excluir da organização os reincidentes",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Administrativo",
                    pergunta: "De acordo com a Lei Geral de Proteção de Dados Pessoais, a utilização de meios técnicos razoáveis e disponíveis no momento do tratamento, por meio dos quais um dado perde a possibilidade de associação direta ou indireta a um indivíduo, consiste na técnica de:",
                    respostas: [
                        {
                            desc: "Bloqueio",
                            respostacerta: 0
                        },
                        {
                            desc: "Anonimato",
                            respostacerta: 0
                        },
                        {
                            desc: "Eliminação",
                            respostacerta: 0
                        },
                        {
                            desc: "Anonimização",
                            respostacerta: 1
                        }
                    ]
                },
                {
                    area: "Administrativo",
                    pergunta: "Em BPM, a ferramenta abaixo que é uma boa prática para comparar o desempenho de um processo com processos semelhantes no segmento de negócio é:",
                    respostas: [
                        {
                            desc: "Análise SWOT.",
                            respostacerta: 0
                        },
                        {
                            desc: "Benchmarking",
                            respostacerta: 1
                        },
                        {
                            desc: "Brainstorming.",
                            respostacerta: 0
                        },
                        {
                            desc: "5W2H.",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Administrativo",
                    pergunta: "A sigla LGPD significa \"Lei Geral de Proteção de Dados\"",
                    respostas: [
                        {
                            desc: "Certo",
                            respostacerta: 1
                        },
                        {
                            desc: "Errado",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Administrativo",
                    pergunta: "Determinada sociedade empresária resolve passar a produzir bens na Zona Franca de Manaus, que serão destinados à comercialização no território nacional e busca informações sobre as isenções a que terá direito. Assinale a opção que indica as isenções a que terá direito:",
                    respostas: [
                        {
                            desc: "Do IPI.",
                            respostacerta: 1
                        },
                        {
                            desc: "Do IPI e do ICMS.",
                            respostacerta: 0
                        },
                        {
                            desc: "Do IPI e do Imposto de Importação integral.",
                            respostacerta: 0
                        },
                        {
                            desc: "Do Imposto de Exportação.",
                            respostacerta: 0
                        }
                    ]
                }
            ]
        }, {
            grupo: "infra",
            pgts: [
                {
                    area: "Infra",
                    pergunta: "No Brasil, a tecnologia de computação em nuvem é muito recente, mas está se tornando madura muito rapidamente. Empresas de médio, pequeno e grande porte estão adotando a tecnologia gradativamente. O serviço começou a ser oferecido comercialmente em:",
                    respostas: [
                        {
                            desc: "2007",
                            respostacerta: 0
                        },
                        {
                            desc: "2008",
                            respostacerta: 1
                        },
                        {
                            desc: "2010",
                            respostacerta: 0
                        },
                        {
                            desc: "2011",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Infra	",
                    pergunta: "Nas redes de computadores, existe um servidor que pode residir no computador local do usuário ou em qualquer ponto entre o computador do usuário e os servidores de destino na Internet. Esse servidor passa solicitações e respostas não modificadas, armazenando em cache as páginas mais acessadas. A qual servidor o enunciado se refere?",
                    respostas: [
                        {
                            desc: "Servidor de banco de dados.",
                            respostacerta: 0
                        },
                        {
                            desc: "Servidor proxy.",
                            respostacerta: 1
                        },
                        {
                            desc: "Servidor de redes.",
                            respostacerta: 0
                        },
                        {
                            desc: "Servidor certificado.",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Infra",
                    pergunta: "No que diz respeito à Administração de Servidores Windows, considere as seguintes afirmativas sobre o Windows Admin Center. <br>1. Substitui completamente o MMC (Microsoft Management Console) e contempla suas ferramentas na totalidade. <br>2. É otimizado e recomendado para o Windows Server 2019, embora possa ser utilizado para gerenciar servidores Windows Server 2012 também. <br>3. A solução Gerenciamento do Computador fornece um subconjunto de recursos para gerenciar computadores cliente com Windows 7, 8 e 10.<br>Assinale a alternativa que indica todas as afirmativas corretas:",
                    respostas: [
                        {
                            desc: "Pendrive.",
                            respostacerta: 0
                        },
                        {
                            desc: "CMOS(Complementary metal-oxide-semiconductor).",
                            respostacerta: 0
                        },
                        {
                            desc: "SSD (Solid State Drive).",
                            respostacerta: 1
                        },
                        {
                            desc: "BD-R (Blu-ray Recordable Disc).",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Infra",
                    pergunta: "Certificado digital é um documento eletrônico que contém dados sobre a pessoa física ou jurídica que o utiliza, servindo como uma identidade virtual que confere validade jurídica e aspectos de segurança digital em transações digitais. Esse documento utiliza um sistema conhecido como:",
                    respostas: [
                        {
                            desc: "Criptografia.",
                            respostacerta: 1
                        },
                        {
                            desc: "Autenticidade.",
                            respostacerta: 0
                        },
                        {
                            desc: "Integridade.",
                            respostacerta: 0
                        },
                        {
                            desc: "Confidencialidade.",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Infra",
                    pergunta: "Máquinas virtuais e contêineres são ambientes de computação que combinam diversos componentes de tecnologia da informação isolando-os do restante do sistema computacional. Em alguns serviços, as máquinas virtuais são mais apropriadas do que os contêineres, a exemplo:",
                    respostas: [
                        {
                            desc: "Do empacotamento de microsserviços.",
                            respostacerta: 1
                        },
                        {
                            desc: "Da transferências de projetos entre diversas infraestruturas de TI com o mesmo sistema operacional.",
                            respostacerta: 0
                        },
                        {
                            desc: "Da criação de aplicações nativas em nuvem.",
                            respostacerta: 0
                        },
                        {
                            desc: "Da confidencialidade.",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Infra",
                    pergunta: "Os aplicativos de mensagens não usam criptografia de ponta a ponta.",
                    respostas: [
                        {
                            desc: "Certo",
                            respostacerta: 0
                        },
                        {
                            desc: "Errado",
                            respostacerta: 1
                        }
                    ]
                },
                {
                    area: "Infra",
                    pergunta: "Entre alternativas a seguir, qual é a mídia portátil mais utilizada pelos usuários de computadores atualmente e que é utilizada por meio de uma porta USB?",
                    respostas: [
                        {
                            desc: "Android",
                            respostacerta: 0
                        },
                        {
                            desc: "Gabinete",
                            respostacerta: 0
                        },
                        {
                            desc: "Disco Rígido (HD)",
                            respostacerta: 0
                        },
                        {
                            desc: "Pen Drive",
                            respostacerta: 1
                        }
                    ]
                }
            ]
        }, {
            grupo: "comportamento",
            pgts: [
                {
                    area: "Comportamento",
                    pergunta: "O que eu faço no fim de semana?",
                    respostas: [
                        {
                            desc: "Fico de boas",
                            pontos: [{
                                tipo: "Rock",
                                pontos: 2
                            }, {
                                tipo: "Lofi",
                                pontos: 3
                            }, {
                                tipo: "Sertanejo",
                                pontos: 1
                            }, {
                                tipo: "Eletronica",
                                pontos: 0
                            }, {
                                tipo: "Pop",
                                pontos: 1
                            }, {
                                tipo: "Funk",
                                pontos: 0
                            }, {
                                tipo: "Pagode",
                                pontos: 2
                            }, {
                                tipo: "Rap",
                                pontos: 0
                            }
                            ]
                        },
                        {
                            desc: "Saio com meu amigos",
                            pontos: [{
                                tipo: "Rock",
                                pontos: 0
                            }, {
                                tipo: "Lofi",
                                pontos: 0
                            }, {
                                tipo: "Sertanejo",
                                pontos: 4
                            }, {
                                tipo: "Eletronica",
                                pontos: 2
                            }, {
                                tipo: "Pop",
                                pontos: 2
                            }, {
                                tipo: "Funk",
                                pontos: 5
                            }, {
                                tipo: "Pagode",
                                pontos: 3
                            }, {
                                tipo: "Rap",
                                pontos: 3
                            }
                            ]
                        },
                        {
                            desc: "Jogo até tarde",
                            pontos: [{
                                tipo: "Rock",
                                pontos: 1
                            }, {
                                tipo: "Lofi",
                                pontos: 2
                            }, {
                                tipo: "Sertanejo",
                                pontos: 0
                            }, {
                                tipo: "Eletronica",
                                pontos: 3
                            }, {
                                tipo: "Pop",
                                pontos: 0
                            }, {
                                tipo: "Funk",
                                pontos: 0
                            }, {
                                tipo: "Pagode",
                                pontos: 0
                            }, {
                                tipo: "Rap",
                                pontos: 0
                            }
                            ]
                        },
                        {
                            desc: "Meto aquele treino",
                            pontos: [{
                                tipo: "Rock",
                                pontos: 0
                            }, {
                                tipo: "Lofi",
                                pontos: 0
                            }, {
                                tipo: "Sertanejo",
                                pontos: 0
                            }, {
                                tipo: "Eletronica",
                                pontos: 1
                            }, {
                                tipo: "Pop",
                                pontos: 2
                            }, {
                                tipo: "Funk",
                                pontos: 0
                            }, {
                                tipo: "Pagode",
                                pontos: 1
                            }, {
                                tipo: "Rap",
                                pontos: 2
                            }
                            ]
                        }
                    ]
                },
                {
                    area: "Comportamento",
                    pergunta: "O que eu faria se alguém furasse a fila na minha frente?",
                    respostas: [
                        {
                            desc: "Sairia no soco",
                            pontos: [{
                                tipo: "Rock",
                                pontos: 5
                            }, {
                                tipo: "Lofi",
                                pontos: 0
                            }, {
                                tipo: "Sertanejo",
                                pontos: 1
                            }, {
                                tipo: "Eletronica",
                                pontos: 0
                            }, {
                                tipo: "Pop",
                                pontos: 0
                            }, {
                                tipo: "Funk",
                                pontos: 2
                            }, {
                                tipo: "Pagode",
                                pontos: 0
                            }, {
                                tipo: "Rap",
                                pontos: 4
                            }
                            ]
                        },
                        {
                            desc: "Xingo muito (mentalmente)",
                            pontos: [{
                                tipo: "Rock",
                                pontos: 0
                            }, {
                                tipo: "Lofi",
                                pontos: 2
                            }, {
                                tipo: "Sertanejo",
                                pontos: 1
                            }, {
                                tipo: "Eletronica",
                                pontos: 3
                            }, {
                                tipo: "Pop",
                                pontos: 4
                            }, {
                                tipo: "Funk",
                                pontos: 1
                            }, {
                                tipo: "Pagode",
                                pontos: 2
                            }, {
                                tipo: "Rap",
                                pontos: 0
                            }
                            ]
                        },
                        {
                            desc: "Xingo na cara da pessoa",
                            pontos: [{
                                tipo: "Rock",
                                pontos: 1
                            }, {
                                tipo: "Lofi",
                                pontos: 1
                            }, {
                                tipo: "Sertanejo",
                                pontos: 4
                            }, {
                                tipo: "Eletronica",
                                pontos: 1
                            }, {
                                tipo: "Pop",
                                pontos: 1
                            }, {
                                tipo: "Funk",
                                pontos: 5
                            }, {
                                tipo: "Pagode",
                                pontos: 0
                            }, {
                                tipo: "Rap",
                                pontos: 3
                            }
                            ]
                        },
                        {
                            desc: "Nem ligo",
                            pontos: [{
                                tipo: "Rock",
                                pontos: 0
                            }, {
                                tipo: "Lofi",
                                pontos: 2
                            }, {
                                tipo: "Sertanejo",
                                pontos: 2
                            }, {
                                tipo: "Eletronica",
                                pontos: 2
                            }, {
                                tipo: "Pop",
                                pontos: 0
                            }, {
                                tipo: "Funk",
                                pontos: 0
                            }, {
                                tipo: "Pagode",
                                pontos: 3
                            }, {
                                tipo: "Rap",
                                pontos: 0
                            }
                            ]
                        }
                    ]
                },
                {
                    area: "Comportamento",
                    pergunta: "O que faço quando um(a) amigo(a) meu termina o relacionamento?",
                    respostas: [
                        {
                            desc: "Ligo pra consolar",
                            pontos: [{
                                tipo: "Rock",
                                pontos: 0
                            }, {
                                tipo: "Lofi",
                                pontos: 2
                            }, {
                                tipo: "Sertanejo",
                                pontos: 0
                            }, {
                                tipo: "Eletronica",
                                pontos: 2
                            }, {
                                tipo: "Pop",
                                pontos: 3
                            }, {
                                tipo: "Funk",
                                pontos: 0
                            }, {
                                tipo: "Pagode",
                                pontos: 1
                            }, {
                                tipo: "Rap",
                                pontos: 0
                            }
                            ]
                        },
                        {
                            desc: "Pego o(a) ex dele(a)",
                            pontos: [{
                                tipo: "Rock",
                                pontos: 0
                            }, {
                                tipo: "Lofi",
                                pontos: 0
                            }, {
                                tipo: "Sertanejo",
                                pontos: 5
                            }, {
                                tipo: "Eletronica",
                                pontos: 0
                            }, {
                                tipo: "Pop",
                                pontos: 0
                            }, {
                                tipo: "Funk",
                                pontos: 5
                            }, {
                                tipo: "Pagode",
                                pontos: 0
                            }, {
                                tipo: "Rap",
                                pontos: 4
                            }
                            ]
                        },
                        {
                            desc: "Não sei o que falar (eh fod@)",
                            pontos: [{
                                tipo: "Rock",
                                pontos: 2
                            }, {
                                tipo: "Lofi",
                                pontos: 3
                            }, {
                                tipo: "Sertanejo",
                                pontos: 0
                            }, {
                                tipo: "Eletronica",
                                pontos: 2
                            }, {
                                tipo: "Pop",
                                pontos: 0
                            }, {
                                tipo: "Funk",
                                pontos: 0
                            }, {
                                tipo: "Pagode",
                                pontos: 0
                            }, {
                                tipo: "Rap",
                                pontos: 0
                            }
                            ]
                        },
                        {
                            desc: "Convido pra afogar as mágoas no barzinho",
                            pontos: [{
                                tipo: "Rock",
                                pontos: 0
                            }, {
                                tipo: "Lofi",
                                pontos: 0
                            }, {
                                tipo: "Sertanejo",
                                pontos: 5
                            }, {
                                tipo: "Eletronica",
                                pontos: 0
                            }, {
                                tipo: "Pop",
                                pontos: 2
                            }, {
                                tipo: "Funk",
                                pontos: 2
                            }, {
                                tipo: "Pagode",
                                pontos: 4
                            }, {
                                tipo: "Rap",
                                pontos: 1
                            }
                            ]
                        }
                    ]
                },
                {
                    area: "Comportamento",
                    pergunta: "Quem sou eu trabalhando em grupo?",
                    respostas: [
                        {
                            desc: "O que faz tudo sozinho",
                            pontos: [{
                                tipo: "Rock",
                                pontos: 0
                            }, {
                                tipo: "Lofi",
                                pontos: 1
                            }, {
                                tipo: "Sertanejo",
                                pontos: 0
                            }, {
                                tipo: "Eletronica",
                                pontos: 3
                            }, {
                                tipo: "Pop",
                                pontos: 2
                            }, {
                                tipo: "Funk",
                                pontos: 0
                            }, {
                                tipo: "Pagode",
                                pontos: 0
                            }, {
                                tipo: "Rap",
                                pontos: 0
                            }
                            ]
                        },
                        {
                            desc: "Pego carona com o que faz tudo sozinho",
                            pontos: [{
                                tipo: "Rock",
                                pontos: 0
                            }, {
                                tipo: "Lofi",
                                pontos: 0
                            }, {
                                tipo: "Sertanejo",
                                pontos: 5
                            }, {
                                tipo: "Eletronica",
                                pontos: 1
                            }, {
                                tipo: "Pop",
                                pontos: 0
                            }, {
                                tipo: "Funk",
                                pontos: 3
                            }, {
                                tipo: "Pagode",
                                pontos: 3
                            }, {
                                tipo: "Rap",
                                pontos: 2
                            }
                            ]
                        },
                        {
                            desc: "Fico stressado",
                            pontos: [{
                                tipo: "Rock",
                                pontos: 3
                            }, {
                                tipo: "Lofi",
                                pontos: 2
                            }, {
                                tipo: "Sertanejo",
                                pontos: 0
                            }, {
                                tipo: "Eletronica",
                                pontos: 2
                            }, {
                                tipo: "Pop",
                                pontos: 0
                            }, {
                                tipo: "Funk",
                                pontos: 4
                            }, {
                                tipo: "Pagode",
                                pontos: 0
                            }, {
                                tipo: "Rap",
                                pontos: 1
                            }
                            ]
                        },
                        {
                            desc: "Tento ser o líder",
                            pontos: [{
                                tipo: "Rock",
                                pontos: 0
                            }, {
                                tipo: "Lofi",
                                pontos: 2
                            }, {
                                tipo: "Sertanejo",
                                pontos: 1
                            }, {
                                tipo: "Eletronica",
                                pontos: 3
                            }, {
                                tipo: "Pop",
                                pontos: 3
                            }, {
                                tipo: "Funk",
                                pontos: 2
                            }, {
                                tipo: "Pagode",
                                pontos: 2
                            }, {
                                tipo: "Rap",
                                pontos: 0
                            }
                            ]
                        }
                    ]
                }
            ]
        }, {
            grupo: "gerais",
            pgts: [
                {
                    area: "Conhecimentos gerais",
                    pergunta: "A diversidade regional é característica predominante na cultura brasileira, mas a falta de conhecimento e aceitação das diferenças por uma parcela da população leva tal multiplicidade a diversos tipos de preconceito.",
                    respostas: [
                        {
                            desc: "Certo",
                            respostacerta: 1
                        },
                        {
                            desc: "Errado",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Conhecimentos gerais",
                    pergunta: "A ventilação pulmonar nos mamíferos ocorre em função dos movimentos respiratórios de inspiração e expiração, que, respectivamente, elevam e reduzem a pressão nos alvéolos pulmonares. Tal variação de pressão permite:",
                    respostas: [
                        {
                            desc: "O transporte ativo do gás carbônico do plasma sanguíneo para os alvéolos pulmonares e, posteriormente, sua eliminação.",
                            respostacerta: 0
                        },
                        {
                            desc: "A difusão do gás oxigênio dos alvéolos para o interior das hemácias, onde localizam-se as moléculas de hemoglobina.",
                            respostacerta: 1
                        },
                        {
                            desc: "O transporte ativo do gás oxigênio dos alvéolos para o plasma sanguíneo, onde localizam-se as hemácias.",
                            respostacerta: 0
                        },
                        {
                            desc: "A difusão do gás carbônico do plasma sanguíneo para os alvéolos, para que sejam formados os íons bicarbonato.",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Conhecimentos gerais",
                    pergunta: "A intensidade de um som ou dinâmica é, na física, geralmente associada à amplitude da onda sonora.",
                    respostas: [
                        {
                            desc: "Certo",
                            respostacerta: 1
                        },
                        {
                            desc: "Errado",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Conhecimentos gerais",
                    pergunta: "Atente para a seguinte lista de números naturais que foi construída seguindo uma lógica estrutural própria:4, 9, 25, 49, 121, .......... Considerando essa lógica, é correto dizer que a soma do oitavo com o nono número da lista é igual:",
                    respostas: [
                        {
                            desc: "790",
                            respostacerta: 0
                        },
                        {
                            desc: "970",
                            respostacerta: 0
                        },
                        {
                            desc: "890",
                            respostacerta: 1
                        },
                        {
                            desc: "980",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Conhecimentos gerais",
                    pergunta: "Possibilidade e probabilidade são conceitos equivalentes.",
                    respostas: [
                        {
                            desc: "Certo",
                            respostacerta: 0
                        },
                        {
                            desc: "Errado",
                            respostacerta: 1
                        }
                    ]
                },
                {
                    area: "Conhecimentos gerais",
                    pergunta: "De quem é a famosa frase “Penso, logo existo”?",
                    respostas: [
                        {
                            desc: "Platão",
                            respostacerta: 0
                        },
                        {
                            desc: "Galileu Galilei",
                            respostacerta: 1
                        },
                        {
                            desc: "Descartes",
                            respostacerta: 0
                        },
                        {
                            desc: "Sócrates",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Conhecimentos gerais",
                    pergunta: "De onde é a invenção do chuveiro elétrico?",
                    respostas: [
                        {
                            desc: "França",
                            respostacerta: 0
                        },
                        {
                            desc: "Inglaterra",
                            respostacerta: 0
                        },
                        {
                            desc: "Brasil",
                            respostacerta: 1
                        },
                        {
                            desc: "Austrália",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Conhecimentos gerais",
                    pergunta: "Em que período da pré-história o fogo foi descoberto?",
                    respostas: [
                        {
                            desc: "Neolítico",
                            respostacerta: 0
                        },
                        {
                            desc: "Paleolítico",
                            respostacerta: 1
                        },
                        {
                            desc: "Idade dos Metais",
                            respostacerta: 0
                        },
                        {
                            desc: "Período da Pedra Polida",
                            respostacerta: 0
                        }
                    ]
                },
                {
                    area: "Conhecimentos gerais",
                    pergunta: "Qual a velocidade da luz?",
                    respostas: [
                        {
                            desc: "300 000 000 metros por segundo (m/s)",
                            respostacerta: 0
                        },
                        {
                            desc: "150 000 000 metros por segundo (m/s)",
                            respostacerta: 0
                        },
                        {
                            desc: "199 792 458 metros por segundo (m/s)",
                            respostacerta: 0
                        },
                        {
                            desc: "299 792 458 metros por segundo (m/s)",
                            respostacerta: 1
                        }
                    ]
                }
            ]
        }, {
            grupo: "perfil",
            pgts: [
                {
                    area: "Perfil",
                    pergunta: "Eu gosto de...",
                    respostas: [
                        {
                            desc: "Ser piloto",
                            tipo: "A"
                        },
                        {
                            desc: "Conversar com os passageiros",
                            tipo: "C"
                        },
                        {
                            desc: "Planejar a viagem",
                            tipo: "O"
                        },
                        {
                            desc: "Explorar novas rotas",
                            tipo: "I"
                        }
                    ]
                },
                {
                    area: "Perfil",
                    pergunta: "Para conseguir obter bons resultados é preciso...",
                    respostas: [
                        {
                            desc: "Ter incertezas",
                            tipo: "I"
                        },
                        {
                            desc: "Diversão e celebração",
                            tipo: "C"
                        },
                        {
                            desc: "Controlar o essencial",
                            tipo: "O"
                        },
                        {
                            desc: "Planejar e obter recursos",
                            tipo: "A"
                        }
                    ]
                },
                {
                    area: "Perfil",
                    pergunta: "Minha preocupação é...",
                    respostas: [
                        {
                            desc: "Gerar a ideia global",
                            tipo: "I"
                        },
                        {
                            desc: "Fazer com que as pessoas gostem de mim",
                            tipo: "C"
                        },
                        {
                            desc: "Fazer com que funcione",
                            tipo: "O"
                        },
                        {
                            desc: "Fazer com que aconteça",
                            tipo: "A"
                        }
                    ]
                },
                {
                    area: "Perfil",
                    pergunta: "Eu gosto de...",
                    respostas: [
                        {
                            desc: "Fazer progresso",
                            tipo: "A"
                        },
                        {
                            desc: "Construir memórias",
                            tipo: "C"
                        },
                        {
                            desc: "Fazer sentido",
                            tipo: "O"
                        },
                        {
                            desc: "Tornar as pessoas confortáveis",
                            tipo: "I"
                        }
                    ]
                },
                {
                    area: "Perfil",
                    pergunta: "Um ótimo dia para mim é quando...",
                    respostas: [
                        {
                            desc: "Consigo fazer muitas coisas",
                            tipo: "A"
                        },
                        {
                            desc: "Me divirto com os meus amigos",
                            tipo: "C"
                        },
                        {
                            desc: "Tudo segue conforme o planejado",
                            tipo: "O"
                        },
                        {
                            desc: "Desfruto de coisas novas e estimulantes",
                            tipo: "I"
                        }
                    ]
                },
                {
                    area: "Perfil",
                    pergunta: "Eu gosto de mudanças se...",
                    respostas: [
                        {
                            desc: "Me der uma vantagem competitiva",
                            tipo: "A"
                        },
                        {
                            desc: "For me divertir e puder ser compartilhado",
                            tipo: "C"
                        },
                        {
                            desc: "Me dê mais liberdade e variedade",
                            tipo: "I"
                        },
                        {
                            desc: "Melhorar ou me der mais controle",
                            tipo: "O"
                        }
                    ]
                },
                {
                    area: "Perfil",
                    pergunta: "Meu lema é...",
                    respostas: [
                        {
                            desc: "Fazer o que precisa ser feito",
                            tipo: "I"
                        },
                        {
                            desc: "Fazer bem feito",
                            tipo: "O"
                        },
                        {
                            desc: "Fazer junto com o grupo",
                            tipo: "C"
                        },
                        {
                            desc: "Simplesmente fazer",
                            tipo: "A"
                        }
                    ]
                },
                {
                    area: "Perfil",
                    pergunta: "Se eu fosse bilionário(a)...",
                    respostas: [
                        {
                            desc: "Faria doações para muitas entidades",
                            tipo: "C"
                        },
                        {
                            desc: "Criaria uma poupança avantajada",
                            tipo: "O"
                        },
                        {
                            desc: "Faria o que desse na cabeça",
                            tipo: "I"
                        },
                        {
                            desc: "Me exibiria bastante com algumas pessoas",
                            tipo: "A"
                        }
                    ]
                },
                {
                    area: "Perfil",
                    pergunta: "Eu penso que...",
                    respostas: [
                        {
                            desc: "Unidos (as) venceremos, divididos(as) perdemos",
                            tipo: "C"
                        },
                        {
                            desc: "O ataque é a melhor defesa",
                            tipo: "A"
                        },
                        {
                            desc: "É bom ser manso(a), mas andar com um porrete",
                            tipo: "I"
                        },
                        {
                            desc: "Uma pessoa prevenida vale por duas",
                            tipo: "O"
                        }
                    ]
                }
            ]
        }
    ],


    preparaResultado: function () {
        let header = `
        <svg class="logo-topo" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 1211.4 374.8" style="enable-background:new 0 0 1211.4 374.8;" xml:space="preserve">
<style type="text/css">
    .white{fill:#FFFFFF;}
</style>
<g>
    <path class="white" d="M781.8,133.2c-1.4,0-2.5,0-3.9,0c-46.2,1.8-67.5,40.1-67.5,74.9c0,42.3,24.5,69.2,67.5,72.1
        c2.5,0,5.3,0.4,7.8,0.4c19.2,0,36.2-3.2,51.8-9.9l-7.5-28.8c-11.7,3.9-23.1,6-38,6c-5,0-9.6-0.7-14.2-1.8
        c-13.8-3.2-24.5-11.4-25.6-25.6h25.6h65.3c0.4-3.2,1.4-9.6,1.4-17C844.7,168.4,827.3,133.2,781.8,133.2z M777.9,190.7H752
        c1.1-11.4,8.5-27.7,25.9-28.4c0.7,0,1.1,0,1.4,0c19.9,0,24.5,18.1,24.5,28.4H777.9z"/>
    <path class="white" d="M540,212.4c0,20.2-6.4,32.3-21.7,32.7c-14.9-0.4-21.3-12.4-21.3-32.7v-76h-44v82.7c0,81.7,130.7,81.7,130.7,0
        v-82.7H540V212.4z"/>
    <path class="white" d="M657.9,163.7c11.7,0,24.5,4.6,30.9,7.8l13.8-28.4c-8.9-4.3-28.4-9.9-46.2-9.9c-35.2,0.7-57.5,19.9-57.5,46.5
        c-0.4,16.3,11,32.7,40.5,42.3c16,5.3,20.2,8.9,20.2,16.3c0,7.1-5.3,11.4-18.5,11.4s-30.2-5.3-38-10.3l-13.8,29.5
        c11.4,7.5,33.4,11.7,51.8,11.7c40.1,0,60.7-19.2,60.7-45.8c-0.4-20.2-11.4-34.1-38-43.3c-17.4-6-22.7-9.2-22.7-16.3
        C641.2,168.4,647.3,163.7,657.9,163.7z"/>
    <path class="white" d="M977.5,194.3c0-33.4-14.9-61.1-61.8-61.1c-0.4,0-0.7,0-1.1,0c-25.2,0.4-45.1,6.7-57.5,13.8l11.7,27
        c9.2-5.7,24.5-10.3,39.1-10.3c2.5,0,4.6,0,6.7,0.4c15.6,1.8,18.8,11,18.8,17.8v1.8c-6.4,0-12.8,0.4-18.8,0.7
        c-39.1,4.3-63.9,21.3-63.9,52.9c0,22.7,17,43.3,45.8,43.3c6.4,0,12.4-0.7,18.1-2.5c8.9-2.8,16.3-7.8,22-14.9h1.1l2.5,14.2h39.4
        c-1.8-7.8-2.1-20.6-2.1-34.1V194.3z M934.9,226.2c0,2.5-0.4,5-0.7,7.5c-2.5,7.8-10.3,14.6-19.5,16c-1.1,0-2.1,0-3.2,0
        c-9.9,0-17.4-5.3-17.4-16.7c0-11.4,8.2-17.4,20.6-20.2c6-1.4,12.8-1.8,20.2-1.8V226.2z"/>
    <path class="white" d="M1038.6,220.2c0-72.4,0-20.2,0-83.8h-43c0,46.2,0,28.1,0,90.5c0,19.9,4.3,33.4,12.1,41.5
        c7.5,7.5,19.2,12.1,33.4,12.1c12.1,0,27-2.1,32.7-4.3l-5.7-32.7C1048.5,247.9,1038.6,242.9,1038.6,220.2z"/>
    <path class="white" d="M1124.1,220.2c0-72.4,0-20.2,0-83.8h-43c0,46.2,0,28.1,0,90.5c0,19.9,3.9,33.4,12.1,41.5
        c7.1,7.5,18.8,12.1,33,12.1c12.1,0,27.3-2.1,32.7-4.3l-5.7-32.7C1133.7,247.9,1124.1,242.9,1124.1,220.2z"/>
    <path class="white" d="M140.2,111.9c27.3,0,49.4-22.4,49.4-49.7s-22-49.7-49.4-49.7c-27.7,0-49.7,22.4-49.7,49.7
        S112.5,111.9,140.2,111.9z"/>
    <path class="white" d="M229.7,222.7c-21.3,0-45.5-41.2-61.1-57.9c-17-17.8-39.4-27.7-64.3-27.7c-78.1,0-91.6,83.1-91.6,143.8h57.2
        c0.7-26.3-3.6-85.9,35.5-85.9c19.5,0,36.6,29.1,48.3,43c22.4,25.6,42.3,42.6,77.1,42.6c77.4,0,91.6-83.4,91.6-143.8h-57.2
        C264.5,163.4,267.7,222.7,229.7,222.7z"/>
    <path class="white" d="M1191.2,143.9c-4.3-4.6-10.3-7.5-17.4-7.5c-6.7,0-12.8,2.8-17.4,7.5c-4.3,4.3-7.1,10.3-7.1,17.4
        c0,6.7,2.8,12.8,7.1,17.4c4.6,4.3,10.7,7.1,17.4,7.1c7.1,0,13.1-2.8,17.4-7.1c4.6-4.6,7.5-10.7,7.5-17.4
        C1198.7,154.2,1195.9,148.1,1191.2,143.9z M1188.4,175.5c-3.9,3.6-8.9,5.7-14.6,5.7c-5.3,0-10.3-2.1-14.2-5.7
        c-3.6-3.9-5.7-8.9-5.7-14.2c0-5.7,2.1-10.7,5.7-14.6c3.9-3.6,8.9-5.7,14.2-5.7c5.7,0,10.7,2.1,14.6,5.7c3.6,3.9,5.7,8.9,5.7,14.6
        C1194.1,166.6,1192,171.6,1188.4,175.5z"/>
    <path class="white" d="M1181.7,164.1c-0.7-0.7-1.8-1.4-2.8-2.1c2.1-0.4,3.9-1.1,5.3-2.5c1.1-1.4,1.4-2.8,1.4-5c0-1.4-0.4-2.8-1.1-4.3
        c-0.7-1.1-1.8-1.8-2.8-2.5c-1.4-0.4-3.6-0.7-6.4-0.7h-0.4h-10.7v26.3h5.3v-11h1.1c1.1,0,2.1,0.4,2.5,0.4c0.7,0.4,1.4,0.7,1.8,1.1
        c0.4,0.7,1.4,2.1,2.8,3.9l3.9,5.7h6l-3.2-5C1183.4,166.2,1182.4,164.8,1181.7,164.1z M1174.9,158.4c-0.4,0-1.1,0-1.4,0h-3.9v-6.7
        h3.9c0.7,0,1.1,0,1.4,0c1.4,0,2.1,0,2.5,0c1.1,0.4,1.8,0.7,2.1,1.1c0.4,0.7,0.7,1.4,0.7,2.1c0,0.7,0,1.4-0.4,2.1
        c-0.4,0.4-1.1,0.7-1.8,1.1C1177.8,158.1,1176.7,158.4,1174.9,158.4z"/>
</g>
</svg>`;

        let html = `
            <div class="frase-efeito minutinho">
                <div class="txt3">
                    Um
                    <br>
                    minutinho...
                </div>
                <div class="txtapoio">
                    <div>
                    Estamos computando as suas respostas e já já te mostraremos o resultado!
                    </div>
                </div>
            </div>


            <svg version="1.1" id="computador" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 150 150" style="enable-background:new 0 0 150 150;" xml:space="preserve">
                <style type="text/css">
                    .alguma1{fill:#2A2929;}
                    .alguma2{fill:#16D1A7;}
                    .alguma3{fill:#2B2B2A;}
                    .alguma4{fill:#2F2D2B;}
                    .alguma5{fill:#FFF6D6;}
                </style>
                <g id="compuiter" transform="translate(-4583 -2657)">
                    <path id="Caminho_2604" class="alguma1" d="M4724.9,2753.9c-0.9-0.2-1.9-0.3-2.8-0.2c-12.8,0-25.7,0-38.5,0c-1.2,0-1.7-0.2-1.6-1.5
                        c0.1-1.5,0.1-3,0-4.5c-0.1-1,0.3-1.3,1.3-1.3c6.7,0,13.4,0,20.2,0c4.6,0.2,8.7-3,9.7-7.5c0.2-1.1,0.3-2.1,0.2-3.2
                        c0-21.4-0.1-42.9,0.1-64.3c0-5.5-1.7-9.9-8-11.7H4610c-0.2,0.5-0.8,0.4-1.2,0.6c-3.6,1.3-6,4.7-6.2,8.5c0,0.3,0,0.6,0,0.8
                        c0,22.3,0,44.5,0,66.8c-0.2,4.2,2.5,8.1,6.5,9.4c1.3,0.4,2.6,0.6,3.9,0.5c6.5,0,13.1,0,19.6,0c1,0,1.4,0.2,1.4,1.3
                        c-0.1,1.6-0.1,3.2,0,4.8c0,0.9-0.2,1.2-1.2,1.2c-5.3,0-10.7,0-16,0h-0.2c-4.2,0-20.5,0-23.3,0c-3.9-0.2-7.3,2.8-7.5,6.8
                        c0,0.3,0,0.5,0,0.8c0,8.6,0,17.2,0,25.8c-0.2,3.7,2.4,6.9,6.1,7.5c1,0.2,1.2,0.5,1.1,1.4c-0.2,3.3,1,6,4.1,7.6c1,0.5,2,0.8,3.1,0.7
                        c38.5,0,77.1,0,115.7,0c4,0,7-2.9,7.2-7.1c0-0.6,0-1.2,0-1.8c0-0.4,0.1-0.6,0.5-0.7c3.6-0.4,5.7-2.6,6.7-5.9v-29.3
                        C4729.3,2756.8,4727.8,2754.7,4724.9,2753.9z M4613,2741.6c-3.7,0-5.5-1.8-5.5-5.5c0-22,0-44,0-66c0-3.6,1.9-5.5,5.4-5.5
                        c30,0,60.1,0,90.1,0c3.6,0,5.5,1.9,5.5,5.5c0,22.1,0,44.1,0,66.2c0,3.5-1.9,5.4-5.4,5.4c-15,0-30.1,0-45.1,0L4613,2741.6z
                        M4638.8,2747.4c0-0.8,0.3-1,1.1-1c12.1,0,24.2,0,36.4,0c0.8,0,1.1,0.2,1.1,1c-0.1,1.6-0.1,3.3,0,4.9c0.1,1.1-0.3,1.3-1.3,1.3
                        c-6,0-12,0-18,0c-5.9,0-11.8,0-17.8,0c-1,0-1.4-0.3-1.3-1.3C4638.8,2750.7,4638.8,2749.1,4638.8,2747.4L4638.8,2747.4z
                        M4716.8,2799.2c-0.5,0.2-1.1,0.3-1.7,0.3c-38.1,0-76.2,0-114.3,0c-2.5,0-3.8-2-3-4.4c0.1-0.3,0.3-0.5,0.6-0.4c0.4,0,0.8,0,1.3,0
                        h58.4c19.3,0,38.6,0,58,0c0.7,0,1.7-0.6,2,0.6C4718.6,2797,4718,2798.6,4716.8,2799.2z M4725.4,2776.7v9.5c0,2.9-0.7,3.6-3.7,3.6
                        h-127.5c-3,0-3.6-0.7-3.6-3.7V2762c0-2.8,0.7-3.5,3.5-3.5c2.4,0,16.6,0,21.6,0H4721c0.5,0,1,0,1.6,0c2,0,2.8,0.9,2.8,2.9
                        C4725.4,2766.5,4725.4,2771.6,4725.4,2776.7z"/>
                    <path id="Caminho_2605" class="alguma2" d="M4615.7,2758.5H4721c0.5,0,1,0,1.6,0c1.9,0,2.8,0.9,2.8,2.9c0,5.1,0,10.3,0,15.4
                        c0,3.2,0,6.3,0,9.5c0,2.9-0.7,3.6-3.7,3.6h-127.5c-3,0-3.6-0.7-3.6-3.7c0-8,0-16.1,0-24.1c0-2.8,0.7-3.5,3.5-3.5c2.7,0,5.4,0,8,0
                        C4604,2758.5,4613.3,2758.5,4615.7,2758.5z M4708.7,2763.3c-3.1,0-6.2,0-9.3,0c-1.8,0-2.8,0.9-2.8,2.4c0,1.4,1.1,2.3,2.8,2.3
                        c6.2,0,12.3,0,18.5,0c1.7,0,2.9-1,2.8-2.5c0-1.4-1.1-2.3-2.8-2.3C4714.8,2763.3,4711.7,2763.3,4708.7,2763.3L4708.7,2763.3z
                        M4619.4,2780.2c0-0.9,0-1.9,0-2.8c-0.1-1.2-1.1-2.1-2.3-2c0,0,0,0,0,0c-1.2-0.1-2.2,0.7-2.4,1.8c0,0,0,0,0,0.1
                        c-0.3,1.9-0.3,3.8,0,5.7c0.1,1.2,1.2,2,2.4,1.9c0,0,0,0,0,0c1.2,0,2.2-0.9,2.3-2.1C4619.5,2782,4619.5,2781.1,4619.4,2780.2z
                        M4629.1,2780.2c0-0.8,0.1-1.7,0-2.5c0-1.3-1.1-2.3-2.4-2.3c0,0-0.1,0-0.1,0c-1.3,0-2.3,1-2.3,2.3c0,0,0,0.1,0,0.1
                        c-0.1,1.6-0.1,3.3,0,4.9c0,1.3,1,2.3,2.3,2.4c1.3,0,2.4-1.1,2.5-2.4C4629.2,2781.8,4629.1,2781,4629.1,2780.2L4629.1,2780.2z
                        M4609.8,2780.2c0-0.8,0-1.7,0-2.5c0-1.2-1-2.2-2.2-2.3c-1.2-0.2-2.3,0.7-2.5,1.9c0,0,0,0,0,0.1c-0.1,1.9-0.1,3.7,0,5.6
                        c0.2,1.2,1.2,2.1,2.5,2c1.2-0.1,2.2-1.1,2.2-2.3C4609.9,2781.9,4609.8,2781,4609.8,2780.2L4609.8,2780.2z M4638.8,2780.2
                        L4638.8,2780.2c0-0.8,0-1.7,0-2.5c0-1.3-1.1-2.4-2.4-2.3c0,0-0.1,0-0.1,0c-1.3,0-2.3,1-2.3,2.3c0,0.1,0,0.1,0,0.2
                        c0,1.5,0,3.1,0,4.6c-0.1,1.3,0.9,2.5,2.3,2.5c0,0,0,0,0,0c1.4,0,2.5-1.1,2.5-2.5c0,0,0,0,0,0
                        C4638.8,2781.7,4638.8,2781,4638.8,2780.2L4638.8,2780.2z M4600.2,2780.3c0-0.9,0-1.8,0-2.7c0-1.2-1-2.2-2.3-2.2
                        c-1.2-0.1-2.3,0.8-2.5,2c0,0,0,0,0,0c-0.1,1.8-0.1,3.6,0,5.5c0.1,1.2,1.2,2.2,2.4,2.1c1.3,0,2.3-1.1,2.3-2.3
                        C4600.2,2781.9,4600.2,2781.1,4600.2,2780.3L4600.2,2780.3z M4600.3,2763.3c-0.8,0-1.7,0-2.5,0c-1.3,0-2.4,1.1-2.4,2.4
                        c0,1.3,1,2.3,2.3,2.4c1.7,0.1,3.4,0.1,5.1,0c1.3-0.1,2.3-1.2,2.2-2.5c-0.1-1.2-1.1-2.2-2.3-2.2
                        C4601.9,2763.3,4601.1,2763.3,4600.3,2763.3L4600.3,2763.3z M4643.6,2780L4643.6,2780c0,0.8,0,1.7,0,2.5c0,1.3,1,2.4,2.3,2.4
                        c1.3,0,2.3-0.9,2.4-2.2c0.1-1.8,0.1-3.6,0-5.3c-0.2-1.3-1.4-2.2-2.7-2.1c-1.2,0.1-2,1.1-2.1,2.3
                        C4643.6,2778.4,4643.6,2779.2,4643.6,2780L4643.6,2780z M4653.2,2780.1c0,0.8,0,1.7,0,2.5c0,1.3,1.1,2.4,2.4,2.4
                        c1.2,0,2.3-1,2.3-2.2c0.1-1.7,0.1-3.5,0-5.2c-0.1-1.3-1.3-2.3-2.6-2.2c-1.2,0.1-2.1,1.1-2.2,2.3
                        C4653.2,2778.5,4653.2,2779.3,4653.2,2780.1L4653.2,2780.1z"/>
                    <path id="Caminho_2606" class="alguma2" d="M4658,2741.6c-15,0-30,0-45,0c-3.7,0-5.5-1.8-5.5-5.5c0-22,0-44,0-66c0-3.6,1.9-5.5,5.4-5.5
                        c30,0,60.1,0,90.1,0c3.6,0,5.5,1.9,5.5,5.5c0,22.1,0,44.1,0,66.2c0,3.5-1.9,5.4-5.4,5.4C4688.1,2741.6,4673.1,2741.6,4658,2741.6z
                        M4657.9,2736.8c11.3,0.1,22.6-0.4,33.8-1.4c5.2-0.5,9.5-4.2,10.6-9.3c0.6-3.7,1-7.5,1.1-11.2c0.6-11,0.4-22-0.8-32.9
                        c-0.5-5.9-5-10.5-10.9-11.1c-8.5-0.8-17.1-1.3-25.6-1.4c-13.9-0.3-27.7,0.2-41.6,1.4c-5.3,0.4-9.8,4.3-10.9,9.5
                        c-0.4,2.1-0.6,4.3-0.8,6.4c-1,12.7-0.9,25.5,0.5,38.2c0.7,5.6,5.1,9.9,10.7,10.5C4635.4,2736.4,4646.7,2736.9,4657.9,2736.8z"/>
                    <path id="Caminho_2607" class="alguma2" d="M4658.2,2794.6c19.3,0,38.6,0,58,0c0.7,0,1.7-0.6,2,0.6c0.5,1.8-0.1,3.4-1.3,4
                        c-0.5,0.2-1.1,0.3-1.7,0.3c-38.1,0-76.2,0-114.2,0c-2.5,0-3.8-2-3-4.4c0.1-0.3,0.3-0.5,0.6-0.4c0.4,0,0.8,0,1.3,0L4658.2,2794.6z"
                        />
                    <path id="Caminho_2608" class="alguma2" d="M4657.9,2753.7c-5.9,0-11.8,0-17.8,0c-1,0-1.4-0.3-1.3-1.3c0.1-1.6,0.1-3.3,0-4.9
                        c0-0.8,0.3-1,1.1-1c12.1,0,24.2,0,36.4,0c0.8,0,1.1,0.2,1.1,1c0,1.6-0.1,3.3,0,4.9c0.1,1.1-0.3,1.3-1.3,1.3
                        C4669.9,2753.7,4663.9,2753.7,4657.9,2753.7z"/>
                    <path id="Caminho_2609" class="alguma3" d="M4708.6,2763.3c3.1,0,6.1,0,9.2,0c1.7,0,2.8,0.9,2.8,2.3c0,1.4-1.1,2.5-2.8,2.5
                        c-6.2,0-12.3,0-18.5,0c-1.7,0-2.7-0.9-2.8-2.3c0-1.5,1-2.4,2.8-2.4C4702.4,2763.3,4705.5,2763.3,4708.6,2763.3z"/>
                    <path id="Caminho_2610" class="alguma4" d="M4619.4,2780.2c0,0.9,0,1.8,0,2.7c-0.1,1.2-1.1,2.1-2.3,2.1c-1.2,0.1-2.3-0.7-2.4-1.9
                        c0,0,0,0,0,0c-0.3-1.9-0.3-3.8,0-5.7c0.1-1.2,1.1-2,2.3-1.9c0,0,0,0,0.1,0c1.2-0.1,2.2,0.8,2.3,2c0,0,0,0,0,0
                        C4619.5,2778.4,4619.5,2779.3,4619.4,2780.2z"/>
                    <path id="Caminho_2611" class="alguma4" d="M4629.1,2780.2c0,0.8,0.1,1.6,0,2.4c0,1.3-1.1,2.4-2.5,2.4c-1.3,0-2.3-1.1-2.3-2.4
                        c-0.1-1.6-0.1-3.3,0-4.9c0-1.3,1-2.3,2.2-2.3c0,0,0.1,0,0.1,0c1.3-0.1,2.4,0.9,2.5,2.2c0,0,0,0.1,0,0.1
                        C4629.2,2778.5,4629.1,2779.4,4629.1,2780.2z"/>
                    <path id="Caminho_2612" class="alguma4" d="M4609.8,2780.2c0,0.8,0,1.7,0,2.5c0,1.2-1,2.2-2.2,2.3c-1.2,0.1-2.3-0.8-2.5-2
                        c-0.1-1.9-0.1-3.7,0-5.6c0.1-1.2,1.2-2.1,2.4-2c0,0,0,0,0.1,0c1.2,0,2.2,1,2.2,2.3C4609.9,2778.5,4609.8,2779.3,4609.8,2780.2z"/>
                    <path id="Caminho_2613" class="alguma4" d="M4638.8,2780.2c0,0.7,0,1.5,0,2.2c0,1.4-1.1,2.5-2.5,2.5c0,0,0,0,0,0
                        c-1.3-0.1-2.4-1.2-2.3-2.5c0,0,0,0,0,0c0-1.5,0-3.1,0-4.6c-0.1-1.3,0.9-2.4,2.1-2.4c0.1,0,0.1,0,0.2,0c1.3-0.1,2.4,1,2.5,2.3
                        c0,0,0,0.1,0,0.1C4638.8,2778.6,4638.8,2779.4,4638.8,2780.2L4638.8,2780.2z"/>
                    <path id="Caminho_2614" class="alguma4" d="M4600.2,2780.3c0,0.8,0,1.6,0,2.4c0,1.3-1.1,2.3-2.3,2.3c-1.2,0-2.3-0.9-2.4-2.1
                        c-0.1-1.8-0.1-3.6,0-5.5c0.1-1.2,1.2-2.1,2.4-2c0,0,0,0,0,0c1.2,0,2.2,1,2.3,2.2C4600.2,2778.5,4600.2,2779.4,4600.2,2780.3z"/>
                    <path id="Caminho_2615" class="alguma3" d="M4600.3,2763.3c0.8,0,1.6,0,2.4,0c1.3,0.1,2.3,1.2,2.3,2.5c-0.1,1.2-1,2.2-2.2,2.3
                        c-1.7,0.1-3.4,0.1-5.1,0c-1.3,0-2.3-1.1-2.3-2.4c0-1.3,1.1-2.4,2.4-2.4C4598.6,2763.3,4599.5,2763.3,4600.3,2763.3z"/>
                    <path id="Caminho_2616" class="alguma4" d="M4643.6,2780c0-0.8,0-1.6,0-2.4c0.1-1.3,1.2-2.3,2.5-2.3c1.2,0.1,2.1,0.9,2.3,2.1
                        c0.1,1.8,0.1,3.6,0,5.3c-0.1,1.3-1.2,2.3-2.6,2.2c-1.3-0.1-2.2-1.2-2.2-2.4C4643.6,2781.7,4643.6,2780.9,4643.6,2780L4643.6,2780z"
                        />
                    <path id="Caminho_2617" class="alguma3" d="M4653.2,2780.1c0-0.8,0-1.6,0-2.4c0-1.3,1.1-2.4,2.4-2.3c1.2,0,2.2,1,2.3,2.2
                        c0.1,1.7,0.1,3.5,0,5.2c-0.1,1.3-1.2,2.3-2.5,2.2c-1.2-0.1-2.2-1.1-2.2-2.3C4653.2,2781.8,4653.2,2780.9,4653.2,2780.1z"/>
                    <path id="Caminho_2618" class="alguma1" d="M4657.9,2736.8c-11.3,0.1-22.6-0.4-33.8-1.4c-5.6-0.6-10-5-10.7-10.5
                        c-1.4-12.7-1.6-25.4-0.5-38.2c0.1-2.2,0.4-4.3,0.8-6.4c1.1-5.2,5.5-9.1,10.9-9.5c13.8-1.2,27.7-1.6,41.6-1.4
                        c8.6,0.1,17.1,0.6,25.6,1.4c5.8,0.6,10.4,5.3,10.9,11.1c1.2,10.9,1.4,22,0.8,32.9c-0.1,3.8-0.5,7.5-1.1,11.2
                        c-1.1,5.1-5.4,8.8-10.6,9.3C4680.5,2736.4,4669.2,2736.9,4657.9,2736.8z M4657.9,2732c4.4-0.1,8.7,0,13.1-0.2
                        c6.7-0.2,13.4-0.7,20.1-1.2c3.4-0.2,6.2-2.8,6.7-6.2c0.7-5.8,1.1-11.7,1.2-17.5c0.1-8.1-0.2-16.2-1.1-24.3c-0.2-3.6-3-6.5-6.6-6.9
                        c-2.2-0.2-4.5-0.4-6.7-0.6c-5.9-0.3-11.7-0.7-17.6-0.8c-6.5-0.1-13.1-0.1-19.6,0.1c-7.4,0.2-14.8,0.7-22.2,1.2
                        c-3.5,0.2-6.4,2.9-6.9,6.3c-0.6,4.8-0.9,9.6-1.1,14.4c-0.3,9.3,0,18.7,1.1,28c0.4,3.3,2.9,5.8,6.2,6.2c5.1,0.5,10.2,0.9,15.3,1.1
                        C4645.8,2731.9,4651.8,2732.2,4657.9,2732L4657.9,2732z"/>
                    <path id="Caminho_2619" class="alguma5" d="M4657.9,2732c-6.1,0.2-12.1-0.1-18.2-0.3c-5.1-0.2-10.2-0.7-15.3-1.1
                        c-3.3-0.4-5.8-3-6.2-6.2c-1-9.3-1.4-18.6-1.1-28c0.2-4.8,0.5-9.6,1.1-14.4c0.5-3.5,3.4-6.1,6.9-6.3c7.4-0.5,14.8-1,22.2-1.2
                        c6.5-0.2,13.1-0.2,19.6-0.1c5.9,0.1,11.7,0.5,17.6,0.8c2.2,0.1,4.5,0.3,6.7,0.6c3.6,0.4,6.4,3.3,6.6,6.9c0.9,8.1,1.2,16.2,1.1,24.3
                        c-0.1,5.9-0.5,11.7-1.2,17.5c-0.5,3.4-3.2,6-6.7,6.2c-6.7,0.5-13.4,1-20.1,1.2C4666.6,2732,4662.3,2731.9,4657.9,2732z
                        M4626.8,2715.1c0.8,0.2,1.4-0.5,2-1.1c8.9-8.9,17.7-17.7,26.6-26.6c0.7-0.7,1.4-1.3,2-2c0.9-0.9,0.8-2.4-0.1-3.2c0,0,0,0-0.1-0.1
                        c-1.1-0.9-2.7-0.8-3.6,0.4c0,0,0,0,0,0c-9.4,9.4-18.9,18.9-28.3,28.3c-0.4,0.4-0.7,0.8-0.8,1.3c-0.4,1.2,0.2,2.6,1.5,3
                        C4626.2,2715.1,4626.5,2715.1,4626.8,2715.1L4626.8,2715.1z M4624.4,2698.1c-0.1,1,0.4,1.9,1.3,2.3c1,0.4,2.1,0.2,2.8-0.6
                        c4.7-4.7,9.4-9.4,14.1-14.1c1-0.8,1.1-2.2,0.4-3.2c-0.1-0.1-0.2-0.2-0.3-0.3c-0.9-0.9-2.4-1-3.3-0.1c-0.1,0.1-0.1,0.1-0.2,0.2
                        c-4.7,4.7-9.4,9.3-14,14C4624.7,2696.8,4624.4,2697.5,4624.4,2698.1L4624.4,2698.1z M4626.8,2688.6c2.1-0.4,3.2-2,4.3-3.5
                        c0.7-0.9,0.6-2.2-0.3-2.9c0,0-0.1-0.1-0.1-0.1c-0.9-0.8-2.2-0.9-3.1,0c-0.9,0.8-1.8,1.7-2.6,2.6c-0.6,0.7-0.8,1.8-0.4,2.7
                        C4624.9,2688.2,4625.8,2688.7,4626.8,2688.6L4626.8,2688.6z"/>
                    <path id="Caminho_2620" class="alguma1" d="M4626.8,2715.1c-1.3,0.1-2.4-0.9-2.5-2.2c0-0.3,0-0.6,0.1-0.9c0.2-0.5,0.5-0.9,0.8-1.3
                        c9.4-9.4,18.9-18.9,28.3-28.3c0.9-1.1,2.5-1.3,3.6-0.4c0,0,0,0,0,0c1,0.8,1.1,2.3,0.2,3.2c0,0,0,0-0.1,0.1c-0.6,0.7-1.3,1.3-2,2
                        c-8.9,8.9-17.7,17.7-26.6,26.6C4628.2,2714.6,4627.7,2715.3,4626.8,2715.1z"/>
                    <path id="Caminho_2621" class="alguma1" d="M4624.4,2698.2c0-0.7,0.3-1.4,0.8-1.8c4.7-4.7,9.4-9.4,14-14c0.8-1,2.3-1.1,3.3-0.3
                        c0.1,0.1,0.1,0.1,0.2,0.2c0.9,0.8,1,2.3,0.2,3.2c-0.1,0.1-0.2,0.2-0.3,0.3c-4.7,4.7-9.4,9.4-14.1,14.1c-0.7,0.8-1.8,1.1-2.8,0.6
                        C4624.8,2700.1,4624.3,2699.1,4624.4,2698.2z"/>
                    <path id="Caminho_2622" class="alguma1" d="M4626.8,2688.6c-0.9,0.1-1.8-0.5-2.2-1.3c-0.4-0.9-0.3-1.9,0.4-2.7c0.8-0.9,1.7-1.8,2.6-2.6
                        c0.9-0.8,2.2-0.8,3.1,0c1,0.6,1.2,1.9,0.5,2.9c0,0-0.1,0.1-0.1,0.1C4630,2686.6,4628.8,2688.2,4626.8,2688.6z"/>
                </g>
                </svg>

                <svg id="curva-vermelho-curta" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 412.7 85.5" style="enable-background:new 0 0 412.7 85.5;" xml:space="preserve">
                <style type="text/css">
                    .vermelhongo{fill:#D90F0F;}
                </style>
                <path class="vermelhongo" d="M412.7,46.7c-3,4-6.7,7.1-11,4.7c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                    l0,0c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                    c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                    c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                    c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2l0,0
                    c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                    c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12C7.8,21.1,3.7,20.7,0,21.5v13c1.9-1,3.9-1.2,6.2,0
                    c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2c2.9-4.8,8.4-16.5,15.8-12.3
                    c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2l0,0c2.9-4.8,8.4-16.5,15.8-12.3
                    c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2c2.9-4.8,8.4-16.5,15.8-12.3
                    c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2c2.9-4.8,8.4-16.5,15.8-12.3
                    c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2c2.9-4.8,8.4-16.5,15.8-12.3
                    c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2l0,0c2.9-4.8,8.4-16.5,15.8-12.3
                    c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c6.2,3.5,11.9,2.9,16.9,0.2V46.7z"/>
            </svg>

        `;

        $('.backdoor').html('');
        $('.overlay').html('');
        $('.content').html('');
        $('#header').html('');
        $('#curva-vermelho-curta').css('top', '150vh');
        $('body').css('background-color', '#fac710');
        $('.content').css('top', '0');
        $('.content').css('display', 'flex');
        $('.content').css('padding-bottom', '0');
        $('.content').css('padding-bottom', '0');
        $('.content').css('height', '100vh');
        $('.content').css('overflow', 'hidden');

        let pontos = [];

        pontos.push(Anima.player.pontos.Rock);
        pontos.push(Anima.player.pontos.Lofi);
        pontos.push(Anima.player.pontos.Eletronica);
        pontos.push(Anima.player.pontos.Sertanejo);
        pontos.push(Anima.player.pontos.Pagode);
        pontos.push(Anima.player.pontos.Rap);
        pontos.push(Anima.player.pontos.Pop);
        pontos.push(Anima.player.pontos.Funk);
        
        // let maxPoints = values.reduce(function(prev, current) { 
        //     return prev > current ? prev : current; 
        // });



        setTimeout(() => {
            $('.content').html(html);    
            $('.header').html(header);    

            Anima.sound.perguntas.volume = 0.8;

            setTimeout(() => {
                $('.minutinho').css('margin-left', '0');
                $('#computador').css('margin-left', '0');
                $('#curva-vermelho-curta').css('top', '60vh');
    
                Anima.sound.perguntas.volume = 0.6;


                setTimeout(() => {
                    $('.minutinho').css('margin-left', '200vw');
                    $('#computador').css('margin-left', '200vw');
                    $('#curva-vermelho-curta').css('top', '150vh');
            Anima.sound.perguntas.volume = 0.2;


                    setTimeout(() => {
                        Anima.showResult();
                        Anima.sound.perguntas.volume = 0;

                    }, 2000);
                    
                }, 5500);

            }, 1500);
        }, 1500);
    },

    stopMusic: function () {
        Anima.sound.resultado.pause();
    },

    getIframePl: function () {
        switch (Anima.maiorTipo) {
            case 'Rock':
                return `<iframe id="iframePl" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/0M8dVM1B7qWhyDYmSYWfVh?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;

            case 'Sertanejo':
                return `<iframe id="iframePl" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6h9PthI2O5qSNGDFoHvtqR?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;

            case 'Eletronica':
                return `<iframe id="iframePl" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/4hFJ7Tiq5AJAmwwD2feVJl?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;

            case 'Lofi':
                return `<iframe id="iframePl" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/6UMZMO2nde60yGUTBE73LW?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;

            case 'Pagode':
                return `<iframe id="iframePl" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/7vJd97sHkBJGC19vfRJlun?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;

            case 'Funk':
                return `<iframe id="iframePl" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2HUlos4Mh8Q6zpa7neugJb?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;

            case 'Pop':
                return `<iframe id="iframePl" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5gWOskzXQd6fDFcY4V2RKd?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;

            case 'Rap':
                return `<iframe id="iframePl" style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2YUypTBNfgtycumJyldBU0?utm_source=generator" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;

            default:
                break;
        }

        // return `<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/2HUlos4Mh8Q6zpa7neugJb?utm_source=generator&theme=0" width="100%" height="380" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`;
    },

    getImgPl: function () {
        return Anima.maiorTipo.toLocaleLowerCase();
    },

    showResult: function () {
        let cores = {
            header: ''
        };
        let titulo = '';
        let apoio = '';
        let tamanho = 32;

        Anima.sound.perguntas.pause();

        if (Anima.player.acertos >= 4){

            cores.header = '#652CB3';
            titulo = 'Mestre dos desafios';
            apoio = 'Você deu tudo de si nesse desafio e simplesmente arrebentou! Conseguiu acertar TODAS as perguntas técnicas que separamos para você, PARABÉNS!'

        } else if (Anima.player.acertos >= 2 && Anima.player.acertos < 4) {

            cores.header = '#FAC710';
            titulo = 'Uma máquina de vencer';
            apoio = 'Parabéns! Você conseguiu acertar mais da metade das perguntas técnicas que separamos para você, é sinal de que está no caminho certo! Mas se quiser tentar de novo, fique à vontade :)';

        } else {

            cores.header = '#EF0B0B';
            titulo = 'Eis aqui... A vara da repescagem';
            // tentarNovamente
            apoio = 'Pode ser que você só seja novo na área ou então tenha chutado todas as respostas "A" possíveis. Mas o negócio é que você acertou menos da metade das perguntas técnicas. Que tal tentar de novo?';
            tamanho = 28;

        }

        let header = `
            <div class="header-pergunta" style="background-color:${cores.header}">
                <svg class="logo-topo" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        viewBox="0 0 1211.4 374.8" style="enable-background:new 0 0 1211.4 374.8;" xml:space="preserve">
                <style type="text/css">
                    .white{fill:#FFFFFF;}
                </style>
                <g>
                    <path class="white" d="M781.8,133.2c-1.4,0-2.5,0-3.9,0c-46.2,1.8-67.5,40.1-67.5,74.9c0,42.3,24.5,69.2,67.5,72.1
                        c2.5,0,5.3,0.4,7.8,0.4c19.2,0,36.2-3.2,51.8-9.9l-7.5-28.8c-11.7,3.9-23.1,6-38,6c-5,0-9.6-0.7-14.2-1.8
                        c-13.8-3.2-24.5-11.4-25.6-25.6h25.6h65.3c0.4-3.2,1.4-9.6,1.4-17C844.7,168.4,827.3,133.2,781.8,133.2z M777.9,190.7H752
                        c1.1-11.4,8.5-27.7,25.9-28.4c0.7,0,1.1,0,1.4,0c19.9,0,24.5,18.1,24.5,28.4H777.9z"/>
                    <path class="white" d="M540,212.4c0,20.2-6.4,32.3-21.7,32.7c-14.9-0.4-21.3-12.4-21.3-32.7v-76h-44v82.7c0,81.7,130.7,81.7,130.7,0
                        v-82.7H540V212.4z"/>
                    <path class="white" d="M657.9,163.7c11.7,0,24.5,4.6,30.9,7.8l13.8-28.4c-8.9-4.3-28.4-9.9-46.2-9.9c-35.2,0.7-57.5,19.9-57.5,46.5
                        c-0.4,16.3,11,32.7,40.5,42.3c16,5.3,20.2,8.9,20.2,16.3c0,7.1-5.3,11.4-18.5,11.4s-30.2-5.3-38-10.3l-13.8,29.5
                        c11.4,7.5,33.4,11.7,51.8,11.7c40.1,0,60.7-19.2,60.7-45.8c-0.4-20.2-11.4-34.1-38-43.3c-17.4-6-22.7-9.2-22.7-16.3
                        C641.2,168.4,647.3,163.7,657.9,163.7z"/>
                    <path class="white" d="M977.5,194.3c0-33.4-14.9-61.1-61.8-61.1c-0.4,0-0.7,0-1.1,0c-25.2,0.4-45.1,6.7-57.5,13.8l11.7,27
                        c9.2-5.7,24.5-10.3,39.1-10.3c2.5,0,4.6,0,6.7,0.4c15.6,1.8,18.8,11,18.8,17.8v1.8c-6.4,0-12.8,0.4-18.8,0.7
                        c-39.1,4.3-63.9,21.3-63.9,52.9c0,22.7,17,43.3,45.8,43.3c6.4,0,12.4-0.7,18.1-2.5c8.9-2.8,16.3-7.8,22-14.9h1.1l2.5,14.2h39.4
                        c-1.8-7.8-2.1-20.6-2.1-34.1V194.3z M934.9,226.2c0,2.5-0.4,5-0.7,7.5c-2.5,7.8-10.3,14.6-19.5,16c-1.1,0-2.1,0-3.2,0
                        c-9.9,0-17.4-5.3-17.4-16.7c0-11.4,8.2-17.4,20.6-20.2c6-1.4,12.8-1.8,20.2-1.8V226.2z"/>
                    <path class="white" d="M1038.6,220.2c0-72.4,0-20.2,0-83.8h-43c0,46.2,0,28.1,0,90.5c0,19.9,4.3,33.4,12.1,41.5
                        c7.5,7.5,19.2,12.1,33.4,12.1c12.1,0,27-2.1,32.7-4.3l-5.7-32.7C1048.5,247.9,1038.6,242.9,1038.6,220.2z"/>
                    <path class="white" d="M1124.1,220.2c0-72.4,0-20.2,0-83.8h-43c0,46.2,0,28.1,0,90.5c0,19.9,3.9,33.4,12.1,41.5
                        c7.1,7.5,18.8,12.1,33,12.1c12.1,0,27.3-2.1,32.7-4.3l-5.7-32.7C1133.7,247.9,1124.1,242.9,1124.1,220.2z"/>
                    <path class="white" d="M140.2,111.9c27.3,0,49.4-22.4,49.4-49.7s-22-49.7-49.4-49.7c-27.7,0-49.7,22.4-49.7,49.7
                        S112.5,111.9,140.2,111.9z"/>
                    <path class="white" d="M229.7,222.7c-21.3,0-45.5-41.2-61.1-57.9c-17-17.8-39.4-27.7-64.3-27.7c-78.1,0-91.6,83.1-91.6,143.8h57.2
                        c0.7-26.3-3.6-85.9,35.5-85.9c19.5,0,36.6,29.1,48.3,43c22.4,25.6,42.3,42.6,77.1,42.6c77.4,0,91.6-83.4,91.6-143.8h-57.2
                        C264.5,163.4,267.7,222.7,229.7,222.7z"/>
                    <path class="white" d="M1191.2,143.9c-4.3-4.6-10.3-7.5-17.4-7.5c-6.7,0-12.8,2.8-17.4,7.5c-4.3,4.3-7.1,10.3-7.1,17.4
                        c0,6.7,2.8,12.8,7.1,17.4c4.6,4.3,10.7,7.1,17.4,7.1c7.1,0,13.1-2.8,17.4-7.1c4.6-4.6,7.5-10.7,7.5-17.4
                        C1198.7,154.2,1195.9,148.1,1191.2,143.9z M1188.4,175.5c-3.9,3.6-8.9,5.7-14.6,5.7c-5.3,0-10.3-2.1-14.2-5.7
                        c-3.6-3.9-5.7-8.9-5.7-14.2c0-5.7,2.1-10.7,5.7-14.6c3.9-3.6,8.9-5.7,14.2-5.7c5.7,0,10.7,2.1,14.6,5.7c3.6,3.9,5.7,8.9,5.7,14.6
                        C1194.1,166.6,1192,171.6,1188.4,175.5z"/>
                    <path class="white" d="M1181.7,164.1c-0.7-0.7-1.8-1.4-2.8-2.1c2.1-0.4,3.9-1.1,5.3-2.5c1.1-1.4,1.4-2.8,1.4-5c0-1.4-0.4-2.8-1.1-4.3
                        c-0.7-1.1-1.8-1.8-2.8-2.5c-1.4-0.4-3.6-0.7-6.4-0.7h-0.4h-10.7v26.3h5.3v-11h1.1c1.1,0,2.1,0.4,2.5,0.4c0.7,0.4,1.4,0.7,1.8,1.1
                        c0.4,0.7,1.4,2.1,2.8,3.9l3.9,5.7h6l-3.2-5C1183.4,166.2,1182.4,164.8,1181.7,164.1z M1174.9,158.4c-0.4,0-1.1,0-1.4,0h-3.9v-6.7
                        h3.9c0.7,0,1.1,0,1.4,0c1.4,0,2.1,0,2.5,0c1.1,0.4,1.8,0.7,2.1,1.1c0.4,0.7,0.7,1.4,0.7,2.1c0,0.7,0,1.4-0.4,2.1
                        c-0.4,0.4-1.1,0.7-1.8,1.1C1177.8,158.1,1176.7,158.4,1174.9,158.4z"/>
                </g>
                </svg>

                <div id="trofeu">
                ${Anima.criarTrofeu()}
           
                </div>
            </div>
        `;

        let content = `
            <div class="resultadoAcertos">
                <div class="frase-efeito" style="font-size: ${tamanho}px">
                    ${titulo}
                </div>

                <div class="apoiopreto" style="font-size:16px;">
                    ${apoio}
                </div>

                <div class="frase-efeito" style="font-size: 20px;padding-bottom: 30px">
                    ♫ E como prometido...
                </div>
            </div>

            <div class="resultadoAcertos" style="padding: 0 30px 40px;margin:0">
                <img src="./assets/${Anima.getImgPl()}.png" loading="lazy">
            </div>

            <div onclick="Anima.stopMusic()" class="resultadoAcertos" style="width:90%;padding: 0;margin:0">
                ${Anima.getIframePl()}    
            </div>

            <div id="formC">
                <div class="frase-efeito" style="font-size:40px;text-shadow:none">
                    Por favor<br>Não se vá!!!
                </div>
                <div class="apoiopreto" style="font-size:18px;padding:0;margin:0px;color:#652cb3;">
                    ainda...
                </div>
                <div class="apoiopreto" style="font-size:18px;padding:0;margin:0px;color:#2A2929;">
                    Gostaríamos de manter contato com você, então que tal nos dizer onde te encontrar?
                </div>

                <div class="main_div">
                    <div class="group">
                        <input id="nomei" type="text" required="required" value="${Anima.player.nome || ''}"/>
                        <label>Nome</label>
                    </div>

                    <div class="group">
                        <input maxlength="15" id="fonei" type="text" onkeyup="handlePhone(event)" required="required"/>
                        <label>Telefone</label>
                    </div>

                    <div class="group">
                        <input id="linki" type="text" required="required"/>
                        <label>Manda o link do Github ou Behance ou Linkedin ou ...</label>
                    </div>

                    <div class="outro">
                        <input id="aceitoLGPD" type="checkbox" required="required" style="height: 20px; width:20px;display:inline;"/>

                        <span for="aceitoLGPD" style="position:inherit">Concordo e aceito os termos.</span>
                    </div>

                    
                </div>

                <div class="apoiopreto" style="padding:0;margin:0 0 30px 0;color:#2A2929;">
                    Neste desafio coletamos dados pessoais apenas para sua identificação e contato.<br>
                    A partir desses dados, você está ciente que nossos recrutadores poderão pesquisar e contatar você através do seu Linkedin ou Whatsapp.
                    <br><br>
                    Caso seja do seu interesse o envio do seu currículo através do nosso site, lá você poderá entender na nossa Política o uso do dados que constam no seu currículo.
                    <br>
                    <br>
                    <br>
                    <div onclick="Anima.onClickEnviar()" class="btn btn-yellow">
                        Enviar
                        
                    </div>

                    

            
            
                </div>

            </div>
            <button class="btn btn-cian btn-carreira" onclick="document.location.reload(true);" style="margin: 20px 0; font-weight: bold">Tentar novamente</button>

            <svg id="curva-rosa-curta" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 412.7 85.5" style="enable-background:new 0 0 412.7 85.5;" xml:space="preserve">
            <style type="text/css">
                .rosaaa{fill:#C2596A;}
            </style>
            <path class="rosaaa" d="M412.7,46.7c-3,4-6.7,7.1-11,4.7c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                l0,0c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2l0,0
                c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12c-14.6-8.3-26,5.8-32.4,17.2
                c-3,4.9-8.6,16.4-15.8,12.3c-4-2.3-4.1-12.5-5.3-17.3c-1.2-5.1-4.5-9.4-9.1-12C7.8,21.1,3.7,20.7,0,21.5v13c1.9-1,3.9-1.2,6.2,0
                c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2c2.9-4.8,8.4-16.5,15.8-12.3
                c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2l0,0c2.9-4.8,8.4-16.5,15.8-12.3
                c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2c2.9-4.8,8.4-16.5,15.8-12.3
                c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2c2.9-4.8,8.4-16.5,15.8-12.3
                c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2c2.9-4.8,8.4-16.5,15.8-12.3
                c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c14.5,8.2,26-5.9,32.4-17.2l0,0c2.9-4.8,8.4-16.5,15.8-12.3
                c3.7,2.1,3.8,9.3,4.5,13.2c1.5,7.2,3.4,12.5,9.9,16.1c6.2,3.5,11.9,2.9,16.9,0.2V46.7z"/>
        </svg>


            <div id="redes">
<a href="https://useall.com.br" target="_blank">
                <svg version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                viewBox="0 0 49.6 49.6" style="enable-background:new 0 0 49.6 49.6;" xml:space="preserve">
           <style type="text/css">
               .ffff{fill:#0447AB;}
               .gggg{fill:#FFF6D6;}
           </style>
           <g id="Grupo_464" transform="translate(51 2348.7)">
               <circle id="Elipse_21" class="ffff" cx="-26.2" cy="-2323.9" r="20"/>
               <g id="Grupo_463" transform="translate(6.459 6.773)">
                   <path id="Caminho_2667" class="gggg" d="M-37.7-2329.7c0.2,6.9,2.8,11.6,5,11.6s4.8-4.7,5-11.6H-37.7z"/>
                   <path id="Caminho_2668" class="gggg" d="M-32.7-2343.3c-2.3,0-4.8,4.7-5,11.6h10.1C-27.9-2338.6-30.4-2343.3-32.7-2343.3z"/>
                   <path id="Caminho_2669" class="gggg" d="M-25.6-2331.7h6.5c-0.4-5.9-4.7-10.9-10.5-12.2C-27.3-2341.8-25.8-2337.2-25.6-2331.7z"/>
                   <path id="Caminho_2670" class="gggg" d="M-25.6-2329.7c-0.2,5.6-1.7,10.1-4,12.2c5.8-1.3,10-6.3,10.5-12.2H-25.6z"/>
                   <path id="Caminho_2671" class="gggg" d="M-39.7-2329.7h-6.5c0.4,5.9,4.7,10.9,10.5,12.2C-38-2319.6-39.6-2324.1-39.7-2329.7z"/>
                   <path id="Caminho_2672" class="gggg" d="M-39.7-2331.7c0.2-5.6,1.7-10.1,4-12.2c-5.8,1.3-10,6.3-10.5,12.2H-39.7z"/>
               </g>
           </g>
           </svg>
</a>
<a href="https://instagram.com/useallsoftware" target="_blank">
           <svg version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 49.6 49.6" style="enable-background:new 0 0 49.6 49.6;" xml:space="preserve">
<style type="text/css">
	.cccc{fill:#D835AC;}
	.dddd{fill:#FFF6D6;}
</style>
<g id="Grupo_467" transform="translate(123 2348.7)">
	<circle id="Elipse_22" class="cccc" cx="-98.2" cy="-2323.9" r="20"/>
	<g id="Grupo_466" transform="translate(8.135 8.107)">
		<g id="Grupo_465">
			<path id="Caminho_2673" class="dddd" d="M-100.1-2339.7c-0.8,0-1.4,0.6-1.4,1.4s0.6,1.4,1.4,1.4c0.8,0,1.4-0.6,1.4-1.4
				c0,0,0,0,0,0C-98.7-2339.1-99.3-2339.7-100.1-2339.7z"/>
			<path id="Caminho_2674" class="dddd" d="M-106.3-2337.9c-3.2,0-5.8,2.6-5.8,5.8s2.6,5.8,5.8,5.8s5.8-2.6,5.8-5.8l0,0
				C-100.4-2335.3-103-2337.9-106.3-2337.9z M-106.3-2328.3c-2.1,0-3.7-1.7-3.7-3.7c0-2.1,1.7-3.7,3.7-3.7c2.1,0,3.7,1.7,3.7,3.7
				C-102.5-2330-104.2-2328.3-106.3-2328.3L-106.3-2328.3z"/>
			<path id="Caminho_2675" class="dddd" d="M-101.6-2320.2h-9.5c-3.9,0-7.1-3.2-7.1-7.1v-9.5c0-3.9,3.2-7.1,7.1-7.1h9.5
				c3.9,0,7.1,3.2,7.1,7.1v9.5C-94.5-2323.4-97.7-2320.2-101.6-2320.2z M-111.1-2341.7c-2.7,0-4.9,2.2-4.9,4.9l0,0v9.5
				c0,2.7,2.2,4.9,4.9,4.9h0h9.5c2.7,0,4.9-2.2,4.9-4.9l0,0v-9.5c0-2.7-2.2-4.9-4.9-4.9h0H-111.1z"/>
		</g>
	</g>
</g>
</svg>
</a>
<a href="https://www.youtube.com/channel/UC6rqwowSBCO1KE84Pyom8Jw/featured" target="_blank">
<svg version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 49.6 49.6" style="enable-background:new 0 0 49.6 49.6;" xml:space="preserve">
<style type="text/css">
	.aaaa{fill:#FF0000;}
	.bbbb{fill:#FFF6D6;}
</style>
<g id="Grupo_468" transform="translate(195 2348.7)">
	<circle id="Elipse_23" class="aaaa" cx="-170.2" cy="-2323.9" r="20"/>
	<path id="Caminho_2676" class="bbbb" d="M-159.6-2326.8c0-2.7-2.1-4.8-4.7-4.9h-12.1c-2.7,0-4.8,2.2-4.7,4.9v5.8
		c0,2.7,2.1,4.8,4.7,4.9h12.1c2.7,0,4.8-2.2,4.7-4.9V-2326.8z M-166.8-2323.5l-5.4,2.8c-0.2,0.1-0.9,0-0.9-0.3v-5.7
		c0-0.3,0.7-0.4,0.9-0.3l5.2,2.9C-166.8-2323.9-166.6-2323.6-166.8-2323.5L-166.8-2323.5z"/>
</g>
</svg>
</a>
<a href="https://www.linkedin.com/company/useall-software-ltda/" target="_blank">
<svg version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 49.6 49.6" style="enable-background:new 0 0 49.6 49.6;" xml:space="preserve">
<style type="text/css">
	.hhhh{fill:#0A66C2;}
	.iiii{fill:#FFF6D6;}
</style>
<g id="Grupo_470" transform="translate(267 2348.7)">
	<circle id="Elipse_24" class="hhhh" cx="-242.2" cy="-2323.9" r="20"/>
	<g id="Grupo_469" transform="translate(8.539 7.427)">
		<path id="Caminho_2677" class="iiii" d="M-249.6-2334.2c0.5-0.7,1.1-1.3,1.8-1.7c1.1-0.6,2.4-0.9,3.7-0.7c0.9,0.1,1.8,0.3,2.5,0.8
			c1,0.7,1.7,1.8,1.9,3c0.2,1.1,0.4,2.3,0.3,3.4c0,2.7,0,5.4,0,8.1c0,0.2-0.1,0.3-0.3,0.3c-1.4,0-2.8,0-4.2,0c-0.2,0-0.3,0-0.3-0.3
			c0-2.6,0-5.1,0-7.7c0-0.5,0-1.1-0.1-1.6c-0.1-1.2-1.2-2.1-2.4-2c-0.1,0-0.2,0-0.3,0.1c-1.3,0.1-2.2,1.1-2.3,2.4
			c-0.1,0.5-0.1,1.1-0.1,1.6c0,2.4,0,4.8,0,7.2c0,0.2-0.1,0.3-0.3,0.3c-1.4,0-2.8,0-4.2,0c-0.2,0-0.3,0-0.3-0.3c0-4.9,0-9.8,0-14.7
			c0-0.2,0.1-0.3,0.3-0.3c1.3,0,2.7,0,4,0c0.2,0,0.3,0.1,0.2,0.2C-249.6-2335.4-249.6-2334.8-249.6-2334.2z"/>
		<path id="Caminho_2678" class="iiii" d="M-261.8-2328.7c0-2.4,0-4.9,0-7.4c0-0.3,0.1-0.3,0.3-0.3c1.4,0,2.8,0,4.2,0
			c0.2,0,0.3,0,0.3,0.3c0,4.9,0,9.9,0,14.8c0,0.2-0.1,0.2-0.3,0.2c-1.4,0-2.8,0-4.2,0c-0.2,0-0.3-0.1-0.3-0.3
			C-261.8-2323.7-261.8-2326.2-261.8-2328.7z"/>
		<path id="Caminho_2679" class="iiii" d="M-256.7-2341.2c0,1.5-1.2,2.8-2.7,2.8c-1.5,0-2.8-1.2-2.8-2.7c0-1.5,1.2-2.7,2.7-2.8
			C-258-2343.9-256.7-2342.7-256.7-2341.2z"/>
	</g>
</g>
</svg>
</a>
                </div>
            
                <div class="frase-efeito" style="font-size:26px;text-shadow:none;padding-bottom:150px">
                Obrigado por ter<br>participado!
            </div>

        `;

        $('#header').html(header);
        $('.content').html(content);
        $('.content').css('height', 'auto');
        $('body').css('overflow-y', 'scroll');
        $('.content').css('display', 'flex')
        $('.header-pergunta').css('margin-top', '-200vh');
        $('.logo-topo').css('opacity', '1');
        $('.content').css('flex-direction', 'column');
        $('.content').css('align-content', 'center');
        $('.content').css('align-items', 'center');

        $('body').css('background-color', '#fffee2');

        setTimeout(() => {
            $('.header-pergunta').css('margin-top', '0vh');

        Anima.sound.resultado.play();

            setTimeout(() => {
                $('#formC').css('opacity', '1');
                $('.resultadoAcertos').css('opacity', '1');

                let iframe = document.getElementById('iframePl');

                iframe.addEventListener('click', function () {
                    Anima.stopMusic();
                });
                
            }, 1000);
        }, 500);
    },

    criarTrofeu: function () {
        let trofeuUm = `<svg width="216" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 248.6 216.3" style="enable-background:new 0 0 248.6 216.3;" xml:space="preserve">
   <style type="text/css">
       .laranja{fill:#F68A09;}
       .st1{fill:#1F1F1F;}
       .st2{fill:#FFB100;}
       .st3{fill:#2A2929;}
       .st4{fill:#16D1A7;}
   </style>
   <g>
       <g id="trofeu" transform="translate(-92.533 -97.378)">
           <path id="Caminho_2578" class="laranja" d="M240.4,301.4h-74.7c-1.9,0-4.6-0.2-6.3-2.1s-1.6-4.6-1.4-6.5c0.6-5.1,3.2-9.2,5.9-12.8
               c3.4-4.6,7.3-8.9,11.5-12.8c5.3-4.8,8.6-11.1,10.6-20c1.4-6.6,2.4-13.3,2.8-20c0.1-1.3,1.2-2.3,2.5-2.3c0.1,0,0.3,0,0.4,0l0.2,0
               c3.6,0.7,7.2,1.2,10.8,1.3h0.3c3.4-0.1,6.7-0.5,10-1.2l1.2-0.2c1.4-0.2,2.7,0.7,2.9,2c0,0.1,0,0.2,0,0.2
               c0.6,8.2,1.7,17.9,4.9,27.2c1.3,3.9,3.4,7.4,6.3,10.3c0.8,0.8,1.6,1.6,2.4,2.4c4.7,4.8,9.7,9.8,13.5,15.7
               c2.4,3.4,3.7,7.4,3.9,11.5c0.3,3.5-2.3,6.6-5.8,6.9c-0.1,0-0.3,0-0.4,0c-0.3,0-0.5,0-0.9,0C241.1,301.4,240.6,301.4,240.4,301.4z"
               />
           <path id="Caminho_2579" class="st1" d="M214.8,227.4c0.7,9.5,1.9,18.8,5,27.8c1.4,4.2,3.7,8.1,6.8,11.2
               c5.5,5.6,11.3,11.1,15.6,17.8c2.1,3,3.3,6.5,3.5,10.2c0.2,2.1-1.3,4.1-3.4,4.3c-0.2,0-0.3,0-0.5,0c-0.2,0-0.4,0-0.7,0
               c-0.3,0-0.5,0-0.8,0h-74.7c-4.3,0-5.7-1.5-5.2-5.8c0.5-4.4,2.8-8.1,5.4-11.6c3.3-4.5,7.1-8.7,11.2-12.4
               c6.4-5.8,9.6-13.1,11.4-21.3c1.5-6.7,2.4-13.5,2.9-20.3c3.8,0.8,7.6,1.3,11.5,1.4h0.3C207.1,228.7,211,228.2,214.8,227.4
                M214.8,222.4c-0.3,0-0.6,0-0.9,0.1l-1.2,0.2c-3.2,0.7-6.4,1-9.6,1.1h-0.3c-3.5-0.1-7-0.6-10.4-1.3l-0.2,0
               c-2.7-0.5-5.3,1.3-5.8,4.1c0,0.2-0.1,0.3-0.1,0.5c-0.4,6.6-1.3,13.1-2.7,19.6c-1.9,8.4-4.9,14.2-9.9,18.7
               c-4.4,4-8.3,8.4-11.9,13.2c-2.8,3.7-5.7,8.3-6.3,14c-0.3,2.3-0.4,5.8,2,8.4s5.8,3,8.2,3h74.7c0.1,0,0.2,0,0.3,0c0.2,0,0.3,0,0.5,0
               c0.4,0,0.7,0,1.1,0c4.9-0.2,8.7-4.4,8.5-9.3c0-0.1,0-0.1,0-0.2c-0.2-4.6-1.7-9-4.3-12.8c-4-6.2-9-11.2-13.8-16.2
               c-0.8-0.8-1.6-1.6-2.4-2.4c-2.6-2.7-4.5-5.9-5.7-9.4c-3.1-9-4.2-18.5-4.8-26.6C219.6,224.4,217.4,222.4,214.8,222.4L214.8,222.4z"
               />
           <g id="Grupo_400" transform="translate(92.533 105.115)">
               <path id="Caminho_2580" class="laranja" d="M67.8,102.9c-23.1,0-43-16-48-38.6c-0.8-3.7-1.2-7.6-1.1-11.4c0-4.9,0-9.8,0-14.7
                   c0-6,0-12.1,0-18.1c0-5.3,2.5-7.8,7.7-7.8c6.2,0,12.3,0,18.5,0h15c1.4,0,2.5,1.1,2.5,2.5l0,0v7.9c0,1.4-1.1,2.5-2.5,2.5l0,0
                   c-2.4,0-4.8,0-7.2,0c-2.4,0-4.9,0-7.3,0c-5.6,0-10,0-14,0c0,3.3,0,6.7,0,10c0,2.9,0,5.8,0,8.7c0,1.4,0,2.7,0,4.1
                   c-0.1,3.5,0,6.9,0.3,10.4c1.9,16.3,16.1,30.2,32.4,31.5c0.9,0.1,1.6,0.6,2,1.4l4,8c0.6,1.2,0.1,2.7-1.1,3.4
                   c-0.3,0.2-0.7,0.3-1.1,0.3L67.8,102.9z"/>
               <path id="Caminho_2581" class="st1" d="M44.9,14.9h15c0,2.6,0,5.2,0,7.9c-4.8,0-9.7,0-14.5,0c-4.9,0-9.8,0-14.6,0h-0.1
                   c-1.5,0-1.8,0.4-1.8,1.9c0.1,6.4,0,12.9,0.1,19.3c0,4.9-0.2,9.8,0.3,14.7c2,17.6,17,32.3,34.6,33.7l4,8h-0.1
                   c-21.9,0-40.9-15.2-45.6-36.6c-0.8-3.6-1.1-7.2-1.1-10.8c0-10.9,0-21.9,0-32.8c0-3.9,1.3-5.3,5.2-5.3
                   C32.6,14.9,38.8,14.9,44.9,14.9 M44.9,9.8c-6.2,0-12.4,0-18.5,0c-2.1,0-5.3,0.3-7.6,2.7c-2.3,2.4-2.6,5.5-2.6,7.6c0,6,0,12,0,18
                   c0,4.9,0,9.9,0,14.8c0,4,0.4,8,1.2,11.9c5.2,23.7,26.2,40.5,50.5,40.5h0.1c2.8,0,5-2.3,5-5c0-0.8-0.2-1.6-0.5-2.3l-4-8
                   c-0.8-1.6-2.3-2.6-4.1-2.7C49.2,86.1,36,73.2,34.3,58.1c-0.3-3.4-0.4-6.7-0.3-10.1c0-1.3,0-2.7,0-4.1c0-2.9,0-5.8,0-8.7
                   c0-2.4,0-5,0-7.5c3.3,0,7,0,11.5,0c2.4,0,4.9,0,7.3,0c2.4,0,4.8,0,7.2,0c2.8,0,5-2.2,5-5v-7.9c0-2.8-2.2-5-5-5c0,0,0,0,0,0
                   L44.9,9.8L44.9,9.8z"/>
           </g>
           <g id="Grupo_401" transform="translate(224.543 105.115)">
               <path id="Caminho_2582" class="laranja" d="M21.2,102.9c-1.4,0-2.5-1.2-2.5-2.5c0-0.4,0.1-0.8,0.3-1.1l4-8c0.4-0.7,1.1-1.2,1.9-1.4
                   c0.4-0.1,0.9-0.1,1.3-0.2c0.9-0.1,1.7-0.2,2.5-0.4c17-3.5,29.2-18.6,29.1-36c0-4.4,0-8.8,0-13.1c0-5,0-10.1,0-15.1
                   c-4.1,0-8.4,0-14,0c-2.4,0-4.8,0-7.3,0c-2.4,0-4.8,0-7.3,0c-1.4,0-2.5-1.1-2.5-2.5v-7.9c0-1.4,1.1-2.5,2.5-2.5c0,0,0,0,0,0h9.2
                   c8.1,0,16.1,0,24.2,0c1.9,0,4.4,0.2,6,1.9s1.9,4.1,1.9,6.1c0,3.6,0,7.3,0.1,10.9c0.1,8.2,0.2,16.6-0.2,24.9
                   c-0.9,18.3-9.7,32.1-26.4,41.2c-6.8,3.7-14.4,5.6-22.2,5.5C21.5,102.9,21.3,102.9,21.2,102.9z"/>
               <path id="Caminho_2583" class="st1" d="M29.2,14.9c11.1,0,22.2,0,33.3,0c4.1,0,5.4,1.3,5.4,5.4c0,11.9,0.4,23.8-0.2,35.7
                   c-0.9,17.7-9.6,30.7-25.1,39.2c-6.4,3.5-13.7,5.3-21,5.2h-0.5c1.3-2.7,2.7-5.3,4-8c1.3-0.2,2.7-0.3,4-0.6
                   c18.2-3.7,31.2-19.8,31-38.4c0-9.6,0-19.2,0-28.8c0-1.5-0.3-1.9-1.8-1.9h-0.1c-4.9,0-9.8,0.1-14.6,0c-4.8,0-9.7,0-14.5,0
                   C29.2,20.1,29.2,17.5,29.2,14.9 M29.2,9.8c-2.8,0-5,2.2-5,5c0,0,0,0,0,0v7.8c0,2.8,2.2,5,5,5c2.4,0,4.8,0,7.2,0
                   c2.4,0,4.9,0,7.3,0c4.5,0,8.1,0,11.5,0c0,4.2,0,8.5,0,12.6c0,4.3,0,8.7,0,13C55.3,69.6,44,83.6,28.1,86.9
                   c-0.7,0.1-1.4,0.2-2.2,0.3c-0.5,0.1-0.9,0.1-1.4,0.2c-1.6,0.2-3,1.2-3.8,2.7l-0.1,0.3l-3.9,7.7c-1.3,2.5-0.3,5.5,2.2,6.7
                   c0.7,0.3,1.4,0.5,2.2,0.5c0.2,0,0.4,0,0.6,0c8.2,0.1,16.2-1.9,23.4-5.8c8-4.2,14.8-10.3,19.8-17.8c4.8-7.7,7.6-16.5,7.9-25.5
                   c0.4-8.4,0.3-16.9,0.3-25.1c0-3.6-0.1-7.2-0.1-10.8c0-2.2-0.3-5.5-2.6-7.8s-5.6-2.6-7.8-2.6c-7.9,0-15.8,0-23.7,0L29.2,9.8z"/>
           </g>
           <path id="Caminho_2584" class="st2" d="M202.8,231.4c-3.9-0.1-7.8-0.6-11.6-1.4l-0.2,0c-0.1,0-0.2,0-0.3-0.1
               c-4.8-1.4-9.4-3.3-13.8-5.7c-6.9-4-12.8-9.5-17.4-16c-0.1-0.1-0.2-0.3-0.3-0.5c-0.4-0.2-0.8-0.6-1-1l-4-8
               c-0.1-0.2-0.2-0.4-0.2-0.7c0-0.1,0-0.2-0.1-0.4v0c-2.7-6.7-4-13.9-3.9-22.9c0-5.8,0-11.6,0-17.3l0-3.6c0-6.1,0-12.2,0-18.3l0-7.7
               c0,0,0-7.9,0-7.9c0-0.2,0-0.5,0-0.7c0-0.3,0-0.7,0-1c-0.4-3.1,1-6.2,3.5-8c0.4-0.3,1-0.5,1.5-0.5h95.9c0.4,0,0.8,0.1,1.2,0.3
               c2.1,1.1,4.5,3.3,4.2,8c0,0.4,0,0.8,0,1.2c0,0.2,0,0.5,0,0.7c0,0,0,8,0,8c0,0.2,0,0.5,0,0.7c0,0.5,0,0.9,0,1.4c0,4.4,0,8.8,0,13.2
               c0,11,0,22.5,0,33.7c0,2.6-0.3,5.2-0.5,7.5c-0.6,4.7-1.8,9.4-3.5,13.9c0,0.1-0.1,0.2-0.1,0.3l-4,8c-0.1,0.2-0.2,0.3-0.3,0.5
               c-0.6,0.7-1.1,1.3-1.6,2c-1.2,1.5-2.4,3-3.7,4.5c-6.8,7.7-15.7,13.2-25.6,15.9c-0.2,0-0.4,0.1-0.6,0.2c-0.1,0.1-0.3,0.1-0.4,0.2
               c-0.1,0-0.3,0.1-0.4,0.1l-1.2,0.2c-3.6,0.7-7.2,1.2-10.9,1.3L202.8,231.4z"/>
           <path id="Caminho_2585" class="st1" d="M250.8,112.2c2.3,1.2,3,3.2,2.8,5.6c0,0.7,0,1.4,0.1,2.1c0,2.6,0,5.2,0,7.9
               c0,0.7-0.1,1.5-0.1,2.2c0,15.6,0,31.3,0,46.9c0,2.4-0.2,4.8-0.5,7.2c-0.6,4.6-1.8,9-3.4,13.3l-4,8c-1.8,2.1-3.5,4.3-5.3,6.4
               c-6.5,7.3-15,12.6-24.4,15.1c-0.4,0.1-0.8,0.3-1.2,0.4c-3.8,0.8-7.7,1.3-11.7,1.4h-0.3c-3.9-0.2-7.7-0.6-11.5-1.4
               c-4.6-1.3-9-3.1-13.2-5.5c-6.6-3.9-12.2-9.1-16.6-15.3c-0.3-0.4-0.5-1-1.1-1.2l-4-8c0-0.2-0.1-0.5-0.1-0.7
               c-2.9-7.1-3.8-14.5-3.8-22c0-7,0-13.9,0-20.9c0-8.7,0-17.3-0.1-26c0-2.6,0-5.2,0-7.9c0.1-0.7,0.1-1.3,0.1-2
               c-0.3-2.2,0.6-4.5,2.5-5.8L250.8,112.2 M250.8,107.2H155c-1.1,0-2.1,0.3-3,1c-3.2,2.3-5,6.2-4.5,10.2c0,0.1,0,0.4,0,0.6
               c0,0.3,0,0.5,0,0.8c0,0.1,0,0.1,0,0.2v3.9v3.9l0,7.9c0,6.1,0,12.1,0,18.2l0,3.6c0,5.7,0,11.6,0,17.3c-0.1,9,1.3,16.7,4,23.6
               c0,0.1,0,0.1,0,0.2c0.1,0.5,0.2,0.9,0.4,1.3l0.3,0.6l3.7,7.4c0.3,0.7,0.8,1.2,1.4,1.7l0.1,0.1c4.8,6.8,11,12.5,18.1,16.8
               c4.5,2.5,9.3,4.5,14.3,5.9c0.2,0.1,0.4,0.1,0.6,0.1l0.2,0c4,0.8,8,1.3,12.1,1.5h0.4c3.8-0.1,7.6-0.5,11.3-1.3l1.2-0.2
               c0.3,0,0.6-0.1,0.8-0.2c0.2-0.1,0.3-0.1,0.5-0.2c0.1-0.1,0.3-0.1,0.4-0.1c10.4-2.8,19.7-8.6,26.8-16.6c1.3-1.5,2.6-3.1,3.8-4.6
               c0.5-0.7,1.1-1.3,1.6-2c0.2-0.3,0.4-0.6,0.6-0.9l2-4l2-4c0.1-0.2,0.2-0.4,0.3-0.6c1.8-4.7,3-9.5,3.7-14.4c0.2-2.3,0.5-5,0.5-7.7
               c0-11.2,0-22.6,0-33.7c0-4.4,0-8.9,0-13.3c0-0.4,0-0.8,0-1.3c0-0.2,0-0.5,0-0.7c0-0.1,0-0.1,0-0.2V120c0,0,0-0.1,0-0.1
               c0-0.3,0-0.5,0-0.8c0-0.3,0-0.7,0-0.9c0.4-6.3-3.3-9.2-5.5-10.4C252.5,107.4,251.7,107.2,250.8,107.2L250.8,107.2z"/>
       </g>
       <g class="floatingDefault">
       <g id="Grupo_358" transform="translate(125.6 84.776)">
           <path id="Polígono_18" class="st3" d="M60.6,10.6L69.5,48l35.6,9.3l-35.6,9.3L60.6,104l-8.9-37.4l-35.6-9.3L51.8,48L60.6,10.6z"
               />
           <g id="Grupo_350" transform="translate(1.494 0)">
               <path id="Polígono_17" class="st4" d="M60.8,10.1l8.9,37.1l35.6,9.3l-35.6,9.3l-8.9,37.1l-8.9-37.1l-35.6-9.3l35.6-9.3
                   L60.8,10.1z"/>
               <path id="Polígono_17_-_Contorno" class="st3" d="M60.7,14.1l-8.1,33.8l-32.6,8.5l32.6,8.5l8.1,33.8l8.1-33.8l32.6-8.5
                   l-32.6-8.5L60.7,14.1 M60.7,9.8l8.9,37.3l35.7,9.3l-35.7,9.3L60.7,103l-8.9-37.3l-35.7-9.3l35.7-9.3L60.7,9.8z"/>
           </g>
       </g>
       <g id="Grupo_359" transform="translate(27.734 84.776)">
           <path id="Polígono_18-2" class="st3" d="M33.8,9.8l3.5,14.9l14.1,3.7l-14.1,3.7l-3.5,14.9l-3.5-14.9l-14.1-3.7l14.1-3.7L33.8,9.8
               z"/>
           <path id="Polígono_17-2" class="st4" d="M34.8,9.8l3.5,14.7l14.1,3.7l-14.1,3.7l-3.5,14.7l-3.5-14.7l-14.1-3.7l14.1-3.7L34.8,9.8
               z"/>
           <path id="Polígono_17_-_Contorno-2" class="st3" d="M34.8,11.5l-3.2,13.3l-13,3.4l13,3.4l3.2,13.3L38,31.6l13-3.4l-13-3.4
               L34.8,11.5 M34.8,9.8l3.6,14.7l14.3,3.7l-14.3,3.7l-3.6,14.7l-3.6-14.7l-14.3-3.7l14.3-3.7L34.8,9.8z"/>
       </g>
       <g id="Grupo_360" transform="translate(177.582 50.521)">
           <path id="Polígono_18-3" class="st3" d="M26.9,10.4l2.1,8.5l8.6,2.1L29,23.1l-2.1,8.4l-2.1-8.4L16.2,21l8.6-2.1L26.9,10.4z"/>
           <path id="Polígono_17-3" class="st4" d="M28,9.8l2.1,8.3l8.6,2.1l-8.6,2.1L28,30.7l-2.1-8.3l-8.6-2.1l8.6-2.1L28,9.8z"/>
           <path id="Polígono_17_-_Contorno-3" class="st3" d="M28,10.8l-2,7.6l-7.9,1.9l7.9,1.9l2,7.6l2-7.6l7.9-1.9L30,18.3L28,10.8
                M28,9.8l2.2,8.3l8.7,2.1l-8.7,2.1L28,30.7l-2.2-8.3l-8.7-2.1l8.7-2.1L28,9.8z"/>
       </g>
       </g>
   </g>
   </svg>`;
        let trofeuDois = `<svg width="532" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 612.7 350" style="enable-background:new 0 0 612.7 299.8;" xml:space="preserve">
   <style type="text/css">
       .laranja{fill:#D8403B;}
       .st1{fill:#1F1F1F;}
       .st2{fill:#A6A6A6;}
       .st3{fill:#2A2929;}
       .st4{fill:#1DC18A;}
   </style>
   
   <g id="Grupo_406" transform="translate(69.335 -34.857)">
       <g id="Grupo_403" transform="translate(143.127 127.875)">
           <path id="Caminho_2586" class="laranja" d="M62.5,68.9c-1.3,0-2.6-0.7-3.3-1.8l-4.5-6.6c-3.9-5.7-7.7-11.4-11.6-17.1
               C36,33.1,29,22.8,21.9,12.4L14.6,1.8c-1.3-1.8-0.8-4.4,1.1-5.6c0.7-0.5,1.5-0.7,2.3-0.7H67c1.3,0,2.6,0.7,3.3,1.8l23.5,34.4
               l23.5-34.4c0.8-1.1,2-1.8,3.3-1.8h49.1c2.2,0,4,1.8,4,4c0,0.8-0.2,1.6-0.7,2.3l-32.5,47.7c-2.5,3.6-10.4,15.2-10.4,15.2
               c-0.7,1.1-2,1.8-3.3,1.8c-0.4,0-0.7,0-1-0.1c-0.7-0.2-1.4-0.5-2.1-0.9c-0.2-0.1-0.4-0.2-0.6-0.3c-8.2-4-17.2-6-26.2-6
               c-0.7,0-1.3,0-2,0c-10.7,0.3-21.1,3.4-30.2,9c-0.1,0.1-0.2,0.1-0.3,0.2C63.9,68.7,63.2,68.9,62.5,68.9z"/>
           <path id="Caminho_2587" class="st1" d="M169.8-1.8c0.7,0,1.3,0.6,1.3,1.3c0,0.3-0.1,0.5-0.2,0.8c-10.8,15.9-21.7,31.8-32.5,47.7
               c-3.5,5.1-6.9,10.2-10.4,15.2c-0.2,0.4-0.7,0.6-1.1,0.6c-0.1,0-0.2,0-0.3,0c-0.8-0.3-1.5-0.6-2.2-1.1c-8.5-4.1-17.9-6.3-27.4-6.2
               c-0.7,0-1.4,0-2,0c-11.2,0.3-22.1,3.5-31.5,9.4c-0.1,0-0.1,0.1-0.2,0.1c-0.2,0.1-0.4,0.2-0.6,0.2c-0.4,0-0.9-0.2-1.1-0.6
               C56,57.7,50.7,49.9,45.3,42c-9.5-13.9-19-27.8-28.4-41.7c-0.4-0.6-0.3-1.4,0.3-1.8c0.2-0.2,0.5-0.2,0.8-0.2H67
               c0.4,0,0.9,0.2,1.1,0.6l24.5,35.8c0.6,0.9,0.9,1.4,1.2,1.4s0.6-0.5,1.3-1.4c8.2-11.9,16.3-23.9,24.5-35.8c0.2-0.4,0.7-0.6,1.1-0.6
               L169.8-1.8 M169.8-7.2h-49.1c-2.2,0-4.3,1.1-5.6,2.9l-5.8,8.5L93.9,26.9L80.8,7.7L72.6-4.3c-1.3-1.8-3.3-2.9-5.6-2.9H18
               c-3.7,0-6.7,3-6.7,6.7c0,1.4,0.4,2.7,1.2,3.8l7.4,10.9c7,10.3,14,20.5,21,30.8c3.8,5.6,7.7,11.3,11.5,16.9l4.5,6.7
               c2,2.9,5.8,3.8,8.9,2.1c0.1-0.1,0.2-0.1,0.4-0.2c8.7-5.4,18.7-8.3,28.9-8.6c0.6,0,1.3,0,1.9,0c8.7,0,17.3,1.9,25.1,5.7
               c0.2,0.1,0.3,0.2,0.4,0.2c0.8,0.5,1.7,0.9,2.7,1.2c0.6,0.2,1.2,0.2,1.8,0.2c2.2,0,4.3-1.1,5.6-2.9l3-4.4c2.5-3.6,4.9-7.2,7.4-10.9
               l24.5-35.9l8-11.8c2.1-3.1,1.3-7.3-1.8-9.4C172.5-6.8,171.2-7.2,169.8-7.2L169.8-7.2z"/>
       </g>
       <g id="Grupo_404" transform="translate(159.442 186.144)">
           <path id="Caminho_2588" class="st2" d="M74.1,128.6c-0.4,0-0.8,0-1.3-0.1c-0.9-0.2-1.8-0.3-2.7-0.4c-1.8-0.3-3.6-0.6-5.5-1
               c-14.5-3.7-26.4-11.2-35.4-22.2c-10-12.2-15.4-27.5-15.3-43.2c0.1-11.2,3-22.3,8.4-32.1c5.3-9.4,12.8-17.4,21.7-23.4
               c0.2-0.1,0.3-0.2,0.5-0.3L45,5.7c0.2-0.1,0.4-0.2,0.6-0.3c9.9-6.1,21.2-9.5,32.9-9.8c0.7,0,1.4,0,2.1,0c9.9,0,19.7,2.2,28.6,6.5
               c0.3,0.1,0.6,0.3,0.8,0.4c0.3,0.2,0.7,0.4,1,0.5l2.2-0.1l0.4,1.5c0.1,0.1,0.3,0.1,0.4,0.2c6.1,3.5,11.5,8,16.2,13.3
               c19.6,22.2,22.3,54.5,6.8,79.7c-10.9,17.2-26.7,27.5-47,30.7C88.6,128.4,75.9,128.6,74.1,128.6z"/>
           <path id="Caminho_2589" class="st1" d="M80.6-1.8c9.5,0,18.9,2.1,27.4,6.2c1,0.5,4.1,2.1,4.7,2.4c17.5,10.3,29.2,28.3,31.3,48.5
               c1.7,14.2-1.6,28.6-9.3,40.7c-10.5,16.7-25.7,26.4-45.1,29.5c-1,0.1-12.3,0.3-15.4,0.3c-0.5,0-0.7,0-0.8,0c-2.7-0.5-5.4-0.8-8-1.4
               c-13.9-3.6-25.3-10.6-34-21.3c-9.6-11.7-14.8-26.4-14.7-41.5c0-10.8,2.8-21.4,8.1-30.8c5.1-9,12.2-16.7,20.9-22.4
               c0.1,0,0.1-0.1,0.2-0.1c0.4-0.2,0.8-0.4,1.2-0.6c9.5-5.9,20.4-9.1,31.5-9.4C79.2-1.8,79.9-1.8,80.6-1.8 M80.6-7.2
               c-0.7,0-1.5,0-2.2,0C66.3-6.9,54.5-3.3,44.2,3.1c-0.1,0-0.2,0.1-0.4,0.2s-0.3,0.1-0.4,0.2c-0.3,0.1-0.5,0.3-0.8,0.5
               C33.3,10.1,25.5,18.4,20,28.2c-5.7,10.2-8.7,21.7-8.8,33.4c-0.1,16.4,5.5,32.3,15.9,45c9.4,11.5,21.8,19.2,36.8,23.1
               c2,0.5,3.9,0.8,5.8,1.1c0.9,0.1,1.8,0.3,2.6,0.4c0.6,0.1,1.2,0.1,1.8,0.1c0.1,0,14.4-0.1,16.3-0.4c21.1-3.3,37.5-14,48.9-31.9
               c16.2-26.2,13.4-59.9-7-82.9C127.5,10.7,122,6.1,116,2.5l-1.1-0.6l-3.4-1.7l-0.2-0.1c-0.3-0.2-0.6-0.3-1-0.5
               C101.1-4.9,90.9-7.2,80.6-7.2L80.6-7.2z"/>
       </g>
   </g>
   
   <g class="floatingDefault">
   <g id="Grupo_378" transform="translate(-6497.854 -3092)">
       <path id="Caminho_2568" class="st3" d="M6696.3,3293.4l-193.6-68.5l125.3-125.7L6696.3,3293.4z"/>
       <g id="Grupo_348" transform="translate(6500.765 3092)">
           <path id="Caminho_2569" class="st4" d="M198.5,197.4L4.9,128.9L130.2,3.2L198.5,197.4z"/>
           <path id="Polígono_9_-_Contorno" class="st3" d="M196.9,195.8L129.8,5L6.7,128.5L196.9,195.8 M198.5,197.4L4.9,128.9L130.2,3.2
               L198.5,197.4z"/>
       </g>
   </g>
   <g id="Grupo_412" transform="translate(7434.409 2313.912) rotate(171)">
       <path id="Caminho_2568-2" class="st3" d="M6614.1,3211.2l-120.2-42.5l77.8-78.1L6614.1,3211.2z"/>
       <g id="Grupo_348-2" transform="translate(6499.716 3092)">
           <path id="Caminho_2569-2" class="st4" d="M116.3,116.8L-3.9,74.2L73.9-3.8L116.3,116.8z"/>
           <path id="Polígono_9_-_Contorno-2" class="st3" d="M115.3,115.7L73.6-2.7L-2.8,74L115.3,115.7 M116.3,116.8L-3.9,74.2L73.9-3.8
               L116.3,116.8z"/>
       </g>
   </g>
   </g>
   </svg>
   `;
        let trofeuTres = `<svg width="248" version="1.1" id="Camada_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 262.1 266.8" style="enable-background:new 0 0 262.1 266.8;" xml:space="preserve">
   <style type="text/css">
       .contorninho{fill:#2A2929;}
       .seilaqdiaboeisso{fill:#996056;}
       .otracoisa{fill:#FAC710;}
   </style>
   <g id="Grupo_485" transform="translate(-80.133 -65.383)">
       <g id="Grupo_423" transform="translate(-6505 -4399.37)">
           <path id="Caminho_2573" class="contorninho" d="M6777.2,4724.7c-3.8-1.9-6.2-4.8-6.5-9.2c-0.1-2.7,0-5.5-0.1-8.2c-0.1-1.3,0.7-2.6,1.9-3
               c1.2-0.5,2.6-0.2,3.5,0.8c1,0.9,1.9,1.9,2.8,2.9c1.7,1.9,1.2,4.3-1.2,5.2c-0.7,0.3-0.8,0.5-0.9,1.1c-0.2,2.5,1.6,4.8,4.2,5.1
               c2.4,0.2,4.5-1.5,4.8-3.9c0-0.1,0-0.2,0-0.3c0.2-4.6,0.1-9.2,0.2-13.8c0-0.8-0.5-1-1.1-1.4c-3.4-1.6-5.5-5.3-5-9.1
               c0.3-3.2,2.3-6,5.2-7.5c1.1-0.6,0.9-1.4,0.9-2.3c0-19.7,0-39.4,0-59.1v-52.8c-0.4-0.3-0.6-0.1-0.7,0.1c-5.8,6.5-13.1,9.4-21.8,9.4
               c-1.6,0-3.9-0.7-4.7,0.3c-0.8,1-0.3,3.2-0.3,4.8c0,13.7-8.3,24.5-21.3,27.8c-3.6,0.7-7.4,1-11.1,0.8c-1.2,0-1.5,0.3-1.5,1.5
               c0.1,4.4,0.1,8.8-1.3,13.1c-3.7,11.5-14.5,19.2-26.5,19.1c-0.9,0-1.7,0-2.6,0c0,0.8,0.6,1.1,0.9,1.5c6.1,7.1,6.7,17.4,1.7,25.3
               c-0.6,0.6-0.6,1.6,0,2.3c0.1,0.1,0.2,0.2,0.3,0.2c3.1,3,3.1,3.1,6.1,0.1c0.6-0.7,1.3-1.3,2.1-1.6c1.6-0.5,3.4,0.4,3.9,2
               c0.4,1.1,0.1,2.4-0.8,3.2c-2.1,2.2-4.3,4.4-6.5,6.5c-1.8,1.8-3.6,3.6-5.4,5.4c-1.5,1.5-3.3,1.6-4.6,0.3c-1.4-1.3-1.3-3.1,0.2-4.7
               c0.1-0.1,0.3-0.3,0.4-0.4c3.6-3.7,3.6-3.6-0.4-7c-0.3-0.4-0.8-0.4-1.2-0.1c0,0,0,0-0.1,0c-8.4,5.3-16.7,5.2-24.9-0.3
               c-0.6-0.4-1-0.4-1.4,0.1c-0.6,0.7-1.3,1.3-1.9,1.9c-11.3,11.3-22.5,22.5-33.8,33.8c-6.2,6.2-14.6,6.9-21.1,1.9
               c-6.7-5.3-7.8-15-2.5-21.6c0.4-0.5,0.8-0.9,1.2-1.4c15.3-15.4,30.6-30.7,46-46c2.3-2.6,6-3.6,9.3-2.5c0.9,0.4,2,0.1,2.6-0.7
               c18.8-18.8,37.6-37.7,56.4-56.5c18.6-18.6,37.2-37.2,55.8-55.8c5.3-5.3,13.7-3.4,15.8,3.5c0.4,1.3,0.5,2.8,0.2,4.2
               c-0.3,1.8-0.4,3.7-0.4,5.5c0,45.2,0,90.5,0,135.7c0,1.4,0.2,2.3,1.6,2.9c2.7,1.3,5.8,4,4.5,9.7c-0.7,3-2.9,5.5-5.7,6.7
               c-0.7,0.3-0.4,1-0.4,1.5c0,4.3,0,8.6,0,12.9c0,2.8-1.1,5.4-3,7.5c-1.5,1.7-3.6,2.9-5.8,3.3
               C6781.6,4726,6777.8,4724.9,6777.2,4724.7z M6617.2,4713.5c2.7-0.1,5.3-1.3,7.2-3.4c11.7-11.7,23.4-23.4,35.1-35.1
               c1-0.7,1.2-2,0.6-2.9c0,0-0.1-0.1-0.1-0.1c-3.4-5.9-3.8-13.1-1-19.3c0.2-0.6,1.1-1.3,0.3-1.8c-0.6-0.4-1.5,0.1-2.1,0.6
               c-0.4,0.3-0.7,0.7-1.1,1.1c-14.9,14.9-29.9,29.9-44.8,44.8c-0.3,0.3-0.6,0.6-0.9,1c-2.3,2.7-2.9,6.4-1.5,9.7
               C6610.5,4711.7,6613.6,4713.1,6617.2,4713.5z M6677.9,4639.8c1.8,0.1,3.5,0.3,5.2,0.7c1.3,0.4,2.7,0,3.5-1
               c32.7-32.7,65.4-65.4,98.1-98.1c1.5-1.5,2-4.3,0.9-5.5c-1.3-1.4-3.1-1.1-5.1,1c-33.7,33.7-67.5,67.5-101.2,101.2
               C6678.7,4638.5,6678.2,4639.1,6677.9,4639.8z M6691.5,4669.6c4.7-7.1,2.7-16.7-4.5-21.3s-16.7-2.7-21.3,4.5
               c-4.7,7.1-2.7,16.7,4.5,21.3c5.3,3.4,12.1,3.3,17.2-0.2c-1.3-1.2-2.6-2.2-3.7-3.4c-0.6-0.7-1.6-1-2.4-0.6
               c-4.8,1.4-9.9-1.3-11.4-6.2c-0.2-0.7-0.3-1.5-0.4-2.2c-0.3-3.7,1.8-7.1,5.2-8.7c3.2-1.8,7.1-1.3,9.8,1.1c3,2.3,4.2,6.2,3,9.8
               c-0.2,0.7-0.7,1.3,0.1,2.1C6689,4667,6690.2,4668.3,6691.5,4669.6z M6729.2,4606c13.2,1.2,24.2-10.4,22.9-22.9L6729.2,4606z
                M6695.2,4639.8c14.1,1.2,24.7-11.3,23.1-23.1L6695.2,4639.8z M6763.1,4572.3c11.7,0.9,21.9-7.9,22.8-19.6c0.1-1.1,0.1-2.1,0-3.2
               L6763.1,4572.3z M6789.2,4688.6c-1.7,0-3.1,1.4-3.1,3.1c0,0,0,0.1,0,0.1c0,1.7,1.4,3,3.1,3c1.7,0,3-1.4,3-3.1c0-1-0.6-2-1.4-2.6
               C6790.3,4688.8,6789.7,4688.6,6789.2,4688.6L6789.2,4688.6z M6678.6,4664c1.6,0,3-1.2,3.1-2.8c0.1-1.6-1.2-3-2.8-3.1
               s-3,1.2-3.1,2.8c0,0,0,0.1,0,0.1C6675.7,4662.5,6677,4663.9,6678.6,4664z"/>
           <path id="Caminho_2574" class="seilaqdiaboeisso" d="M6617.2,4713.5c-3.6-0.4-6.7-1.9-8.3-5.5c-1.5-3.3-0.8-7.2,1.6-9.8
               c0.7-0.8,1.4-1.5,2.1-2.2c14.5-14.5,29-28.9,43.4-43.4c0.4-0.4,0.7-0.7,1.1-1.1c0.6-0.5,1.5-1,2.1-0.6c0.8,0.5-0.1,1.2-0.3,1.8
               c-2.8,6.2-2.4,13.4,1,19.3c0.7,0.9,0.6,2.2-0.3,3c0,0-0.1,0.1-0.1,0.1c-11.7,11.7-23.5,23.4-35.1,35.1
               C6622.5,4712.2,6620,4713.4,6617.2,4713.5z"/>
           <path id="Caminho_2575" class="seilaqdiaboeisso" d="M6677.9,4639.8c0.3-0.7,0.8-1.3,1.4-1.7c33.7-33.7,67.5-67.5,101.2-101.2
               c2-2,3.8-2.3,5.1-1c1.1,1.1,0.6,4-0.9,5.5c-32.7,32.7-65.4,65.4-98.1,98.1c-0.8,1.1-2.2,1.5-3.5,1
               C6681.4,4640.1,6679.7,4639.9,6677.9,4639.8z"/>
           <path id="Caminho_2576" class="seilaqdiaboeisso" d="M6789.1,4688.6c1.7,0.1,3.1,1.5,3.1,3.2c-0.1,1.7-1.5,2.9-3.2,3c-1.7,0-3-1.4-3-3
               C6786,4690.1,6787.3,4688.6,6789.1,4688.6C6789.1,4688.6,6789.1,4688.6,6789.1,4688.6z"/>
           <path id="Caminho_2577" class="seilaqdiaboeisso" d="M6678.6,4664c-1.6-0.1-2.8-1.4-2.9-3c0-1.6,1.4-2.9,3-2.9c1.6,0,2.9,1.4,2.9,3
               c0,0,0,0.1,0,0.1C6681.5,4662.8,6680.2,4664,6678.6,4664z"/>
       </g>
       <g class="floatingDefault">
       <g id="Grupo_358" transform="translate(80.133 119.275)">
           <path id="Polígono_18" class="contorninho" d="M52.5,7.3l8.9,37.4L96.9,54l-35.6,9.3l-8.9,37.4l-8.9-37.4L8,54l35.6-9.3L52.5,7.3z"/>
           <g id="Grupo_350" transform="translate(1.494 0)">
               <path id="Polígono_17" class="otracoisa" d="M52.6,6.8l8.9,37.1l35.6,9.3l-35.6,9.3l-8.9,37.1l-8.9-37.1L8.1,53.2l35.6-9.3L52.6,6.8z"
                   />
               <path id="Polígono_17_-_Contorno" class="contorninho" d="M52.5,10.8l-8.1,33.8l-32.6,8.5l32.6,8.5l8.1,33.8l8.1-33.8l32.6-8.5
                   l-32.6-8.5L52.5,10.8 M52.5,6.6l8.9,37.3l35.7,9.3l-35.7,9.3l-8.9,37.3l-8.9-37.3L8,53.1l35.7-9.3L52.5,6.6z"/>
           </g>
       </g>
       <g id="Grupo_424" transform="translate(283.334 65.383)">
           <path id="Polígono_18-2" class="contorninho" d="M30,6.9l4.4,18.5L52,30.1l-17.6,4.6L30,53.2l-4.4-18.5L8,30.1l17.6-4.6L30,6.9z"/>
           <g id="Grupo_350-2" transform="translate(0.74 0)">
               <path id="Polígono_17-2" class="otracoisa" d="M30.1,6.7l4.4,18.4l17.6,4.6l-17.6,4.6l-4.4,18.4l-4.4-18.4L8,29.6l17.6-4.6L30.1,6.7z"
                   />
               <path id="Polígono_17_-_Contorno-2" class="contorninho" d="M30,8.7l-4,16.7L9.9,29.6L26,33.8l4,16.7l4-16.7l16.1-4.2L34,25.4L30,8.7
                    M30,6.6L34.4,25l17.7,4.6l-17.7,4.6L30,52.7l-4.4-18.4L8,29.6L25.6,25L30,6.6z"/>
           </g>
       </g>
       </g>
   </g>
   </svg>
   `;


        if (Anima.player.acertos >= 4){
            return trofeuUm;
        } else if (Anima.player.acertos >= 2 && Anima.player.acertos < 4) {
            return trofeuDois;
        } else {
            return trofeuTres;
        }
    },

    onClickEnviar: function () {
        let url = Anima.configs.api + 'inserirInscricao';

        Anima.sound.btnS.play();

        Anima.player.nome = document.getElementById('nomei').value || '';
        Anima.player.fone = document.getElementById('fonei').value || '';
        Anima.player.link = document.getElementById('linki').value || '';
        Anima.player.aceitolgpd = document.getElementById('aceitoLGPD').checked;

        if (!Anima.player.nome) {
            alert('O campo nome é obrigatório para a sua inscrição.');
            return;
        }

        if (!Anima.player.fone) {
            alert('O campo nome é obrigatório para a sua inscrição.');
            return;
        }

        if (!Anima.player.aceitolgpd) {
            alert('Você precisa aceitar os termos para enviar sua inscrição.');
            return;
        }


        Anima.postRequest(url, Anima.player, (response) => {
            if (response.error) {
                alert('Falha ao enviar. Por favor, tente novamente!');
                return;
            }

            alert('Enviado com sucesso!');
        });
    },

    postRequest: function (url, dto, _cb) {
        let xhr = new XMLHttpRequest();

        // dto.token = localStorage.tokenJogo;

        xhr.open('POST', url, true);

        // xhr.timeout = 10000;

        // xhr.ontimeout = function (e) {
        //     return Msg.alert('Erro :(', 'Algo de errado não está certo. Parece que acabou o tempo');
        // };

        xhr.setRequestHeader('Content-type', 'application/json');

        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                return _cb(JSON.parse(xhr.responseText));
            }

            if (xhr.readyState == 4 && xhr.status == 201) {
                return _cb(JSON.parse(xhr.responseText));
            }
        };

        xhr.send(JSON.stringify(dto));
    },
};