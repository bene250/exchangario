import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
export default {
  namespaced: true,
  data() {
    return {
      register: {
        isProcessing: false,
        error: '',
      },
    };
  },
  actions: {
    async register({ commit }, { email, password }) {
      commit('setRegisterIsProcessing', true);
      commit('setError', '');
      try {
        const userCredentials = await createUserWithEmailAndPassword(
          getAuth(),
          email,
          password
        );

        return userCredentials.user;
      } catch (err) {
        commit('setError', err.message);
      } finally {
        commit('setRegisterIsProcessing', false);
      }
    },
  },
  mutations: {
    setRegisterIsProcessing(state, isProcessing) {
      state.register.isProcessing = isProcessing;
    },
    setError(state, error) {
      state.register.error = error;
    },
  },
};
