export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center">
      <h2 className="text-4xl font-bold mb-2">Transforming Ideas into Reality</h2>
      <p className="text-muted-foreground mb-6">
        Passionate & experienced in developing web apps. Specialized in transforming ideas into beautifully crafted products.
      </p>

      <div className="flex space-x-4">
        <button className="bg-black text-white px-4 py-2 rounded">Let's Talk</button>
        <button className="border px-4 py-2 rounded">My Work →</button>
      </div>

      <div className="mt-10 text-sm text-muted-foreground">
        Relied on by companies near, far, and worldwide.
        <div className="mt-4 flex gap-4 overflow-x-auto">
          {/* Replace with actual logos */}
          {[1, 2, 3, 4, 5].map(i => (
            <div key={i} className="w-20 h-10 bg-gray-200 rounded" />
          ))}
        </div>
      </div>
    </section>
  )
}
