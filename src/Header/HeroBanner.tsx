import React, { useRef, useState, useEffect } from 'react';

const HeroBanner: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState('/mars_ship.mp4');
  const [overlayOpacity, setOverlayOpacity] = useState('opacity-0');
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const isMobile = window.innerWidth <= 640;
  const videoStyle = isMobile
    ? (currentVideo === '/mars_ship.mp4'
      ? { objectPosition: 'calc(100% + 190px) center' }
      : { objectPosition: 'calc(100% + 650px) center' })
    : {};


  const handleVideoEnd = () => {
    setOverlayOpacity('opacity-100'); // Fade in the overlay
    setTimeout(() => {
      setCurrentVideo(currentVideo === '/mars_ship.mp4' ? '/distant_ship.mp4' : '/mars_ship.mp4');
    }, 1000);
  };

  const playVideo = () => {
    videoRef.current?.play().then(() => {
      setIsPlaying(true);
    }).catch(error => {
      console.error("Video play failed:", error);
    });
  };

  useEffect(() => {
    if (videoRef.current) {
      const handleLoadedData = () => {
        playVideo();
        setOverlayOpacity('opacity-0'); // Fade out the overlay
      };

      videoRef.current.addEventListener('loadeddata', handleLoadedData);
      videoRef.current.src = currentVideo;
      videoRef.current.load();

      return () => {
        videoRef.current?.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, [currentVideo]);

  return (
    <div className="relative h-screen w-full">
      {/* Black background */}
      <div className="absolute inset-0 bg-black z-0" />

      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover absolute z-10"
        style={videoStyle}
      >
        <source src={currentVideo} type="video/mp4" />
      </video>
      <div className="absolute bottom-0 left-0 w-full z-20 p-4">
        <h1 id="our-mission" className="p-4 sm:ml-16 font-bold text-6xl sm:text-7xl text-[#eee7e3] text-left">
          Airships Return
        </h1>
      </div>
    </div>
  );
};

export default HeroBanner;
