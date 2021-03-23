/* eslint-disable react/display-name */

export async function getStaticProps(context) {
  console.log(context);
  return {
    props: {
      name: 'shasha',
      lang: 'javascript'
    } // will be passed to the page component as props
  };
}

export default function About({ name }) {
  return <div>About {name}</div>;
}
