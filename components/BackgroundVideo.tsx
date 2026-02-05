'use client';

export default function BackgroundVideo() {
  // Montamos a URL com f_auto (formato), q_auto:eco (compressão máxima) e w_1280 (resolução)
  const videoUrl = "https://res.cloudinary.com/mandabir/video/upload/f_auto,q_auto:eco,vc_auto,w_1280/v1770311870/video_jixne5.mp4";

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="none" // Importante: impede que o vídeo trave o carregamento do site
        poster="/poster.webp"
        className="absolute inset-0 w-full h-full object-cover"
        onCanPlay={(e) => e.currentTarget.play()}
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Camada de escurecimento e blur para disfarçar a compressão */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-[1px]" />
    </div>
  );
}