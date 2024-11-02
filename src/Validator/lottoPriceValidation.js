import { ERROR_MESSAGES } from '../Constant/error.js';

const DIVIDE_BY_ZERO = (lottoPrice) => lottoPrice % 1000 === 0;
const OVER_ONE_HUNDRED_THOUSAND = (lottoPrice) => lottoPrice >= 100000;

export const LOTTO_PRICE_VALIDATION = (lottoPrice) => {
  if (!DIVIDE_BY_ZERO(lottoPrice)) {
    throw new Error(ERROR_MESSAGES.IS_DIVIDE_BY_ZERO);
  }
  if (OVER_ONE_HUNDRED_THOUSAND(lottoPrice)) {
    throw new Error(ERROR_MESSAGES.IS_OVER_ONE_HUNDRED_THOUSAND);
  }
};
