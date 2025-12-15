import { useEffect } from "react";

import NavBar from "./NavBar";
import Footer from "./Footer";

import "./Layout.css";

function Layout({ children }) {
  
  useEffect(() => {
    const canvas = document.getElementById("star-canvas");
    const ctx = canvas.getContext("2d");

    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = [];
    const shootingStars = [];
    const nebulaWaves = [];

    // ======== STAR FIELD ========
    for (let i = 0; i < 200; i++) {
      stars.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 1.8 + 0.4,
        alpha: Math.random() * 2 * Math.PI,
        colorShift: Math.random() * 1,
        speedY: Math.random() * 0.15 + 0.03,
      });
    }

    // ======== SHOOTING STAR SPAWNER ========
    function spawnShootingStar() {
      if (shootingStars.length > 20) {
        shootingStars.shift();
      }

      const angleDeg = Math.random() * 20 + 35;
      const angle = angleDeg * (Math.PI / 180);

      const spawnBoxX = -(w * 0.3);
      const spawnBoxWidth = w * 1.0;
      const spawnX = spawnBoxX + Math.random() * spawnBoxWidth;

      const spawnY = -(h * 0.25);

      shootingStars.push({
        x: spawnX,
        y: spawnY,
        angle,
        length: Math.random() * 100 + 150,
        speed: Math.random() * 12 + 18,
        opacity: 1,
      });
    }

    // ======== NEBULA WAVES ========
    for (let i = 0; i < 3; i++) {
      nebulaWaves.push({
        x: Math.random() * w,
        y: Math.random() * h,
        radius: Math.random() * 300 + 200,
        alpha: Math.random() * 0.08 + 0.02,
        growing: Math.random() > 0.5,
      });
    }

    function drawNebula() {
      nebulaWaves.forEach((n) => {
        ctx.beginPath();
        const gradient = ctx.createRadialGradient(
          n.x,
          n.y,
          0,
          n.x,
          n.y,
          n.radius
        );
        gradient.addColorStop(0, `rgba(120,60,255,${n.alpha})`);
        gradient.addColorStop(1, `rgba(120,60,255,0)`);

        ctx.fillStyle = gradient;
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();

        if (n.growing) n.alpha += 0.0004;
        else n.alpha -= 0.0004;

        if (n.alpha >= 0.12) n.growing = false;
        if (n.alpha <= 0.02) n.growing = true;
      });
    }

    // ======== ANIMATION LOOP ========
    function animate() {
      ctx.clearRect(0, 0, w, h);

      drawNebula();

      stars.forEach((s) => {
        s.alpha += 0.02;
        s.colorShift += 0.001;

        const r = 100 + Math.sin(s.colorShift) * 80;
        const g = 140 + Math.sin(s.colorShift + 2) * 80;
        const b = 255;

        ctx.fillStyle = `rgba(${r},${g},${b},${0.3 + Math.sin(s.alpha) * 0.4})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();

        s.y += s.speedY;
        if (s.y > h) s.y = -10;
      });

      shootingStars.forEach((s, i) => {
        let tx = Math.cos(s.angle) * s.length;
        let ty = Math.sin(s.angle) * s.length;

        const grad = ctx.createLinearGradient(s.x, s.y, s.x + tx, s.y + ty);
        grad.addColorStop(1, `rgba(255,255,255,${s.opacity})`);
        grad.addColorStop(0, `rgba(0,255,255,0)`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x + tx, s.y + ty);
        ctx.stroke();

        s.x += Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;
        s.opacity -= 0.015;

        if (s.opacity <= 0) shootingStars.splice(i, 1);
      });

      requestAnimationFrame(animate);
    }

    animate();

    let spawnInterval = null;

    function startSpawner() {
      if (spawnInterval) return;
      spawnInterval = setInterval(() => {
        if (Math.random() < 0.7) spawnShootingStar();
      }, 900);
    }

    function stopSpawner() {
      if (!spawnInterval) return;
      clearInterval(spawnInterval);
      spawnInterval = null;
    }

    window.addEventListener("focus", startSpawner);
    window.addEventListener("blur", stopSpawner);

    startSpawner();

    window.addEventListener("resize", () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    });

    return () => {
      stopSpawner();
      window.removeEventListener("focus", startSpawner);
      window.removeEventListener("blur", stopSpawner);
    };
  }, []);

  return (
    <div className="layout">
      <div className="space-background">
        <canvas id="star-canvas"></canvas>
      </div>
      <NavBar />
      {
        //<SideBar />
      }
      <main className="layout-content">
        <div className="layout-content-slot">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
