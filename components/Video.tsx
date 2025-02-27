"use client";
import { useEffect, useRef, useState } from "react";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.onloadeddata = () => {
        setIsLoaded(true);
      };
    }

    // Cleanup function
    return () => {
      if (videoElement) {
        videoElement.onloadeddata = null;
      }
    };
  }, []);

  return (
    <div className="relative w-full max-w-lg h-80 md:h-96 rounded-lg overflow-hidden shadow-lg">
      {!isLoaded && (
        <div className="absolute inset-0 bg-indigo-100 flex items-center justify-center">
          <span className="text-indigo-600">Loading video...</span>
        </div>
      )}
      <video
        ref={videoRef}
        className="w-full h-full object-cover transition-opacity duration-500"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/video-poster.png"
      >
        <source src="https://res.cloudinary.com/ecomm2024/video/upload/v1740634459/wgxcuvvtndyo2xbchn2h.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute bottom-4 right-4 bg-white bg-opacity-70 px-3 py-1 rounded-full">
        <span className="text-sm font-medium text-indigo-700">
          Experience BharatBaithak
        </span>
      </div>
    </div>
  );
}
