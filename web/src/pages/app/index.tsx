import { gql, useQuery } from '@apollo/client';
import type { GetServerSideProps } from 'next';
import {
  getAccessToken,
  useUser,
  withPageAuthRequired,
} from '@auth0/nextjs-auth0';

import { withApollo } from '../../lib/withApollo';
import { useGetProductsQuery } from '../../graphql/generated/graphql';
import {
  getServerPageGetProducts,
  ssrGetProducts,
  useMe,
} from '../../graphql/generated/page';

function Home({ data }) {
  const { user } = useUser();
  const { data: me } = useMe();

  return (
    <div>
      <h1>Hello world</h1>

      <pre>{JSON.stringify(me, null, 2)}</pre>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = withPageAuthRequired({
  getServerSideProps: async (ctx) => {
    // return getServerPageGetProducts({}, ctx);

    return {
      props: {},
    };
  },
});

export default withApollo(ssrGetProducts.withPage()(Home));
