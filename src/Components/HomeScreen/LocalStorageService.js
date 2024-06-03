// LocalStorageService.js

const LocalStorageService = {
    setUser: (user) => {
      localStorage.setItem('user', JSON.stringify(user));
    },
    getUser: () => {
      return JSON.parse(localStorage.getItem('user'));
    },
    clearUser: () => {
      localStorage.removeItem('user');
    },
    isLoggedIn: () => {
      return localStorage.getItem('user') !== null;
    }
  };
  
  export default LocalStorageService;
  