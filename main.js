// 1. Escena y Cámara
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a1a); // Tono oscuro estilo Ghosts

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// 2. Iluminación
const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
scene.add(light);

// 3. El Suelo (Grid táctico)
const grid = new THREE.GridHelper(100, 20, 0x888888, 0x444444);
scene.add(grid);

// 4. Posición inicial del jugador
camera.position.set(0, 1.6, 5); // 1.6m es la altura promedio de los ojos

// 5. Lógica de Movimiento Táctil Simple
let moveForward = false;
const fireBtn = document.getElementById('fire-button');

// Evento de disparo
fireBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    console.log("¡Bang! Disparo efectuado.");
    // Aquí añadirías la lógica de Raycaster para detectar impacto
});

// 6. Ciclo de Animación (Game Loop)
function animate() {
    requestAnimationFrame(animate);
    
    // Simulación de movimiento constante hacia adelante para prueba
    // En un juego real, esto se ligaría al Joystick
    renderer.render(scene, camera);
}

// Ajuste de pantalla al rotar el móvil
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

animate();
