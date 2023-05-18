const API_URL = 'http://localhost:5000/api/users/';

//Register a new user
const register = async (userData) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(userData),
  });
  const data = await response.json();
  if (response.ok) {
    localStorage.setItem('user', JSON.stringify(data));
  }
  return data;
};

const authService = {
  register,
};

export default authService;
