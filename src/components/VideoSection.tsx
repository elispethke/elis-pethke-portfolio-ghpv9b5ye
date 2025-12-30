export const VideoSection = () => {
  return (
    <section className="py-12 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Introduction
          </h2>
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 bg-black relative">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=7B5gM8rD4Z9qZ1nE"
              title="Elis Pethke Introduction"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
