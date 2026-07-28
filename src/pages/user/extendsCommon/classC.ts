import { Component } from 'react'

export interface Post {
  id: number
  title: string
  body: string
  userId: number
}

export interface BaseState {
  data: Post[]
  loading: boolean
  error: string | null
}

class classC<P> extends Component<P, BaseState> {
  state: BaseState = {
    data: [],
    loading: true,
    error: null
  }

  componentDidMount() {
    this.fetchData()
  }

  async fetchData() {
    try {
      this.setState({ loading: true, error: null })
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      if (!res.ok) {
        throw new Error('Http error: ' + res.status)
      }
      const data: Post[] = await res.json()
      this.setState({ data, loading: false })
    } catch (err) {
      this.setState({
        error: err instanceof Error ? err.message : 'Unknown error occured'
      })
    }
  }
}

export default classC
