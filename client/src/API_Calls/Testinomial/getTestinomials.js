// Testimonial API Call
export function getPricingTestinomials () {
    return fetch("https://kickstart-server.vercel.app/admin/pricingTestinomial")
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => (res.json()))
}