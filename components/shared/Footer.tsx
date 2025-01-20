import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row ">
        <Link href='/' className="flex items-center">
          <Image className="ml-3"
            src="/assets/images/logo.svg"
            alt="logo"
            width={50}
            height={28}
          />
          <span className="ml-2 text-xl font-bold">Orchestrix</span>
        </Link>

      <p className="text-sm text-gray-500">
        © 2025 Orchestrix. All rights reserved. Built with love by the Orchestrix team.
      </p>
      </div>
    </footer>
  )
}

export default Footer