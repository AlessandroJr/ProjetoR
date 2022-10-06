// Sabe o cú? Toma lá

let Anima = {

    onClickAction: function (sceneid) {
        let nextframe = Anima.frames.find(e => e.sceneid === sceneid);

        if (nextframe.nextFrame) {
            nextframe.nextFrame();
        }
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
                    `;

                    $('#janelinha.janelinha').css('height', '25px');
                    $('#ola').css('margin-top', '23px');
                    $('#ola').html(html);

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
                                <div onclick="Anima.onClickAction(${frame.sceneid})" class="btn btn-cian btn-bottom">
                                    Bora 
                                    <span style="margin-top:5px" class="material-symbols-outlined">
                                        arrow_forward
                                    </span>
                                </div>
                            `;

                            $('.content').append(btn);
                            $('.btn-bottom').css('top', distancia);
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
                <div class="wrap-input100 validate-input" data-validate="Name is required">
                
                <input class="input100" type="text" name="name" placeholder="{seu_nome_aqui}">
                <span class="focus-input100"></span>
                </div>
                <div onclick="alert('teu cu')" class="material-symbols-outlined arrow-input">
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



        }
    }],

    iniciar: function () {
        let frame = this.frames[0];

        Anima.currentFrame = this.frames[0];

        this.renderBackdoor(frame);
        this.renderOverlay(frame);

        Anima.onWindowResize();

        Anima.currentFrame.onThisFrame();

        // frame.nextFrame();
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
    }
};

