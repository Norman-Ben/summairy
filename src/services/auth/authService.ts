const API_URL = 'http://localhost:3000/api/users/';

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

//Login a new user
const login = async (userData) => {
  const response = await fetch(API_URL + 'login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  const data = await response.json();
  localStorage.setItem('user', JSON.stringify(data));

  return data;
};

//Logout a user
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
