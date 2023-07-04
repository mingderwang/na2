import { builder, BuilderComponent } from '@builder.io/react'

builder.init('15b60103ca914a8ab2852e0dc20b76d0')

export const getStaticProps = async (context) => {
  // Dynamically fetch latest content from Builder.io API, so you can publish updates without
  // codebase changes
  const content = await builder.get('homepage', { url: context.resolvedUrl }).promise();
  return { props: { content } }
}

// View full integration options and docs here: https://builder.io/c/docs/developers
export default function MyComponent(props) {
  return <BuilderComponent
    content={props.content}
    model="homepage" />
}