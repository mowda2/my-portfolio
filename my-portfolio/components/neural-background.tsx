"use client";

import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: number[];
}

export function NeuralBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const nodesRef = useRef<Node[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const scrollYSpring = useSpring(scrollY, springConfig);
  
  const opacity = useTransform(scrollYSpring, [0, 500], [0.6, 0.3]);
  const scale = useTransform(scrollYSpring, [0, 1000], [1, 1.1]);

  const initNodes = useCallback((width: number, height: number) => {
    const nodeCount = Math.min(Math.floor((width * height) / 25000), 80);
    const nodes: Node[] = [];
    
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 2 + 1,
        connections: [],
      });
    }
    
    // Pre-calculate potential connections
    nodes.forEach((node, i) => {
      nodes.forEach((other, j) => {
        if (i !== j) {
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            node.connections.push(j);
          }
        }
      });
    });
    
    return nodes;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      nodesRef.current = initNodes(canvas.width, canvas.height);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;
      
      // Update and draw nodes
      nodes.forEach((node, i) => {
        // Mouse interaction
        const dx = mouse.x - node.x;
        const dy = mouse.y - node.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        
        if (dist < 150) {
          const force = (150 - dist) / 150;
          node.vx -= (dx / dist) * force * 0.02;
          node.vy -= (dy / dist) * force * 0.02;
        }
        
        // Update position
        node.x += node.vx;
        node.y += node.vy;
        
        // Boundary check with soft bounce
        if (node.x < 0 || node.x > canvas.width) {
          node.vx *= -0.8;
          node.x = Math.max(0, Math.min(canvas.width, node.x));
        }
        if (node.y < 0 || node.y > canvas.height) {
          node.vy *= -0.8;
          node.y = Math.max(0, Math.min(canvas.height, node.y));
        }
        
        // Damping
        node.vx *= 0.99;
        node.vy *= 0.99;
        
        // Draw connections
        nodes.forEach((other, j) => {
          if (i < j) {
            const cdx = node.x - other.x;
            const cdy = node.y - other.y;
            const cdist = Math.sqrt(cdx * cdx + cdy * cdy);
            
            if (cdist < 180) {
              const alpha = (1 - cdist / 180) * 0.15;
              ctx.beginPath();
              ctx.moveTo(node.x, node.y);
              ctx.lineTo(other.x, other.y);
              ctx.strokeStyle = `rgba(0, 229, 204, ${alpha})`;
              ctx.lineWidth = 0.5;
              ctx.stroke();
            }
          }
        });
        
        // Draw node
        const nodeAlpha = dist < 150 ? 0.8 : 0.4;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 229, 204, ${nodeAlpha})`;
        ctx.fill();
        
        // Glow effect for nodes near mouse
        if (dist < 100) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
          const gradient = ctx.createRadialGradient(
            node.x, node.y, 0,
            node.x, node.y, node.radius * 3
          );
          gradient.addColorStop(0, "rgba(0, 229, 204, 0.3)");
          gradient.addColorStop(1, "rgba(0, 229, 204, 0)");
          ctx.fillStyle = gradient;
          ctx.fill();
        }
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [initNodes]);

  return (
    <motion.div
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity, scale }}
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      {/* Topographic overlay */}
      <div className="absolute inset-0 topo-pattern opacity-30" />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50" />
    </motion.div>
  );
}

// Animated connection lines between sections
export function SectionConnector({ className }: { className?: string }) {
  return (
    <div className={`relative h-24 w-full overflow-hidden ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0 50 Q 25 20, 50 50 T 100 50"
          fill="none"
          stroke="url(#gradient-line)"
          strokeWidth="0.5"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(0, 229, 204, 0)" />
            <stop offset="50%" stopColor="rgba(0, 229, 204, 0.5)" />
            <stop offset="100%" stopColor="rgba(0, 229, 204, 0)" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Animated pulse along the line */}
      <motion.div
        className="absolute top-1/2 w-2 h-2 rounded-full bg-cyan-400"
        style={{ transform: "translate(-50%, -50%)" }}
        animate={{
          left: ["0%", "100%"],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
}

// Floating geometric shapes for hero
export function FloatingNodes() {
  const nodes = useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      size: 4 + Math.random() * 8,
      delay: Math.random() * 2,
      duration: 4 + Math.random() * 4,
    })), []
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute rounded-full border border-cyan-500/30 bg-cyan-500/5"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            width: node.size,
            height: node.size,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: node.duration,
            delay: node.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Connection lines between some nodes */}
      <svg className="absolute inset-0 w-full h-full">
        {nodes.slice(0, 6).map((node, i) => {
          const nextNode = nodes[(i + 3) % nodes.length];
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${nextNode.x}%`}
              y2={`${nextNode.y}%`}
              stroke="rgba(0, 229, 204, 0.1)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 2,
                delay: node.delay,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
