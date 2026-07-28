import classC from '../extendsCommon/classC'

class ComponentA extends classC<object> {
  render() {
    const { data, loading, error } = this.state

    if (loading) return <>Loading</>

    if (error) return <>{error}</>

    return (
      <div>
        <p>Component A</p>
        {JSON.stringify(data)}
      </div>
    )
  }
}

export default ComponentA
