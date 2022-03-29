import styles from '../styles/Home.module.css'
import useSWR from 'swr'

// @ts-ignore
const fetcher = (...args) => fetch(...args).then((res) => res.text())

export default function Home() {
  // https://swr.vercel.app/docs/getting-started#quick-start
  const {data, error} = useSWR("/api/graphql", fetcher)
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  return (
    <div>hello {data}</div>
  )
}
