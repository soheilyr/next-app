export async function getAllPostId() {
    let req = await fetch('https://dummyjson.com/products')
    let res = await req.json()
    let productsId = await res.products.map(item => {
        return {
            params: {
                id: `${item.id}`
            }
        }
    })


    return productsId
}
export async function getPostData(id) {
    let req = await fetch(`https://dummyjson.com/products/${id}`)
    let res = await req.json()
    return res
}