export async function getData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data.nav
    }
    catch (err) {
        console.error(err)
    }
}

