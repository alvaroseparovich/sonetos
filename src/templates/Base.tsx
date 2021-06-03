import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Footer } from '../footer/Footer';
import { FooterBlocks } from '../footer/FooterBlocks';
import { FooterIconList } from '../footer/FooterIconList';
import { FooterThreeColumns } from '../footer/FooterThreeColumns';
import { Navbar } from '../navigation/Navbar';

type IMainProps = {
  meta: ReactNode;
  hero: ReactNode;
  children: ReactNode;
};

const Base = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-800">
    {props.meta}

    <Navbar>
      <li>
        <Link href="/">
          <a>Início</a>
        </Link>
      </li>
      <li>
        <Link href="/sobre-nos">
          <a>Sobre nós</a>
        </Link>
      </li>
    </Navbar>

    {/* {props.hero} */}

    {props.children}

    <Footer>
      <FooterThreeColumns
        block2={(
          <FooterBlocks title="Sabe Inglês? nossas recomendações:">
            <li><a href="https://chalcedon.edu/">Chalcedon Foundation</a></li>
            <li><a href="https://www.garynorth.com/freebooks/sidefrm2.htm">Gary North Freebooks</a></li>
            <li><a href="https://americanvision.org/">American Vision</a></li>
          </FooterBlocks>
        )}
        block3={(
          <FooterBlocks title="Onde nos encontrar">
            <FooterIconList />
          </FooterBlocks>
        )}
      >
        <FooterBlocks title="Como ajudar">
          <div>
            Criaremos em breve alguns meios para receber doações. Caso acredite que pode contribuir de alguma outra forma, entre em contato :D
          </div>
        </FooterBlocks>
      </FooterThreeColumns>
    </Footer>
  </div>
);

export { Base };
