export default function Login (token) {
  return async (target, key, descriptor) => {
    target._token = token
    target.LoginBot().then(descriptor.value).catch(console.error)
    return descriptor
  }
}