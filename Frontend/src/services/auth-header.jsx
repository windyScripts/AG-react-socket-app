export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
  
    if (user && user.accessToken) {
      // for Node.js Express back-end: x-access-token
      return { 'Authorization': user.accessToken };
    } else {
      return {};
    }
  }
  