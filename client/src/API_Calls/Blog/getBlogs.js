export function getBlogs (currentPage, pageItems) {
    return fetch(`https://kickstart-server.vercel.app/admin/blog?pageNum=${currentPage}&pageSize=${pageItems}`)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => (res.json()))
}