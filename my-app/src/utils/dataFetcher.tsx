import testAPIType from "./types/testAPIType";

const baseURL = 'https://script.google.com/macros/s/AKfycby3Zcpmsq6QJqNtAXTeNlXiFYH0oRfurF9X7zo-j9JAkZEX2wgx_7xZ_ZQxtkk-ftXT/exec'

export const dataFetcher = async (): Promise<testAPIType> => {
  const res = await fetch(baseURL, {
    method: 'POST'
  })
  const json = await res.json();
  console.log(json);
  return json;
}