import React, { ReactNode } from 'react';

import Link from 'next/link';

import { Footer } from '../footer/Footer';
import { FooterBlocks } from '../footer/FooterBlocks';
// import { FooterIconList } from '../footer/FooterIconList';
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
      {/* <li>
        <Link href="/">
          <a>Início</a>
        </Link>
      </li>
      <li>
        <Link href="/sobre-mim">
          <a>Sobre nós</a>
        </Link>
      </li> */}
    </Navbar>

    {/* {props.hero} */}

    {props.children}

    <Footer>
      <FooterThreeColumns
        block2={(
          <FooterBlocks title="Constituição">
            <li><a>Tema só a Deus.</a></li>
            <li><a>Siga os termos de Deus.</a></li>
            <li><a>Não suje o nome de Deus.</a></li>
            <li><a>Descanse e confie em Deus.</a></li>
            <li><a>Honre seus autores.</a></li>
            <li><a>Não assassine.</a></li>
            <li><a>Não destrua a família.</a></li>
            <li><a>Não roube, trabalhe.</a></li>
            <li><a>Não calunie quem quer que seja.</a></li>
            <li><a>Não tenha coração de pedra, mas de carne.</a></li>
          </FooterBlocks>
        )}
        block3={(
          <FooterBlocks title="Onde me encontrar?">
            <p>Me chame para tomar cerveja,</p>
            <p>Ou apenas siga o ponto 10 da constituição.</p>
          </FooterBlocks>
        )}
      >
        <FooterBlocks title="Quem sou">
          <div>
            Alvaro Separovich Cassiano dos Santos - 1995
          </div>
        </FooterBlocks>
      </FooterThreeColumns>
    </Footer>
  </div>
);

export { Base };
