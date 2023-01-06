window.addEventListener("DOMContentLoaded", init);

const width = 960;
const height = 540;

function init() {
    const renderer = new THREE.WebGLRenderer({
        canvas: document.querySelector("#myCanvas")
    });
    renderer.setSize(width, height);

    const scene = new THREE.Scene();
    
    const camera = new THREE.PerspectiveCamera(45, width/height, 1, 10000);
    camera.position.set(0, 0, +1000);

    const geometry = new THREE.SphereGeometry(300, 30, 30);

    // 画像の読み込み
    const loader = new THREE.TextureLoader();
    const texture = loader.load("img/earthmap1k.jpg");

    // マテリアルにテクスチャーを生成
    const material = new THREE.MeshStandardMaterial({
        map: texture
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    
    scene.add(mesh);

    // 平行光源
    const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    tick();

    function tick() {
        mesh.rotation.y += 0.01;
        renderer.render(scene, camera);
        requestAnimationFrame(tick);
    }
}