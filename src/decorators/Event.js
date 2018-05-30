export default function Event (event) {
  return (target, key, descriptor) => {
    target.addEvent(event, descriptor.value)
    return descriptor
  }
}