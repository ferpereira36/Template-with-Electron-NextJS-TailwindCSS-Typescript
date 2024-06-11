import Image from 'next/image'
import Link from 'next/link'
import electronImg from '@/assets/images/electron.svg'
import typescriptImg from '@/assets/images/typescript.svg'
import nextjsImg from '@/assets/images/nextjs.svg'
import reactImg from '@/assets/images/react.svg'
import tailwindcssImg from '@/assets/images/tailwindcss.svg'

export default function Home() {
  return (
    <main className="bg-gray-800 flex h-screen w-full flex-col items-center justify-center p-24">
      <div className="text-2xl font-bold text-white">
        Template for Applications Desktop
      </div>
      <div className="text-white">
        by ferpereira36 (
        <Link
          href="https://github.com/ferpereira36"
          className="text-blue-600 hover:text-blue-700 hover:underline"
        >
          GitHub
        </Link>
        )
      </div>
      <div className="mt-32 flex items-center justify-center gap-5">
        <div className="flex flex-col items-center gap-1 text-xs text-white">
          <Image
            src={electronImg}
            alt="icon electron"
            className="h-12 w-12 object-cover"
          />
          Electron
        </div>
        <span className="text-lg text-white">+</span>
        <div className="flex flex-col items-center gap-1 text-xs text-white">
          <Image
            src={typescriptImg}
            alt="icon typescript"
            className="h-12 w-12 object-cover"
          />
          Typescript
        </div>
        <span className="text-lg text-white">+</span>
        <div className="flex flex-col items-center gap-1 text-xs text-white">
          <Image
            src={nextjsImg}
            alt="icon nextjs"
            className="h-12 w-12 object-cover"
          />
          NextJS
        </div>
        <span className="text-lg text-white">+</span>
        <div className="flex flex-col items-center gap-1 text-xs text-white">
          <Image
            src={reactImg}
            alt="icon react"
            className="h-12 w-12 object-cover"
          />
          React
        </div>
        <span className="text-lg text-white">+</span>
        <div className="flex flex-col items-center gap-1 text-xs text-white">
          <Image
            src={tailwindcssImg}
            alt="icon tailwindcss"
            className="h-12 w-12 object-cover"
          />
          Tailwind CSS
        </div>
      </div>
    </main>
  )
}
