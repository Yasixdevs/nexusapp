const func = async () => {
    const reponse = await window.versions.ping()
    console.log(reponse)
}
func()