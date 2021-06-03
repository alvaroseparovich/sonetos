import React from 'react';

import { GetStaticProps } from 'next';

import { IBlogGalleryProps } from '../blog/BlogGallery';
import { Hero } from '../hero/Hero';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { RightSidebar } from '../templates/RightSidebar';
import { Config } from '../utils/Config';
import { getAllPosts, getCategoryCollection, PostItems } from '../utils/Content';
import { Content } from '../content/Content';
import { ContentBorder } from '../content/ContentBorder';

type IIndexProps = {
  gallery: IBlogGalleryProps;
  categoryCollection: [string, PostItems[]][];
};

const Index = (props: IIndexProps) => (
  <RightSidebar
    meta={<Meta title={Config.title} description={Config.description} />}
    hero={<Hero title={Config.title} description={Config.description} />}
    categoryCollection={props.categoryCollection}
  >
    <ContentBorder>
      <Content>
        <h2>Sobre nós</h2>
        <div>
          <p>
          Eu sou Alvaro separovich, e por enquanto o único envolvido neste projeto.
          O proposito do Rousas.com é armar os cristãos com a palavra de Deus, 
          habilitando-os para obedecer a Deus em todas as areas da vida.
          </p>
          <p>
          Ainda não temos uma organização formada, porém assim que oficializarmos 
          uma ONG o recebimento de recursos para auxiliar este projeto ficará melhor 
          e mais desempedida.   
          </p>


        </div>
      </Content>
    </ContentBorder>
  </RightSidebar>
);

export const getStaticProps: GetStaticProps<IIndexProps> = async () => {
  const posts = getAllPosts(Config.post_fields);
  const pagination: IPaginationProps = {};

  if (posts.length > Config.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      gallery: {
        posts: posts.slice(0, Config.pagination_size),
        pagination,
      },
      categoryCollection: getCategoryCollection(['slug', 'tags']),
    },
  };
};

export default Index;
