'use client'
import { Github, Linkedin, Mail, Twitter, Code2 } from 'lucide-react'

export default function Header() {
  return (
    <header className="w-full py-4">
      <div className="flex justify-center space-x-4">
        {[Github, Linkedin, Twitter, Code2, Mail].map((Icon, i) => (
          <Icon key={i} className="w-5 h-5 text-muted-foreground hover:text-black dark:hover:text-white cursor-pointer" />
        ))}
      </div>
    </header>
  )
}
