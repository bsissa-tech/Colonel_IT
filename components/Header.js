import Image from 'next/image'

export default function Header() {
  return (
    <div className="p-4 border-b fixed w-full z-50 bg-white">
      <div className="max-w-5xl mx-auto flex items-center">
        <div className="flex-shrink-0">
          <Image src="/logo.png" alt="Logo" width={100} height={100} />
        </div>
        <div className="text-left ml-4">
          <h1
            className="inline-block font-caveat text-transparent bg-clip-text text-5xl font-bold bg-gradient-to-r from-[#eab308] to-[#a855f7] pr-4">
            Colonel-AI
          </h1>
        </div>
      </div>
    </div>
  )
}
