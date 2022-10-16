import React from 'react';

import { GetStaticProps } from 'next';
import Link from 'next/link';

// import { Hero } from '../hero/Hero';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { RightSidebar } from '../templates/RightSidebar';
import { Config } from '../utils/Config';
import { getAllPosts, getCategoryCollection, PostItems } from '../utils/Content';

type IIndexProps = {
  categoryCollection: [string, PostItems[]][];
};
const iClas = 'block bg-white-700 hover:bg-gray-900 p-4 font-bold';
const Index = (props: IIndexProps) => (
  <RightSidebar
    meta={<Meta title={Config.title} description={Config.description} />}
    // hero={<Hero title={Config.title} description={Config.description} />}
    categoryCollection={props.categoryCollection}
  >
    <div className="block text-3xl ">
      <Link href="/category/[name]" as="/category/melhores">
        <button className={iClas} type="button">
          {' '}
          - Melhores
        </button>
      </Link>
      <Link href="/category/[name]" as="/category/preferidos">
        <button className={iClas} type="button">
          {' '}
          - Preferidos
        </button>
      </Link>
      <Link href="/category/[name]" as="/category/sonetos">
        <button className={iClas} type="button">
          {' '}
          - Sonetos
        </button>
      </Link>
    </div>
    {/* <BlogGallery posts={props.gallery.posts} pagination={props.gallery.pagination} /> */}
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
