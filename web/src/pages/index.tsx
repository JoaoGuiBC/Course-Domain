import Head from 'next/head';
import Image from 'next/image';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { withApollo } from '../lib/withApollo';
import {
  ChatIcon,
  ClockIcon,
  DocumentTextIcon,
  SupportIcon,
} from '@heroicons/react/solid';

const advantages = [
  {
    name: 'Suporte 1-1',
    description:
      'Tire dúvidas diretamente com nosso time de devs pronto para te ajudar.',
    icon: SupportIcon,
  },
  {
    name: 'Certificado de aproveitamento',
    description:
      'Emita um certificado de conclusão que realmente mostre seu aproveitamento no curso.',
    icon: DocumentTextIcon,
  },
  {
    name: 'Comunidade de alunos(as)',
    description:
      'Compartilhe sua jornada de aprendizado com milhares de outras pessoas no dia-a-dia com a comunidade exclusiva.',
    icon: ChatIcon,
  },
  {
    name: 'Acesso vitalício',
    description:
      'Não tenha pressa em estudar, receba acesso vitalício aos conteúdos dos cursos para estudar quando quiser.',
    icon: ClockIcon,
  },
];

function Home() {
  return (
    <>
      <Head>
        <title>Course-Domain</title>
      </Head>

      <div className="bg-white">
        <div className="relative overflow-hidden">
          <Header />
          <main>
            <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
              <div className="mx-auto max-w-7xl lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                    <div className="lg:py-24">
                      <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                        <span className="block">Cursos</span>
                        <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                          EXCLUSIVOS
                        </span>
                      </h1>
                      <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                        Adquira novos conhecimentos através de cursos práticos e
                        domine novas habilidades.
                      </p>
                    </div>
                  </div>
                  <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                    <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                      {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                      <Image
                        className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                        src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                        alt=""
                        height={450}
                        width={450}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature section with grid */}
            <div className="relative bg-white py-16 sm:py-24 lg:py-32">
              <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
                <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
                  Tudo que você precisa
                </h2>
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Vantagens de estudar conosco
                </p>
                <div className="mt-12">
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {advantages.map((advantage) => (
                      <div key={advantage.name} className="pt-6">
                        <div className="flow-root bg-gray-50 rounded-sm px-6 pb-8">
                          <div className="-mt-6">
                            <div>
                              <span className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-sm shadow-lg">
                                <advantage.icon
                                  className="h-6 w-6 text-white"
                                  aria-hidden="true"
                                />
                              </span>
                            </div>
                            <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                              {advantage.name}
                            </h3>
                            <p className="mt-5 text-base text-gray-500">
                              {advantage.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default withApollo(Home);
