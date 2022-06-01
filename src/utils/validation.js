export const validateTel = (value) =>
    (!(value?.length === 0) && !isNaN(Number(value)) && value?.length === 10) ||
    false;
