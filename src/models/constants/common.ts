import { DATE_TIME_FORMAT } from '@/models/constants/dateTime';
import dayjs from 'dayjs';

export const VERSION = '3.2.19.4';
export const STRING_EMPTY = '';
export const VALUE_ALL = -1;
export const UNLIMITED = 9999;
export const TODAY_FORMATTED = dayjs(new Date()).format(DATE_TIME_FORMAT['YYYY-MM-DD']);
export const INVALID_DATE = 'Invalid Date';

// Cookie Keys
export const TOKEN = 'token';
export const AUTH_KEY = 'authKey';
export const USERNAME = 'username';
export const IP_ADDRESS = 'ipAddress';
export const BROWSER_ID = 'browserCodeGenerate';
export const PAYER_ID = 'PayerID';

// Pagination
export const PAGE_SIZE_DEFAULT = 10;
export const PAGE_NUMBER_DEFAULT = 0;

// Score
export const MAX_SCORE_SYSTEM = 5;
export const MAX_SCORE_PTE = 90;
