"use client"
import { motion } from "framer-motion"

type DraggableStickerProps = {
  children: React.ReactNode;
  initialX?: number | string;
  initialY?: number | string;
  rotate?: number;
  className?: string;
}

export default function DraggableSticker({ children, initialX = 0, initialY = 0, rotate = 0, className = "" }: DraggableStickerProps) {
  return (
    <motion.div
      drag
      dragElastic={0.5}
      dragTransition={{ bounceStiffness: 400, bounceDamping: 10 }}
      whileDrag={{ scale: 1.15, rotate: rotate + 5, zIndex: 999 }}
      whileHover={{ scale: 1.05 }}
      initial={{ rotate }}
      style={{ 
        left: initialX, 
        top: initialY, 
        touchAction: 'none'
      }}
      className={`absolute cursor-grab active:cursor-grabbing hover:shadow-brutal-lg transition-shadow ${className}`}
    >
      {children}
    </motion.div>
  )
}
