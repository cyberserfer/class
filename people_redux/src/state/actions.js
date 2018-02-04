
export const DISPLAY_USER = "DISPLAY_USER";
export const BACK_BUTTON = "BACK_BUTTON";
export const SEARCH_USER = "SEARCH_USER";
export const SELECTED_USER = "SELECTED_USER";

export const displayUser = (payload) => {
  return {type: DISPLAY_USER, payload}
};

export const backButton = (payload) => {
    return {type: BACK_BUTTON, payload}
};

export const searchUser = (payload) => {
    return {type: SEARCH_USER, payload}
};

export const selectedUser = (payload) => {
    return {type: SELECTED_USER, payload}
};