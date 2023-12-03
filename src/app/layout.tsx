"use client";
import './globals.scss'
import { Inter } from 'next/font/google'
import { useState } from 'react'
import { ethers } from 'ethers'
import Web3Modal from 'web3modal'
import WalletConnectProvider from '@walletconnect/web3-provider'
import { AccountContext } from '../context/context'
import 'easymde/dist/easymde.min.css'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  /* create local state to save account information after signin */
  const [account, setAccount] = useState<String>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const route = usePathname();

  /* web3Modal configuration for enabling wallet access */
  async function getWeb3Modal() {
    const web3Modal = new Web3Modal({
      cacheProvider: false,
      providerOptions: {
        walletconnect: {
          package: WalletConnectProvider,
          options: {
            infuraId: "842d41ce9b3249419353f3ea6147e27b",
          },
        },
      },
    })
    return web3Modal
  }

  /* the connect function uses web3 modal to connect to the user's wallet */
  async function connect() {
    try {
      const web3Modal = await getWeb3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const accounts = await provider.listAccounts()
      setAccount(accounts[0])
      localStorage.setItem('isWalletConnected', 'true');
    } catch (err) {
      console.log('error:', err)
    }
  }

  const links = [
    {
      name: 'Programa',
      link: '/'
    },
    {
      name: 'Status das Transferências Especiais',
      link: '/status'
    },
    {
      name: 'Plano de Ação',
      link: '/'
    },
    {
      name: 'Empenho',
      link: '/'
    },
    {
      name: 'Documento Hábil',
      link: '/'
    },
    {
      name: 'Ordem de Pagamento',
      link: '/'
    },
    {
      name: 'Informe de pagamento',
      link: '/payment'
    },
    {
      name: 'Prestação de Contas',
      link: '/prestar-contas'
    }
  ]

  return (
    <html lang="en">
      <body className={inter.className}>

        <nav className="nav">
          <div className="header">
            <div>
              <img src="https://especiais.transferegov.sistema.gov.br/transferencia-especial/assets/images/logo.png" alt="" width={140}/>
            </div>
            {
              !account ? (
                <>
                  <div className="accountInfo">
                    <button className='buttonStyle' onClick={connect}>
                      <img src="https://ik.imagekit.io/abkvohwfl/user_7ylrB8LtY.png" alt="" width={20}/>
                      <p>
                        Entrar
                      </p>
                    </button>
                  </div>
                  <div className='mobileMenu'>
                    <button className='' onClick={() => setIsOpen(!isOpen)}>
                      <img src="https://ik.imagekit.io/abkvohwfl/menu_v4-j3udvl.png" alt="" width={20} />
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <p className="accountInfo text-black">{account}</p>
                </>
              )
            }
          </div>
        </nav>
        <main className="mainBase">
          <aside className={`asideMenu ${isOpen ? 'open' : ''}`}>
            <ul>
              {
                links.map((link, index) => (
                  <li key={index} onClick={() => setIsOpen(false)}>
                    <Link href={link.link} className={route === link.link && route !== '/' ? 'active' : ''}>
                      {link.name}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </aside>
          <AccountContext.Provider value={account}>
            {children}
          </AccountContext.Provider>
        </main>
      </body>
    </html>
  )
}
