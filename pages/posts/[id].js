// 此函数在构建时被调用
export async function getStaticPaths() {
  // 调用外部 API 获取博文列表
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // 根据博文列表生成所有需要预渲染的路径
  const paths = [{ params: { id: '1' } }, { params: { id: '2' } }];

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// 在构建时也会被调用
export async function getStaticProps({ params }) {
  // params 包含此片博文的 `id` 信息。
  // 如果路由是 /posts/1，那么 params.id 就是 1
  // const res = await fetch(`https://.../posts/${params.id}`)
  // const post = await res.json()
  console.log(params);
  // 通过 props 参数向页面传递博文的数据
  return { props: { id: params.id } };
}

export default function Post(pageProps) {
  // Render post...
  return <div>{pageProps.id}</div>;
}
