import {
  FETCH_AREAS,
  FETCH_MEMBERS,
  HANDLE_MENU_MOBILE,
  SLIDE_MORE_INFO,
  SEND_EMAIL,
} from "../constants"

export const fetchAreasRequest = () => {
  return {
    type: FETCH_AREAS.REQUEST,
  }
}

export const fetchAreasSuccess = (areas) => {
  return {
    type: FETCH_AREAS.SUCCESS,
    payload: areas,
  }
}

export const fetchAreasFail = (error) => {
  return {
    type: FETCH_AREAS.FAIL,
    payload: error,
  }
}

export const getOneArea = (name) => {
  return {
    type: FETCH_AREAS.GET_ONE_AREA,
    payload: name,
  }
}

export const fetchMembersRequest = () => {
  return {
    type: FETCH_MEMBERS.REQUEST,
  }
}

export const fetchMembersSuccess = (areas) => {
  return {
    type: FETCH_MEMBERS.SUCCESS,
    payload: areas,
  }
}

export const fetchMembersFail = (error) => {
  return {
    type: FETCH_MEMBERS.FAIL,
    payload: error,
  }
}

export const handleMenuMobile = () => {
  return {
    type: HANDLE_MENU_MOBILE,
  }
}

export const slideMoreInfo = () => {
  return {
    type: SLIDE_MORE_INFO,
  }
}

export const sendEmailRequest = (email) => {
  return {
    type: SEND_EMAIL.REQUEST,
    payload: email,
  }
}

export const sendEmailSuccess = (message) => {
  return {
    type: SEND_EMAIL.SUCCESS,
    payload: message,
  }
}

export const sendEmailFail = (error) => {
  return {
    type: SEND_EMAIL.FAIL,
    payload: error,
  }
}
