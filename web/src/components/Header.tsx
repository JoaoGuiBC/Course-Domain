import Image from 'next/image';
import Link from 'next/link';
import { Popover } from '@headlessui/react';
import { useUser } from '@auth0/nextjs-auth0';

export function Header() {
  const { user } = useUser();

  return (
    <Popover as="header" className="relative">
      <div className="bg-gray-900 py-6">
        <nav
          className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
          aria-label="Global"
        >
          <div className="flex items-center flex-1">
            <div className="flex items-center justify-between w-full md:w-auto">
              <Link href="/">
                <a>
                  <span className="sr-only">Workflow</span>
                  <Image
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg"
                    alt="logo"
                    width={32}
                    height={32}
                  />
                </a>
              </Link>
            </div>
            <div className="hidden space-x-8 md:flex md:ml-10">
              <a
                href="/enroll"
                className="text-base font-medium text-white hover:text-gray-300"
              >
                Faça sua matrícula
              </a>
            </div>
          </div>

          {user ? (
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link href="/app/courses">
                <a className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-sm text-white bg-sky-600 hover:bg-sky-700">
                  Meus cursos
                </a>
              </Link>
              <Link href="/api/auth/logout">
                <a className="text-base font-medium text-white hover:text-gray-300">
                  Sair do app
                </a>
              </Link>
            </div>
          ) : (
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link href="/api/auth/login">
                <a className="text-base font-medium text-white hover:text-gray-300">
                  Minha conta
                </a>
              </Link>
            </div>
          )}
        </nav>
      </div>
    </Popover>
  );
}
