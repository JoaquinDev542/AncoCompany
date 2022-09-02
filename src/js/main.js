// window.addEventListener("load",function(){
//     console.log("Porfolio");

//     anime ({
//         targets: 'input',
//         value: [0, 1000],
//         round: 1,
//         duration: 1000,
//         easing: 'linear'
//     })

//     anime({
//         targets: "#box",
//         y: 1.5,
//         easing: "easeInOutSine",
//         duration: 3000,
//         direction: "alternate",
//         loop: true
//       });

//       anime({
//         targets: "#box",
//         y: 1, x: 2, z: 3,
//         easing: "easeInOutSine",
//         duration: 5000,
//         direction: "alternate",
//         loop: true
//       });
//       anime({
//         targets: "#box",
//         x: 1.25, y: 1.25, z: 1.25,
//         easing: "easeInOutSine",
//         duration: 2000,
//         direction: "alternate",
//         loop: true
//       });


    //anime(options);

//     console.log(anime);
    
//     box = document.getElementById("box");
//     salida = document.getElementById("salida");

//     box.addEventListener("click", function(){
//         alert ("buenas")

//     })

// })

// evio.addEventListener("click",function(){
//     if (contador == 0 ) {
//         alert ("Buenas")
//         contador = contador + 1;
//     } else {
//         contador = contador + 1;
//         salida.innerHTML = ("Has clicado" + " " + contador + " " + "veces")
//     }
// })

// window.addEventListener("load",function(){
//     let evio
//     let contador = 0
//     evio = document.getElementById("evio")
//     salida = document.getElementById("salida")
//     evio.addEventListener("click",function(){
//         if (contador == 0 ) {
//             alert ("Buenas")
//             contador = contador + 1;
//         } else {
//             contador = contador + 1;
//             salida.innerHTML = ("Has clicado" + " " + contador + " " + "veces")
//         }
//     })
// })

        import * as THREE from 'three';
        
		import { OrbitControls } from 'https://unpkg.com/three@0.139.0/examples/jsm/controls/OrbitControls.js';

		let scene, camera, renderer, controls;
	

		init();

		function init() {

			scene = new THREE.Scene();

			camera = new THREE.PerspectiveCamera(25, window.innerWidth / window.innerHeight, 0.1,1000);
			camera.position.set(0,1.5,-12);

			renderer = new THREE.WebGLRenderer({ antialias:true, alpha: true });
			renderer.setPixelRatio(window.devicePixelRatio);
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.shadowMap.enabled = true;
			renderer.shadowMap.type = THREE.VSMShadowMap
			renderer.outputEncoding = THREE.sRGBEncoding;
			renderer.setAnimationLoop( animation );
			
			let threejs_canvas = document.getElementById("threejs-canvas")
    		threejs_canvas.appendChild(renderer.domElement)

			controls = new OrbitControls(camera, renderer.domElement);
		    controls.target = new THREE.Vector3(0, 1.5, 0);
		    controls.enableDamping = true;
		    controls.maxPolarAngle = Math.PI/2
		    controls.minDistance = 2
            controls.maxDistance = 30
            controls.enablePan = false
		    

		    // Directional (Key) Light

		    const directional_light = new THREE.DirectionalLight( 0xffffff, 0.8 )
			directional_light.position.set( 0, 5, 0 )
			directional_light.castShadow = true
			directional_light.shadow.mapSize.width = 1024
			directional_light.shadow.mapSize.height = 1024
			directional_light.shadow.camera.far = 24
			directional_light.shadow.radius = 5
			directional_light.shadow.bias = - 0.00006
			scene.add( directional_light )


			// Hemisphere (Fill) Light

			const hemisphere_light = new THREE.HemisphereLight( 0xffffff, 0x000000, 0.2 );
			hemisphere_light.position.set( 0, 6, 0 );
			scene.add( hemisphere_light );


			// Materials

			const white_material = new THREE.MeshPhongMaterial({color: 0xffffff,});
			const shadow_material = new THREE.ShadowMaterial({opacity: 0.3});


			// Ground Plane

			const ground_geometry = new THREE.PlaneGeometry(20, 20);
			const ground = new THREE.Mesh(ground_geometry, shadow_material);
			ground.receiveShadow = true;
			ground.rotateX(-Math.PI / 2);
			scene.add(ground);


			// Icosahedron

			const icosahedron_geometry = new THREE.IcosahedronGeometry(1);
			const icosahedron = new THREE.Mesh( icosahedron_geometry, white_material );
			icosahedron.position.y = 1.5;
			icosahedron.castShadow = true;
			scene.add(icosahedron);


			// Anime Tweening

			anime({
			  	targets: [icosahedron.position],
			    y: 1.5,
			    easing: "easeInOutSine",
			    duration: 3000,
			    direction: "alternate",
			    loop: true
			});

			anime({
			    targets: [icosahedron.rotation],
			    y: 1, x: 2, z: 3,
			    easing: "easeInOutSine",
			    duration: 5000,
			    direction: "alternate",
			    loop: true
			});

			anime({
			    targets: [icosahedron.scale],
			    x: 1.25, y: 1.25, z: 1.25,
			    easing: "easeInOutSine",
			    duration: 2000,
			    direction: "alternate",
			    loop: true
			});

		}


		// Animation

		function animation(time) {
		    controls.update();
		    renderer.render(scene, camera);   
		}


		// Window Resize

	    window.addEventListener('resize', () => {
	        camera.aspect = window.innerWidth / window.innerHeight
	        camera.updateProjectionMatrix()
	        renderer.setSize(window.innerWidth, window.innerHeight)
	    })


		// UI Timer

	    const ui_timer = function () {

	        let time;
	        document.onmousemove = resetTimer;
	        document.ontouchmove = resetTimer;
	        document.onkeydown = resetTimer;

	        function timeout() {
	            document.body.removeAttribute("ui");
	        }

	        function resetTimer() {
	            clearTimeout(time);
	            document.body.setAttribute("ui","");
	            time = setTimeout(timeout, 3000);
	        }
	    };



	    // Fullscreen button

		if (document.fullscreenEnabled || document.webkitFullscreenEnabled || 
		  	document.msFullscreenEnabled ) {
			create_fullscreen_button();
		}


		function create_fullscreen_button() {

			let fullscreen_button = document.createElement("button");
			fullscreen_button.setAttribute('id','fullscreen-button');
			fullscreen_button.addEventListener("click", toggle_fullscreen);

			fullscreen_button.innerHTML  = `
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			`;

			document.body.appendChild(fullscreen_button);

		}


		function toggle_fullscreen() {

			 if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {  
		        if (document.documentElement.requestFullscreen) {
		            document.documentElement.requestFullscreen()
		        } else if (document.documentElement.mozRequestFullScreen) {
		            document.documentElement.mozRequestFullScreen()
		        } else if (document.documentElement.webkitRequestFullscreen) {
		            document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT)
		        }

		        document.body.setAttribute("fullscreen","") 

		    } else {
		        if (document.cancelFullScreen) {
		            document.cancelFullScreen()
		        } else if (document.mozCancelFullScreen) {
		            document.mozCancelFullScreen()
		        } else if (document.webkitCancelFullScreen) {
		            document.webkitCancelFullScreen()
		        }

		        document.body.removeAttribute("fullscreen") 

		    }
			    		
		}


		function check_fullscreen() {

	        // Because users can exit & enter fullscreen differently

	        if (document.fullscreenElement !== null) { 
	            document.body.setAttribute("fullscreen","") 
	        }

	        else  { 
	            document.body.removeAttribute("fullscreen") 
	        }
	    }

	    setInterval(function(){ check_fullscreen();}, 1000); 



		// Loading

    	window.onload = function () {
	        ui_timer()
	        document.body.removeAttribute("loading")
	        document.body.setAttribute("loaded","")
	    }