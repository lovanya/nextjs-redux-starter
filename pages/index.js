import SearchRepoContainer from 'containers/SearchRepoContainer';

export async function getStaticProps(context) {
  console.log(111, context);
  return {
    props: {
      name: 'shasha',
      lang: 'javascript'
    } // will be passed to the page component as props
  };
}

// This gets called on every request
// export async function getServerSideProps() {
//   // Fetch data from external API
//   // const res = await fetch(`https://.../data`)
//   // const data = await res.json()

//   // Pass data to the page via props
//   return { props: { lang: 'javascript' } };
// }

export default SearchRepoContainer;
