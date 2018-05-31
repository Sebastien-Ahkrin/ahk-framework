export default function Command (regex, options) {
  return (target, key, descriptor) => {
    target.addCommand(regex, descriptor.value, options)
    return descriptor
  }
}