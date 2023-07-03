export default function Page({ params }: { params: { page: string } }) {
    return <div>My Post: {params.page}</div>
  }