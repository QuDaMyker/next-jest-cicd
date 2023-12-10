
import 'server-only'
export const metadata = {
   title: 'App Router',
  }
type Params = {
  params: {
    slug: string
  }
}

export default function Page({ params }: Params) {
  return <>
  <h1>Slug: {params.slug}</h1>
  <p>HoleTex</p>
  </>
}