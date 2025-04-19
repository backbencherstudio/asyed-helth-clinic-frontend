"use client"


import { Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface VideoPlayerProps {
  src: string
  poster?: string
  title?: string
}

export default function WatchClinicVideo({ src, poster, title }: VideoPlayerProps) {
   const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const [duration, setDuration] = useState(0)

  const [showControls, setShowControls] = useState(true)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    const handleDurationChange = () => {
      setDuration(video.duration)
    }
    const handleEnded = () => {
      setIsPlaying(false)
      setShowControls(true)
    }

    video.addEventListener("durationchange", handleDurationChange)
    video.addEventListener("ended", handleEnded)

    return () => {
    
      video.removeEventListener("durationchange", handleDurationChange)
      video.removeEventListener("ended", handleEnded)
    }
  }, [])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return

    if (isPlaying) {
      video.pause()
    } else {
      video.play()
    }
    setIsPlaying(!isPlaying)

    // Hide controls after play starts
    if (!isPlaying) {
      setTimeout(() => {
        setShowControls(false)
      }, 2000)
    } else {
      setShowControls(true)
    }
  }

  const handleVideoClick = () => {
    togglePlay()
  }
  const handleMouseMove = () => {
    if (isPlaying) {
      setShowControls(true)
      clearTimeout(controlsTimeout.current)
      controlsTimeout.current = setTimeout(() => {
        setShowControls(false)
      }, 3000)
    }
  }

  const controlsTimeout = useRef<NodeJS.Timeout | null>(null)
  return (
    <div className=" container pb-28 px-4">
   <div
      className="relative w-full h-[350px] lg:h-[500px] overflow-hidden rounded-lg shadow-lg bg-black aspect-video group "
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover cursor-pointer"
        poster={poster}
        onClick={handleVideoClick}
        playsInline
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Title Overlay */}
    

      {/* Big Play Button (when video is not playing) */}
      {!isPlaying && (
        <button
          className="absolute inset-0 flex items-center justify-center w-full h-full bg-black/30 transition-opacity duration-300"
          onClick={togglePlay}
          aria-label="Play video"
        >
          <div className="w-15 h-15 flex items-center justify-center rounded-full bg-white/40 shadow-lg transform transition-transform hover:scale-110">
            <Play className="w-5 h-5 text-PrimaryColor fill-PrimaryColor ml-1" />
          </div>
        </button>
      )}

      {/* Video Controls */}
      <div
        className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4 transition-opacity duration-300 ${isPlaying && !showControls ? "opacity-0" : "opacity-100"}`}
      >
      

        
      </div>
    </div>
    </div>
 
  )
}
