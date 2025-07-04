'use client'
import Image from 'next/image'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export default function LeftPanel() {
  return (
    <div className="w-[40%] h-screen fixed left-0 top-0 px-6 py-10 flex flex-col justify-between border-r border-gray-200 dark:border-gray-700">
      <div>
        <Image src="/profile.jpg" alt="Yogesh Yadav" width={150} height={150} className="rounded-lg mb-4" />
        <h1 className="text-2xl font-bold">Yogesh Yadav</h1>
        <p className="text-muted-foreground">Full Stack Developer</p>
        <p className="text-sm mt-1">Delhi, India</p>

        <div className="flex space-x-4 mt-4">
          <Github className="cursor-pointer" />
          <Linkedin className="cursor-pointer" />
          <Twitter className="cursor-pointer" />
          <Mail className="cursor-pointer" />
        </div>
      </div>

      <div>
        {/* <a href="mailto:yogesh7132@example.com" className="text-blue-600 underline"> */}
        <a href="mailto:yogesh7132@gmail.com" >
            <p className="text-lg font-semibold">Let&apos;s Talk</p>
        </a>
      </div>
    </div>
  )
}
