export default function trunc(text: string, maxSize: number | undefined) {
  if (maxSize) {
    return text?.length > maxSize ? `${text.substr(0, maxSize)}...` : text;
  }
  return text;
}
