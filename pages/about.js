/* eslint-disable react/display-name */

export async function getStaticProps() {
  return {
    props: {
      name: 'bruce'
    }
  };
}

export default function About({ name }) {
  return <div>{name}</div>;
}
