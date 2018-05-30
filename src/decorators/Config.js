import Bot from '../Bot'

export default function Config (config) {
  return (target, key, descriptor) => {
    if(target.prototype instanceof Bot)
      target.prototype._config = config
    return descriptor
  }
}