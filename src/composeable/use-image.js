export function useImage() {
  const baseURL = import.meta.env.BASE_URL;
  return {
    image(path = '') {
      return `${baseURL}${path}.png`
    }
  }
}