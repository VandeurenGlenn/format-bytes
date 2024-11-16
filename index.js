export const byteFormats = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']

export default function formatBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes'
  if (decimals < 0) decimals = 0

  const k = 1024
  const i = Math.floor(Math.log(bytes) / Math.log(k))

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(decimals))} ${byteFormats[i]}`
}
