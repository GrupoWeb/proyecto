import { getFirebaseBackend } from '../../authUtils.js'
import router from '../../router/routes'
// import decode from 'jwt-decode'

export const state = {
    currentUser: sessionStorage.getItem('authUser'),
    token: sessionStorage.getItem('token'),
    user_id: '',
    usuarioDB: '',
    role_user: '',
    flag: false,
}

export const mutations = {
    SET_CURRENT_USER(state, newValue) {
        state.currentUser = newValue
        saveState('auth.currentUser', newValue)
    },

    SET_TOKEN(state, payload){
        state.token = payload; 
    },

    SET_USER_ID(state, payload) {
        state.user_id = payload
    },

    SET_ROLE_USER(state, payload) {
      state.role_user = payload  
    },

    SET_FLAG(state, payload){
        state.flag = payload
    }
}

export const getters = {
    // obtencion de token de usuario loggeado

    activeToken(state) {
        console.log("statre")
        return !!state.token
    },


    /*-------------------------------------- */






    // Whether the user is currently logged in.
    loggedIn(state) {
        return !!state.currentUser
    },
    estaActivo: state => !!state.token,
    tokenActive(state){
        return !!state.token
    },
}

export const actions = {

    setToken({ commit }, payload) {
        sessionStorage.setItem('token', payload);
        commit('SET_TOKEN', payload)
    },
    setUserId({ commit }, payload) {
        sessionStorage.setItem('user_id', payload);
        commit('SET_USER_ID', payload)
    },
    setRoleUser({ commit }, payload) {
        sessionStorage.setItem('role', payload)
        commit('SET_ROLE_USER', payload)
    },
    setLayoutLogin({ commit }, payload){
        sessionStorage.setItem('flag', payload)
        commit('SET_FLAG', payload)
    },
    cerrarSesion(){
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('user_id');
        sessionStorage.removeItem('role');
        sessionStorage.removeItem('flag');
        router.push({name: 'login'});
      },
    leerToken({commit}){
  
        const token = localStorage.getItem('token');
        if(token){
          commit('obtenerUsuario', token);
        }else{
          commit('obtenerUsuario', '');
        }
  
      },

    // This is automatically run in `src/state/store.js` when the app
    // starts, along with any other actions named `init` in other modules.
    // eslint-disable-next-line no-unused-vars
    init({ state, dispatch }) {
        dispatch('validate')
    },

    // autentication user JWT
    autenticationSet(access_token){
        // console.log("actions ", access_token)
        // this.user = data.user;
        // sessionStorage.user = JSON.stringify(data.user);
        this.access_token = access_token;
        // sessionStorage.access_token = data.access_token;
    },

    // Logs in the current user.
    logIn({ commit, dispatch, getters }, { email, password } = {}) {
        if (getters.loggedIn) return dispatch('validate')

        return getFirebaseBackend().loginUser(email, password).then((response) => {
            const user = response
            commit('SET_CURRENT_USER', user)
            return user
        });
    },

    // Logs out the current user.
    logOut({ commit }) {
        // eslint-disable-next-line no-unused-vars
        commit('SET_CURRENT_USER', null)
        return new Promise((resolve, reject) => {
            // eslint-disable-next-line no-unused-vars
            getFirebaseBackend().logout().then((response) => {
                resolve(true);
            }).catch((error) => {
                reject(this._handleError(error));
            })
        });
    },

    // register the user
    register({ commit, dispatch, getters }, { username, email, password } = {}) {
        if (getters.loggedIn) return dispatch('validate')

        return getFirebaseBackend().registerUser(username, email, password).then((response) => {
            const user = response
            commit('SET_CURRENT_USER', user)
            return user
        });
    },

    // register the user
    // eslint-disable-next-line no-unused-vars
    resetPassword({ commit, dispatch, getters }, { email } = {}) {
        if (getters.loggedIn) return dispatch('validate')

        return getFirebaseBackend().forgetPassword(email).then((response) => {
            const message = response.data
            return message
        });
    },

    // Validates the current user's token and refreshes it
    // with new data from the API.
    // eslint-disable-next-line no-unused-vars
    validate({ commit, state }) {
        if (!state.currentUser) return Promise.resolve(null)
        const user = getFirebaseBackend().getAuthenticatedUser();
        commit('SET_CURRENT_USER', user)
        return user;
    },
}

// ===
// Private helpers
// ===

function saveState(key, state) {
    window.sessionStorage.setItem(key, JSON.stringify(state))
}
