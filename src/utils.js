function getIdFromUrl(url) {
  const splitedUrl = url.split("/");
  return splitedUrl[splitedUrl.length - 2];
}
export { getIdFromUrl };
