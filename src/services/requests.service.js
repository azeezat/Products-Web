import { appHelpers } from '../helpers/apphelpers'
import {ERROR_RESPONSE } from '../constants/constants'

export const requestsService = {
    makeGetRequest,
    makePostRequest
}

function makeGetRequest(requestUrl){
    return appHelpers.getRequest(requestUrl)
        .then(response => {
            if (response.status === 200) {
                return appHelpers.formatPromiseResponse(response)
            } else {
                return appHelpers.formatPromiseResponse(response.response.data, ERROR_RESPONSE)
            }

        }).catch(error => {
            let errorMessage = appHelpers.interpretErrorResponse(error)
            return appHelpers.formatPromiseResponse(errorMessage, ERROR_RESPONSE)
        })
}

function makePostRequest(requestUrl,payload){
    return appHelpers.postRequest(requestUrl, payload)
        .then(response => {
            if (response.status === 200) {
                return appHelpers.formatPromiseResponse(response)
            } else {
                return appHelpers.formatPromiseResponse(response.response.data, ERROR_RESPONSE)
            }

        }).catch(error => {
            let errorMessage = appHelpers.interpretErrorResponse(error)
            return appHelpers.formatPromiseResponse(errorMessage, ERROR_RESPONSE)
        })
}