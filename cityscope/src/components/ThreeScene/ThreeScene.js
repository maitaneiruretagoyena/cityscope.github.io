import React, { Component } from "react";
import * as THREE from "three";

import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

const style = {
    height: "100vh"
};
export default class ThreeScene extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.count = 500;
        this.paths = ["./resources/mlcs.obj", "./resources/legoBrick.obj"];
    }

    componentDidMount() {
        this._sceneSetup();
        this._loadOBJmodel();
        this.startAnimationLoop();
        window.addEventListener("resize", this.handleWindowResize);
    }

    componentWillUnmount() {
        window.cancelAnimationFrame(this.requestID);
        window.removeEventListener("resize", this.handleWindowResize);
    }

    _sceneSetup = () => {
        const width = this.mountingDiv.clientWidth;
        const height = this.mountingDiv.clientHeight;
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0x1d1f21);
        this.camera = new THREE.PerspectiveCamera(
            30,
            window.innerWidth / window.innerHeight,
            1,
            1000
        );

        var ambientLight = new THREE.AmbientLight(0xcccccc, 0.2);
        this.scene.add(ambientLight);
        let pointLight = new THREE.PointLight(0xffffff, 0.8, 100);
        pointLight.position.set(0, 0, 0);
        this.camera.add(pointLight);
        this.scene.add(this.camera);
        this.renderer = new THREE.WebGLRenderer({ antialias: true });
        this.renderer.shadowMap.enabled = true;
        this.renderer.setSize(width, height);
        this.mountingDiv.appendChild(this.renderer.domElement);
    };

    _loadOBJmodel = () => {
        let count = this.count;
        let rnd = this._rnd;
        let scene = this.scene;
        let material = new THREE.MeshStandardMaterial({
            color: "white"
        });

        var loader = new OBJLoader();

        this.paths.forEach(URL => {
            loader.load(URL, function(object) {
                var wrapperObj = new THREE.Geometry();
                var objMesh = new THREE.Mesh();
                object.traverse(function(child) {
                    if (child instanceof THREE.Mesh) {
                        objMesh = child;
                    }
                });
                var mlcsGeom = new THREE.Geometry().fromBufferGeometry(
                    objMesh.geometry
                );
                mlcsGeom.scale(0.25, 0.25, 0.25);
                for (let i = 0; i < count; i++) {
                    let clone = mlcsGeom.clone();
                    clone.translate(rnd(-50, 50), rnd(-50, 50), rnd(-50, 50));
                    clone.rotateX(rnd(-50, 50));
                    clone.rotateY(rnd(-50, 50));
                    clone.rotateZ(rnd(-50, 50));
                    wrapperObj.merge(clone);
                }

                let motherMesh = new THREE.Mesh(wrapperObj, material);
                scene.add(motherMesh);
            });
        });
    };

    _rnd = (min, max) => {
        return Math.random() * (max - min) + min;
    };

    handleWindowResize = () => {
        const width = this.mountingDiv.clientWidth;
        const height = this.mountingDiv.clientHeight;
        this.renderer.setSize(width, height);
        this.camera.aspect = width / height;
        this.camera.updateProjectionMatrix();
    };

    startAnimationLoop = () => {
        this.animate();
        this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
    };

    animate = () => {
        let timer = Date.now() * 0.00005;
        this.camera.position.x = Math.sin(timer) * 5;
        this.camera.position.z = Math.cos(timer) * 5;
        this.camera.position.y = Math.cos(timer) * 5;

        this.camera.lookAt(this.scene.position);
        this.renderer.render(this.scene, this.camera);
    };

    render() {
        return (
            <React.Fragment>
                <div style={style} ref={div => (this.mountingDiv = div)}></div>
                <div id="title" className="center-page">
                    <h1 className="legotitle">
                        <u>
                            <a href="https://github.com/CityScope">
                                here we build CityScope
                            </a>
                        </u>
                    </h1>

                    <a href="https://www.media.mit.edu/projects/cityscope/overview/">
                        <img
                            src="./resources/logo.png"
                            alt=""
                            className="resize"
                        />
                    </a>
                </div>
            </React.Fragment>
        );
    }
}
