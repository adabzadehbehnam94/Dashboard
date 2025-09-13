const ChartUser = async () :Promise<any> => {
    const data = await fetch("http://localhost:3001/users")
    const result = await data.json()
    return result
}

export {ChartUser}