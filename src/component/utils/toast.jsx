// src/utils/toastUtils.js
import { toast } from 'react-toastify';

export const showSuccess = (msg) => toast.success(msg);
export const showError = (msg) => toast.error(msg);
export const showInfo = (msg) => toast.info(msg);
export const showWarning = (msg) => toast.warn(msg);
